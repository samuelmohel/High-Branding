import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioLookbook from './components/PortfolioLookbook';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');

  const handleSelectService = (serviceName) => {
    setPrefilledService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col antialiased">
      {/* Editorial Minimal Navigation */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <PortfolioLookbook onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <WhyChooseUs />
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Minimal Architectural Footer */}
      <Footer />

      {/* Clean Inquiry Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Understated WhatsApp Action */}
      <aside aria-label="Direct Messaging" className="fixed bottom-8 right-8 z-40">
        <a
          href={`https://wa.me/2348123456789?text=${encodeURIComponent(
            "Hello High Branding Innovations Ltd, I am reaching out regarding your branding and corporate gifts services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-white hover:bg-neutral-50 text-neutral-900 shadow-lg border border-neutral-300 rounded-full transition-all hover:scale-105 group"
          title="Direct WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] uppercase tracking-ultra font-medium hidden sm:inline">
            WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
