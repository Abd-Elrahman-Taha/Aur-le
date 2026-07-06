import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reservation() {
  const containerRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate premium reservation API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset form after a while
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          guests: '2',
          date: '',
          time: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="reserve"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 z-10"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16 scroll-reveal transition-all duration-700">
          <span className="font-cinzel text-xs tracking-[0.3em] text-gold-500 uppercase block mb-2">
            Secure Your Table
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold tracking-wide text-cream">
            Reservations
          </h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Reservation Card */}
        <div className="scroll-reveal transition-all duration-1000 delay-200 glass p-8 md:p-12 rounded-3xl border border-gold-500/15 shadow-2xl relative">
          
          {isSubmitted ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full border-2 border-gold-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-500 text-2xl font-bold">✓</span>
              </div>
              <h3 className="font-cinzel text-2xl text-cream tracking-wider">
                Reservation Requested
              </h3>
              <p className="font-cormorant italic text-lg text-cream/80 max-w-md mx-auto">
                Thank you, {formData.name}. Our concierge will review your reservation request for {formData.guests} guests on {formData.date} at {formData.time} and confirm via SMS shortly.
              </p>
              <div className="w-12 h-[1px] bg-gold-500/30 mx-auto pt-2" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="font-cinzel text-[0.65rem] tracking-[0.2em] text-cream/70 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., Alexander Mercer"
                    className="input-glass px-4 py-3 rounded-lg text-sm"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="font-cinzel text-[0.65rem] tracking-[0.2em] text-cream/70 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="E.g., +1 (555) 019-2834"
                    className="input-glass px-4 py-3 rounded-lg text-sm"
                  />
                </div>

                {/* Guests */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="guests" className="font-cinzel text-[0.65rem] tracking-[0.2em] text-cream/70 uppercase">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="input-glass px-4 py-3 rounded-lg text-sm cursor-pointer appearance-none"
                    style={{ backgroundImage: "url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23C9A84C\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"%3E%3Cpolyline points=\"6 9 12 15 18 9\"/%3E%3C/svg%3E')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-obsidian-200 text-cream">
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="date" className="font-cinzel text-[0.65rem] tracking-[0.2em] text-cream/70 uppercase">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="input-glass px-4 py-3 rounded-lg text-sm text-cream"
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="time" className="font-cinzel text-[0.65rem] tracking-[0.2em] text-cream/70 uppercase">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="input-glass px-4 py-3 rounded-lg text-sm text-cream"
                  />
                </div>

                {/* Special Request */}
                <div className="flex flex-col space-y-2 md:col-span-2">
                  <label htmlFor="message" className="font-cinzel text-[0.65rem] tracking-[0.2em] text-cream/70 uppercase">
                    Dietary Notes / Special Occasions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="E.g., Gluten-free requirement, Celebrating anniversary..."
                    className="input-glass px-4 py-3 rounded-lg text-sm resize-none"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold px-12 py-4 rounded-full text-xs font-semibold tracking-[0.2em] w-full sm:w-auto relative"
                >
                  {loading ? 'Reserving Your Culinary Journey...' : 'Book The Table'}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
