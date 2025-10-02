import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <FontAwesomeIcon icon={faReceipt} />
          <span>Order History</span>
        </Link>
        <button onClick={handleLogout} className="profile-btn logout-btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;