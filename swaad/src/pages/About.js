import React from 'react';

const About = () => {
  // Placeholder data for chefs and founders
  const chefs = [
    { name: 'Rishit', image: 'https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202105/ayyar6.jpg', description: 'Head Chef with 20 years of experience in Italian cuisine.' },
    { name: 'Heet', image: 'https://staticimg.amarujala.com/assets/images/2018/07/09/hf_1531124344.jpeg?q=80&w=480&dpr=2.6', description: 'Pastry Chef known for her creative and delicious desserts.' },
    { name: 'Janhavi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYkgRTBuFwaa69aTN5RRdscJZvgZa4J_6RQ&s', description: 'Specialist in Asian fusion and vibrant culinary creations.' },
    { name: 'Jasleen', image: 'https://dy3rma73kowlp.cloudfront.net/uploads/2024/01/sodhi.webp', description: 'Expert in farm-to-table and organic meal preparation.' },
    { name: 'Ruchi', image: 'https://images.news18.com/ibnlive/uploads/2024/02/dayaben-1-2024-02-e842139c0c8e119c47f6612426c6ba92-16x9.jpg', description: 'Grill Master passionate about smoked and barbecued dishes.' },
    { name: 'Tanvi', image: 'https://feeds.abplive.com/onecms/images/uploaded-images/2021/12/29/5f335d9841b127e990aadb2c0eb5152a_original.jpg?impolicy=abp_cdn&imwidth=1200', description: 'Sous Chef ensuring every dish meets our highest standards.' },
  ];

  const founders = [
    { name: 'Sohan Thakur', image: '/Sohan.jpg', description: 'With a passion for food and a vision for service, Sohan founded Catering to bring joy to events.' },
    { name: 'Rishi Gehani', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=387&q=80', description: 'Rishi’s expertise in management and logistics ensures every event is a seamless success.' },
    // { name: 'Sohan Thakur', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=387&q=80', description: 'Jane’s expertise in management and logistics ensures every event is a seamless success.' },

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