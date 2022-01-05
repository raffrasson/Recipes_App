import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer/Footer';

export default function Profile({ history }) {
  return (
    <div>

      <Footer history={ history } />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
