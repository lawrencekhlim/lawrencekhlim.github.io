import React from 'react';
import './Education.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
  const animationRef = useScrollAnimation();
  const education = [
    {
      degree: "PhD Student",
      major: "Computer Science",
      institution: "University of California, Santa Barbara",
      period: "2020 - Current",
      location: "Santa Barbara, CA",
      gpa: "3.94/4.0"
    },
    {
      degree: "Bachelor of Science",
      major: "Computer Science",
      institution: "University of California, Santa Barbara",
      period: "2016 - 2020",
      location: "Santa Barbara, CA",
      gpa: "3.93/4.0"
    }
  ];

  return (
    <section id="education" className="section" ref={animationRef}>
      <div className="container">
        <h2 className="section-title scroll-animate">Education</h2>
        <div className="education-section">
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item card scroll-animate-left">
                <div className="education-header">
                  <div className="education-main">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <p className="education-major">{edu.major}</p>
                    <p className="education-institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span className="education-period">{edu.period}</span>
                      <span className="education-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
