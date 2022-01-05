import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer/Footer';

function Home({ history }) {
  return (
    <>
      <h1>Comidas</h1>
      <Footer history={ history } />
    </>
  );
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Home;
