import React from 'react';
import './Contact.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const animationRef = useScrollAnimation();
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'lawrenceklim {at} ucsb {dot} edu',
      link: null,
      isImage: false
    },
    {
      icon: '/LI-In-Bug.png',
      label: 'LinkedIn',
      value: 'linkedin.com/in/lawrencekhlim',
      link: 'https://linkedin.com/in/lawrencekhlim',
      isImage: true
    },
    {
      icon: '/github-mark.png',
      label: 'GitHub',
      value: 'github.com/lawrencekhlim',
      link: 'https://github.com/lawrencekhlim',
      isImage: true
    }
  ];

  return (
    <section id="contact" className="section contact-section" ref={animationRef}>
      <div className="container">
        <h2 className="section-title scroll-animate">Get In Touch</h2>
        <p className="contact-intro scroll-animate">
          I'm always interested in new opportunities, collaborations, and interesting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info scroll-animate-scale">
            <h3>Contact Information</h3>
            <div className="contact-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item scroll-animate">
                  <span className="contact-icon">
                    {item.isImage ? (
                      <img src={item.icon} alt={item.label} className="icon-image" />
                    ) : (
                      item.icon
                    )}
                  </span>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className="contact-value">{item.value}</a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
