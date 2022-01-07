import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Card() {
  const { recipe } = useContext(AppContext);

  const renderCard = () => (
    recipe.meals.map((card, index) => (
      <div key={ card.idMeal } className="col-md-3">
        <div
          data-testid={ `${index}-recipe-card` }
          className="card"
        >
          <div className="card-body text-center">
            <h5
              data-testid={ `${index}-card-name` }
              className="card-title"
            >
              { card.strMeal }
            </h5>
          </div>
          <img
            data-testid={ `${index}-card-img` }
            className="card-img-top"
            src={ card.strMealThumb }
            alt={ card.strMeal }
          />
        </div>
      </div>
    ))
  );

  return (
    <div>
      {recipe.meals && (
        <div className="row">
          {
            renderCard()
          }
        </div>
      )}
    </div>
  );
}
