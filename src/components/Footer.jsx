import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Footer({ onOpenBrochureModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gold-500/20 pt-20 pb-16 text-neutral-600 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gold-500/20">
          
          <div className="md:col-span-5 space-y-4">
            <img
              src="/images/logo.png"
              alt="High Branding Innovations Official Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-xs uppercase tracking-ultra text-gold-600 font-mono font-semibold">
              Surulere, Lagos, Nigeria
            </p>
            <p className="text-neutral-500 max-w-sm leading-relaxed text-xs">
              {companyInfo.descriptor}. A single trusted partner for both how your brand looks and how it is felt.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBrochureModal}
                className="text-gold-700 hover:text-navy-900 underline text-xs font-medium"
              >
                View / Download Corporate Brochure & Catalog &rarr;
              </button>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-bold block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-navy-900 transition-colors">The Ethos</a></li>
              <li><a href="#services" className="hover:text-navy-900 transition-colors">Core Capabilities</a></li>
              <li><a href="#featured-suites" className="hover:text-navy-900 transition-colors">Signature Suites</a></li>
              <li><a href="#lookbook" className="hover:text-navy-900 transition-colors">Curated Lookbook</a></li>
              <li><a href="#why-us" className="hover:text-navy-900 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-navy-900 transition-colors">Request a Deal</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-bold block">
              Corporate Headquarters
            </span>
            <p className="text-navy-900 font-medium leading-relaxed">
              High Branding Innovations Ltd<br />
              {companyInfo.contact.address}
            </p>
            
            <div className="space-y-1 pt-2 font-mono text-xs">
              <p className="text-navy-900 font-bold uppercase tracking-wider font-sans text-[11px]">Direct Inboxes:</p>
              {companyInfo.contact.emails.map((email) => (
                <p key={email}>
                  <a href={`mailto:${email}`} className="text-neutral-600 hover:text-gold-600 transition-colors">
                    {email}
                  </a>
                </p>
              ))}
              <p className="pt-1 text-navy-900 font-semibold font-sans">
                Phone / WhatsApp: <a href="tel:07035737296" className="font-mono text-gold-600 hover:underline">07035737296</a>
              </p>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} High Branding Innovations Ltd. "Where Identity Meets Impression". 57, Bode Thomas St, Surulere, Lagos.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-navy-900 hover:text-gold-600 transition-colors uppercase tracking-ultra font-medium text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
