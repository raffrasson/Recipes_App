import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function DrinksForIngredients({ history }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Footer history={ history } />
      </div>
    </>
  );
}

DrinksForIngredients.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DrinksForIngredients;
