import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUtensils, faStar, faLeaf } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const servicesData = [
    {
      image: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg',
      title: 'Wedding Catering',
      description: 'Make your big day unforgettable with flavors rooted in culture and crafted with care.'
    },
    {
      image: 'https://images.pexels.com/photos/7648465/pexels-photo-7648465.jpeg',
      title: 'Corporate Events',
      description: 'Authentic menus designed to satisfy every palate at your corporate event.'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1677159521274-8197a5007bf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJpdmF0ZSUyMHBhcnR5fGVufDB8fDB8fHww',
      title: 'Private Parties',
      description: 'From cozy get-togethers to lavish soirées, we serve dishes that delight every guest.'
    },
    {
        image: 'https://images.pexels.com/photos/3371094/pexels-photo-3371094.jpeg',
        title: 'Birthday Gatherings',
        description: 'Blow out the candles, we’ll serve the feast.'
    }
  ];

  return (
    <div className="services-page">
      {/* 1. Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1>Services Tailored For Your Perfect Event</h1>
          <p>Exquisite food, exceptional service, unforgettable memories.</p>
        </div>
      </section>

      {/* 2. Detailed Service Offerings */}
      <section className="service-offerings">
        <h2 className="section-title">WHAT WE OFFER</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Simple 4-Step Process */}
      <section className="process-section">
        <h2 className="section-title">HOW IT WORKS</h2>
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-icon"><FontAwesomeIcon icon={faComments} /></div>
            <h3>Step 1: Consultation</h3>
            <p>We start by understanding your vision, guest count, and dietary needs in a free consultation.</p>
          </div>
          <div className="process-step">
            <div className="step-icon"><FontAwesomeIcon icon={faUtensils} /></div>
            <h3>Step 2: Custom Menu Planning</h3>
            <p>Our chefs craft a personalized menu for you to taste and approve, ensuring every dish is perfect.</p>
          </div>
          <div className="process-step">
            <div className="step-icon"><FontAwesomeIcon icon={faStar} /></div>
            <h3>Step 3: Flawless Execution</h3>
            <p>On event day, our professional team handles setup, service, and everything in between.</p>
          </div>
          <div className="process-step">
            <div className="step-icon"><FontAwesomeIcon icon={faLeaf} /></div>
            <h3>Step 4: Post-Event Cleanup</h3>
            <p>We ensure your venue is left spotless, allowing you to relax and enjoy the memories.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Plan Your Unforgettable Event?</h2>
        <p>Contact us today for a free, no-obligation quote and let's start planning!</p>
        <Link to="/contact" className="cta-button">Get a Free Quote</Link>
      </section>
    </div>
  );
};

export default Services;