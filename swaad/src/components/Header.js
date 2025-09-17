import React from 'react';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
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

      {/* 2. Cart and Profile icons replacing the button */}
      <div className="header-icons">
        <NavLink to="/cart" className="icon-link">
          <FontAwesomeIcon icon={faCartShopping} />        </NavLink>
        <NavLink to="/profile" className="icon-link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;