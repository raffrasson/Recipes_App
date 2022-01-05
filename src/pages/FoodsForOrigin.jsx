import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function FoodsForOrigin({ history }) {
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

FoodsForOrigin.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default FoodsForOrigin;
