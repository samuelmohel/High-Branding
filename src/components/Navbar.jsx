import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ethos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'The Difference', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gold-500/30 shadow-sm py-4'
          : 'bg-white py-6 border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Typographic Minimal Wordmark with Navy & Gold Accent */}
          <a href="#" className="flex items-center space-x-3.5 group">
            <div className="w-9 h-9 rounded-sm bg-navy-900 border border-gold-500/60 flex items-center justify-center text-gold-400 font-serif text-base font-bold shadow-sm group-hover:border-gold-400 transition-colors">
              HB
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wide text-navy-900 font-semibold leading-none group-hover:text-gold-600 transition-colors">
                HIGH BRANDING
              </span>
              <span className="text-[9px] uppercase tracking-ultra text-neutral-500 font-sans mt-1">
                Innovations Ltd • Lagos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-ultra text-neutral-600 hover:text-navy-900 transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Minimalist Inquire Action with Navy & Gold */}
          <div className="hidden md:flex items-center space-x-5">
            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-ultra text-neutral-600 hover:text-gold-600 transition-colors font-medium"
            >
              WhatsApp
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="btn-navy-gold px-5 py-2.5 rounded-full text-xs uppercase tracking-ultra font-medium transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-900 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-navy-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-white border-b border-gold-500/30 px-8 py-8 shadow-xl">
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-navy-900 hover:text-gold-600 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gold-500/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 bg-navy-900 text-gold-200 border border-gold-500/40 text-xs uppercase tracking-ultra font-medium text-center rounded shadow-sm"
              >
                Request Proposal
              </button>
              <a
                href="https://wa.me/2348123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-neutral-300 text-neutral-800 text-xs uppercase tracking-ultra font-medium text-center rounded"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
