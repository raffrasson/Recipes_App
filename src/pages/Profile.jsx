import React from 'react';
import Header from '../components/Header';
import Data from '../components/Data';
import Footer from '../components/Footer/Footer';

export default function Profile() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Data />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
