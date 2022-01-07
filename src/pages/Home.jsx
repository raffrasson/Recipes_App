import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import CardFood from '../components/CardFood';
import RadioButtons from '../components/RadioButtons';

function Home() {
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
        <Footer />
      </div>
    </>
  );
}

export default Home;
