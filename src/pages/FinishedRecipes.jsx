import React, { useContext } from 'react';
import Header from '../components/Header';
import FinishedRecipeCard from '../components/FinishedRecipeCard';
import AppContext from '../context/AppContext';

function FinishedRecipes() {
  const { done, setDone } = useContext(AppContext);

  function hideRecipes(comidaOuBebida) {
    setDone(done.filter((recipe) => recipe.type === comidaOuBebida));
  }

  function showAll() {
    setDone(JSON.parse(localStorage.getItem('doneRecipes')));
  }

  if (done !== null) {
    return (
      <div>
        <Header />
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ showAll }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => hideRecipes('comida') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => hideRecipes('bebida') }
        >
          Drink
        </button>

        {(done.map((obj, i) => (
          <FinishedRecipeCard
            index={ i }
            key={ obj.id }
            id={ obj.id }
            img={ obj.image }
            alcoholicOrNot={ obj.alcoholicOrNot }
            foodName={ obj.name }
            category={ obj.category }
            area={ obj.area }
            date={ obj.doneDate }
            tagName={ obj.tags[0] }
            tagName2={ obj.tags[1] }
            type={ obj.type }
          />
        )))}
      </div>
    );
  }
  return (
    <>
      <Header />
      <p>Nenhuma receita feita!</p>
    </>
  );
}

export default FinishedRecipes;
