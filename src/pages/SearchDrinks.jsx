import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { fetchRandomDrinks } from '../service/fetchAPI';

function SearchDrinks({ history }) {
  const historyRouter = useHistory();
  const [randomId, setRandomId] = useState();
  const moveToIngredientPage = () => historyRouter.push('/explorar/bebidas/ingredientes');
  const moveToSurprisePage = () => historyRouter.push(`/bebidas/${randomId}`);
  const randomDrink = async () => {
    const data = await fetchRandomDrinks();
    setRandomId(data.drinks[0].idDrink);
  };
  randomDrink();
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
