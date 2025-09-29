import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    venue: '',
    guests: '',
    eventType: 'Private Party',
    packaging: 'buffet', 
    instructions: ''
  });

  const handleChange = e => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking Details Submitted:', bookingDetails);
    navigate('/payment');
  };

  return (
    <div className="booking-page">
      <h1 className="section-title">Confirm Your Booking Details</h1>
      <p className="section-description">Please fill out the form below to finalize your event details.</p>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input type="tel" id="contact" name="contact" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input type="date" id="date" name="date" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Event Time</label>
            <input type="time" id="time" name="time" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="eventType">Type of Event</label>
            <select id="eventType" name="eventType" value={bookingDetails.eventType} onChange={handleChange}>
              <option>Private Party</option>
              <option>Wedding Reception</option>
              <option>Corporate Event</option>
              <option>Holiday Gathering</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        
        <div className="form-group full-width">
          <label>Meal Packaging Options</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                name="packaging" 
                value="buffet"
                checked={bookingDetails.packaging === 'buffet'} 
                onChange={handleChange}
              />
              <span className="custom-radio"></span>
              Buffet Style Service
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                name="packaging" 
                value="individual"
                checked={bookingDetails.packaging === 'individual'} 
                onChange={handleChange}
              />
              <span className="custom-radio"></span>
              Individual Boxed Meals
            </label>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="venue">Venue Address</label>
          <textarea id="venue" name="venue" rows="4" onChange={handleChange} required></textarea>
        </div>
        
        <div className="form-group full-width">
          <label htmlFor="instructions">Special Instructions / Dietary Needs</label>
          <textarea id="instructions" name="instructions" rows="4" onChange={handleChange}></textarea>
        </div>
        
        <button type="submit" className="submit-booking-btn">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default Booking;