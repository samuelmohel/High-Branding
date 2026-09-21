import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function PortfolioLookbook({ onOpenQuoteModal }) {
  return (
    <section id="lookbook" className="py-28 sm:py-36 bg-paper-100 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-gold-500/20 mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <span className="w-2 h-0.5 bg-gold-500"></span>
              <span>Visual Archives</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-navy-900 tracking-tight">
              Curated Lookbook
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm font-light">
            A visual selection of brand guideline books, debossed leatherware, and bespoke executive packaging.
          </p>
        </div>

        {/* High-Resolution Magazine Grid in Framed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.portfolio.map((item, idx) => (
            <div
              key={idx}
              className="card-gold p-4 rounded-sm border border-gold-500/25 hover:border-gold-500 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden rounded-sm bg-neutral-200 aspect-[4/3] relative mb-4 border border-gold-500/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-editorial"
                  />
                  <div className="absolute inset-0 bg-navy-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-navy-900 text-gold-300 border border-gold-500/50 px-4 py-2 text-xs uppercase tracking-ultra font-medium shadow-lg">
                      View Project
                    </span>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl text-navy-900 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="pt-3 mt-3 border-t border-neutral-100">
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lookbook Bottom CTA in Deep Navy with Gold Border */}
        <div className="mt-20 card-navy-accent p-8 sm:p-12 rounded-sm border border-gold-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <span className="text-[10px] uppercase tracking-ultra text-gold-400 font-mono font-bold block mb-1">
              Bespoke Corporate Procurement
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-white">
              Have a tailored brief for an upcoming launch or executive gifting?
            </h4>
            <p className="text-xs text-slate-300 font-light mt-1">
              Our directors in Lagos coordinate identity and physical procurement under one single roof.
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="btn-navy-gold bg-gold-500 text-navy-950 border-gold-400 hover:bg-gold-400 px-8 py-3.5 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-2 flex-shrink-0 shadow-lg"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
