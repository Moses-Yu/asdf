
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Solutions } from './components/Solutions';
import { HealthLibrary } from './components/HealthLibrary';
import { Technology } from './components/Technology';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { DeltoidChat } from './components/DeltoidChat';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="values" className="py-20 bg-slate-50">
          <ValueProposition />
        </section>

        <section id="solutions" className="py-24">
          <Solutions />
        </section>

        <section id="technology" className="py-24 bg-slate-900 text-white overflow-hidden">
          <Technology />
        </section>

        <section id="library" className="py-24 bg-white">
          <HealthLibrary />
        </section>

        <section id="partners" className="py-16 bg-slate-50 border-t border-b border-slate-100">
          <Partners />
        </section>
      </main>
      
      <Footer />

      {/* Futuristic Floating Chat Engine */}
      <DeltoidChat />
    </div>
  );
};

export default App;
