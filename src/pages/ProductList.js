// ProductListPage.js
import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const ProductListPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <ProductList />
      </div>
      <Footer />
    </div>
  );
};

export default ProductListPage;
