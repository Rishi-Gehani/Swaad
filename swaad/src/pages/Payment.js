// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
// import { faLock } from '@fortawesome/free-solid-svg-icons';

// const Payment = () => {
//   const { cartItems, totalPrice, clearCart } = useCart();
//   const { addOrder } = useAuth();
//   const navigate = useNavigate();

//   // 1. Add state for the card details form
//   const [cardDetails, setCardDetails] = useState({
//     cardNumber: '',
//     cardName: '',
//     expiryDate: '',
//     cvc: '',
//   });

//   const handleCardChange = (e) => {
//     setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
//   };

//   const handlePay = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     const orderDetails = {
//       items: cartItems,
//       total: totalPrice,
//     };
//     addOrder(orderDetails);
//     clearCart();
//     navigate('/confirmation');
//   };

//   return (
//     <div className="payment-page">
//       <div className="payment-container">
//         <div className="payment-details">
//           <h2 className="payment-title">Secure Checkout</h2>
          
//           {/* 2. Add the new card payment form */}
//           <form onSubmit={handlePay} className="card-form">
//             <div className="form-group">
//               <label htmlFor="cardName">Name on Card</label>
//               <input type="text" id="cardName" name="cardName" onChange={handleCardChange} required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" onChange={handleCardChange} required />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="expiryDate">Expiry Date</label>
//                 <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" onChange={handleCardChange} required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="cvc">CVC</label>
//                 <input type="text" id="cvc" name="cvc" placeholder="123" onChange={handleCardChange} required />
//               </div>
//             </div>
//             {/* 4. Move the Pay Now button inside the form */}
//             <button type="submit" className="pay-now-btn">
//               Pay ₹{totalPrice.toFixed(2)}
//             </button>
//           </form>

//           <div className="accepted-cards">
//             <FontAwesomeIcon icon={faCcVisa} size="2x" />
//             <FontAwesomeIcon icon={faCcMastercard} size="2x" />
//             <FontAwesomeIcon icon={faCcAmex} size="2x" />
//           </div>
//           <div className="security-info">
//             <FontAwesomeIcon icon={faLock} />
//             <span>Your payment information is secure.</span>
//           </div>
//         </div>

//         <div className="payment-summary">
//           <h3>Order Summary</h3>
//           <div className="summary-items-list">
//             {cartItems.map(item => (
//                 <div key={item.id} className="summary-item">
//                     <span>{item.name} (x{item.quantity})</span>
//                     <span>₹{(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//             ))}
//           </div>
//           <hr/>
//           <div className="summary-total">
//             <span>Total Amount</span>
//             <span>₹{totalPrice.toFixed(2)}</span>
//           </div>
//           {/* 3. The Pay Now button is now moved to the left column */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;




import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  const { cartItems, totalPrice, taxes, grandTotal, clearCart } = useCart();
  const { addOrder } = useAuth();
  const navigate = useNavigate();

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
  });

  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    const orderDetails = {
      items: cartItems,
      total: grandTotal, // Use grandTotal for the order
    };
    addOrder(orderDetails);
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-details">
          <h2 className="payment-title">Secure Checkout</h2>
          <form onSubmit={handlePay} className="card-form">
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input type="text" id="cardName" name="cardName" onChange={handleCardChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" placeholder="0000 0000 0000 0000" onChange={handleCardChange} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" onChange={handleCardChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" name="cvc" placeholder="123" onChange={handleCardChange} required />
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
          {/* Display all parts of the bill */}
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