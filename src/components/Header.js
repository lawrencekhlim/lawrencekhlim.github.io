import React from 'react';
export default function Header() {
  return <header className="site-header"><nav aria-label="Main navigation">
    <a className="brand" href="#about">Lawrence Lim</a>
    <div className="nav-links"><a href="#publications">Publications</a>{/* <a href="#experience">Experience</a> */}<a href="#resume">Resume</a></div>
  </nav></header>;
}
