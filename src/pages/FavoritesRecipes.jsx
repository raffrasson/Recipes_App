import React, { useContext } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard
  from '../components/FavoriteRecipeCard';
import AppContext from '../context/AppContext';

function FavoritesRecipe() {
  const { favorites, setFavorites } = useContext(AppContext);

  function hideRecipes(comidaOuBebida) {
    setFavorites(favorites.filter((recipe) => recipe.type === comidaOuBebida));
  }

  function showAll() {
    setFavorites(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }
  if (favorites !== null) {
    return (
      <>
        <Header title="Receitas Favoritas" />
        <div className="d-flex justify-content-between col-md-3 mt-2 mb-2">
          <button
            className="btn btn-danger w-25"
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ showAll }
          >
            All
          </button>
          <button
            className="btn btn-danger w-25"
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => hideRecipes('comida') }
          >
            Food
          </button>
          <button
            className="btn btn-danger w-25"
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => hideRecipes('bebida') }
          >
            Drink
          </button>
        </div>

        {(favorites.map((obj, i) => (
          <FavoriteRecipeCard
            index={ i }
            key={ obj.id }
            id={ obj.id }
            img={ obj.image }
            alcoholicOrNot={ obj.alcoholicOrNot }
            foodName={ obj.name }
            category={ obj.category }
            area={ obj.area }
            date={ obj.doneDate }
            type={ obj.type }
          />
        )))}
      </>
    );
  }
  return (
    <>
      <Header title="Receitas Favoritas" />
      <p>Nenhuma receita feita!</p>
    </>
  );
}

export default FavoritesRecipe;
