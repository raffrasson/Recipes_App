import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Search() {
  const history = useHistory();

  const moveToExploreFood = () => history.push('/explorar/comidas');
  const moveToExploreDrinks = () => history.push('/explorar/bebidas');

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
        <Footer />
      </div>
    </main>
  );
}

export default Search;
