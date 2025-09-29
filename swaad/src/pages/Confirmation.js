import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    setOrderId(`SWAAD-${Math.floor(10000 + Math.random() * 90000)}`);
  }, []);

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-box">
        <svg className="success-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle className="checkmark-circle" cx="50" cy="50" r="46" fill="none"/>
          <path className="checkmark-check" fill="none" d="M27 53l17 17 29-29"/>
        </svg>
        
        <h2 className="confirmation-title">Order Successful!</h2>
        <p className="confirmation-text">
          Thank you for your booking. Your order <strong className="order-id">{orderId}</strong> has been confirmed.
        </p>
        <p className="confirmation-subtext">
          You will receive a confirmation email with all the details shortly.
        </p>
        <Link to="/" className="home-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Confirmation;