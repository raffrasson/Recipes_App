import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function CardFood() {
  const { drink } = useContext(AppContext);
  const history = useHistory();
  const [cout, setCout] = useState(0);

  const renderCard = () => (
    drink.drinks.map((card, index) => {
      const eleven = 11;

      if (drink.drinks.length === 1) {
        history.push(`/bebidas/${card.idDrink}`);
      }

      if (index > eleven) return null;

      return (
        <div key={ card.idDrink } className="col-md-3">
          <div
            data-testid={ `${index}-recipe-card` }
            style={ { width: '18rem' } }
            className="card m-2 mx-auto"
          >
            <div className="card-body text-center">
              <h5 data-testid={ `${index}-card-name` } className="card-title">
                {card.strDrink}
              </h5>
            </div>
            <img
              data-testid={ `${index}-card-img` }
              className="card-img-top"
              src={ card.strDrinkThumb }
              alt={ card.strDrink }
            />
          </div>
        </div>
      );
    }));

  const handleAlert = () => {
    if (drink.drinks === null && cout === 0) {
      global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      setCout(1);
    }
  };

  useEffect(() => {
    handleAlert();
  });

  return <div>{drink.drinks && <div className="row">{renderCard()}</div>}</div>;
}
