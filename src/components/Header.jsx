// Header.jsx
import React from 'react';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="Food Store" />
          <h1>Best Burger NL</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
