import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductCarousel from './components/ProductCarousel';
import PortfolioLookbook from './components/PortfolioLookbook';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import BrochureModal from './components/BrochureModal';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from './data/companyData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProduct = (productTitle) => {
    setPrefilledService(`Bespoke Order: ${productTitle}`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col antialiased">
      {/* Official Navigation Bar */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
        />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />

        {/* Real Product Image Carousel */}
        <div id="featured-suites">
          <ProductCarousel onSelectProduct={handleSelectProduct} />
        </div>

        <PortfolioLookbook onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <WhyChooseUs />
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Architectural Corporate Footer */}
      <Footer onOpenBrochureModal={() => setIsBrochureModalOpen(true)} />

      {/* Quote / Deal Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Downloadable / Printable Corporate Brochure Modal */}
      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* Direct WhatsApp Quick Chat Pill (07035737296) */}
      <aside aria-label="Direct Messaging" className="fixed bottom-8 right-8 z-30 print:hidden">
        <a
          href={`https://wa.me/2347035737296?text=${encodeURIComponent(
            "Hello High Branding Innovations Ltd, I am contacting you regarding your branding and corporate gifts services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-white hover:bg-neutral-50 text-neutral-900 shadow-xl border border-gold-500/40 rounded-full transition-all hover:scale-105 group"
          title="Direct WhatsApp: 07035737296"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] uppercase tracking-ultra font-bold text-navy-900 hidden sm:inline">
            WhatsApp 07035737296
          </span>
        </a>
      </aside>
    </div>
  );
}
