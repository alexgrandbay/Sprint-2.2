// App.js
import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LocationInfo from './components/LocationInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <ProductList />
        <LocationInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
