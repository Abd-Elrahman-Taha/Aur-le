import React, { useState, useEffect } from 'react';
import { useScrolled } from '../hooks/useScrolled';

export default function Navbar() {
  const scrolled = useScrolled(50);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Reserve', href: '#reserve' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll spy implementation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy

      for (const link of navLinks) {
        const targetElement = document.querySelector(link.href);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const offsetHeight = targetElement.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? 'glass shadow-lg py-4 border-b border-gold-500/10'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-start group">
          <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.25em] text-cream group-hover:text-gold-400 transition-colors duration-300">
            AURÈLE
          </span>
          <span className="font-inter text-[0.6rem] tracking-[0.4em] text-gold-500/80 -mt-1 uppercase">
            Haute Cuisine
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-cinzel text-xs tracking-[0.15em] relative py-1 transition-all duration-300 ${
                  isActive ? 'text-gold-500 font-semibold' : 'text-cream/70 hover:text-gold-500'
                }`}
              >
                {link.name}
                {/* Active Underline Dot indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-500 transition-all duration-500 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#reserve"
            className="btn-outline-gold px-6 py-2 rounded-full text-xs font-semibold"
          >
            Book Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream hover:text-gold-500 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5 justify-center items-end">
            <span
              className={`h-[1px] bg-current transition-all duration-300 ${
                isOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
              }`}
            />
            <span
              className={`h-[1px] bg-current transition-all duration-300 ${
                isOpen ? 'w-0 opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[1px] bg-current transition-all duration-300 ${
                isOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] glass transition-all duration-500 ease-luxury transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-cinzel text-lg tracking-[0.2em] transform hover:scale-105 transition-all duration-300 ${
                  isActive ? 'text-gold-500 font-semibold scale-105' : 'text-cream hover:text-gold-500'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#reserve"
            onClick={() => setIsOpen(false)}
            className="btn-gold px-8 py-3 rounded-full text-xs"
          >
            Reservation
          </a>
        </div>
      </div>
    </nav>
  );
}
