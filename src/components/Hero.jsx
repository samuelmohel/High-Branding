import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Tagline & Editorial Pill with Navy & Gold */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gold-500/20 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 text-gold-300 border border-gold-500/40 text-[10px] uppercase tracking-ultra font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            <span>Branding & Corporate Identity — Premium Corporate Gifts</span>
          </div>
          <span className="text-[11px] uppercase tracking-ultra text-navy-900 font-mono font-semibold">
            Lagos, Nigeria
          </span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl mb-14">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-navy-900 tracking-tight leading-[1.02] font-normal">
            Where Identity <br className="hidden sm:inline" />
            <span className="italic font-light text-gold-600">Meets Impression.</span>
          </h1>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-gold-500 to-transparent my-6"></div>

          <p className="mt-4 text-lg sm:text-xl text-neutral-600 font-light max-w-2xl leading-relaxed">
            We combine strategic brand identity design with the sourcing, customization,
            and supply of premium corporate gifts — giving businesses a single trusted
            partner for both how their brand looks and how it is felt.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenQuoteModal}
              className="btn-navy-gold px-8 py-4 rounded-full text-xs uppercase tracking-ultra font-medium flex items-center gap-2 shadow-lg"
            >
              <span>Commission an Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </button>
            <a
              href="#services"
              className="btn-gold-outline px-8 py-4 rounded-full text-xs uppercase tracking-ultra font-medium flex items-center gap-2"
            >
              <span>Explore Capabilities</span>
              <ArrowDown className="w-3.5 h-3.5 text-gold-600" />
            </a>
          </div>
        </div>

        {/* High-Resolution Editorial Photography Spread with Gold Card Framing */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
          
          {/* Main Visual Frame */}
          <div className="md:col-span-8 group p-2 card-gold rounded-sm">
            <div className="overflow-hidden bg-paper-200 relative aspect-[16/10] border border-gold-500/20">
              <img
                src={companyInfo.hero.image1}
                alt="Bespoke luxury brand stationery and debossed notebook"
                className="w-full h-full object-cover img-editorial"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs px-4 py-3 bg-navy-950/80 border border-gold-500/30 backdrop-blur-sm">
                <span className="font-serif italic text-sm text-gold-200">Series 01 — Tactile Identity</span>
                <span className="uppercase tracking-ultra text-[10px] font-mono text-gold-400">Debossed Italian Leather</span>
              </div>
            </div>
          </div>

          {/* Secondary Visual Frame */}
          <div className="md:col-span-4 group p-2 card-gold rounded-sm">
            <div className="overflow-hidden bg-paper-200 relative aspect-[4/5] md:aspect-auto h-full border border-gold-500/20">
              <img
                src={companyInfo.hero.image2}
                alt="Bespoke luxury corporate gift packaging with ribbon"
                className="w-full h-full object-cover img-editorial"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs px-4 py-3 bg-navy-950/80 border border-gold-500/30 backdrop-blur-sm">
                <span className="font-serif italic text-sm text-gold-200">Series 02 — Executive Gifting</span>
                <span className="uppercase tracking-ultra text-[10px] font-mono text-gold-400">Curated Packaging</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
