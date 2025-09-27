// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Booking = () => {
//   const navigate = useNavigate();
//   const [bookingDetails, setBookingDetails] = useState({
//     name: '', contact: '', date: '', time: '', venue: ''
//   });

//   const handleChange = e => {
//     setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     // In a real app, save details to the database here
//     console.log('Booking Details:', bookingDetails);
//     navigate('/payment');
//   };

//   return (
//     <div className="booking-page">
//       <h1 className="section-title">Booking Details</h1>
//       <form onSubmit={handleSubmit} className="booking-form">
//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
//         <input type="tel" name="contact" placeholder="Contact Number" onChange={handleChange} required />
//         <input type="date" name="date" onChange={handleChange} required />
//         <input type="time" name="time" onChange={handleChange} required />
//         <textarea name="venue" placeholder="Event Venue Address" onChange={handleChange} required></textarea>
//         <button type="submit">Proceed to Payment</button>
//       </form>
//     </div>
//   );
// };

// export default Booking;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  
  // State to hold all form data in a single object
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
    venue: '',
    guests: '',
    eventType: 'Private Party', // Default value
    instructions: ''
  });

  // A single handler to update the state based on input name
  const handleChange = e => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  // On form submission, log the data and navigate to the payment page
  const handleSubmit = e => {
    e.preventDefault();
    // In a real app, you would save these details to your database
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