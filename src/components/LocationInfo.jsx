// LocationInfo.jsx
import React from 'react';
import './LocationInfo.css';

const LocationInfo = () => {
  return (
    <div className="location-info">
      <h2>We Are Located in St. John's</h2>
      <p>Visit us to experience delicious burgers and great service!</p>
      <div className="images-container">
        <img src="/images/city.jpg" alt="Restaurant Exterior" style={{ width: '900px', height: '250px' }} />
      </div>
    </div>
  );
};

export default LocationInfo;
