import React from 'react';
import { companyInfo } from '../data/companyData';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-28 sm:py-36 bg-white border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-gold-500/20 mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <span className="w-2 h-0.5 bg-gold-500"></span>
              <span>Corporate Differentiators</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-navy-900 tracking-tight">
              Why Choose Us
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm font-light">
            Directly from Page 4 of the High Branding Innovations Ltd official corporate profile.
          </p>
        </div>

        {/* 4 Minimal Editorial Pillars in Gold-Framed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companyInfo.whyChooseUs.map((item) => (
            <div
              key={item.num}
              className="card-gold p-7 rounded-sm border-t-2 border-t-gold-500 border border-gold-500/25 hover:border-gold-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 text-gold-400 font-mono text-xs flex items-center justify-center font-bold border border-gold-500/40">
                    {item.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform"></span>
                </div>

                <h3 className="font-serif text-2xl text-navy-900 mb-3 leading-snug group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-100 text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-medium">
                Standard Guarantee
              </div>
            </div>
          ))}
        </div>

        {/* Majestic Navy Statement Box with Gold Foil Effect */}
        <div className="card-navy-accent p-12 sm:p-16 rounded-sm border border-gold-500/40 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-xs uppercase tracking-ultra text-gold-400 font-mono mb-4 block font-bold">
            The Brand Promise
          </div>

          <p className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-gold-200 tracking-tight leading-snug">
            "{companyInfo.tagline}"
          </p>

          <div className="w-16 h-0.5 bg-gold-500/60 mx-auto my-6"></div>

          <span className="text-xs uppercase tracking-ultra text-slate-300 block font-mono">
            High Branding Innovations Ltd • Lagos, Nigeria
          </span>
        </div>

      </div>
    </section>
  );
}
