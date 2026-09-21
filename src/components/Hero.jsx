import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Hero({ onOpenQuoteModal, onOpenBrochureModal }) {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Tagline & Surulere Lagos Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-gold-500/20 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 text-gold-300 border border-gold-500/40 text-[10px] uppercase tracking-ultra font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            <span>Branding & Corporate Identity — Premium Corporate Gifts</span>
          </div>
          <span className="text-[11px] uppercase tracking-ultra text-navy-900 font-mono font-semibold">
            57, Bode Thomas St, Surulere, Lagos
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

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="btn-navy-gold px-8 py-4 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-2 shadow-lg"
            >
              <span>Commission an Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </button>

            <button
              onClick={onOpenBrochureModal}
              className="btn-gold-outline px-7 py-4 rounded-full text-xs uppercase tracking-ultra font-medium flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-gold-600" />
              <span>Download Brochure</span>
            </button>

            <a
              href="#featured-suites"
              className="px-6 py-4 rounded-full text-xs uppercase tracking-ultra font-medium text-neutral-600 hover:text-navy-900 flex items-center gap-1.5"
            >
              <span>View Collections</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Product Photography Spread from Client's Asset Library */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
          
          {/* Main Real Product Visual Frame */}
          <div className="md:col-span-8 group p-2 card-gold rounded-sm">
            <div className="overflow-hidden bg-paper-200 relative aspect-[16/10] border border-gold-500/20">
              <img
                src={companyInfo.hero.image1}
                alt="Executive Black Tech & Leather Corporate Gift Suite"
                className="w-full h-full object-cover img-editorial"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs px-4 py-3 bg-navy-950/85 border border-gold-500/30 backdrop-blur-sm">
                <span className="font-serif italic text-sm text-gold-200">The Executive VIP Hamper</span>
                <span className="uppercase tracking-ultra text-[10px] font-mono text-gold-400">Debossed Leather & Tech</span>
              </div>
            </div>
          </div>

          {/* Secondary Real Product Visual Frame */}
          <div className="md:col-span-4 group p-2 card-gold rounded-sm">
            <div className="overflow-hidden bg-paper-200 relative aspect-[4/5] md:aspect-auto h-full border border-gold-500/20">
              <img
                src={companyInfo.hero.image2}
                alt="Bamboo & Natural Wood Executive Gift Suite"
                className="w-full h-full object-cover img-editorial"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs px-4 py-3 bg-navy-950/85 border border-gold-500/30 backdrop-blur-sm">
                <span className="font-serif italic text-sm text-gold-200">Eco-Luxe Collection</span>
                <span className="uppercase tracking-ultra text-[10px] font-mono text-gold-400">Natural Bamboo</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
