import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Eye, SlidersHorizontal, Check } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ProductCarousel({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedZoomItem, setSelectedZoomItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const trackRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const categories = companyInfo.carouselCategories || [
    { id: 'all', label: 'All Gift Options (22)' },
    { id: 'vip', label: 'VIP & C-Suite Hampers' },
    { id: 'onboarding', label: 'Onboarding & Swag Kits' },
    { id: 'drinkware', label: 'Smart Drinkware & Tech' },
    { id: 'lifestyle', label: 'Executive Lifestyle & Eco' }
  ];

  const filteredItems = activeCategory === 'all'
    ? companyInfo.carouselItems
    : companyInfo.carouselItems.filter((item) => item.filterGroup === activeCategory);

  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(100);
    }
  };

  useEffect(() => {
    updateScrollState();
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [filteredItems]);

  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const cardWidth = 360; // approximate card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Drag-to-scroll mouse handlers
  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.6; // Scroll-fast multiplier
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
    updateScrollState();
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="py-24 sm:py-32 bg-paper-100 border-t border-gold-500/20 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-8 border-b border-gold-500/20 mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Interactive Corporate Gift Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-navy-900 tracking-tight">
              Featured Gift Suites
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-2 max-w-xl">
              Explore our full collection of 22+ curated executive hampers, onboarding kits, and smart drinkware. Easily drag or use arrows to browse.
            </p>
          </div>

          {/* Navigation Controls & Progress Count */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-xs font-mono text-neutral-500 bg-white px-3.5 py-2 rounded-full border border-gold-500/30 shadow-sm">
              <span className="font-bold text-navy-900">{filteredItems.length}</span> Curated Options
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all shadow-sm ${
                  canScrollLeft
                    ? 'border-gold-500/50 bg-white hover:bg-navy-900 hover:text-gold-300 text-navy-900 cursor-pointer active:scale-95'
                    : 'border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed opacity-50'
                }`}
                aria-label="Previous items"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all shadow-sm ${
                  canScrollRight
                    ? 'border-gold-500/50 bg-white hover:bg-navy-900 hover:text-gold-300 text-navy-900 cursor-pointer active:scale-95'
                    : 'border-neutral-200 bg-neutral-100 text-neutral-400 cursor-not-allowed opacity-50'
                }`}
                aria-label="Next items"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-neutral-400 text-xs flex items-center gap-1 mr-1 flex-shrink-0 font-mono">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Filter:</span>
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (trackRef.current) {
                    trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? 'bg-navy-900 text-gold-300 border border-gold-500/80 shadow-md scale-105'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-gold-500/40 hover:text-navy-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Multi-Card Horizontal Scrollable Track */}
        <div className="relative group">
          {/* Edge Fade Masks for Smooth Editorial Polish */}
          <div className="hidden lg:block absolute -left-2 top-0 bottom-6 w-12 bg-gradient-to-r from-paper-100 to-transparent pointer-events-none z-10" />
          <div className="hidden lg:block absolute -right-2 top-0 bottom-6 w-12 bg-gradient-to-l from-paper-100 to-transparent pointer-events-none z-10" />

          <div
            ref={trackRef}
            onScroll={updateScrollState}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="carousel-track flex space-x-6 overflow-x-auto scroll-smooth pb-8 cursor-grab active:cursor-grabbing px-1"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="card-gold w-[310px] sm:w-[350px] lg:w-[380px] flex-shrink-0 rounded-sm border border-gold-500/30 hover:border-gold-500 flex flex-col justify-between p-5 bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Top Image Container */}
                <div>
                  <div
                    onClick={() => setSelectedZoomItem(item)}
                    className="group/img relative rounded-sm overflow-hidden bg-neutral-100 aspect-[4/3] border border-gold-500/20 mb-4 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover img-editorial pointer-events-none"
                    />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-3 left-3 bg-navy-900/90 text-gold-300 border border-gold-500/40 px-2.5 py-1 text-[9px] uppercase font-mono tracking-ultra backdrop-blur-sm shadow-sm">
                      {item.tag}
                    </div>

                    {/* Quick Expand Button */}
                    <div className="absolute bottom-3 right-3 bg-navy-900/80 hover:bg-navy-900 text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-sm">
                      <Eye className="w-3 h-3 text-gold-400" />
                      <span>Expand</span>
                    </div>
                  </div>

                  {/* Card Category & Title */}
                  <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-semibold block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-navy-900 leading-snug line-clamp-2 min-h-[3.2rem]">
                    {item.title}
                  </h3>

                  <div className="w-12 h-0.5 bg-gold-500/40 my-3"></div>

                  {/* Description Aligned to Actual Photo */}
                  <p className="text-neutral-600 font-light text-xs leading-relaxed line-clamp-4 min-h-[4.5rem]">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedZoomItem(item)}
                    className="text-neutral-500 hover:text-navy-900 text-xs flex items-center gap-1 font-light transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-600" />
                    <span>View photo</span>
                  </button>

                  <button
                    onClick={() => onSelectProduct(item.title)}
                    className="btn-navy-gold px-4 py-2 rounded-full text-[11px] uppercase tracking-ultra font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Progress Bar & Instruction Hint */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>Tip: Click and drag horizontally, or use keyboard arrow keys</span>
            </div>

            {/* Visual Gold Progress Bar */}
            <div className="w-48 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold-500 transition-all duration-150 rounded-full"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              ></div>
            </div>
          </div>
        </div>

      </div>

      {/* High-Resolution Photo Zoom Modal */}
      {selectedZoomItem && (
        <div
          onClick={() => setSelectedZoomItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/85 backdrop-blur-md cursor-pointer animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-white rounded-sm border-2 border-gold-500/50 shadow-2xl overflow-hidden cursor-default"
          >
            <div className="relative bg-neutral-900">
              <img
                src={selectedZoomItem.image}
                alt={selectedZoomItem.title}
                className="w-full max-h-[65vh] object-contain mx-auto"
              />
              <div className="absolute top-4 left-4 bg-navy-900/90 text-gold-300 border border-gold-500/40 px-3 py-1 text-xs uppercase font-mono tracking-ultra">
                {selectedZoomItem.tag}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-ultra text-gold-600 font-mono font-semibold block mb-1">
                    {selectedZoomItem.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-navy-900">
                    {selectedZoomItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedZoomItem(null)}
                  className="w-8 h-8 rounded-full border border-neutral-300 hover:border-navy-900 text-neutral-500 hover:text-navy-900 flex items-center justify-center transition-colors flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <p className="text-neutral-700 font-light text-sm leading-relaxed">
                {selectedZoomItem.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100">
                <div className="text-xs text-neutral-500 font-mono">
                  Customization: Precision Laser Engraving • Blind Debossing • Packaging Tiers
                </div>
                <button
                  onClick={() => {
                    const title = selectedZoomItem.title;
                    setSelectedZoomItem(null);
                    onSelectProduct(title);
                  }}
                  className="btn-navy-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-2 shadow-md"
                >
                  <span>Inquire About This Set</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
