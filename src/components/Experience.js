import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Researcher",
      company: "University of California, Santa Barbara",
      period: "2020 - Present",
      location: "Santa Barbara, CA",
      description: [
        "Optimized key rotations by developing new protocols to eliminate race conditions while utilizing new updatable encryption primitives, resulting in an accepted research paper: QUICKeR: Quicker Updates Involving Continuous Key Rotation (PoPETS 2024)",
        "Developed a virtual reality application to spatialize music, resulting in an accepted paper at a top HCI conference: Spatializing Music in Virtual Reality (SUI 2023)",
        "Developed an augmented reality mobile application for spatial music, culminating in an accepted paper at a top HCI conference: A Spatial Music Listening Experience in Augmented Reality (UIST 2021)",
        "Reduced workload imbalance for distributed system backends by developing a front end cache, leading to a paper: Cache on Track (CoT): Decentralized Elastic Caches for Cloud Environments (EDBT 2021)"
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Google",
      period: "Summer 2024",
      location: "Sunnyvale, CA",
      description: [
        "Developed a pipeline to compile a Python machine learning models into CKKS homomorphic encryption, leading to a 3000x performance improvement over previous infrastructure",
        "Implemented optimized matrix multiplication FHE kernels, leading to a 6x performance improvement",
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Oracle",
      period: "Summer 2021, Summer 2022",
      location: "Redwood City, CA",
      description: [
        "Conducted research on optimizing for net benefit of query plan native compilation by modeling compilation benefit and clustering to group similar query plans, leading to a patent: Compiling Just the Best Bits: Finding the Maximum Net Benefit Shared Subexpressions in a Query Workload",
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Toyon Research Lab",
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
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content card">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
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
