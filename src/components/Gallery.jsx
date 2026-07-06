import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
  const containerRef = useScrollReveal();
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: '/Images/71bbf979-e344-44aa-93fd-5edba29a5397.jpeg',
      title: 'Aurèle Private Salon',
      subtitle: 'Atmosphere & Design',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
      title: 'Truffle Fillet Presentation',
      subtitle: 'Plated Masterpieces',
    },
    {
      id: 3,
      src: '/Images/download.jpeg',
      title: 'Gourmet Selection',
      subtitle: 'Gourmet Selection',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
      title: 'Hickory Smoked Old Fashioned',
      subtitle: 'Artisanal Mixology',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop',
      title: 'Deconstructed Pastry',
      subtitle: 'French Patisserie',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop',
      title: 'The Chef\'s Chef Table',
      subtitle: 'Exclusive Experience',
    },
  ];

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 scroll-reveal transition-all duration-700">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-500 uppercase block mb-2">
            Visual Culinary Art
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold tracking-wide text-cream">
            The Gallery
          </h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Masonry Layout */}
        <div className="masonry-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="masonry-item scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg border border-gold-500/5 bg-black/20"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-luxury"
              />
              
              {/* Glass Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
                <div className="glass-light p-4 rounded-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-luxury border border-gold-500/10">
                  <span className="font-cinzel text-[0.65rem] tracking-[0.25em] text-gold-500 uppercase block mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="font-cinzel text-xs sm:text-sm text-cream font-medium tracking-wide">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-cream hover:text-gold-500 transition-colors duration-300 font-cinzel text-xl focus:outline-none"
            aria-label="Close Lightbox"
          >
            ✕
          </button>
          
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass p-2 rounded-2xl border border-gold-500/20 overflow-hidden shadow-2xl">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[70vh] max-w-full object-contain rounded-xl"
              />
              <div className="p-4 md:p-6 text-center">
                <span className="font-cinzel text-2xs md:text-xs tracking-[0.25em] text-gold-500 uppercase block mb-1">
                  {activeImage.subtitle}
                </span>
                <h3 className="font-cinzel text-base md:text-lg text-cream font-medium">
                  {activeImage.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
