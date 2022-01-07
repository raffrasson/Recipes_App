import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function SearchDrinks({ history }) {
  const historyRouter = useHistory();
  const moveToIngredientPage = () => historyRouter.push('/explorar/bebidas/ingredientes');
  const moveToSurprisePage = () => historyRouter.push('/bebidas/178319');
  return (
    <>
      <div>
        <Header />
      </div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ moveToIngredientPage }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ moveToSurprisePage }
      >
        Me Surpreenda!

      </button>
      <div>
        <Footer history={ history } />
      </div>
    </>
  );
}

SearchDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SearchDrinks;
