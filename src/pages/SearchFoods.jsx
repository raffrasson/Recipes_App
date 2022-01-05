import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function SearchFoods({ history }) {
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

SearchFoods.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SearchFoods;
