import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { fetchIngredient, fetchNames, fetchFirstName } from '../service/fetchAPI';

export default function RadioButtons() {
  const { radio, setRadio, search, setRecipe } = useContext(AppContext);

  async function handleClick() {
    if ((search.length > 1) && (radio === 'firstLetter')) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (radio === 'ingredient') {
      const result = await fetchIngredient(search);
      setRecipe(result);
    }
    if (radio === 'name') {
      const result = await fetchNames(search);
      setRecipe(result);
    }
    if (radio === 'firstLetter') {
      const result = await fetchFirstName(search);
      setRecipe(result);
    }
  }

  return (

    <div className="container w-50 d-flex  align-items-center justify-content-center">
      <div className="menuRadioButtons">
        <label htmlFor="ingredient" className="ml-2 mr-1">
          Ingrediente
          <input
            id="ingredient"
            data-testid="ingredient-search-radio"
            name="radio"
            type="radio"
            value="ingredient"
            className="ml-1"
            onClick={ ({ target }) => {
              setRadio(target.value);
            } }
          />
        </label>
        <label htmlFor="name-search" className="ml-2 mr-1">
          Nome
          <input
            id="name-search"
            name="radio"
            data-testid="name-search-radio"
            type="radio"
            value="name"
            className="ml-1"
            onClick={ ({ target }) => {
              setRadio(target.value);
            } }
          />
        </label>

        <label htmlFor="first-letter" className="ml-2 mr-1">
          Primeira letra
          <input
            id="first-letter"
            data-testid="first-letter-search-radio"
            type="radio"
            name="radio"
            className="ml-1"
            value="firstLetter"
            onClick={ ({ target }) => {
              setRadio(target.value);
            } }
          />
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
          className="btn btn-success ml-3"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
