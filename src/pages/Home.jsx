import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import CardFood from '../components/CardFood';
import RadioButtons from '../components/RadioButtons';
import AppContext from '../context/AppContext';
import {
  fetchFoodIngredient,
} from '../service/fetchAPI';

function Home() {
  const { setRecipe } = useContext(AppContext);
  const { ingredient } = useParams();
  useEffect(() => {
    const fetchIngredients = async () => {
      const recipes = await fetchFoodIngredient(ingredient);
      setRecipe(recipes);
    };
    if (!ingredient) return;
    fetchIngredients();
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <RadioButtons />
      </div>
      <div>
        <CardFood />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
