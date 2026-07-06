import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// ── React Icons ──────────────────────────────────────────────────────────────
// Category icons
import { GiGarlic, GiFruitBowl, GiHotMeal, GiHamburger, GiFullPizza, GiNoodles,
         GiSteak, GiShrimp, GiBarbecue, GiSandwich, GiCupcake,
         GiCoffeeCup, GiIceCube, GiOrangeSlice, GiWineGlass } from 'react-icons/gi';

// Dietary / tag icons
import { PiLeaf, PiFlowerLotus, PiGrainsSlash, PiPepperFill } from 'react-icons/pi';

// UI icons
import { FiSearch, FiX, FiStar, FiTrendingUp, FiAward } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { TbChefHat } from 'react-icons/tb';
import { RiFireFill } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { MdOutlineRestaurantMenu, MdOutlineEmojiFoodBeverage } from 'react-icons/md';

// ── Category metadata ────────────────────────────────────────────────────────
const CATEGORY_META = {
  'Starters':       { Icon: GiGarlic,       label: 'Starters' },
  'Salads':         { Icon: GiFruitBowl,    label: 'Salads' },
  'Soups':          { Icon: GiHotMeal,       label: 'Soups' },
  'Burgers':        { Icon: GiHamburger,     label: 'Burgers' },
  'Pizza':          { Icon: GiFullPizza,     label: 'Pizza' },
  'Pasta':          { Icon: GiNoodles,       label: 'Pasta' },
  'Main Courses':   { Icon: GiSteak,         label: 'Main Courses' },
  'Seafood':        { Icon: GiShrimp,        label: 'Seafood' },
  'Grilled Dishes': { Icon: GiBarbecue,      label: 'Grilled' },
  'Sandwiches':     { Icon: GiSandwich,      label: 'Sandwiches' },
  'Desserts':       { Icon: GiCupcake,       label: 'Desserts' },
  'Hot Drinks':     { Icon: GiCoffeeCup,     label: 'Hot Drinks' },
  'Cold Drinks':    { Icon: GiIceCube,       label: 'Cold Drinks' },
  'Fresh Juices':   { Icon: GiOrangeSlice,   label: 'Juices' },
  'Mocktails':      { Icon: GiWineGlass,     label: 'Mocktails' },
};

const CATEGORIES = Object.keys(CATEGORY_META);

// ── Dietary tag config ───────────────────────────────────────────────────────
const TAG_STYLES = {
  'Vegetarian': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', Icon: PiLeaf },
  'Vegan':      { bg: 'bg-green-500/10',   border: 'border-green-500/30',   text: 'text-green-400',   Icon: PiFlowerLotus },
  'Gluten Free':{ bg: 'bg-amber-500/10',   border: 'border-amber-500/30',   text: 'text-amber-400',   Icon: PiGrainsSlash },
  'Spicy':      { bg: 'bg-red-500/10',     border: 'border-red-500/30',     text: 'text-red-400',     Icon: PiPepperFill },
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';

// ── Dietary badge ────────────────────────────────────────────────────────────
function DietaryBadge({ tag }) {
  const style = TAG_STYLES[tag];
  if (!style) return (
    <span className="px-2 py-0.5 rounded-full text-[9px] tracking-wider font-semibold border border-cream/20 text-cream/60 bg-cream/5">
      {tag}
    </span>
  );
  const { Icon } = style;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] tracking-wider font-semibold border ${style.bg} ${style.border} ${style.text}`}>
      <Icon className="text-[10px] shrink-0" />
      {tag}
    </span>
  );
}

// ── Chef Signature card ──────────────────────────────────────────────────────
function SignatureCard({ dish }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="signature-card group relative overflow-hidden rounded-3xl border border-gold-500/25 flex flex-row sm:flex-col h-full p-4 sm:p-0 gap-4 sm:gap-0">
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
      />

      {/* Image panel */}
      <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-full sm:h-64 overflow-hidden bg-black/45 rounded-2xl sm:rounded-none flex items-center justify-center p-2 sm:p-6 shrink-0 border border-gold-500/10 sm:border-none">
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-32 h-2 sm:h-6 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.65) 0%, transparent 70%)' }}
        />
        <img
          src={imgError ? FALLBACK_IMG : dish.image}
          alt={dish.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="relative z-10 max-h-20 sm:max-h-48 max-w-[90%] sm:max-w-[85%] w-full object-contain group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:scale-108 transition-all duration-700 ease-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] sm:drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none hidden sm:block" />
      </div>

      {/* Content panel */}
      <div className="flex-grow flex flex-col justify-between min-w-0 sm:p-6 sm:md:p-7 space-y-2 sm:space-y-4">
        <div className="space-y-1.5 sm:space-y-3">
          {/* Badges row */}
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="chef-badge text-[8px] sm:text-[9px] px-1.5 py-0.5 sm:px-2 sm:py-1">
              <TbChefHat className="text-[10px] sm:text-[11px]" />
              Chef's Signature
            </span>
            {dish.popular && (
              <span className="popular-badge text-[8px] sm:text-[9px] px-1.5 py-0.5 sm:px-2 sm:py-1">
                <RiFireFill className="text-[9px] sm:text-[10px]" />
                Popular
              </span>
            )}
          </div>

          {/* Name & price */}
          <div className="flex justify-between items-baseline gap-2">
            <h4 className="font-cinzel text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-cream group-hover:text-gold-500 transition-colors duration-400 leading-snug truncate sm:normal-case">
              {dish.name}
            </h4>
            <span className="price-badge text-[10px] sm:text-xs shrink-0 py-0.5 px-2 sm:py-1 sm:px-3">{dish.price}</span>
          </div>

          <p className="font-inter text-cream/65 text-[10px] xs:text-xs sm:text-sm leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
            {dish.description}
          </p>
        </div>

        {dish.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1.5 sm:pt-3 border-t border-gold-500/5 sm:border-gold-500/10">
            {dish.tags.map(tag => <DietaryBadge key={tag} tag={tag} />)}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Regular menu item card ────────────────────────────────────────────────────
function MenuCard({ item }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="menu-item-card group relative rounded-2xl overflow-hidden flex flex-row sm:flex-col border border-gold-500/10 hover:border-gold-500/35 transition-all duration-500 h-full p-4 sm:p-0 gap-4 sm:gap-0">

      {/* Image zone */}
      <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-full sm:h-52 overflow-hidden bg-black/40 rounded-2xl sm:rounded-none flex items-center justify-center p-2 sm:p-5 shrink-0 border border-gold-500/10 sm:border-none">
        
        {/* Badge cluster - desktop only */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 hidden sm:flex">
          {item.chefRecommended && (
            <span className="chef-badge">
              <TbChefHat className="text-[11px]" />
              Chef's Choice
            </span>
          )}
          {item.popular && (
            <span className="popular-badge">
              <RiFireFill className="text-[10px]" />
              Popular
            </span>
          )}
        </div>

        {/* Plate glow */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 w-16 sm:w-28 h-2 sm:h-4 rounded-full blur-lg pointer-events-none transition-all duration-500 group-hover:scale-125 opacity-40 group-hover:opacity-70"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.6) 0%, transparent 70%)' }}
        />

        <img
          src={imgError ? FALLBACK_IMG : item.image}
          alt={item.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="relative z-10 max-h-20 sm:max-h-40 max-w-[90%] sm:max-w-[85%] w-full object-contain group-hover:-translate-y-1 sm:group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 ease-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] sm:drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)]"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none bg-gradient-to-t from-[#0a0a0a]/60 to-transparent hidden sm:block" />
      </div>

      {/* Info zone */}
      <div className="flex flex-col flex-grow justify-between min-w-0 sm:p-5 space-y-2 sm:space-y-3">
        <div className="space-y-1.5 sm:space-y-2">
          {/* Mobile badges row */}
          <div className="flex flex-wrap gap-1 items-center sm:hidden">
            {item.chefRecommended && (
              <span className="chef-badge text-[8px] px-1.5 py-0.5">
                <TbChefHat className="text-[9px]" /> Chef
              </span>
            )}
            {item.popular && (
              <span className="popular-badge text-[8px] px-1.5 py-0.5">
                <RiFireFill className="text-[8px]" /> Popular
              </span>
            )}
          </div>

          <div className="flex justify-between items-baseline gap-2">
            <h3 className="font-cinzel text-xs xs:text-sm sm:text-base font-semibold text-cream group-hover:text-gold-500 transition-colors duration-300 leading-snug truncate sm:normal-case">
              {item.name}
            </h3>
            <span className="price-badge text-[10px] sm:text-xs shrink-0 py-0.5 px-2 sm:py-1 sm:px-3">{item.price}</span>
          </div>

          <p className="font-inter text-cream/60 text-[10px] xs:text-xs leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
            {item.description}
          </p>
        </div>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1.5 border-t border-gold-500/5 sm:border-none">
            {item.tags.map(tag => <DietaryBadge key={tag} tag={tag} />)}
          </div>
        )}

        <div className="pt-4 mt-auto border-t border-gold-500/10 flex items-center justify-between hidden sm:flex">
          <span className="font-inter text-[0.6rem] tracking-[0.25em] text-cream/35 uppercase">Aurèle</span>
          <div className="flex items-center gap-1">
            <BsDot className="text-gold-500/40 text-base -mx-1" />
            <BsDot className="text-gold-500/40 text-base -mx-1" />
            <BsDot className="text-gold-500/40 text-base -mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Menu ────────────────────────────────────────────────────────────────
export default function Menu() {
    const containerRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('Starters');
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const searchRef = useRef(null);
  const tabsRef = useRef(null);

  // Load data
  useEffect(() => {
    setLoading(true);
    fetch('/api/menu.json')
      .then(r => { if (!r.ok) throw new Error('Failed to load menu'); return r.json(); })
      .then(data => { setMenuItems(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  // Derived
  const signatureItems = menuItems.filter(i => i.chefRecommended).slice(0, 0);
  const filteredItems = menuItems.filter(item => {
    const matchCat = item.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });
  const countByCategory = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = menuItems.filter(i => i.category === cat).length;
    return acc;
  }, {});

  // Category switch with fade transition
  const switchCategory = useCallback((cat) => {
    if (cat === activeCategory) return;
    setIsTransitioning(true);
    setSearchQuery('');
    setTimeout(() => { setActiveCategory(cat); setIsTransitioning(false); }, 220);
  }, [activeCategory]);

  // Scroll active tab into view horizontally without scrolling the main window vertically
  useEffect(() => {
    if (tabsRef.current) {
      const btn = tabsRef.current.querySelector('.category-pill.active');
      if (btn) {
        const container = tabsRef.current;
        const containerWidth = container.clientWidth;
        const btnOffset = btn.offsetLeft;
        const btnWidth = btn.clientWidth;
        container.scrollTo({
          left: btnOffset - (containerWidth / 2) + (btnWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeCategory]);

  // Ctrl+K → focus search
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); searchRef.current?.focus(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <section id="menu" ref={containerRef} className="relative py-16 md:py-24 px-4 sm:px-8 md:px-12 z-10 overflow-hidden">

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute top-1/3 -left-24 w-64 h-64 bg-gold-500/4 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 -right-24 w-64 h-64 bg-gold-500/4 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12">

        {/* ═══ HEADER ══════════════════════════════════════════════════════ */}
        <div className="text-center scroll-reveal transition-all duration-700 space-y-4">
          <span className="inline-flex items-center gap-2 font-cinzel text-[0.65rem] tracking-[0.45em] text-gold-500/80 uppercase">
            <HiOutlineSparkles className="text-xs" />
            Fine Dining Selection
            <HiOutlineSparkles className="text-xs" />
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-6xl font-semibold tracking-wide text-cream leading-tight">
            The&nbsp;<span className="gold-text">Aurèle</span>&nbsp;Menu
          </h2>
          <p className="font-inter text-cream/50 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed">
            Each plate is a canvas, each ingredient a brushstroke — explore fifteen curated journeys of flavour.
          </p>
          <div className="gold-line mt-6" />
        </div>

        {/* ═══ CHEF'S SIGNATURE ════════════════════════════════════════════ */}
        {!loading && !error && signatureItems.length > 0 && (
          <div className="space-y-10 scroll-reveal transition-all duration-1000">
            <div className="flex items-center gap-4">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gold-500/30" />
              <div className="text-center px-4">
                <div className="inline-flex items-center gap-2 font-cinzel text-xs tracking-[0.35em] text-gold-500/70 uppercase mb-1">
                  <FiAward className="text-sm" />
                  Handcrafted Excellence
                  <FiAward className="text-sm" />
                </div>
                <h3 className="font-cinzel text-xl md:text-2xl tracking-[0.1em] text-cream font-semibold">
                  Chef's Signature Creations
                </h3>
              </div>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gold-500/30" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {signatureItems.map(dish => (
                <SignatureCard key={dish.name} dish={dish} />
              ))}
            </div>
          </div>
        )}

        {/* ═══ CONTROLS ════════════════════════════════════════════════════ */}
        <div className="space-y-6">

          {/* Category tabs */}
          <div ref={tabsRef} className="flex overflow-x-auto gap-2 pb-2 scrollbar-none" aria-label="Menu categories">
            {CATEGORIES.map(cat => {
              const { Icon, label } = CATEGORY_META[cat];
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => switchCategory(cat)}
                  aria-pressed={isActive}
                  className={`category-pill flex items-center gap-2 shrink-0 ${isActive ? 'active' : ''}`}
                >
                  <Icon className="text-base shrink-0" />
                  <span>{label}</span>
                  {countByCategory[cat] > 0 && (
                    <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-black/70' : 'bg-gold-500/10 text-gold-500/70'}`}>
                      {countByCategory[cat]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search + results row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-gold-500/10 pb-6">

            {/* Results count */}
            <div className="flex items-center gap-2">
              <MdOutlineRestaurantMenu className="text-gold-500/60 text-sm shrink-0" />
              <p className="font-inter text-cream/45 text-xs">
                {loading ? 'Loading menu…' : (
                  <>
                    <span className="text-gold-500 font-semibold">{filteredItems.length}</span>
                    {' '}item{filteredItems.length !== 1 ? 's' : ''} in{' '}
                    <span className="text-cream/70">{activeCategory}</span>
                    {searchQuery && (
                      <> matching "<span className="text-cream/70 italic">{searchQuery}</span>"</>
                    )}
                  </>
                )}
              </p>
            </div>

            {/* Search input */}
            <div className="relative w-full sm:w-80 shrink-0">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cream/35 text-sm pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search culinary items…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="input-glass w-full pl-10 pr-10 py-2.5 rounded-full text-xs font-inter"
                aria-label="Search menu items"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cream/40 hover:text-gold-500 transition-colors duration-200 flex items-center justify-center"
                  aria-label="Clear search"
                >
                  <FiX className="text-sm" />
                </button>
              )}
            </div>
          </div>

          {/* ═══ GRID / STATES ═══════════════════════════════════════════ */}
          <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>

            {loading ? (
              /* Shimmer skeleton */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <div key={n} className="glass-card rounded-2xl overflow-hidden animate-pulse border border-gold-500/10 h-[380px] flex flex-col">
                    <div className="h-52 bg-cream/5 shrink-0" />
                    <div className="flex-grow p-5 space-y-3">
                      <div className="flex justify-between">
                        <div className="h-4 bg-cream/8 rounded w-2/3" />
                        <div className="h-4 bg-gold-500/10 rounded w-1/5" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2.5 bg-cream/5 rounded w-full" />
                        <div className="h-2.5 bg-cream/5 rounded w-4/5" />
                        <div className="h-2.5 bg-cream/5 rounded w-3/5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            ) : error ? (
              /* Error state */
              <div className="text-center py-20 glass max-w-md mx-auto rounded-2xl border border-red-500/20 space-y-3">
                <MdOutlineEmojiFoodBeverage className="text-3xl text-red-400 mx-auto" />
                <h3 className="font-cinzel text-cream text-base font-medium">Menu Unavailable</h3>
                <p className="font-inter text-cream/45 text-xs leading-relaxed px-6">{error}</p>
              </div>

            ) : filteredItems.length === 0 ? (
              /* Empty state */
              <div className="text-center py-20 glass max-w-md mx-auto rounded-2xl border border-gold-500/10 space-y-3">
                <MdOutlineRestaurantMenu className="text-3xl text-gold-500/50 mx-auto" />
                <h3 className="font-cinzel text-cream text-base tracking-wider">No Dishes Found</h3>
                <p className="font-inter text-cream/45 text-xs leading-relaxed px-6">
                  No items match
                  {searchQuery && <em> "{searchQuery}"</em>} in <strong className="text-cream/70">{activeCategory}</strong>.
                </p>
                <button onClick={() => setSearchQuery('')} className="btn-outline-gold text-[0.65rem] px-5 py-2 rounded-full">
                  Clear Search
                </button>
              </div>

            ) : (
              /* Item grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                {filteredItems.map(item => (
                  <MenuCard key={`${item.name}-${activeCategory}`} item={item} />
                ))}
              </div>
            )}

          </div>
        </div>

        {/* ═══ DIETARY LEGEND ══════════════════════════════════════════════ */}
        {!loading && !error && (
          <div className="scroll-reveal transition-all duration-700 glass rounded-2xl border border-gold-500/10 p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
              <span className="inline-flex items-center gap-2 font-cinzel text-[0.6rem] tracking-[0.3em] text-cream/40 uppercase shrink-0">
                <FiStar className="text-xs text-gold-500/40" />
                Dietary Key
              </span>
              <div className="w-px h-4 bg-gold-500/15 hidden sm:block" />
              {Object.entries(TAG_STYLES).map(([tag, style]) => {
                const { Icon } = style;
                return (
                  <div key={tag} className="flex items-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.6rem] font-semibold tracking-wider border ${style.bg} ${style.border} ${style.text}`}>
                      <Icon className="text-[11px]" />
                      {tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
