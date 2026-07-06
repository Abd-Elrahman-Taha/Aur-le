import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-10 pt-20"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6">
        
        {/* Small Premium Tag */}
        <div className="scroll-reveal transition-all duration-1000 delay-200">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.4em] text-gold-500 uppercase font-semibold">
            Welcome to Aurèle
          </span>
          <div className="w-12 h-[1px] bg-gold-500/50 mx-auto mt-2 animate-pulse" />
        </div>

        {/* Large Elegant Restaurant Name & Headline */}
        <h1 className="scroll-reveal transition-all duration-1000 delay-400 font-cinzel text-cream tracking-[0.15em] leading-tight select-none">
          <span className="block text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] font-bold tracking-[0.2em] uppercase mb-2">
            AURÈLE
          </span>
          <span className="block font-cormorant italic text-lg sm:text-2xl md:text-3xl text-gold-200/90 tracking-wide font-light max-w-2xl mx-auto">
            Where Culinary Artistry Meets Modern Sophistication
          </span>
        </h1>

        {/* Premium Description */}
        <p className="scroll-reveal transition-all duration-1000 delay-600 max-w-xl mx-auto font-inter text-cream/70 text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
          Experience an immersive Michelin-star journey. Crafted with local organic treasures, custom-sculpted flavors, and award-winning execution.
        </p>

        {/* CTA Buttons */}
        <div className="scroll-reveal transition-all duration-1000 delay-800 flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 w-full sm:w-auto">
          <a
            href="#menu"
            className="btn-gold w-full sm:w-52 py-4 rounded-full text-xs font-semibold text-center tracking-[0.2em]"
          >
            View Menu
          </a>
          <a
            href="#reserve"
            className="btn-outline-gold w-full sm:w-52 py-4 rounded-full text-xs font-semibold text-center tracking-[0.2em]"
          >
            Reserve Table
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20">
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="font-cinzel text-[0.6rem] tracking-[0.3em] text-cream/40 group-hover:text-gold-500 transition-colors duration-300">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[18px] h-[30px] rounded-full border border-cream/35 group-hover:border-gold-500/70 flex justify-center p-1 transition-colors duration-300">
            <div className="w-[3px] h-[6px] rounded-full bg-gold-500 animate-scroll-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
