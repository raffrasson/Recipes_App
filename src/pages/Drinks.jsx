import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import RadioButtons from '../components/RadioButtons';
import CardDrinks from '../components/CardDrinks';
import { fetchDrinksIngredient } from '../service/fetchAPI';
import AppContext from '../context/AppContext';

export default function Drinks() {
  const { setDrink } = useContext(AppContext);
  const { ingredient } = useParams();
  useEffect(() => {
    const fetchIngredients = async () => {
      const drinks = await fetchDrinksIngredient(ingredient);
      setDrink(drinks);
    };
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
        <CardDrinks />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
