import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Search({ history }) {
  const historyRouter = useHistory();

  const moveToExploreFood = () => historyRouter.push('/explorar/comida');

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
