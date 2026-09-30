import React from 'react';
export function Profile() {
  return <aside className="profile" aria-label="Profile and contact information">
    <img className="profile-photo" src="/profile.jpg" alt="Lawrence Lim" width="180" height="180" />
    <div className="profile-info"><h2>Lawrence Lim</h2><p className="profile-role">AI Privacy Researcher</p>
      <p className="profile-location">San Francisco Bay Area</p>
      <div className="profile-education" aria-label="Education">
        <p><span className="education-desktop">Ph.D. in Computer Science<br />UC Santa Barbara<br /><span>2020–2026</span></span><span className="education-mobile">Ph.D. in CS at UCSB, 2020–2026</span></p>
        <p><span className="education-desktop">B.S. in Computer Science<br />UC Santa Barbara<br /><span>2016–2020</span></span><span className="education-mobile">B.S. in CS at UCSB, 2016–2020</span></p>
      </div>
      <ul className="profile-links">
        <li><a href="https://scholar.google.com/citations?user=Ov2WRIsAAAAJ">Google Scholar</a></li>
        <li><a href="https://github.com/lawrencekhlim">GitHub</a></li>
        <li><a href="https://linkedin.com/in/lawrencekhlim">LinkedIn</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </div>
  </aside>;
}
export default function About() {
  return <section id="about" className="introduction">
    <h1>Hi, I’m Lawrence</h1>
    <p>I recently defended my Ph.D. in Computer Science at UC Santa Barbara, where I’m advised by Professors Divyakant Agrawal and Amr El Abbadi.</p>
    <p>My research focuses on <strong>security and privacy for large language models</strong>. I use <strong>homomorphic encryption</strong> to build systems that run inference on encrypted data, bringing private AI closer to practical use.</p>
    <p>My work also spans compilers, databases, and human-computer interaction. I’ve interned at Google and Oracle, and presented my research at conferences (PETS 2024, Socal DB Day 2025, EDBT 2026, ACL 2026, VLDB 2026).</p>
  </section>;
}
