import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import AppContext from '../context/AppContext';

export default function CardDrinks() {
  const { drink } = useContext(AppContext);

  const renderCard = () => (
    drink.drinks.map((card, index) => (
      <Card
        key={ card.idDrink }
        data-testid={ `${index}-drink-card` }
        style={ { width: '18rem' } }
      >
        <Card.Img
          data-testid={ `${index}-card-img` }
          variant="top"
          src={ card.strDrinkThumb }
        />
        <Card.Body>
          <Card.Text>
            { card.strDrink }
          </Card.Text>
        </Card.Body>
      </Card>

    ))
  );

  return (
    <div>
      {drink.drinks && (
        <div>
          {
            renderCard()
          }
        </div>
      )}
    </div>
  );
}
