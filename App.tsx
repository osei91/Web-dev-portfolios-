import React from 'react';
import Background from './components/Layout/Background';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Services from './components/Sections/Services';
import Contact from './components/Sections/Contact';

const App: React.FC = () => {
  return (
    <main className="relative text-slate-900 dark:text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-100 transition-colors duration-300">
      <Background />
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero id="hero" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Services id="services" />
        <Contact id="contact" />
      </div>
    </main>
  );
};

export default App;