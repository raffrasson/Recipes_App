import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import AppContext from '../context/AppContext';

export default function CardFood() {
  const { recipe } = useContext(AppContext);

  const renderCard = () => (
    recipe.meals.map((card, index) => (
      <Card
        key={ card.idMeal }
        data-testid={ `${index}-recipe-card` }
        style={ { width: '18rem' } }
      >
        <Card.Img
          data-testid={ `${index}-card-img` }
          variant="top"
          src={ card.strMealThumb }
        />
        <Card.Body>
          <Card.Text>
            { card.strMeal }
          </Card.Text>
        </Card.Body>
      </Card>
    ))
  );

  return (
    <div>
      {recipe.meals && (
        <div>
          {
            renderCard()
          }
        </div>
      )}
    </div>
  );
}
