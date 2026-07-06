import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedDishes() {
  const containerRef = useScrollReveal();

  const features = [
    {
      name: 'Duck Leg Confit',
      tagline: 'Signature Entrée',
      description: 'Cured in wild juniper and sea salt, slow-rendered in duck fat for 12 hours, then roasted to absolute perfection. Accompanied by silk sweet potato purée and wild forest berries.',
      image: '/Images/Prato_de_coxa_assada-removebg-preview.png',
      price: '$48.00',
    },
    {
      name: '24K Gold Ganache',
      tagline: 'Award-Winning Dessert',
      description: 'A luxurious combination of 72% single-origin Venezuelan dark chocolate, Madagascan vanilla paste, custom salted butter caramel, adorned with genuine 24-karat gold leaf.',
      image: '/Images/The_Most_Amazing_Classic_Chocolate_Cake-removebg-preview.png',
      price: '$22.00',
    },
    {
      name: 'Heirloom Margherita',
      tagline: 'Sourdough Perfection',
      description: 'A 48-hour cold fermented wild yeast crust, crushed San Marzano tomatoes, fresh buffalo mozzarella, aromatic sweet basil leaves, finished with cold-pressed olive oil.',
      image: '/Images/Homemade_Margherita_Pizza_That_Will_Wow_Your_Tastebuds-removebg-preview.png',
      price: '$28.00',
    },
  ];

  return (
    <section
      id="signature"
      ref={containerRef}
      className="relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-20 scroll-reveal transition-all duration-700">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-500 uppercase block mb-2">
            The Masterpieces
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold tracking-wide text-cream">
            Signature Creations
          </h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Feature Stack */}
        <div className="space-y-28 md:space-y-36">
          {features.map((dish, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={dish.name}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 lg:gap-20 items-center`}
              >
                {/* Image Section with 3D pedestal glass platform */}
                <div className="w-full lg:w-1/2 scroll-reveal transition-all duration-1000 flex justify-center items-center relative group">
                  {/* Subtle golden background glow */}
                  <div className="absolute w-[80%] h-[80%] bg-gold-500/10 rounded-full blur-[60px] group-hover:bg-gold-500/25 transition-all duration-700 pointer-events-none" />
                  
                  {/* Pedestal platform */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-44 h-8 bg-gradient-to-t from-gold-500/20 to-transparent rounded-full blur-[8px] border border-gold-500/10 transform group-hover:scale-115 transition-all duration-700 pointer-events-none" />

                  <div className="relative z-10 w-full max-w-lg aspect-square flex items-center justify-center p-8">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="max-h-full max-w-[85%] object-contain transform group-hover:-translate-y-4 group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 ease-luxury drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 scroll-reveal transition-all duration-1000 space-y-6 text-left">
                  <div>
                    <span className="font-cinzel text-xs tracking-[0.25em] text-gold-500 uppercase block mb-2 font-medium">
                      {dish.tagline}
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold text-cream tracking-wide">
                      {dish.name}
                    </h3>
                    <div className="w-16 h-[1px] bg-gold-500/30 mt-3" />
                  </div>

                  <p className="font-cormorant italic text-lg md:text-xl text-cream/90 font-light leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="flex items-center gap-6 pt-4">
                    <span className="font-cinzel text-2xl text-gold-500 font-semibold">
                      {dish.price}
                    </span>
                    <a
                      href="#reserve"
                      className="btn-gold px-8 py-3 rounded-full text-xs font-semibold tracking-wider"
                    >
                      Reserve Plate
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
