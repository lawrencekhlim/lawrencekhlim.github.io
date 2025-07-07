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
      <About />
      <Publications />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
