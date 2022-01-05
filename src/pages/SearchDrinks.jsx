import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function SearchDrinks({ history }) {
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

SearchDrinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SearchDrinks;
