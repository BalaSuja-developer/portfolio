import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="min-h-screen">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Education />
        <Blog />
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;