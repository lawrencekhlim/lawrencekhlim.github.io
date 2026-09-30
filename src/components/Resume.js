import React from 'react';

export default function Resume() {
  return <section id="resume">
    <div className="resume-heading">
      <h1>Resume</h1>
      <a className="text-button" href="#about">Back to home <span aria-hidden="true">→</span></a>
    </div>
    <div>
      <a className="download-resume" href="/Lawrence_Lim_Resume.pdf" download="Lawrence_Lim_Resume.pdf">Download PDF ↓</a>
    </div>
    <p className="resume-help">You can also <a href="/Lawrence_Lim_Resume.pdf" target="_blank" rel="noopener noreferrer">open the PDF in a new tab</a>.</p>
    <object className="resume-document" data="/Lawrence_Lim_Resume.pdf" type="application/pdf" aria-label="Lawrence Lim’s resume">
      <p>Your browser cannot display the PDF here. <a href="/Lawrence_Lim_Resume.pdf" download>Download the resume</a> or <a href="/Lawrence_Lim_Resume.pdf" target="_blank" rel="noopener noreferrer">open it in a new tab</a>.</p>
    </object>
  </section>;
}
