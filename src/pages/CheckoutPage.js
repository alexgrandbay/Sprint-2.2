// CheckoutPage.js
import React from 'react';
import Header from '../components/Header';
import CheckoutForm from '../components/CheckoutForm';
import Footer from '../components/Footer';

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <CheckoutForm />
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
