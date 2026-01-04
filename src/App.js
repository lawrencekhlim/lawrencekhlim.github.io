import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="left-column">
        <About />
        <Education />
        <Contact />
      </div>
      <div className="right-column">
        <Publications />
        <Experience />
      </div>
      <footer className="footer-bar">
        <div className="container">
          <p>&copy; 2025 Lawrence Lim. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
