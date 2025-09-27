import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProfileDropdown = () => {
  const { user, logout } = useAuth();
  const { clearCart } = useCart(); // Get clearCart function

  const handleLogout = () => {
    logout();
    clearCart(); // Clear the cart on logout
  };

  // If there's no user for some reason, don't render anything
  if (!user) return null;

  return (
    <div className="profile-dropdown">
      <div className="profile-header">
        <FontAwesomeIcon icon={faUserCircle} size="3x" />
        <div className="user-info">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="profile-actions">
        <Link to="/order-history" className="profile-btn history-btn">
          Order History
        </Link>
        <button onClick={handleLogout} className="profile-btn logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default ProfileDropdown;