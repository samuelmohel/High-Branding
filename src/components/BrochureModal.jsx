import React, { useRef } from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function BrochureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleOpenPrintWindow = () => {
    const printElement = document.getElementById('printable-brochure');
    if (!printElement) {
      window.print();
      return;
    }
    const win = window.open('', '_blank', 'width=1000,height=900');
    if (!win) {
      window.print();
      return;
    }
    win.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>High Branding Innovations Ltd - Corporate Capabilities Brochure & Catalog</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          body {
            font-family: 'Inter', sans-serif;
            background: #ffffff !important;
            color: #111111 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .font-serif { font-family: 'Playfair Display', serif; }
          .print-avoid-break { break-inside: avoid; page-break-inside: avoid; }
          .print-page-break { break-before: page; page-break-before: always; }
          @media print {
            .no-print { display: none !important; }
          }
        </style>
      </head>
      <body class="p-8 bg-white text-neutral-900">
        <div class="no-print mb-6 p-4 bg-amber-50 border border-amber-300 rounded-sm text-xs flex justify-between items-center">
          <span class="font-medium text-amber-900">Official High Branding Catalog Document. Click below to print or save as PDF.</span>
          <button onclick="window.print()" style="background:#0B1528;color:#FFFFFF;padding:8px 18px;border-radius:9999px;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:700;cursor:pointer;">
            Print / Save to PDF
          </button>
        </div>
        ${printElement.innerHTML}
        <script>
          setTimeout(() => {
            window.focus();
            window.print();
          }, 500);
        </script>
      </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md overflow-y-auto brochure-modal-overlay">
      <div className="bg-white max-w-4xl w-full rounded-sm border-2 border-gold-500/40 shadow-2xl my-auto relative overflow-hidden brochure-modal-card">
        
        {/* Modal Top Control Bar (Hidden in Print) */}
        <div className="print:hidden sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-navy-900 text-white border-b border-gold-500/40">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span className="text-xs uppercase tracking-ultra font-mono text-gold-300">
              Corporate Capabilities Brochure & Catalog
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handlePrint}
              className="btn-navy-gold bg-gold-500 text-navy-950 hover:bg-gold-400 px-4 py-2 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-1.5 shadow-md"
              title="Print or Save isolated PDF directly"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={handleOpenPrintWindow}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs uppercase tracking-ultra font-semibold border border-gold-500/40 text-gold-300 hover:bg-navy-800 transition-colors"
              title="Open pure clean print catalog in a new window"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Popout Window</span>
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
        <div id="printable-brochure" className="p-8 sm:p-14 text-neutral-900 font-sans space-y-12 bg-white">
          
          {/* Document Cover Header */}
          <div className="border-b-2 border-gold-500/40 pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 print-avoid-break">
            <div className="flex items-center space-x-4">
              <img
                src="/images/logo.png"
                alt="High Branding Innovations Official Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="text-left sm:text-right text-xs font-mono text-neutral-600 space-y-1">
              <p className="font-bold text-navy-900 uppercase tracking-wider text-sm">Official Company Profile & Catalog</p>
              <p>57, Bode Thomas Street, Surulere, Lagos</p>
              <p>Hotline / WhatsApp: 07035737296</p>
              <p className="text-gold-700 font-medium">Info@Hbranding.com</p>
            </div>
          </div>

          {/* Statement Hero */}
          <div className="text-center max-w-2xl mx-auto space-y-3 print-avoid-break">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-sm bg-neutral-50 border border-gold-500/30 print-avoid-break">
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

          {/* Core Values */}
          <div className="print-avoid-break">
            <div className="pb-2 border-b border-gold-500/20 mb-4 flex items-center justify-between">
              <h2 className="font-serif text-xl text-navy-900">Guiding Core Values</h2>
              <span className="text-xs text-gold-600 font-mono">Foundational Principles</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {companyInfo.values.map((v) => (
                <div key={v.id} className="p-3 border border-neutral-200 rounded-sm bg-white">
                  <span className="font-mono text-[10px] text-gold-600 font-bold block">{v.id}</span>
                  <strong className="text-xs text-navy-900 block font-semibold mb-1">{v.title}</strong>
                  <p className="text-[10px] text-neutral-600 leading-tight font-light">{v.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="print-avoid-break">
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
                  <h3 className="font-serif text-lg text-navy-900">{svc.title}</h3>
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
          <div className="print-avoid-break">
            <div className="pb-3 border-b border-gold-500/20 mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl text-navy-900">Curated Corporate Gifts Catalog</h2>
                <p className="text-xs text-neutral-500 font-light">Actual execution delivered for our enterprise partners.</p>
              </div>
              <span className="text-xs font-mono text-gold-600">Selected Portfolio</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="border border-gold-500/30 p-2 bg-white rounded-sm space-y-1.5">
                <img
                  src="/images/products/gift-item-21.jpg"
                  alt="Welcome to the Team Onboarding Box"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <strong className="text-xs text-navy-900 block font-semibold leading-tight">The 'Welcome to the Team' Box</strong>
                <p className="text-[10px] text-neutral-500 leading-snug">Navy journal, slate bottle, ceramic mug, shirt, leather cardholder.</p>
              </div>

              <div className="border border-gold-500/30 p-2 bg-white rounded-sm space-y-1.5">
                <img
                  src="/images/products/executive-black-tech-suite.jpg"
                  alt="Executive Black VIP Tech Suite"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <strong className="text-xs text-navy-900 block font-semibold leading-tight">Executive Black VIP Tech Suite</strong>
                <p className="text-[10px] text-neutral-500 leading-snug">Leather organizer, thermal flask, umbrella, power bank, speaker.</p>
              </div>

              <div className="border border-gold-500/30 p-2 bg-white rounded-sm space-y-1.5">
                <img
                  src="/images/products/gift-item-26.jpg"
                  alt="Sir Alex Bespoke Monogram VIP Suite"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <strong className="text-xs text-navy-900 block font-semibold leading-tight">The 'Sir Alex' Monogram VIP Set</strong>
                <p className="text-[10px] text-neutral-500 leading-snug">Laser-engraved LED flask, leather folio, gold pen, cardholder.</p>
              </div>

              <div className="border border-gold-500/30 p-2 bg-white rounded-sm space-y-1.5">
                <img
                  src="/images/products/gift-item-1.jpg"
                  alt="Minimalist Cork and Slate Grey Box"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <strong className="text-xs text-navy-900 block font-semibold leading-tight">Cork & Slate Grey Executive Box</strong>
                <p className="text-[10px] text-neutral-500 leading-snug">Matte slate bottle, cork-accented notebook, bamboo pen & keychain.</p>
              </div>

              <div className="border border-gold-500/30 p-2 bg-white rounded-sm space-y-1.5">
                <img
                  src="/images/products/gift-item-24.jpg"
                  alt="Navy & Natural Kraft Onboarding Swag"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <strong className="text-xs text-navy-900 block font-semibold leading-tight">Navy & Kraft Onboarding Swag</strong>
                <p className="text-[10px] text-neutral-500 leading-snug">Navy polo, cap, canvas tote, bamboo bottle, mug, bamboo power bank.</p>
              </div>

              <div className="border border-gold-500/30 p-2 bg-white rounded-sm space-y-1.5">
                <img
                  src="/images/products/gift-item-12.jpg"
                  alt="Royal Blue 6-in-1 Executive Hamper"
                  className="aspect-[4/3] object-cover w-full rounded-sm"
                />
                <strong className="text-xs text-navy-900 block font-semibold leading-tight">Royal Blue 6-in-1 Hamper</strong>
                <p className="text-[10px] text-neutral-500 leading-snug">Auto umbrella, LED flask, leather notebook, speaker, power bank.</p>
              </div>
            </div>
          </div>

          {/* Bespoke Customization Capabilities */}
          <div className="p-6 rounded-sm border border-gold-500/30 bg-neutral-50 print-avoid-break space-y-3">
            <h3 className="font-serif text-lg text-navy-900">Bespoke Enterprise Customization Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-700">
              <div>
                <strong className="text-navy-900 block font-semibold mb-0.5">• Precision Laser Engraving</strong>
                <p className="text-[11px] text-neutral-600">Crisp, permanent monogramming on thermal flasks, metal pens, and wooden components.</p>
              </div>
              <div>
                <strong className="text-navy-900 block font-semibold mb-0.5">• Blind & Foil Debossing</strong>
                <p className="text-[11px] text-neutral-600">Deep luxury impressions on genuine leather folios, journals, and presentation covers.</p>
              </div>
              <div>
                <strong className="text-navy-900 block font-semibold mb-0.5">• Custom Presentation Boxes</strong>
                <p className="text-[11px] text-neutral-600">Rigid magnetic boxes, custom EVA foam cutouts, branded ribbons, and wax seal closures.</p>
              </div>
            </div>
          </div>

          {/* Official Contact Footer */}
          <div className="pt-8 border-t-2 border-gold-500/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-neutral-600 print-avoid-break">
            <div>
              <strong className="text-navy-900 block font-semibold mb-1 uppercase tracking-wider">Physical Office</strong>
              <p>57, Bode Thomas Street,<br />Surulere, Lagos, Nigeria</p>
              <p className="text-neutral-500 pt-1">Hours: Mon – Fri: 8:30 AM – 5:30 PM WAT</p>
            </div>
            <div>
              <strong className="text-navy-900 block font-semibold mb-1 uppercase tracking-wider">Direct Corporate Emails</strong>
              <p>Info@Hbranding.com</p>
              <p>Elizabeth@Hbranding.com</p>
              <p>Emmanuel@Hbranding.com</p>
            </div>
            <div>
              <strong className="text-navy-900 block font-semibold mb-1 uppercase tracking-wider">Hotline & WhatsApp</strong>
              <p className="text-navy-900 font-bold text-sm">07035737296</p>
              <p>+234 703 573 7296</p>
              <p className="text-gold-700 font-medium pt-1">High Branding Innovations Ltd</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
