import React from 'react';
import { companyInfo } from '../data/companyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-paper-100 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-gold-500/20 mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <span className="w-2 h-0.5 bg-gold-500"></span>
              <span>About The Firm</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-navy-900 tracking-tight">
              Our Vision & Philosophy
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm font-light">
            High Branding Innovations Ltd | Lagos, Nigeria
          </p>
        </div>

        {/* Narrative & Vision Spread with Framed Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-6 card-gold p-8 sm:p-10 rounded-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-bold block">
                The Core Mandate
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-navy-900 leading-snug">
                "To become Africa's leading brand innovation house — the first name businesses think of when they want their identity designed, and the impression they leave, remembered."
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                {companyInfo.about.lead} {companyInfo.about.statement}
              </p>
              <p className="text-neutral-600 font-light leading-relaxed text-sm sm:text-base">
                Whether a startup building its first identity or an established company refreshing its image
                and rewarding its people and partners, we deliver work that reflects excellence, creativity,
                and consistency at every touchpoint.
              </p>
            </div>

            <div className="pt-4 border-t border-gold-500/20 flex items-center justify-between text-xs text-navy-900 font-mono uppercase tracking-ultra">
              <span className="text-gold-600">Single Trusted Partner</span>
              <span>Lagos • Pan-Africa</span>
            </div>
          </div>

          {/* Right Mission Card in Deep Navy with Gold Accents */}
          <div className="lg:col-span-6 card-navy-accent p-8 sm:p-10 rounded-sm flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gold-500/30 pb-4">
                <span className="text-[10px] uppercase tracking-ultra text-gold-400 font-mono font-bold">
                  Corporate Mission
                </span>
                <span className="text-gold-400 font-serif italic text-lg">HB Innovations</span>
              </div>

              <div className="text-4xl sm:text-5xl font-serif text-gold-400 leading-none">“</div>
              <p className="text-xl sm:text-2xl font-serif text-white leading-relaxed italic -mt-4">
                {companyInfo.about.mission}
              </p>
            </div>

            <div className="pt-8 border-t border-gold-500/30 flex items-center justify-between text-xs text-gold-300 font-mono uppercase tracking-ultra">
              <span>Brand Identity Design</span>
              <span>Premium Corporate Gifts</span>
            </div>
          </div>

        </div>

        {/* Core Values 5 Cards with Gold Border Highlights */}
        <div>
          <div className="pb-4 border-b border-gold-500/20 mb-8 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-ultra text-gold-600 font-medium">
              Guiding Principles — Page 3 Corporate Profile
            </span>
            <span className="text-xs text-neutral-400 font-mono">5 Core Values</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyInfo.values.map((val) => (
              <div
                key={val.id}
                className="card-gold p-6 rounded-sm border-t-2 border-t-gold-500 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-navy-900 text-gold-400 font-mono text-xs flex items-center justify-center font-bold border border-gold-500/40">
                      {val.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:scale-150 transition-transform"></span>
                  </div>

                  <h4 className="font-serif text-xl text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {val.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 text-[10px] uppercase tracking-ultra text-neutral-400 font-mono">
                  Guaranteed
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
