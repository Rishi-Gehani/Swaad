// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// const OrderHistory = () => {
//   const { orders } = useAuth();

//   if (orders.length === 0) {
//     return (
//       <div className="cart-page empty-cart">
//         <h2>No Order History</h2>
//         <p>You haven't placed any orders with us yet.</p>
//         <Link to="/menu" className="cta-button">Explore Menu</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="order-history-page">
//       <h1 className="section-title">Your Order History</h1>
//       <div className="order-list">
//         {orders.map(order => (
//           <div key={order.id} className="order-card">
//             <div className="order-card-header">
//               <h3>Order #{order.id}</h3>
//               <span>Date: {order.date}</span>
//             </div>
//             <div className="order-items">
//               {order.items.map(item => (
//                 <div key={item.id} className="order-item">
//                   <span>{item.name} (x{item.quantity})</span>
//                   <span>₹{(item.price * item.quantity).toFixed(2)}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="order-card-footer">
//               <strong>Total: ₹{order.total.toFixed(2)}</strong>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderHistory;

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.email) return;
      try {
        const response = await fetch(`http://localhost:5000/orders/${user.email}`);
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };
    fetchOrders();
  }, [user]);

  if (orders.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h2>No Order History</h2>
        <p>You haven't placed any orders with us yet.</p>
        <Link to="/menu" className="cta-button">Explore Menu</Link>
      </div>
    );
  }

  return (
    <div className="order-history-page">
      <h1 className="section-title">Your Order History</h1>
      <div className="order-list">
        {orders.map(order => (
          <div key={order._id} className="order-card">
            <div className="order-card-header">
              <h3>Order #{order._id.slice(-5)}</h3>
              <span>Date: {new Date(order.date).toLocaleString()}</span>
            </div>
            <div className="order-items">
              {order.items.map((item, i) => (
                <div key={i} className="order-item">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="order-card-footer">
              <strong>Total: ₹{order.total.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
