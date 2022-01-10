import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { fetchIngredientsList } from '../service/fetchAPI';

function FoodsForIngredients() {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const getIngredientsList = async () => {
      const ingredientsArray = [];
      const ingredientsData = await fetchIngredientsList();
      const TWELVE = 12;
      for (let i = 0; i < TWELVE; i += 1) {
        ingredientsArray.push(ingredientsData.meals[i]);
      }
      setIngredients(ingredientsArray);
    };
    getIngredientsList();
  }, []);
  const history = useHistory();
  const handleClick = ({ strIngredient }) => history.push(`/comidas/${strIngredient}`);

  return (
    <>
      <div>
        <Header />
      </div>
      {ingredients.map((ingredient, index) => (
        <button
          type="button"
          data-testid={ `${index}-ingredient-card` }
          key={ index }
          onClick={ () => handleClick(ingredient) }
        >
          <img
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            alt="Ingredient"
            data-testid={ `${index}-card-img` }
          />
          <h2 data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</h2>
        </button>
      ))}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default FoodsForIngredients;
