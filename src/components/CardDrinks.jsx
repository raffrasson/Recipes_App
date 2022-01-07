import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AppContext from '../context/AppContext';

export default function CardDrinks() {
  const { drink } = useContext(AppContext);
  const history = useHistory();
  const []

  const renderCard = () => (
    drink.drinks.map((card, index) => {
      if (drink.drinks.length === 1) {
        history.push(`/bebidas/${card.idDrink}`);
      }

      if (index > 11) return null;

      return (
        <div className="col-md-3" key={ card.idDrink }>
          <Card
            data-testid={ `${index}-recipe-card` }
            style={ { width: '18rem' } }
            className="card m-2 bg-light"
          >
            <Card.Img
              data-testid={ `${index}-card-img` }
              variant="top"
              src={ card.strDrinkThumb }
            />
            <Card.Body className="text-center">
              <Card.Text data-testid={ `${index}-card-name` }>
                { card.strDrink }
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    })
  );

  const handleAlert = () => {
    if (drink.drinks === null) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    }
  };

  useEffect(() => {
    handleAlert();
  });

  return (
    <div>
      {drink.drinks && (
        <div className="row">
          {
            renderCard()
          }
        </div>
      )}
    </div>
  );
}
