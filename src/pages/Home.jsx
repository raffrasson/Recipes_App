import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import CardFood from '../components/CardFood';
import RadioButtons from '../components/RadioButtons';

function Home({ history }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <RadioButtons />
      </div>
      <div>
        <CardFood />
      </div>
      <div>
        <Footer history={ history } />
      </div>
    </>
  );
}

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Home;
