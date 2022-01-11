import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { mealDetailsById, drinkDetailsById } from '../service/fetchAPI';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import likeIcon from '../images/blackHeartIcon.svg';

export default function RecipeInProgress() {
  const { recipeType,
    setRecipeType,
    recipeData,
    setRecipeData,
    favorites,
    setFavorites,
    copy } = useContext(AppContext);

  const id = window.location.href.split('/')[4]; // recupera o id com base no endereço

  useEffect(() => {
    if (window.location.href.includes('comidas')) {
      setRecipeType('meal');
    } else setRecipeType('drink');

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
    strTags,
    strYoutube } = recipeData;

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="col-md-3">
        <img
          src={ recipeType === 'meal' ? strMealThumb : strDrinkThumb }
          alt={ recipeType === 'meal ' ? strMeal : strDrink }
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
            copy((`http://localhost:3000/${recipeType}s/${id}`)); // ref: https://stackoverflow.com/questions/49618618/copy-current-url-to-clipboard
            document.getElementById('share').innerHTML = 'Link copiado!';
          } }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </button>

        <button
          className="btn btn-danger w-50"
          type="button"
          data-testid="favorite-btn"
          src="src/images/blackHeartIcon.svg"
          alt="favoritar"
        >
          <img src={ likeIcon } alt="compartilhar" />
        </button>

        <h4 data-testid="recipe-category">
          {recipeType === 'meal' ? strCategory : strAlcoholic }
        </h4>

        <p data-testid="instructions">
          {strInstructions}
        </p>

      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
