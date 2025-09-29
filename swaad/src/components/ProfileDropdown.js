// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// const ProfileDropdown = () => {
//   const { user, logout } = useAuth();
//   const { clearCart } = useCart(); 

//   const handleLogout = () => {
//     logout();
//     clearCart();
//   };

  
//   if (!user) return null;

//   return (
//     <div className="profile-dropdown">
//       <div className="profile-header">
//         <FontAwesomeIcon icon={faUserCircle} size="3x" />
//         <div className="user-info">
//           <h4>{user.name}</h4>
//           <p>{user.email}</p>
//         </div>
//       </div>
//       <div className="profile-actions">
//         <Link to="/order-history" className="profile-btn history-btn">
//           Order History
//         </Link>
//         <button onClick={handleLogout} className="profile-btn logout-btn">Logout</button>
//       </div>
//     </div>
//   );
// };

// export default ProfileDropdown;

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 1. Import the new icons we need
import { faUserCircle, faReceipt, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const { clearCart } = useCart();

  const handleLogout = () => {
    logout();
    clearCart();
  };

  if (!user) return null;

  return (
    <div className="profile-dropdown">
      <div className="profile-header">
        <FontAwesomeIcon icon={faUserCircle} size="3x" className="profile-avatar" />
        <div className="user-info">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile-actions">
        <Link to="/order-history" className="profile-btn history-btn">
          {/* 2. Add Order History icon */}
          <FontAwesomeIcon icon={faReceipt} />
          <span>Order History</span>
        </Link>
        <button onClick={handleLogout} className="profile-btn logout-btn">
          {/* 3. Add Logout icon */}
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;