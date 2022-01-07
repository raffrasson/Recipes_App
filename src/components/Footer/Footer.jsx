import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import DRINK_ICON from '../../images/drinkIcon.svg';
import EXPLORE_ICON from '../../images/exploreIcon.svg';
import MEAL_ICON from '../../images/mealIcon.svg';
import './Footer.css';

export default function Footer() {
  const history = useHistory();
  const redirectToDrinksPage = () => {
    history.push('/bebidas');
  };
  const redirectToMealsPage = () => {
    history.push('/comidas');
  };
  const redirectToExplorePage = () => {
    history.push('/explorar');
  };

  return (
    <footer data-testid="footer" className="footerButtons">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ DRINK_ICON }
        onClick={ redirectToDrinksPage }
        className="btn m-2 border-0"
        data-toggle="tooltip"
        data-placement="top"
        title="Drinks"
      >
        <img
          src={ DRINK_ICON }
          alt="DRINK"
        />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ redirectToExplorePage }
        src={ EXPLORE_ICON }
        className="btn m-2 border-0"
        data-toggle="tooltip"
        data-placement="top"
        title="Explorar"
      >
        <img src={ EXPLORE_ICON } alt="EXPLORE" />
      </button>

      <button
        type="button"
        src={ MEAL_ICON }
        onClick={ redirectToMealsPage }
        data-testid="food-bottom-btn"
        className="btn m-2 border-0"
        data-toggle="tooltip"
        data-placement="top"
        title="Foods"
      >
        <img src={ MEAL_ICON } alt="MEAL" />
      </button>

    </footer>
  );
}

Footer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
