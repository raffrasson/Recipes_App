import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer/Footer';

export default function Drinks({ history }) {
  return (
    <div>
      <Footer history={ history } />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
