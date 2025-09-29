import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Login from '../components/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] =useState(false);

  const TAX_RATE = 0.18; 
  const taxes = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + taxes;

  const handleConfirmOrder = () => {
    if (isAuthenticated) {
      navigate('/booking');
    } else {
      setLoginModalOpen(true);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/menu" className="cta-button">Explore Menu</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Login isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <h1 className="section-title">Review Your Order</h1>
      <div className="cart-layout">
        <div className="cart-items-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item-row">
              <img src={item.image || 'https://via.placeholder.com/80'} alt={item.name} className="cart-item-image" />
              <div className="item-info">
                <p className="item-name">{item.name}</p>
                <p className="item-price">₹{item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity-control">
                <button onClick={() => decreaseQuantity(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}><FontAwesomeIcon icon={faPlus} /></button>
              </div>
              <div className="item-total-price">
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bill-summary">
          <h3>Bill Summary</h3>
          <div className="bill-row">
            <span>Item Total (Subtotal)</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>Taxes & Charges (18%)</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>
          <hr />
          <div className="bill-row total">
            <span>Grand Total</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
          <button className="confirm-order-btn" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;