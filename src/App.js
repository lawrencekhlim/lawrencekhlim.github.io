import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About, { Profile } from './components/About';
import News from './components/News';
import Publications from './components/Publications';
// import Experience from './components/Experience';
import Resume from './components/Resume';
import publications from './data/publications';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const paperId = hash.slice(1);
  const showResume = hash === '#resume';
  const showPublications = hash === '#publications' || publications.some(p => p.id === paperId);
  useEffect(() => {
    const navigate = () => setHash(window.location.hash);
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash === '#resume' || hash === '#publications') window.scrollTo(0, 0);
      else document.getElementById(hash.slice(1) || 'about')?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <div className={showResume ? 'resume-layout' : 'page-layout'}>
      {!showResume && <Profile />}
      <main id="main">{showResume ? <Resume /> : showPublications ? <Publications showAll /> : <><About /><News /><Publications />{/* <Experience /> */}</>}</main>
    </div>
    <footer className="site-footer">© 2026 Lawrence Lim</footer>
  </>;
}
