import React from 'react';

const About = () => {
  const chefs = [
    { name: 'Rishit', image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg', description: 'Head Chef with 20 years of experience in South Indian cuisine.' },
    { name: 'Heet', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Chef known for his creative and delicious desserts.' },
    { name: 'Janhavi', image: 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg', description: 'Specialist in Maharashtrain fusion and vibrant culinary creations.' },
    { name: 'Jasleen', image: 'https://images.pexels.com/photos/6578891/pexels-photo-6578891.jpeg', description: 'Expert in farm-to-table and organic meal preparation.' },
    { name: 'Ruchi', image: 'https://images.unsplash.com/photo-1659354219212-b9ec7231ec6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoZWZzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D', description: 'Skilled chef delivering traditional Gujarati delicacies with perfection and flair.' },
    { name: 'Tanvi', image: 'https://images.unsplash.com/photo-1659354218682-86007e49d844?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZWZzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D', description: 'Sous Chef ensuring every dish meets our highest standards.' },
  ];

  const founders = [
    { name: 'Sohan Thakur', image: '/Sohan.jpg', description: 'With a passion for food and a vision for service, Sohan founded Catering to bring joy to events.' },
    { name: 'Rishi Gehani', image: '/Rishi.png', description: 'Rishi’s expertise in management and logistics ensures every event is a seamless success.' },
  ];

  return (
    <div className="about-page">
      {/* 1. "Who Are We" Section */}
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