import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  const { cartItems, totalPrice, taxes, grandTotal, clearCart } = useCart();
  const { user } = useAuth(); 
  const navigate = useNavigate();

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
  });

  const [errors, setErrors] = useState({});

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    const { cardNumber, cardName, expiryDate, cvc } = cardDetails;

    if (!cardName.trim()) {
      newErrors.cardName = "Name on card is required";
    }

    const cleanCard = cardNumber.replace(/\s+/g, "");
    if (!/^\d{16}$/.test(cleanCard)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry must be in MM/YY format";
    } else {
      const [month, year] = expiryDate.split("/").map((x) => parseInt(x, 10));
      if (month < 1 || month > 12) {
        newErrors.expiryDate = "Invalid month";
      }
      const fullYear = 2000 + year;
      if (fullYear < 2025) {
        newErrors.expiryDate = "Year must be 2025 or later";
      }
    }

    if (!/^\d{3}$/.test(cvc)) {
      newErrors.cvc = "CVC must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePay = async (e) => {
    e.preventDefault();

    if (!user?.email) {
      alert("Please login before placing order");
      return;
    }

    if (!validate()) {
      return;
    }

    const orderData = {
      userEmail: user.email,
      items: cartItems,
      total: grandTotal,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch('${process.env.REACT_APP_API_URL}/orders', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order saved to Swaad_Database!");
        clearCart();
        navigate('/Confirmation');
      } else {
        console.error("Failed to save order");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-details">
          <h2 className="payment-title">Secure Checkout</h2>
          <form onSubmit={handlePay} className="card-form">
            
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input 
                type="text" 
                id="cardName" 
                name="cardName" 
                value={cardDetails.cardName} 
                onChange={handleCardChange} 
                required 
              />
              {errors.cardName && <p className="error">{errors.cardName}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
                placeholder="0000 0000 0000 0000" 
                value={cardDetails.cardNumber} 
                onChange={handleCardChange} 
                required 
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input 
                  type="text" 
                  id="expiryDate" 
                  name="expiryDate" 
                  placeholder="MM/YY" 
                  value={cardDetails.expiryDate} 
                  onChange={handleCardChange} 
                  required 
                />
                {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input 
                  type="text" 
                  id="cvc" 
                  name="cvc" 
                  placeholder="123" 
                  value={cardDetails.cvc} 
                  onChange={handleCardChange} 
                  required 
                />
                {errors.cvc && <p className="error">{errors.cvc}</p>}
              </div>
            </div>

            <button type="submit" className="pay-now-btn">
              Pay ₹{grandTotal.toFixed(2)}
            </button>
          </form>

          <div className="accepted-cards">
            <FontAwesomeIcon icon={faCcVisa} size="2x" />
            <FontAwesomeIcon icon={faCcMastercard} size="2x" />
            <FontAwesomeIcon icon={faCcAmex} size="2x" />
          </div>
          <div className="security-info">
            <FontAwesomeIcon icon={faLock} />
            <span>Your payment information is secure.</span>
          </div>
        </div>

        <div className="payment-summary">
          <h3>Order Summary</h3>
          <div className="summary-items-list">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} (x{item.quantity})</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <hr/>
          <div className="bill-row">
            <span>Subtotal</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>Taxes & Charges</span>
            <span>₹{taxes.toFixed(2)}</span>
          </div>
          <hr/>
          <div className="summary-total">
            <span>Total Amount</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
