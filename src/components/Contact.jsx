import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const containerRef = useScrollReveal();

  const details = [
    {
      title: 'Location',
      info: '14 Rue de la Paix, 75002 Paris, France',
    },
    {
      title: 'Reservations Phone',
      info: '+33 (0) 1 42 68 53 00',
    },
    {
      title: 'Inquiries Email',
      info: 'concierge@aurele-dining.com',
    },
    {
      title: 'Dinner Hours',
      info: 'Tuesday – Saturday: 18:00 – 23:30',
    },
  ];

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 scroll-reveal transition-all duration-700">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-500 uppercase block mb-2">
            Establishment Details
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold tracking-wide text-cream">
            Contact & Hours
          </h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 scroll-reveal transition-all duration-1000 delay-200">
            {details.map((item, index) => (
              <div
                key={item.title}
                className="glass p-6 md:p-8 rounded-2xl border border-gold-500/10 flex flex-col justify-center space-y-3"
              >
                <span className="font-cinzel text-2xs md:text-xs tracking-[0.2em] text-gold-500 uppercase font-semibold">
                  {item.title}
                </span>
                <p className="font-inter text-cream/80 text-xs md:text-sm leading-relaxed font-light">
                  {item.info}
                </p>
              </div>
            ))}
          </div>

          {/* Google Maps Placeholder */}
          <div className="scroll-reveal transition-all duration-1000 delay-400 map-placeholder rounded-3xl min-h-[300px] border border-gold-500/15 overflow-hidden flex flex-col justify-center items-center p-6 text-center relative group">
            {/* Dark glass card overlaying the stylized map background */}
            <div className="glass p-6 rounded-2xl border border-gold-500/15 max-w-sm relative z-10 shadow-2xl">
              <span className="font-cinzel text-2xs tracking-[0.3em] text-gold-500 uppercase block mb-2 font-semibold">
                Interactive Map
              </span>
              <p className="font-inter text-cream/70 text-xs font-light leading-relaxed mb-4">
                Aurèle is situated in the iconic Place Vendôme district, near the Paris Opera. Valet parking is available for all dinner guests.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-6 py-2 rounded-full text-[10px] tracking-wider font-semibold inline-block"
              >
                Get Directions
              </a>
            </div>
            {/* Subtle glow behind card */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-500" />
          </div>

        </div>

      </div>
    </section>
  );
}
