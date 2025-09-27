import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faListCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  return (
    // We use a React Fragment <> to wrap all the sections
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Every Meal Tells a Story of Love and Tradition.</h1>
          {/* <h1>Preserving Heritage, Serving Memories.</h1> */}
          <p>Experience the Taste of Tradition, Cooked with Love Served with Soul.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn-get-started">Get Started →</Link>
            <Link to="/services" className="btn-learn-more">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-card-container">
          <div className="about-card">
            <div className="icon">
              <FontAwesomeIcon icon={faLeaf} size='3x' />
            </div>
            <h3>NATURAL INGREDIENTS</h3>
            <p>Swaad serves meals made with nature’s purest ingredients, ensuring every bite is healthy and delicious.</p>
          </div>
          <div className="about-card">
            <div className="icon">
              <FontAwesomeIcon icon={faListCheck} size='3x' />
            </div>
            <h3>VARIED MENU</h3>
            <p>Discover diverse, authentic dishes crafted to celebrate every spiritual and cultural tradition.</p>
          </div>
          <div className="about-card">
            <div className="icon">
              <FontAwesomeIcon icon={faUserTie} size='3x' />
            </div>
            <h3>BEST CHEFS</h3>
            <p>Our expert chefs at Swaad bring years of experience in preparing authentic Indian cuisine.</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <h2 className="section-title">CHOOSE YOUR MENU</h2>
        <p className="section-description">
          “From comfort to celebration – choose your mood, choose your menu.”
        </p>
        <div className="menu-items-container">
          <div className="menu-item">
            <div className="menu-item-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg)` }}></div>
            <h4>SINDHI</h4>
            <p>"From Sindhi Kadhi to Sai Bhaji – taste the comfort of tradition.”</p>
            <Link to="/menu?cuisine=sindhi" className="get-menu-btn">Get Menu</Link>
          </div>
          <div className="menu-item">
            <div className="menu-item-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/5775684/pexels-photo-5775684.jpeg)` }}></div>
            <h4>GUJARATI</h4>
            <p>“From Dhokla to Undhiyu – a platter full of tradition.”</p>
            <Link to="/menu?cuisine=gujarati" className="get-menu-btn">Get Menu</Link>
          </div>
          <div className="menu-item">
            <div className="menu-item-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/17223838/pexels-photo-17223838.jpeg)` }}></div>
            <h4>MAHRASHTRAIN</h4>
            <p>"From Misal to Puran Poli – a celebration on every plate.”</p>
            <Link to="/menu?cuisine=marathi" className="get-menu-btn">Get Menu</Link>
          </div>
        </div>
      </section>

      {/* Occasion Section */}
      <section className="occasion-section">
        <h2 className="section-title">CATERING FOR ANY OCCASION</h2>
        <p className="section-description">
              “Whether it’s a wedding, festival, birthday, or corporate event, our catering adds the taste of tradition to every moment.”        </p>
        <div className="occasion-cards-container">
          <div className="occasion-card">
            <img src="https://images.pexels.com/photos/7219166/pexels-photo-7219166.jpeg" alt="Private Party" className="occasion-image" />
            <div className="occasion-text-content">
              <h3>PRIVATE PARTY</h3>
              <p>From cozy get-togethers to lavish soirées, we serve dishes that delight every guest.</p>
            </div>
          </div>
          <div className="occasion-card">
            <img src="https://images.pexels.com/photos/169194/pexels-photo-169194.jpeg" alt="Wedding Reception" className="occasion-image" />
            <div className="occasion-text-content">
              <h3>WEDDING RECEPTION</h3>
              <p>Make your big day unforgettable with flavors rooted in culture and crafted with care.</p>
            </div>
          </div>
          <div className="occasion-card">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=870&q=80" alt="Corporate Event" className="occasion-image" />
            <div className="occasion-text-content">
              <h3>CORPORATE EVENT</h3>
              <p>Authentic menus designed to satisfy every palate at your corporate event.</p>
            </div>
          </div>
          <div className="occasion-card">
            <img src="https://images.pexels.com/photos/7155971/pexels-photo-7155971.jpeg" alt="Birthday Party" className="occasion-image" />
            <div className="occasion-text-content">
              <h3>BIRTHDAY PARTY</h3>
              <p>Blow out the candles, we’ll serve the feast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <h2 className="section-title">OUR CLIENTS SAY!</h2>
        <p className="section-description">
          Real stories. Real experiences. See how we’ve made a difference.
        </p>
        <div className="testimonial-cards-container">
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <img src="https://imgs.search.brave.com/28PetXkovHHDvs_mX60bsV7frdh67j01uNv32n02kY4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvamV0/aGFsYWwtaW4tdGFh/cmFrLW1laHRhLWth/LW9vbHRhaC1jaGFz/aG1haC1xaTRhbzN4/MHF0czY4b3pxLmpw/Zw" alt="Jhethalal Chmapaklal Gada" className="testimonial-image" />
            <p className="testimonial-quote">Bhut Bhut Zabarzast Khana Banaya hai, Aapka undhiyu aisa tasty tha ke Bapuji bhi extra plate maang rhe the bolo!</p>
            <h4 className="testimonial-name">Jethalal Champaklal Gada</h4>
            <p className="testimonial-role">Customer</p>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <img src="https://imgs.search.brave.com/E5sje4VYxFHhwpxzEoM3DiTLothomOz3Y1D7Tf-nty0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cnZjai5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDgv/TWFuZGFyLUNoYW5k/d2Fka2FyLUF0bWFy/YW0tVHVrYXJhbS1C/aGlkZS5qcGVn" alt="Aatmaram Tukaram Bhide" className="testimonial-image" />
            <p className="testimonial-quote">Aprateem Swaad Aprateem , Aapka Khana Khakar Mujhe Humare Zamane ki Yaad Agai.</p>
            <h4 className="testimonial-name">Aatmaram Tukaram Bhide</h4>
            <p className="testimonial-role">Customer</p>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <img src="https://imgs.search.brave.com/e-UiN8fTnPkBVoUgjcRZRblFqgYyhyAL5D0Eq3_mQmw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/cmVwdWJsaWN3b3Js/ZC5jb20vcmltYWdl/cy9ndXJ1Y2hhcmFu/LXNpbmdoLXJvc2hh/bi1zb2RoaS10bWtv/Yy0xLTE3MTQxMzM5/NTg1ODExNl85Lndl/YnA_dz0xMjgwJmg9/NzIwJnE9NzUmZm9y/bWF0PXdlYnA" alt="Roshan Singh Sodhi" className="testimonial-image" />
            <p className="testimonial-quote">Oyee Hoyeee Dil Khush kar detta Yaraaa... Balle balle balle balle balle!!!</p>
            <h4 className="testimonial-name">Roshan Singh Sodhi</h4>
            <p className="testimonial-role">Customer</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;