import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonials() {
  const containerRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Evelyn Vane',
      role: 'Gastronomy Critic',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      review: 'An absolute tour de force. The balance of textures in the Wagyu Filet was unmatched, and the presentation feels like visiting an modern art museum. Aurèle has easily secured a place in my top three global dining spots.',
    },
    {
      name: 'Julian Vance',
      role: 'Connoisseur',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      review: 'From the smoky hickory aromas of the Amber Old Fashioned to the gold-gilded ganache, every single detail speaks of high luxury and pure craft. The service is invisible yet perfectly synchronized.',
    },
    {
      name: 'Helena Rostova',
      role: 'Lifestyle Editor',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      review: 'The design, the music, the soft amber lighting, and of course the Michelin-worthy food. Aurèle is not just a dinner; it is a cinematic culinary event that stays with you long after the final course.',
    },
  ];

  // Auto-play testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 scroll-reveal transition-all duration-700">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-500 uppercase block mb-2">
            The Impressions
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold tracking-wide text-cream">
            Guest Experiences
          </h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="scroll-reveal transition-all duration-1000 delay-200 relative min-h-[380px] sm:min-h-[300px] flex items-center justify-center">
          
          {reviews.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.name}
                className={`absolute w-full max-w-3xl transition-all duration-1000 ease-luxury ${
                  isActive
                    ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
                    : 'opacity-0 translate-x-24 scale-95 pointer-events-none'
                }`}
              >
                <div className="glass p-8 md:p-12 rounded-3xl border border-gold-500/10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative shadow-2xl">
                  {/* Subtle decorative quote icon */}
                  <div className="absolute top-6 right-8 text-gold-500/10 font-cinzel text-7xl select-none pointer-events-none">
                    “
                  </div>

                  {/* Customer Image */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-full p-[2px] border border-gold-500/30 overflow-hidden shadow-gold-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="text-center md:text-left space-y-4">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="star text-sm">★</span>
                      ))}
                    </div>
                    
                    <p className="font-cormorant italic text-lg md:text-xl text-cream/90 font-light leading-relaxed">
                      "{item.review}"
                    </p>

                    <div>
                      <h4 className="font-cinzel text-sm text-gold-500 font-semibold tracking-wider">
                        {item.name}
                      </h4>
                      <span className="font-inter text-[0.7rem] text-cream/40 uppercase tracking-widest block">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators / Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="w-8 h-8 rounded-full border border-gold-500/25 flex items-center justify-center text-cream/50 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            ←
          </button>
          
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex
                    ? 'bg-gold-500 w-6 shadow-gold-sm'
                    : 'bg-cream/20 hover:bg-cream/40'
                } focus:outline-none`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
            className="w-8 h-8 rounded-full border border-gold-500/25 flex items-center justify-center text-cream/50 hover:text-gold-500 hover:border-gold-500 transition-colors duration-300 focus:outline-none"
            aria-label="Next Testimonial"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
