import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { fetchRandomFood } from '../service/fetchAPI';

function SearchFoods() {
  const historyRouter = useHistory();
  const [randomId, setRandomId] = useState();
  const moveToIngredientPage = () => historyRouter.push('/explorar/comidas/ingredientes');
  const moveToSurprisePage = () => historyRouter.push(`/comidas/${randomId}`);
  const moveToAreaPage = () => historyRouter.push('/explorar/comidas/area');
  const randomFood = async () => {
    const data = await fetchRandomFood();
    setRandomId(data.meals[0].idMeal);
  };
  randomFood();
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
