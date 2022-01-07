import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function SearchFoods() {
  const historyRouter = useHistory();
  const moveToIngredientPage = () => historyRouter.push('/explorar/comidas/ingredientes');
  const moveToSurprisePage = () => historyRouter.push('/comidas/52771');
  const moveToAreaPage = () => historyRouter.push('/explorar/comidas/area');
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ moveToIngredientPage }
        >
          Por Ingredientes
        </button>
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ moveToAreaPage }
        >
          Por Local de Origem

        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ moveToSurprisePage }
        >
          Me Surpreenda!

        </button>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default SearchFoods;
