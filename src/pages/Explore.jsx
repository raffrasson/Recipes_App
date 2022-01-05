import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer/Footer';

export default function Explore({ history }) {
  return (
    <div>

      <Footer history={ history } />
    </div>
  );
}

Explore.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
