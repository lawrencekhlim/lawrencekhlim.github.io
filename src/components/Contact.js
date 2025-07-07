import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here - you can integrate with email services like EmailJS
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'lawrenceklim {at} ucsb {dot} edu',
      link: null
    },
    // {
    //   icon: '📱',
    //   label: 'Phone',
    //   value: '+1 (555) 123-4567',
    //   link: 'tel:+15551234567'
    // },
    {
      icon: '📍',
      label: 'Location',
      value: 'Santa Clara, CA',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/lawrencekhlim',
      link: 'https://linkedin.com/in/lawrencekhlim'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/lawrencekhlim', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/lawrencekhlim', icon: '💼' }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always interested in new opportunities, collaborations, and interesting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
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
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Lawrence Lim. All rights reserved.</p>
          <p>Built with React and ❤️</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
