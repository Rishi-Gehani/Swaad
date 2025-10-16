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

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    const { name, contact, date, guests, venue } = bookingDetails;

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!/^\d{10}$/.test(contact)) {
      newErrors.contact = "Contact number must be 10 digits";
    }

    if (!date) {
      newErrors.date = "Event date is required";
    } else {
      const today = new Date();
      const selectedDate = new Date(date);
      if (selectedDate < today.setHours(0,0,0,0)) {
        newErrors.date = "Event date must be today or in the future";
      }
    }

    if (!guests || guests <= 0) {
      newErrors.guests = "Number of guests must be at least 1";
    }

    if (!venue.trim()) {
      newErrors.venue = "Venue address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validate()) {
      return; 
    }

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setErrorMessage('');
        setBookingDetails({ 
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

        setTimeout(() => {
          setShowSuccessPopup(false);
          navigate('/payment');   
        }, 2000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to save booking");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
    console.log('Booking Details Submitted:', bookingDetails);
  };

  return (
    <div className="booking-page">
      <h1 className="section-title">Confirm Your Booking Details</h1>
      <p className="section-description">
        Please fill out the form below to finalize your event details.
      </p>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={bookingDetails.name} 
              onChange={handleChange} 
              required 
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input 
              type="tel" 
              id="contact" 
              name="contact" 
              value={bookingDetails.contact} 
              onChange={handleChange} 
              required 
            />
            {errors.contact && <p className="error">{errors.contact}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Event Date</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={bookingDetails.date} 
              onChange={handleChange} 
              required 
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="time">Event Time</label>
            <input 
              type="time" 
              id="time" 
              name="time" 
              value={bookingDetails.time} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input 
              type="number" 
              id="guests" 
              name="guests" 
              min="1" 
              value={bookingDetails.guests} 
              onChange={handleChange} 
              required 
            />
            {errors.guests && <p className="error">{errors.guests}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="eventType">Type of Event</label>
            <select 
              id="eventType" 
              name="eventType" 
              value={bookingDetails.eventType} 
              onChange={handleChange}
            >
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
          <textarea 
            id="venue" 
            name="venue" 
            rows="4" 
            value={bookingDetails.venue} 
            onChange={handleChange} 
            required
          />
          {errors.venue && <p className="error">{errors.venue}</p>}
        </div>
        
        <div className="form-group full-width">
          <label htmlFor="instructions">Special Instructions / Dietary Needs</label>
          <textarea 
            id="instructions" 
            name="instructions" 
            rows="4" 
            value={bookingDetails.instructions} 
            onChange={handleChange}
          />
        </div>
        
        {errorMessage && <p className="error">{errorMessage}</p>}
        
        <button type="submit" className="submit-booking-btn">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Booking;
