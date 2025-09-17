import React from 'react';

const About = () => {
  // Placeholder data for chefs and founders
  const chefs = [
    { name: 'Rishit', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=387&q=80', description: 'Head Chef with 20 years of experience in Italian cuisine.' },
    { name: 'Heet', image: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&w=387&q=80', description: 'Pastry Chef known for her creative and delicious desserts.' },
    { name: 'Janhavi', image: 'https://images.unsplash.com/photo-1558210433-2503d4c311c6?auto=format&fit=crop&w=387&q=80', description: 'Specialist in Asian fusion and vibrant culinary creations.' },
    { name: 'Jasleen', image: 'https://images.unsplash.com/photo-1542384028-d82623a13dae?auto=format&fit=crop&w=387&q=80', description: 'Expert in farm-to-table and organic meal preparation.' },
    { name: 'Ruchi', image: 'https://images.unsplash.com/photo-1542617123-36f1b957581a?auto=format&fit=crop&w=387&q=80', description: 'Grill Master passionate about smoked and barbecued dishes.' },
    { name: 'Tanvi', image: 'https://images.unsplash.com/photo-1598428809922-26d9c6145607?auto=format&fit=crop&w=387&q=80', description: 'Sous Chef ensuring every dish meets our highest standards.' },
  ];

  const founders = [
    { name: 'Rishi Gehani', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=387&q=80', description: 'With a passion for food and a vision for service, John founded Catering to bring joy to events.' },
    { name: 'Sohan Thakur', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=387&q=80', description: 'Jane’s expertise in management and logistics ensures every event is a seamless success.' },
  ];

  return (
    <div className="about-page">
      {/* 1. "Who Are We" Section with Background Image */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>ABOUT US</h1>
          <div className="about-text-boxes">
            <div className="text-box">
              <h2>Who Are We?</h2>
              <p>Founded on a passion for exquisite food and memorable events, we are a premier catering service dedicated to making your special occasions unforgettable.</p>
            </div>
            <div className="text-box">
              <h2>What We Do?</h2>
              <p>We provide full-service catering for a wide range of events, including weddings, corporate gatherings, and private parties, offering customized menus to fit your unique tastes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Statistics Section */}
      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">1000+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">1500+</span>
          <span className="stat-label">Occasions Served</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Years of Experience</span>
        </div>
      </section>

      {/* 3. Our Chefs Section */}
      <section className="team-section">
        <h2 className="section-title">OUR EXPERT CHEFS</h2>
        <div className="team-grid">
          {chefs.map((chef, index) => (
            <div className="team-card" key={index}>
              <img src={chef.image} alt={chef.name} className="team-image" />
              <div className="team-info">
                <h3>{chef.name}</h3>
                <p>{chef.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Founders Section */}
      <section className="team-section founders-section">
        <h2 className="section-title">OUR FOUNDERS</h2>
        <div className="team-grid founder-grid">
          {founders.map((founder, index) => (
            <div className="team-card" key={index}>
              <img src={founder.image} alt={founder.name} className="team-image" />
              <div className="team-info">
                <h3>{founder.name}</h3>
                <p>{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;