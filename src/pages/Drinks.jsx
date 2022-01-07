import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import RadioButtons from '../components/RadioButtons';
import CardDrinks from '../components/CardDrinks';

export default function Drinks() {
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
