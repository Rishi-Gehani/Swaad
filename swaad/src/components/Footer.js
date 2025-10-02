import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUtensils, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer className="new-footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <div className="logo">
            <FontAwesomeIcon icon={faUtensils} className="logo-icon" />
            <span className='logo1'>S</span>
                <span>waad</span>
          </div>
          <p>Where Every Meal Tells a Story of Love and Tradition.</p>
          <div className="socials">
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>


        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li className='contact-item'>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Mumbai</span>
            </li>
            <li className='contact-item'>
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 8282984356</span>
            </li>
            <li className='contact-item'>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>customercare@swaad.com</span>
            </li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>Working Hours</h3>
          <p>Monday - Saturday:<br /> 9:00 AM - 9:00 PM</p>
          <p>Sunday:<br /> 10:00 AM - 2:00 PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Catering. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;