import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  fetchFoodIngredient,
  fetchFoodNames,
  fetchFoodFirstName,
  fetchDrinksIngredient,
  fetchDrinksNames,
  fetchDrinksFirstName,

} from '../service/fetchAPI';

export default function RadioButtons() {
  const { radio, setRadio, search, setRecipe, setDrink } = useContext(AppContext);
  const location = useLocation();

  async function handleClick() {
    if ((search.length > 1) && (radio === 'firstLetter')) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    if (radio === 'ingredient') {
      if (location.pathname.includes('bebidas')) {
        const drink = await fetchDrinksIngredient(search);
        setDrink(drink);
      } else {
        const food = await fetchFoodIngredient(search);
        setRecipe(food);
      }
    }

    if (radio === 'name') {
      if (location.pathname.includes('bebidas')) {
        const drink = await fetchDrinksNames(search);
        setDrink(drink);
      } else {
        const food = await fetchFoodNames(search);
        setRecipe(food);
      }
    }

    if (radio === 'firstLetter') {
      if (location.pathname.includes('bebidas')) {
        const drink = await fetchDrinksFirstName(search);
        setDrink(drink);
      } else {
        const food = await fetchFoodFirstName(search);
        setRecipe(food);
      }
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center my-2">
      <Form>
        {['radio'].map((type) => (
          <div key={ `inline-${type}` }>
            <Form.Check
              data-testid="ingredient-search-radio"
              inline
              label="Ingrediente"
              name="group1"
              value="ingredient"
              type={ type }
              id={ `inline-${type}-1` }
              onClick={ ({ target }) => {
                setRadio(target.value);
              } }
            />
            <Form.Check
              data-testid="name-search-radio"
              inline
              label="Nome"
              name="group1"
              value="name"
              type={ type }
              id={ `inline-${type}-2` }
              onClick={ ({ target }) => {
                setRadio(target.value);
              } }
            />
            <Form.Check
              data-testid="first-letter-search-radio"
              inline
              label="Primeira letra"
              name="group1"
              value="firstLetter"
              type={ type }
              id={ `inline-${type}-3` }
              onClick={ ({ target }) => {
                setRadio(target.value);
              } }
            />
          </div>
        ))}
      </Form>
      <Button
        data-testid="exec-search-btn"
        variant="success"
        onClick={ handleClick }
      >
        Busca
      </Button>
    </div>

  );
}
