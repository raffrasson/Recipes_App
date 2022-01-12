import React, { useContext, useEffect } from 'react';
import { mealDetailsById, drinkDetailsById } from '../service/fetchAPI';
import AppContext from '../context/AppContext';

export default function Checkbox() {
  const {
    setRecipeType,
    recipeData,
    setRecipeData,
    boxes,
    setBoxes,
  } = useContext(AppContext);

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

  return (
    <div className="d-flex flex-column ml-4 mt-3 mb-3">
      { finalList.map((item, i) => {
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
      })}
    </div>
  );
}
