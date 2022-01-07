import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import Data from '../components/Data';

export default function Profile({ history }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Data />
      </div>
      <div>
        <Footer history={ history } />
      </div>
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
