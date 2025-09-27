
// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
// import { useAuth } from '../context/AuthContext';
// import { useCart } from '../context/CartContext'; // Import useCart
// import ProfileDropdown from './ProfileDropdown';
// import Login from './Login';

// const Header = () => {
//   const { isAuthenticated } = useAuth();
//   const { totalItemsInCart } = useCart(); // Get total for cart counter

//   // 1. STATE: These lines manage the visibility of the popups
//   const [isProfileOpen, setProfileOpen] = useState(false);
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);

//   // 2. HANDLER: This function decides what happens when you click the profile icon
//   const handleProfileClick = () => {
//     if (isAuthenticated) {
//       // If logged in, toggle the profile dropdown
//       setProfileOpen(!isProfileOpen);
//     } else {
//       // If not logged in, open the login modal
//       setLoginModalOpen(true);
//     }
//   };

//   return (
//     <header className="header">
//       {/* 4. MODAL: This renders the login popup but keeps it hidden until isOpen is true */}
//       <Login isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />

//       <div className="logo">
//         <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
        // <span className='logo1'>S</span>
        // <span>waad</span>
//       </div>

//       <nav>
//         <ul>
//           <li><NavLink to="/">Home</NavLink></li>
//           <li><NavLink to="/services">Services</NavLink></li>
//           <li><NavLink to="/menu">Menu</NavLink></li>
//           <li><NavLink to="/about">About</NavLink></li>
//           <li><NavLink to="/blog">Blog</NavLink></li>
//           <li><NavLink to="/contact">Contact</NavLink></li>
//         </ul>
//       </nav>

//       <div className="header-icons">
//         <NavLink to="/cart" className="icon-link">
//           <FontAwesomeIcon icon={faCartShopping} />
//           {totalItemsInCart > 0 && (
//             <span className="cart-counter">{totalItemsInCart}</span>
//           )}
//         </NavLink>
//         <div className="profile-icon-container">
//           {/* 3. ONCLICK: This button calls the handler function */}
//           <button onClick={handleProfileClick} className="icon-link profile-btn">
//             <FontAwesomeIcon icon={faUser} />
//           </button>
//           {isAuthenticated && isProfileOpen && <ProfileDropdown />}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import ProfileDropdown from './ProfileDropdown';
import Login from './Login';

const Header = () => {
  const { isAuthenticated } = useAuth();
  const { totalItemsInCart } = useCart();

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleProfileClick = () => {
    if (isAuthenticated) {
      setProfileOpen(!isProfileOpen);
    } else {
      setLoginModalOpen(true);
    }
  };

  return (
    <header className="header">
      <Login isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      
      <div className="logo">
        <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
        <span className='logo1'>S</span>
        <span>waad</span>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <div className="header-icons">
        <NavLink to="/cart" className="icon-link">
          <FontAwesomeIcon icon={faCartShopping} />
          {totalItemsInCart > 0 && (
            <span className="cart-counter">{totalItemsInCart}</span>
          )}
        </NavLink>
        <div className="profile-icon-container">
          <button onClick={handleProfileClick} className="icon-link profile-btn">
            <FontAwesomeIcon icon={faUser} />
          </button>
          {isAuthenticated && isProfileOpen && <ProfileDropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;