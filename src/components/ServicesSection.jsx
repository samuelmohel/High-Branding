import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-28 sm:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-gold-500/20 mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <span className="w-2 h-0.5 bg-gold-500"></span>
              <span>Capabilities & Offerings</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-navy-900 tracking-tight">
              What We Do
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            Delivering work that reflects excellence, creativity, and consistency across both conceptual identity and tangible physical objects.
          </p>
        </div>

        {/* 4 Core Offerings Wrapped in Luxury Gold/Navy Framed Cards */}
        <div className="space-y-16">
          {companyInfo.services.map((svc, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={svc.id}
                className="card-gold p-6 sm:p-10 rounded-sm border border-gold-500/30 hover:border-gold-500 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Image Column with Gold Matting Frame */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="group overflow-hidden rounded-sm bg-neutral-100 aspect-[4/3] relative border border-gold-500/20 p-1 bg-white">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover img-editorial"
                      />
                      <div className="absolute top-4 left-4 bg-navy-900/90 border border-gold-500/40 text-gold-300 backdrop-blur-sm px-3.5 py-1.5 text-[10px] uppercase font-mono tracking-ultra shadow-sm">
                        Pillar {svc.number}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                    <div>
                      <span className="text-xs uppercase tracking-ultra text-gold-600 font-semibold block mb-2">
                        {svc.subtitle}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-serif text-navy-900 leading-snug">
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase tracking-ultra text-navy-900 font-mono font-semibold block mb-3">
                        Key Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start text-xs sm:text-sm text-neutral-800 font-light gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-gold-700" />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => onSelectService(svc.title)}
                        className="btn-navy-gold px-6 py-3 rounded-full text-xs uppercase tracking-ultra font-medium inline-flex items-center gap-2 shadow-sm"
                      >
                        <span>Inquire For This Capability</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
