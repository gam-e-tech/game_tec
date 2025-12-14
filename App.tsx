import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-blue-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
      </main>
      <Contact />
      <AIChat />
    </div>
  );
};

export default App;
