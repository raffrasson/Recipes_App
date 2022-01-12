import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { mealDetailsById, drinkDetailsById } from '../service/fetchAPI';
import AppContext from '../context/AppContext';
import Checkbox from '../components/Checkboxes';
import InProgressButtons from '../components/InProgressButtons';

export default function RecipeInProgress() {
  const { recipeType,
    setRecipeType,
    recipeData,
    setRecipeData,
    boxes } = useContext(AppContext);

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
    strCategory,
    strAlcoholic,
    strInstructions,
    strMealThumb,
    strDrinkThumb,
  } = recipeData;

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

  return (
    <div style={ { width: '360px' } }>
      <div>
        <Header />
      </div>
      <div className="justify-content-around">
        <img
          src={ recipeType === 'comida' ? strMealThumb : strDrinkThumb }
          alt={ recipeType === 'comida' ? strMeal : strDrink }
          className="img-fluid"
          data-testid="recipe-photo"
        />

        <h2
          data-testid="recipe-title"
          className="mt-2 ml-2"
        >
          {recipeType === 'comida' ? strMeal : strDrink }

        </h2>

        <div className="dropdown-divider" />

        <InProgressButtons />

        <div className="dropdown-divider" />

        <h4 data-testid="recipe-category">
          {recipeType === 'meal' ? strCategory : strAlcoholic }
        </h4>

        <Checkbox />

        <div className="dropdown-divider" />

        <p className="ml-3 mr-3" data-testid="instructions">
          {strInstructions}
        </p>

        <button
          className="btn btn-danger w-100 ml-1 mr-1"
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
    </div>
  );
}
