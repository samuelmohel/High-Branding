import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ProductCarousel({ onSelectProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedZoomImage, setSelectedZoomImage] = useState(null);

  const items = companyInfo.carouselItems;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-paper-100 border-t border-gold-500/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-gold-500/20 mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Signature Collections</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-navy-900 tracking-tight">
              Featured Gift Suites
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-500 font-mono">
              0{currentIndex + 1} / 0{items.length}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gold-500/40 bg-white hover:bg-navy-900 hover:text-gold-300 text-navy-900 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gold-500/40 bg-white hover:bg-navy-900 hover:text-gold-300 text-navy-900 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Stage */}
        <div
          className="card-gold p-6 sm:p-10 rounded-sm border border-gold-500/40 shadow-xl relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Visual Photography Column with Click to Zoom */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setSelectedZoomImage(currentItem.image)}
                className="group cursor-zoom-in relative rounded-sm overflow-hidden bg-neutral-100 aspect-[4/3] border border-gold-500/30 p-1.5 bg-white shadow-md"
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover img-editorial"
                />
                <div className="absolute top-4 left-4 bg-navy-900/90 text-gold-300 border border-gold-500/40 px-3.5 py-1 text-[10px] uppercase font-mono tracking-ultra backdrop-blur-sm">
                  {currentItem.tag}
                </div>
                <div className="absolute bottom-4 right-4 bg-navy-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-ultra text-gold-600 font-semibold block mb-2">
                  {currentItem.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-navy-900 leading-snug">
                  {currentItem.title}
                </h3>
              </div>

              <div className="w-16 h-0.5 bg-gold-500/50"></div>

              <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
                {currentItem.description}
              </p>

              <div className="p-4 rounded-sm bg-paper-50 border border-gold-500/20 text-xs text-neutral-600 space-y-1 font-light">
                <div className="font-medium text-navy-900">Bespoke Customization Available:</div>
                <div>• Laser engraving & blind leather debossing</div>
                <div>• Custom ribbon, logo hot-stamping & wax seals</div>
                <div>• Flexible procurement volume (VIP batches or 500+ enterprise units)</div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onSelectProduct(currentItem.title)}
                  className="btn-navy-gold px-7 py-3.5 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-2 shadow-md"
                >
                  <span>Inquire About This Set</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Carousel Pagination Dots */}
          <div className="mt-8 pt-6 border-t border-gold-500/20 flex items-center justify-center space-x-2.5">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-navy-900 border border-gold-500'
                    : 'w-2 bg-neutral-300 hover:bg-gold-500/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Image Zoom Modal */}
      {selectedZoomImage && (
        <div
          onClick={() => setSelectedZoomImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md cursor-pointer animate-fadeIn"
        >
          <div className="max-w-4xl w-full p-2 bg-white rounded-sm border border-gold-500/50 shadow-2xl relative">
            <img
              src={selectedZoomImage}
              alt="High Branding Product Zoom"
              className="w-full max-h-[85vh] object-contain rounded-sm"
            />
            <div className="p-3 text-center text-xs text-neutral-500 font-light">
              High Branding Innovations Ltd — Lagos, Nigeria • Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
