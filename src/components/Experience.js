import React from 'react';
import './Experience.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const animationRef = useScrollAnimation();
  
  // Handle smooth scrolling for internal links
  const handleInternalLinkClick = (e) => {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        // Update the URL hash
        window.history.pushState(null, null, href);
        // Trigger hashchange event for the Publications component
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    }
  };

  const experiences = [
    {
      title: "Graduate Student Researcher",
      company: "University of California, Santa Barbara",
      period: "2020 - Present",
      location: "Santa Barbara, CA",
      description: [
        "Enabled private inference of Large Language Models by translating every operation in a transformer model into equivalent CKKS homomorphic encryption operations: <a href='#tricycle-2025' class='internal-link'>Tricycle: Private Transformer Inference with Tricyclic Encodings (2025)</a>",
        "Optimized key rotations by developing new protocols to eliminate race conditions while utilizing new updatable encryption primitives, resulting in an accepted research paper: <a href='#quicker-2024' class='internal-link'>QUICKeR: Quicker Updates Involving Continuous Key Rotation (PoPETS 2024)</a>",
        "Developed a virtual reality application to spatialize music, resulting in an accepted paper at a top HCI conference: <a href='#spatializing-vr-2023' class='internal-link'>Spatializing Music in Virtual Reality (SUI 2023)</a>",
        "Developed an augmented reality mobile application for spatial music, culminating in an accepted paper at a top HCI conference: <a href='#spatial-ar-2021' class='internal-link'>A Spatial Music Listening Experience in Augmented Reality (UIST 2021)</a>",
        "Reduced workload imbalance for distributed system backends by developing a front end cache, leading to a paper: <a href='#cot-2021' class='internal-link'>Cache on Track (CoT): Decentralized Elastic Caches for Cloud Environments (EDBT 2021)</a>"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Google",
      period: "Summer 2024",
      location: "Sunnyvale, CA",
      description: [
        "Developed a pipeline in the <a href='https://github.com/google/heir' target='_blank' rel='noopener noreferrer'>HEIR compiler</a> to compile a Python machine learning models into CKKS homomorphic encryption, leading to a 3000x performance improvement over previous infrastructure and a research paper: <a href='#heir-2025' class='internal-link'>HEIR: A Universal Compiler for Homomorphic Encryption",
        "Implemented optimized matrix multiplication FHE kernels, leading to a 6x performance improvement",
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Oracle",
      period: "Summer 2021, Summer 2022",
      location: "Redwood City, CA",
      description: [
        "Conducted research on optimizing for net benefit of query plan native compilation by modeling compilation benefit and clustering to group similar query plans, leading to a first author patent: <a href='#compiling-best-bits-2025' class='internal-link'>Compiling Just the Best Bits: Finding the Maximum Benefit Shared Subexpressions in a Query Workload",
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Toyon Research Corporation",
      period: "Summer 2019",
      location: "Goleta, CA",
      description: [
        "Improved accuracy of object detection in applications of cutting edge models like RetinaNet and Faster R-CNN by tuning hyperparameters and implementing image transformations",
        "Authored monthly progress reports by analyzing results for government contracts",
        "Created image classification model using ResNet to determine benefits of additional LIDAR data"
      ]
    }
  ];

  return (
    <section id="experience" className="section" ref={animationRef}>
      <div className="container">
        <h2 className="section-title scroll-animate">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item scroll-animate-right">
              <div className="experience-content card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="experience-description" onClick={handleInternalLinkClick}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
