/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf8ec',
          100: '#f9eec9',
          200: '#f3da8e',
          300: '#edc453',
          400: '#e6ae2a',
          500: '#C9A84C',
          600: '#b8922e',
          700: '#996e22',
          800: '#7d5620',
          900: '#69461f',
        },
        obsidian: {
          DEFAULT: '#080808',
          50:  '#1a1a1a',
          100: '#141414',
          200: '#0f0f0f',
          300: '#080808',
        },
        charcoal: {
          DEFAULT: '#1C1C1E',
          50:  '#2C2C2E',
          100: '#242426',
          200: '#1C1C1E',
          300: '#141416',
        },
        cream: {
          DEFAULT: '#F5EDD8',
          50:  '#FDFAF4',
          100: '#F9F3E4',
          200: '#F5EDD8',
          300: '#EDE0C4',
        },
        teal: {
          accent: '#4ECDC4',
        },
      },
      fontFamily: {
        cinzel:     ['"Cinzel"', 'serif'],
        cormorant:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter:      ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        '8xl': ['5.5rem',  { lineHeight: '1.05' }],
        '9xl': ['7rem',    { lineHeight: '1' }],
        '10xl':['9rem',    { lineHeight: '0.95' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '60px',
      },
      animation: {
        'fade-up':       'fadeUp 0.8s ease forwards',
        'fade-in':       'fadeIn 1.2s ease forwards',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'spin-slow':     'spin 20s linear infinite',
        'aurora':        'aurora 12s ease-in-out infinite alternate',
        'slide-left':    'slideLeft 0.4s ease forwards',
        'slide-right':   'slideRight 0.4s ease forwards',
        'counter':       'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.3)' },
          '50%':      { boxShadow: '0 0 50px rgba(201,168,76,0.7), 0 0 80px rgba(201,168,76,0.3)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%':      { transform: 'translateY(10px)', opacity: '0.4' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        aurora: {
          '0%':   { transform: 'translate(-10%, -10%) scale(1)',   opacity: '0.4' },
          '50%':  { transform: 'translate(5%, 5%) scale(1.15)',    opacity: '0.6' },
          '100%': { transform: 'translate(10%, -5%) scale(0.95)',  opacity: '0.3' },
        },
        slideLeft: {
          '0%':   { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',    opacity: '1' },
        },
        slideRight: {
          '0%':   { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',     opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'gold-sm':  '0 0 15px rgba(201,168,76,0.25)',
        'gold-md':  '0 0 30px rgba(201,168,76,0.35)',
        'gold-lg':  '0 0 60px rgba(201,168,76,0.45)',
        'gold-xl':  '0 0 100px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.3)',
        'glass':    '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-lg': '0 16px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
        'card':     '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover':'0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(201,168,76,0.2)',
        'inner-gold':'inset 0 0 30px rgba(201,168,76,0.1)',
      },
    },
  },
  plugins: [],
}
