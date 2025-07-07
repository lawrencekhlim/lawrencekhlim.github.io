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
            <h2 className="about-subtitle">AI & Privacy Researcher & Software Engineer</h2>
            <p className="about-description">
              Welcome to my professional portfolio! I am a passionate software engineer with expertise in 
              developing innovative solutions and conducting cutting-edge research. With a strong background 
              in computer science and a commitment to excellence, I strive to create impactful technology 
              that makes a difference.
            </p>
            <p className="about-description">
              My work spans across various domains including machine learning, web development, and 
              software architecture. I enjoy tackling complex problems and collaborating with teams 
              to deliver high-quality solutions.
            </p>
            <div className="about-stats">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
