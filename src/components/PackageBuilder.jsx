import React, { useState } from 'react';
import { Sliders, Check, ArrowRight, Sparkles, Send, RefreshCw, MessageSquareQuote, Shield } from 'lucide-react';

export default function PackageBuilder({ onCompleteConfig }) {
  const [selectedService, setSelectedService] = useState('bundled');
  const [selectedScale, setSelectedScale] = useState('executive');
  const [selectedFinishes, setSelectedFinishes] = useState(['gold-foil', 'leather-deboss']);
  const [urgency, setUrgency] = useState('standard');

  const services = [
    {
      id: 'identity',
      title: 'Brand Identity Design',
      desc: 'Logo, visual architecture & brand strategy guidelines'
    },
    {
      id: 'gifts',
      title: 'Curated Corporate Gifts',
      desc: 'Premium sourced executive merchandise & appreciation gifts'
    },
    {
      id: 'bundled',
      title: 'Bundled Brand + Launch Kit',
      desc: 'Complete identity system + custom physical onboarding boxes'
    },
    {
      id: 'event',
      title: 'Event & Exhibition Branding',
      desc: 'Summit materials, booth design & VIP delegate suites'
    }
  ];

  const scales = [
    { id: 'board', name: 'Board & C-Suite VIP', count: '15 – 50 Recipients', note: 'Highest echelon bespoke curation' },
    { id: 'executive', name: 'Executive & Departmental', count: '50 – 200 Recipients', note: 'Ideal for launches & conferences' },
    { id: 'enterprise', name: 'Enterprise Scale', count: '200 – 1,000+ Recipients', note: 'Company-wide & large activations' },
    { id: 'advisory', name: 'Advisory & Strategy Only', count: 'Consulting Scope', note: 'Digital guidelines & visual systems' }
  ];

  const finishes = [
    { id: 'gold-foil', label: 'Gold / Champagne Foil Stamping', tag: 'Luxury Accent' },
    { id: 'leather-deboss', label: 'Blind Leather Debossing', tag: 'Executive Feel' },
    { id: 'laser-metal', label: 'Laser-Engraved Anodized Metal', tag: 'Permanent Precision' },
    { id: 'rigid-box', label: 'Custom Rigid Magnetic Gift Box', tag: 'Unboxing Impact' },
    { id: 'eco-luxe', label: 'Sustainable Eco-Luxe Materials', tag: 'Modern Elegance' },
    { id: 'custom-ribbon', label: 'Bespoke Woven Brand Ribbon & Wax Seal', tag: 'Artisanal Touch' },
  ];

  const toggleFinish = (id) => {
    if (selectedFinishes.includes(id)) {
      setSelectedFinishes(selectedFinishes.filter(f => f !== id));
    } else {
      setSelectedFinishes([...selectedFinishes, id]);
    }
  };

  const getServiceName = () => services.find(s => s.id === selectedService)?.title;
  const getScaleName = () => scales.find(s => s.id === selectedScale)?.name;

  const handleSendToRFQ = () => {
    const configData = {
      service: getServiceName(),
      scale: getScaleName(),
      finishes: selectedFinishes.map(f => finishes.find(item => item.id === f)?.label),
      urgency: urgency === 'express' ? 'Accelerated Turnaround' : 'Standard Turnaround'
    };
    onCompleteConfig(configData);
  };

  return (
    <section id="builder" className="relative py-28 bg-navy-950/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-850 border border-gold-500/30 text-gold-400 text-xs tracking-widest uppercase font-medium mb-4">
            <Sliders className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Tailor Your Brand & <span className="text-gold-gradient font-serif italic">Gifting Suite</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Configure your exact organizational requirements in seconds. Get an instant scope summary
            and connect with our Lagos design and procurement directors.
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Configuration Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select Service */}
            <div className="luxury-card p-6 rounded-2xl border border-gold-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 text-xs flex items-center justify-center font-bold">1</span>
                  Select Primary Engagement
                </h3>
                <span className="text-xs text-gold-400/80 font-mono">Step 1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((svc) => (
                  <div
                    key={svc.id}
                    onClick={() => setSelectedService(svc.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      selectedService === svc.id
                        ? 'bg-navy-800 border-gold-400 shadow-md ring-1 ring-gold-400'
                        : 'bg-navy-900/60 border-slate-800 hover:border-gold-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="text-sm font-bold text-white font-display mb-1">{svc.title}</h4>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedService === svc.id ? 'bg-gold-500 border-gold-500' : 'border-slate-600'
                      }`}>
                        {selectedService === svc.id && <Check className="w-3 h-3 text-navy-950 font-bold" />}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Target Volume / Scale */}
            <div className="luxury-card p-6 rounded-2xl border border-gold-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 text-xs flex items-center justify-center font-bold">2</span>
                  Target Quantity & Scale
                </h3>
                <span className="text-xs text-gold-400/80 font-mono">Step 2 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scales.map((sc) => (
                  <div
                    key={sc.id}
                    onClick={() => setSelectedScale(sc.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      selectedScale === sc.id
                        ? 'bg-navy-800 border-gold-400 shadow-md ring-1 ring-gold-400'
                        : 'bg-navy-900/60 border-slate-800 hover:border-gold-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white font-display">{sc.name}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedScale === sc.id ? 'bg-gold-500 border-gold-500' : 'border-slate-600'
                      }`}>
                        {selectedScale === sc.id && <Check className="w-3 h-3 text-navy-950 font-bold" />}
                      </div>
                    </div>
                    <div className="text-xs text-gold-400 font-mono mt-1">{sc.count}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{sc.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Luxury Custom Finishes */}
            <div className="luxury-card p-6 rounded-2xl border border-gold-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 text-xs flex items-center justify-center font-bold">3</span>
                  Custom Luxury Finishes (Optional)
                </h3>
                <span className="text-xs text-gold-400/80 font-mono">Multi-select</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {finishes.map((f) => {
                  const isChecked = selectedFinishes.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFinish(f.id)}
                      className={`cursor-pointer p-3 rounded-lg border transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-gold-500/10 border-gold-400 text-white'
                          : 'bg-navy-900/40 border-slate-800 text-slate-300 hover:border-gold-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-gold-500 border-gold-500' : 'border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 text-navy-950 font-bold" />}
                        </div>
                        <span className="text-xs font-medium">{f.label}</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-gold-400/80 font-mono">
                        {f.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Live Package Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="luxury-card p-7 rounded-2xl border-2 border-gold-500/30 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-gold-500/20 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-bold block">
                    Tailored Specification
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">Bespoke Suite Summary</h3>
                </div>
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>

              {/* Dynamic Details */}
              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-navy-900/80 border border-gold-500/15">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Service Category</span>
                  <span className="text-sm font-bold text-white font-display mt-0.5 block">
                    {getServiceName()}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-900/80 border border-gold-500/15">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Target Scale</span>
                  <span className="text-sm font-bold text-gold-300 font-display mt-0.5 block">
                    {getScaleName()}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-900/80 border border-gold-500/15">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-1.5">
                    Selected Finishes ({selectedFinishes.length})
                  </span>
                  {selectedFinishes.length === 0 ? (
                    <span className="text-xs text-slate-500 italic">No custom finishes selected</span>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {selectedFinishes.map(fId => {
                        const finish = finishes.find(f => f.id === fId);
                        return (
                          <span key={fId} className="text-[11px] px-2 py-0.5 rounded bg-gold-500/15 border border-gold-500/30 text-gold-300">
                            {finish?.label}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Turnaround speed selector */}
                <div className="pt-2">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block mb-2">
                    Procurement Timeline:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setUrgency('standard')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                        urgency === 'standard'
                          ? 'bg-navy-800 border-gold-400 text-white'
                          : 'bg-navy-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Standard (2–4 Wks)
                    </button>
                    <button
                      onClick={() => setUrgency('express')}
                      className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                        urgency === 'express'
                          ? 'bg-navy-800 border-gold-400 text-gold-300'
                          : 'bg-navy-950 border-slate-800 text-slate-400'
                      }`}
                    >
                      Accelerated Event Turnaround
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendToRFQ}
                  className="w-full btn-gold py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-xl"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request Official Proposal</span>
                </button>

                <a
                  href={`https://wa.me/2348123456789?text=${encodeURIComponent(
                    `Hello High Branding Innovations Ltd, I have configured a corporate package: Service: ${getServiceName()}, Scale: ${getScaleName()}, Finishes: ${selectedFinishes.join(', ')}. Please advise on quotation and lead time.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs uppercase tracking-widest font-medium text-center text-slate-300 border border-slate-700 hover:border-gold-400 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <span>Chat With Procurement on WhatsApp</span>
                </a>
              </div>

              <div className="mt-5 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-gold-400" />
                <span>Confidential Corporate NDA Protected</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
