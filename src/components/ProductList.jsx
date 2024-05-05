import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import './ProductList.css'; // Import CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="product-list">
      <h2>Discover Delicious Food</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            {/* Use the imageUrl property for the image source */}
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <p className="description">{product.description}</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;