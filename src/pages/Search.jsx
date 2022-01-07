import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Search({ history }) {
  const historyRouter = useHistory();

  const moveToExploreFood = () => historyRouter.push('/explorar/comidas');
  const moveToExploreDrinks = () => historyRouter.push('/explorar/bebidas');
  return (
    <main>
      <div>
        <Header />
      </div>
      <button
        type="button"
        data-testid="explore-food"
        onClick={ moveToExploreFood }
      >
        Explorar Comidas

      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ moveToExploreDrinks }
      >
        Explorar Bebidas

      </button>
      <div>
        <Footer history={ history } />
      </div>
    </main>
  );
}

Search.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Search;
