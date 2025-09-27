import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="confirmation-page">
      <div className="confirmation-box">
        <h2>Order Successful!</h2>
        <p>Thank you for your order. We will be in touch shortly.</p>
        <Link to="/" className="home-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Confirmation;