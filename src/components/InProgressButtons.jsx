import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

export default function InProgressButtons() {
  const { recipeType,
    recipeData,
    favorites,
    setFavorites,
    copy } = useContext(AppContext);

  const id = window.location.href.split('/')[4]; // recupera o id com base no endereço

  const { strMeal,
    strDrink,
    strArea,
    strCategory,
    strAlcoholic,
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
  return (
    <div className="d-flex flex-row justify-content-around mt-3 mb-3">
      <button
        className="btn btn-danger w-75 mr-1 ml-1"
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
        className="btn btn-danger w-75 mr-1 ml-1"
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

    </div>
  );
}
