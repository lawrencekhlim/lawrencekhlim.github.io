import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Ph.D. Student in Computer Science",
      institution: "University of California, Santa Barbara",
      period: "2020 - Current",
      location: "Santa Barbara, CA",
      gpa: "3.94/4.0"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Santa Barbara",
      period: "2016 - 2020",
      location: "Santa Barbara, CA",
      gpa: "3.93/4.0"
    }
  ];

//   const certifications = [
//     {
//       name: "AWS Certified Solutions Architect",
//       issuer: "Amazon Web Services",
//       date: "2023",
//       credentialId: "AWS-SA-2023-001"
//     },
//     {
//       name: "Google Cloud Professional Developer",
//       issuer: "Google Cloud",
//       date: "2022",
//       credentialId: "GCP-PD-2022-456"
//     },
//     {
//       name: "Certified Kubernetes Administrator",
//       issuer: "Cloud Native Computing Foundation",
//       date: "2022",
//       credentialId: "CKA-2022-789"
//     },
//     {
//       name: "MongoDB Certified Developer",
//       issuer: "MongoDB University",
//       date: "2021",
//       credentialId: "MDB-DEV-2021-123"
//     }
//   ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-section">
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item card">
                <div className="education-header">
                  <div className="education-main">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <p className="education-institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span className="education-period">{edu.period}</span>
                      <span className="education-location">{edu.location}</span>
                      <span className="education-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="certifications-section">
          <h3 className="subsection-title">Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item card">
                <div className="cert-icon">🏆</div>
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-details">
                  <span className="cert-date">{cert.date}</span>
                  <span className="cert-id">ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
