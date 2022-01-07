import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import RadioButtons from '../components/RadioButtons';
import CardFood from '../components/CardFood';

function Home({ history }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <RadioButtons />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <CardFood />
          </div>
        </div>
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
