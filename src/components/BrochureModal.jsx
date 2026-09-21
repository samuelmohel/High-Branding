import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function BrochureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white max-w-4xl w-full rounded-sm border-2 border-gold-500/40 shadow-2xl my-auto relative overflow-hidden">
        
        {/* Modal Top Control Bar (Hidden in Print) */}
        <div className="print:hidden sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-navy-900 text-white border-b border-gold-500/40">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-ultra font-mono text-gold-300">
              Corporate Capabilities Brochure & Catalog
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="btn-navy-gold bg-gold-500 text-navy-950 hover:bg-gold-400 px-4 py-2 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-1.5 shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-neutral-700 hover:border-white text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close brochure modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="printable-brochure" className="p-8 sm:p-14 text-neutral-900 font-sans space-y-12">
          
          {/* Document Cover Header */}
          <div className="border-b-2 border-gold-500/40 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <img
                src="/images/logo.png"
                alt="High Branding Innovations Official Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="text-left sm:text-right text-xs font-mono text-neutral-500 space-y-1">
              <p className="font-bold text-navy-900 uppercase tracking-wider">Official Company Profile</p>
              <p>57, Bode Thomas Street, Surulere, Lagos</p>
              <p>Hotline: 07035737296</p>
            </div>
          </div>

          {/* Statement Hero */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-ultra text-gold-600 font-semibold font-mono block">
              Where Identity Meets Impression
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-navy-900 leading-tight">
              Branding & Corporate Identity <br />
              <span className="italic font-light text-gold-600">Premium Corporate Gifts</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-2">
              High Branding Innovations Ltd is a branding and premium corporate gifts company based in Lagos, Nigeria, dedicated to helping businesses build brands that are both strategically sound and memorably expressed.
            </p>
          </div>

          {/* Vision & Mission Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-sm bg-paper-100 border border-gold-500/30">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-bold block">
                Our Vision
              </span>
              <p className="font-serif italic text-sm text-navy-900 leading-relaxed">
                "{companyInfo.about.vision}"
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-bold block">
                Our Mission
              </span>
              <p className="text-xs text-neutral-700 leading-relaxed font-light">
                "{companyInfo.about.mission}"
              </p>
            </div>
          </div>

          {/* Core Capabilities */}
          <div>
            <div className="pb-3 border-b border-gold-500/20 mb-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl text-navy-900">What We Deliver</h2>
              <span className="text-xs text-gold-600 font-mono">4 Foundational Pillars</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyInfo.services.map((svc) => (
                <div key={svc.id} className="p-5 rounded-sm border border-neutral-200 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gold-600 font-bold">Pillar {svc.number}</span>
                    <span className="text-[10px] uppercase tracking-ultra text-neutral-400">{svc.subtitle}</span>
                  </div>
                  <h3 className="font-serif text-xl text-navy-900">{svc.title}</h3>
                  <p className="text-xs text-neutral-600 font-light">{svc.desc}</p>
                  <ul className="text-[11px] text-neutral-700 space-y-1 pt-1 font-light">
                    {svc.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gold-600"></span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Product Showcase Gallery */}
          <div>
            <div className="pb-3 border-b border-gold-500/20 mb-6">
              <h2 className="font-serif text-2xl text-navy-900">Sample Curated Corporate Gifts</h2>
              <p className="text-xs text-neutral-500 font-light">Actual execution delivered for our enterprise partners.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="border border-gold-500/20 p-1 bg-white rounded-sm">
                <img
                  src="/images/products/executive-black-tech-suite.jpg"
                  alt="Executive Gift Suite"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <p className="text-[10px] font-medium text-navy-900 pt-2 text-center">VIP Leather & Tech Suite</p>
              </div>
              <div className="border border-gold-500/20 p-1 bg-white rounded-sm">
                <img
                  src="/images/products/gift-item-1.jpg"
                  alt="Cork and Matte Grey Set"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <p className="text-[10px] font-medium text-navy-900 pt-2 text-center">Eco-Cork Notebook & Flask</p>
              </div>
              <div className="border border-gold-500/20 p-1 bg-white rounded-sm">
                <img
                  src="/images/products/gift-item-3.jpg"
                  alt="Bamboo Collection"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <p className="text-[10px] font-medium text-navy-900 pt-2 text-center">Natural Grain Bamboo Desk Set</p>
              </div>
            </div>
          </div>

          {/* Official Contact Footer */}
          <div className="pt-8 border-t-2 border-gold-500/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-600">
            <div>
              <strong className="text-navy-900 block font-semibold mb-1 uppercase tracking-wider">Physical Office</strong>
              <p>57, Bode Thomas Street,<br />Surulere, Lagos, Nigeria</p>
            </div>
            <div>
              <strong className="text-navy-900 block font-semibold mb-1 uppercase tracking-wider">Direct Inquiries</strong>
              <p>Info@Hbranding.com</p>
              <p>Elizabeth@Hbranding.com</p>
              <p>Emmanuel@Hbranding.com</p>
            </div>
            <div>
              <strong className="text-navy-900 block font-semibold mb-1 uppercase tracking-wider">Hotline & WhatsApp</strong>
              <p>07035737296</p>
              <p>+234 703 573 7296</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
