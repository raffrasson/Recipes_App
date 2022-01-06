/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Card() {
  const { recipe } = useContext(AppContext);

  const renderCard = () => {
    if (recipe === null) return;
    if (recipe.meals) {
      return (
        recipe.meals.map((card, index) => (
          <div
            data-testid={ `${index}-recipe-card` }
            key={ card.idMeal }
            className="card w-50"
          >
            <img
              data-testid={ `${index}-card-img` }
              className="card-img-top"
              src={ card.strMealThumb }
              alt={ card.strMeal }
            />
            <div className="card-body">
              <h5
                data-testid={ `${index}-card-name` }
                className="card-title"
              >
                { card.strMeal }
              </h5>
            </div>
          </div>
        ))
      );
    }
  };

  return (
    <div>
      {
        renderCard()
      }
    </div>
  );
}
