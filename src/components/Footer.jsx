import React from 'react';
import { ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 pt-20 pb-16 text-neutral-600 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl text-neutral-900 font-medium block">
              HIGH BRANDING
            </span>
            <p className="text-xs uppercase tracking-ultra text-neutral-400 font-mono">
              Innovations Ltd • Lagos, Nigeria
            </p>
            <p className="text-neutral-500 max-w-sm leading-relaxed text-xs">
              {companyInfo.descriptor}. A single trusted partner for both how your brand looks and how it is felt.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-neutral-400 font-mono block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-neutral-900 transition-colors">The Ethos</a></li>
              <li><a href="#services" className="hover:text-neutral-900 transition-colors">Core Capabilities</a></li>
              <li><a href="#lookbook" className="hover:text-neutral-900 transition-colors">Curated Lookbook</a></li>
              <li><a href="#why-us" className="hover:text-neutral-900 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-neutral-900 transition-colors">Direct Inquiries</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-neutral-400 font-mono block">
              Corporate Office
            </span>
            <p className="text-neutral-900">
              High Branding Innovations Ltd<br />
              Lagos, Nigeria
            </p>
            <div className="space-y-1 pt-1">
              <p>Email: <a href={`mailto:${companyInfo.contact.email}`} className="text-neutral-900 hover:underline">{companyInfo.contact.email}</a></p>
              <p>Phone: <a href="tel:+2348004444272" className="text-neutral-900 hover:underline">{companyInfo.contact.phone}</a></p>
              <p>WhatsApp: <span className="text-neutral-900 font-mono">+234 812 345 6789</span></p>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} High Branding Innovations Ltd. "Where Identity Meets Impression". All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-900 hover:text-neutral-600 transition-colors uppercase tracking-ultra font-medium text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
