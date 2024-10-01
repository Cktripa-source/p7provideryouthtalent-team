// components/Loader.js
import React from 'react';
import '../components/loader.css';
import Logo from '../components/images/background-logo.png'; // Replace with the correct path to your image

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={Logo} alt="Loading" className="loader-image" />
    </div>
  );
};

export default Loader;
