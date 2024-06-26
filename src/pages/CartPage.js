// CartPage.js
import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
