import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import RadioButtons from '../components/RadioButtons';
import CardDrinks from '../components/CardDrinks';

export default function Drinks({ history }) {
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
        <Footer history={ history } />
      </div>
    </>
  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
