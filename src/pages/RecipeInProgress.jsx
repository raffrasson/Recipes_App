import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { mealDetailsById, drinkDetailsById } from '../service/fetchAPI';
import AppContext from '../context/AppContext';

export default function RecipeInProgress() {
  const { recipeType, setRecipeType, recipeData, setRecipeData } = useContext(AppContext);

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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
