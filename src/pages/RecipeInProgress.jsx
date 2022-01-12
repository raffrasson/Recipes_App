import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { mealDetailsById, drinkDetailsById } from '../service/fetchAPI';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

export default function RecipeInProgress() {
  const { recipeType,
    setRecipeType,
    recipeData,
    setRecipeData,
    favorites,
    setFavorites,
    boxes,
    setBoxes,
    copy } = useContext(AppContext);

  const history = useHistory(); // para requisito de redirecionar

  const id = window.location.href.split('/')[4]; // recupera o id com base no endereço

  useEffect(() => {
    window.localStorage.setItem('favoriteRecipes', '[]');
    if (window.location.href.includes('comidas')) {
      setRecipeType('comida');
    } else setRecipeType('bebida');

    const details = async () => {
      const recipe = window.location.href.includes('comidas')
        ? await mealDetailsById(id) : await drinkDetailsById(id);
      const recipeInfo = window.location.href.includes('comidas')
        ? recipe.meals[0] : recipe.drinks[0];
      setRecipeData(recipeInfo);
    };
    details();
  }, []);

  const { strMeal,
    strDrink,
    strArea,
    strCategory,
    strAlcoholic,
    strInstructions,
    strMealThumb,
    strDrinkThumb,
  } = recipeData;

  const favoriteItem = [{
    id,
    type: recipeType,
    area: strArea || '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strMealThumb || strDrinkThumb }];

  const twenty = 20; // para fazer o array abaixo e associar os ingredientes (o máximo são 20) depois.
  const numbers = [...Array(twenty).keys()]; // método usando o .keys(), referência: https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n

  // cria um array com ingredientes e remove os vazios com o filtro:
  let ingredientsList = numbers.map((number) => recipeData[`strIngredient${number}`]);
  ingredientsList = ingredientsList.filter(
    (el) => el !== null && el !== undefined && el !== '',
  );

  // faz o mesmo para as quantidades:
  let measureList = numbers.map((number) => recipeData[`strMeasure${number}`]);
  measureList = measureList.filter(
    (el) => el !== null && el !== undefined && el !== '',
  );

  // associa os dois:
  const finalList = ingredientsList.map(
    (ingredient, i) => `${ingredient}: ${measureList[i]}`,
  );

  // retorna o html com o select:
  const checklist = finalList.map((item, i) => {
    if (item !== localStorage[item]) {
      return (
        <label
          key={ i }
          data-testid={ `${i}-ingredient-step` }
          id={ `label ${item}` }
          htmlFor={ `item ${i}` }
        >
          <input
            type="checkbox"
            name={ `item ${i}` }
            id={ `item ${i}` }
            value={ `item ${i}` }
            onChange={ () => {
              const label = document.getElementById(`label ${item}`);
              const box = document.getElementById(`item ${i}`);
              window.localStorage.setItem(item, item);
              box.setAttribute('checked', 'true');
              label.setAttribute('style', 'text-decoration: line-through');
              setBoxes([...boxes, item]);
            } }
          />
          <span id={ `item ${i}` }>{item}</span>
        </label>
      );
    }
    if (item === localStorage[item]) {
      return (

        <label
          style={ { textDecoration: 'line-through' } }
          key={ i }
          data-testid={ `${i}-ingredient-step` }
          id={ `label ${item}` }
          htmlFor={ `item ${i}` }
        >
          <input
            type="checkbox"
            checked
            name={ `item ${i}` }
            id={ `item ${i}` }
            value={ `item ${i}` }
            onChange={ () => {
              const label = document.getElementById(`label ${item}`);
              const box = document.getElementById(`item ${i}`);
              window.localStorage.removeItem(item);
              label.removeAttribute('style');
              box.removeAttribute('checked');
            } }
          />
          <span id={ `item ${i}` }>{item}</span>
        </label>);
    } return <p key={ i }>erro</p>;
  });

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="col-md-3">
        <img
          src={ recipeType === 'comida' ? strMealThumb : strDrinkThumb }
          alt={ recipeType === 'comida' ? strMeal : strDrink }
          width="300px"
          data-testid="recipe-photo"
        />

        <h3 data-testid="recipe-title">{recipeType === 'meal' ? strMeal : strDrink }</h3>

        <button
          className="btn btn-danger w-50"
          type="button"
          id="share"
          data-testid="share-btn"
          src="src/images/shareIcon.svg"
          alt="compartilhar"
          onClick={ () => {
            copy((recipeType === 'comida' ? `http://localhost:3000/comidas/${id}` : `http://localhost:3000/bebidas/${id}`)); // ref: https://stackoverflow.com/questions/49618618/copy-current-url-to-clipboard
            document.getElementById('share').innerHTML = 'Link copiado!';
          } }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </button>

        <button
          className="btn btn-danger w-50"
          type="button"
          data-testid="favorite-btn"
          id="favorite-btn"
          src={ favorites === null ? whiteHeart : blackHeart }
          alt="favoritar"
          onClick={ () => {
            window.localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteItem));
            const icon = document.getElementById('favorite-btn');
            console.log(icon.getAttribute('src'));
            if (icon.getAttribute('src').includes(whiteHeart)) {
              icon.setAttribute('src', blackHeart);
              setFavorites('favoriteRecipes');
            }
            if (icon.getAttribute('src') === blackHeart) {
              icon.setAttribute('src', whiteHeart);
            }
          } }
        >
          <img src={ favorites === null ? whiteHeart : blackHeart } alt="compartilhar" />
        </button>

        <h4 data-testid="recipe-category">
          {recipeType === 'meal' ? strCategory : strAlcoholic }
        </h4>

        <div className="d-flex flex-column">{checklist}</div>

        <p data-testid="instructions">
          {strInstructions}
        </p>

        <button
          className="btn btn-danger w-50"
          type="button"
          data-testid="finish-recipe-btn"
          disabled={ finalList.some((item, i) => item !== boxes[i]) }
          onClick={ () => {
            history.push('/receitas-feitas');
          } }
        >
          Encerrar
        </button>
      </div>
    </>
  );
}
