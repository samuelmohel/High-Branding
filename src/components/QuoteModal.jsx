import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Brand Identity Design',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm">
      <div className="card-gold max-w-lg w-full p-8 sm:p-10 rounded-sm border border-gold-500/50 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 text-neutral-400 hover:text-navy-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-gold-600 mx-auto" />
            <h3 className="font-serif text-3xl text-navy-900">
              Inquiry Dispatched
            </h3>
            <p className="text-xs text-neutral-600 font-light max-w-xs mx-auto leading-relaxed">
              Our enterprise advisory team in Lagos will review your brief and prepare a tailored proposal.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="btn-navy-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-ultra font-medium"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-gold-500/20">
              <span className="text-[10px] uppercase tracking-ultra text-gold-600 font-mono font-bold block mb-1">
                Executive Inquiries
              </span>
              <h3 className="font-serif text-3xl text-navy-900">
                Request Proposal
              </h3>
              <p className="text-xs text-neutral-500 font-light mt-1">
                High Branding Innovations Ltd • Lagos, Nigeria
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-ultra text-navy-900 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Folake Alabi"
                  className="w-full px-3.5 py-2.5 bg-paper-100 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-ultra text-navy-900 font-medium mb-1">
                    Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Holdings"
                    className="w-full px-3.5 py-2.5 bg-paper-100 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-ultra text-navy-900 font-medium mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 bg-paper-100 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-ultra text-navy-900 font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 ..."
                    className="w-full px-3.5 py-2.5 bg-paper-100 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-ultra text-navy-900 font-medium mb-1">
                    Capability
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 bg-paper-100 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-gold-500"
                  >
                    <option value="Brand Identity Design">Brand Identity Design</option>
                    <option value="Premium Corporate Gifts">Premium Corporate Gifts</option>
                    <option value="Bundled Brand + Gift Packages">Bundled Launch Kits</option>
                    <option value="Event & Exhibition Branding">Event & Exhibition</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-ultra text-navy-900 font-medium mb-1">
                  Brief Requirements / Estimated Scope
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Estimated number of units, event date, or rebrand timeline..."
                  className="w-full px-3.5 py-2.5 bg-paper-100 border border-neutral-200 text-neutral-900 text-xs focus:outline-none focus:border-gold-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-navy-gold py-3.5 text-xs uppercase tracking-ultra font-bold flex items-center justify-center gap-2 mt-2 shadow-lg"
              >
                <span>Submit RFP</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
