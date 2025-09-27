import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { addOrder } = useAuth();
  const navigate = useNavigate();

  const handlePay = () => {
    // 1. Create the order object
    const orderDetails = {
      items: cartItems,
      total: totalPrice,
    };
    // 2. Add the order to our mock history
    addOrder(orderDetails);
    // 3. Clear the cart
    clearCart();
    // 4. Navigate to confirmation
    navigate('/confirmation');
  };

  return (
    <div className="payment-page">
      <h1 className="section-title">Payment</h1>
      <div className="payment-summary">
        <h3>Order Summary</h3>
        {cartItems.map(item => (
            <div key={item.id} className="summary-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
        ))}
        <hr/>
        <div className="summary-total">
            <span>Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <button onClick={handlePay} className="pay-now-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default Payment;