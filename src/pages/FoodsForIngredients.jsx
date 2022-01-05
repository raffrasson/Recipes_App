import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function FoodsForIngredients({ history }) {
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

FoodsForIngredients.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FoodsForIngredients;
