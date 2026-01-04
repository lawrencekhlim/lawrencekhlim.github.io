import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="profile-placeholder">
              <img 
                src="/profile.jpg" 
                alt="Lawrence Lim" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-fallback">
                <span>Lawrence Lim</span>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h1 className="about-title">Lawrence Lim</h1>
            <h2 className="about-subtitle">Privacy & AI Researcher</h2>
            <p className="about-location">San Francisco Bay Area</p>
            <p className="about-description">
              Hello there! I am a computer science PhD candidate at UC Santa Barbara. 
            </p>
            <p className="about-description">
              My work spans across various domains including privacy, AI, human-computer interaction, compilers, and more. Recently, I have been interested on improving the security and privacy of Large Language Models by using homomorphic encryption to enable private inference. Check out my recent papers!
            </p>
            {/* <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Publications</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
