import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { GiFleurDeLys } from 'react-icons/gi';
import { FiAward } from 'react-icons/fi';

export default function About() {
  const containerRef = useScrollReveal();

  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '45k+', label: 'Happy Customers' },
    { value: '6', label: 'Professional Chefs' },
    { value: '18', label: 'Signature Dishes' },
  ];

  const pillars = [
    {
      title: 'Our Mission',
      description: 'To transcend traditional dining by crafting bespoke, multisensory culinary events that unite art, science, and the purest natural ingredients.',
      Icon: HiOutlineSparkles
    },
    {
      title: 'Why Aurèle',
      description: 'Every plate is an original composition. We design our flavors from the molecular level up, ensuring an unforgettable journey of taste.',
      Icon: GiFleurDeLys
    }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Title */}
        <div className="text-center scroll-reveal transition-all duration-700">
          <span className="inline-flex items-center gap-2 font-cinzel text-xs tracking-[0.3em] text-gold-500 uppercase block mb-2">
            <HiOutlineSparkles className="text-sm shrink-0" />
            The Aurèle Philosophy
            <HiOutlineSparkles className="text-sm shrink-0" />
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold tracking-wide text-cream">
            Our Story & Vision
          </h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 text-left">
            <div className="scroll-reveal transition-all duration-700 delay-100">
              <h3 className="font-cinzel text-xl md:text-2xl text-gold-200/90 tracking-wider mb-4">
                Redefining the Gastronomic Frontier
              </h3>
              <p className="font-inter text-cream/70 text-sm md:text-base leading-relaxed tracking-wide font-light">
                Aurèle was born from a simple yet ambitious vision: to treat gastronomy as a fine art. Founded in the heart of Paris, we select rare organic treasures from local farms and sculpt them into contemporary masterpieces. Led by our world-class culinary director, our kitchen is a laboratory of taste, combining ancient French heritage with modern molecular culinary techniques.
              </p>
            </div>

            {/* Mission & Why Choose Us Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => {
                const { Icon } = pillar;
                return (
                  <div
                    key={pillar.title}
                    className="scroll-reveal transition-all duration-700 glass p-6 rounded-2xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div>
                      <div className="text-gold-500 text-2xl mb-3 shrink-0">
                        <Icon />
                      </div>
                      <h4 className="font-cinzel text-xs tracking-[0.2em] text-gold-500 uppercase font-semibold mb-2">
                        {pillar.title}
                      </h4>
                      <p className="font-inter text-cream/60 text-xs leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats & Distinctions */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="scroll-reveal transition-all duration-1000 delay-300 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass p-6 md:p-8 rounded-2xl text-center border border-gold-500/10 hover:bg-gold-500/5 transition-all duration-500"
                >
                  <div className="font-cinzel text-3xl md:text-4xl font-bold gold-text mb-1">
                    {stat.value}
                  </div>
                  <div className="font-inter text-[0.65rem] tracking-[0.25em] text-cream/50 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Luxury Distinction Banner */}
            <div className="scroll-reveal transition-all duration-700 delay-400 glass-card p-6 rounded-2xl border border-gold-500/10 flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-gold-500/25 flex items-center justify-center shrink-0">
                <FiAward className="text-gold-500 text-xl shrink-0" />
              </div>
              <div className="text-left">
                <h4 className="font-cinzel text-xs tracking-[0.2em] text-gold-500 uppercase font-semibold mb-1">
                  Three Michelin Star Standard
                </h4>
                <p className="font-inter text-cream/60 text-xs font-light leading-relaxed">
                  Consistently recognized for extraordinary culinary quality, masterful technique, and exceptional aesthetic presentation.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
