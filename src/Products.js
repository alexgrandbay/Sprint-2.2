// App.js
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function Products() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
