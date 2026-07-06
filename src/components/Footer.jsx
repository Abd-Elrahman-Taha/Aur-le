import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Reserve', href: '#reserve' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Michelin Guide', href: 'https://michelin.com' },
  ];

  return (
    <footer className="relative border-t border-gold-500/15 py-16 px-6 md:px-12 bg-black/70 backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-cinzel text-2xl font-bold tracking-[0.25em] text-cream">
                AURÈLE
              </span>
              <span className="font-inter text-[0.6rem] tracking-[0.4em] text-gold-500/80 uppercase -mt-0.5">
                Haute Cuisine
              </span>
            </div>
            <p className="font-cormorant italic text-base text-cream/65 max-w-xs leading-relaxed">
              A cinematic fine dining experience celebrating clean molecular flavors and artistic gastronomy.
            </p>
            {/* Social Icons */}
            <div className="flex gap-5 pt-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cinzel text-[10px] tracking-wider text-gold-500 hover:text-cream transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center space-y-4">
            <span className="font-cinzel text-xs tracking-[0.25em] text-gold-500 uppercase font-semibold">
              Explore Links
            </span>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-center lg:text-left">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-cinzel text-[10px] tracking-widest text-cream/65 hover:text-gold-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <span className="font-cinzel text-xs tracking-[0.25em] text-gold-500 uppercase font-semibold">
              The Club Aurèle
            </span>
            <p className="font-inter text-cream/60 text-xs font-light leading-relaxed max-w-xs">
              Subscribe to receive exclusive invitations to private degustation events, chef workshops, and seasonal updates.
            </p>

            {subscribed ? (
              <div className="text-gold-500 font-cinzel text-xs tracking-wider pt-2 animate-fade-in">
                ✓ Welcome to the inner circle.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-xs gap-2 pt-2">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-glass px-4 py-2.5 rounded-full text-xs flex-grow focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-gold px-6 py-2.5 rounded-full text-[10px] tracking-wider font-semibold shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-cream/5 pt-8 gap-4 text-center sm:text-left">
          <p className="font-inter text-[10px] tracking-wider text-cream/40">
            © {new Date().getFullYear()} Aurèle Paris. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="font-inter text-[10px] tracking-wider text-cream/40 hover:text-gold-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#home" className="font-inter text-[10px] tracking-wider text-cream/40 hover:text-gold-500 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
