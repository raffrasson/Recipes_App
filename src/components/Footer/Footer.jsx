import PropTypes from 'prop-types';
import React from 'react';
import DRINK_ICON from '../../images/drinkIcon.svg';
import EXPLORE_ICON from '../../images/exploreIcon.svg';
import MEAL_ICON from '../../images/mealIcon.svg';
import './Footer.css';

export default function Footer({ history }) {
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
    <footer data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        src={ DRINK_ICON }
        onClick={ redirectToDrinksPage }
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
      >
        <img src={ EXPLORE_ICON } alt="EXPLORE" />
      </button>
      <button
        type="button"
        src={ MEAL_ICON }
        onClick={ redirectToMealsPage }
        data-testid="food-bottom-btn"
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
