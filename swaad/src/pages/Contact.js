import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCircleInfo, faHeadset, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('${process.env.REACT_APP_API_URL}/contact', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setErrorMessage('');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact-page">
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

      {/* Contact Form Section */}
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

          {/* error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div className="form-image-container">
          <img src="https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg" alt="Customer Care" />
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="success-popup">
          <FontAwesomeIcon icon={faCheckCircle} />
          Message Sent Successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
