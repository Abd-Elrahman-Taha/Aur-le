import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FeaturedDishes from './components/FeaturedDishes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-cream selection:bg-gold-500/30 selection:text-cream noise-overlay font-inter antialiased overflow-x-hidden">
      
      {/* Cinematic fixed background image with gradient overlays */}
      <div className="fixed inset-0 w-full h-full z-0 cinematic-bg">
        {/* Subtle dark gradient overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black/90 z-10 pointer-events-none" />
        
        {/* Aurora lighting glow effects */}
        <div className="absolute top-[10%] left-[5%] w-[60vw] h-[60vw] bg-gold-600/10 rounded-full blur-[140px] pointer-events-none animate-aurora z-10" />
        <div className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-teal-accent/5 rounded-full blur-[120px] pointer-events-none animate-aurora z-10" style={{ animationDelay: '-6s' }} />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <FeaturedDishes />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
