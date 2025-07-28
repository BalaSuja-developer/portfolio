import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import TestingShowcase from './components/TestingShowcase';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <TestingShowcase />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;