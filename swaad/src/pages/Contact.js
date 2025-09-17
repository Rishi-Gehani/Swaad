import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleInfo, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  // State for form fields using a single state object
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler to update state using the spread operator
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to a server.
    alert(`Message Sent! From: ${formData.name}`);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      {/* 1. Contact Info Section */}
      <section className="contact-info-section">
        <h2 className="section-title">CONTACT US FOR ANY QUERY</h2>
        <div className="info-cards-container">
          <div className="info-card">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <h3>Booking</h3>
            <p>booking@swaad.com</p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faCircleInfo} />
            <h3>General</h3>
            <p>general@swaad.com</p>
          </div>
          <div className="info-card">
            <FontAwesomeIcon icon={faHeadset} />
            <h3>Technical</h3>
            <p>techsupport@swaad.com</p>
          </div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Send us a Message</h3>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message</button>
          </form>
        </div>
        <div className="form-image-container">
          <img src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg" alt="Customer Care" />
        </div>
      </section>
    </div>
  );
};

export default Contact;