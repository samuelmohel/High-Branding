import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MessageCircle, CheckCircle2, MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactSection({ prefilledService }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Brand Identity Design',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Construct multi-recipient mailto link to Info@, Elizabeth@, Emmanuel@
    const recipients = companyInfo.contact.emails.join(',');
    const subject = encodeURIComponent(`New Deal / Corporate RFQ: ${formData.company || formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
`Full Name: ${formData.name}
Organization: ${formData.company}
Work Email: ${formData.email}
Phone / WhatsApp: ${formData.phone}
Service Requested: ${formData.service}

Project Requirements & Scope:
${formData.message}

---
Dispatched via High Branding Innovations Web Platform
Corporate Office: 57, Bode Thomas Street, Surulere, Lagos`
    );

    // Open mail client targeting all 3 corporate emails
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-paper-100 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-gold-500/20 mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-ultra text-gold-600 font-semibold mb-3">
              <span className="w-2 h-0.5 bg-gold-500"></span>
              <span>Direct Deal Consultation</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-navy-900 tracking-tight">
              Request a Deal
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-sm font-light">
            Headquartered at 57, Bode Thomas Street, Surulere, Lagos. Responding promptly to all enterprise inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Profile Details in Deep Navy Card with Gold Borders */}
          <div className="lg:col-span-5 card-navy-accent p-8 sm:p-10 rounded-sm text-white space-y-8 relative overflow-hidden shadow-xl border border-gold-500/40">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="border-b border-gold-500/30 pb-6">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src="/images/logo-monogram.png"
                  alt="HBI Crest"
                  className="w-8 h-8 object-contain bg-white rounded-sm p-0.5"
                />
                <h3 className="font-serif text-2xl text-white">
                  {companyInfo.name}
                </h3>
              </div>
              <p className="text-xs uppercase tracking-ultra text-gold-400 font-mono">
                {companyInfo.descriptor}
              </p>
            </div>

            <div className="space-y-6 text-sm font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-gold-400 font-mono block mb-1 font-bold">
                    Physical Corporate Address
                  </span>
                  <p className="text-white font-medium">{companyInfo.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-gold-400 font-mono block mb-1 font-bold">
                    Direct Corporate Inboxes
                  </span>
                  <ul className="space-y-1">
                    {companyInfo.contact.emails.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className="text-slate-200 hover:text-gold-300 block transition-colors font-mono text-xs"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-gold-400 font-mono block mb-1 font-bold">
                    Direct Line & WhatsApp
                  </span>
                  <a
                    href="tel:07035737296"
                    className="text-white hover:text-gold-300 font-mono text-sm block transition-colors font-semibold"
                  >
                    07035737296
                  </a>
                  <span className="text-xs text-slate-400">{companyInfo.contact.internationalPhone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-gold-400 font-mono block mb-1 font-bold">
                    Operating Hours
                  </span>
                  <p className="text-slate-300 text-xs">{companyInfo.contact.hours}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <div className="pt-6 border-t border-gold-500/30">
              <a
                href={`https://wa.me/2347035737296?text=${encodeURIComponent(
                  "Hello High Branding Innovations Ltd, I am contacting you from your website to request a corporate deal for branding & premium gifts."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-navy-800 hover:bg-navy-700 text-gold-300 border border-gold-500/50 transition-all text-xs uppercase tracking-ultra font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (07035737296)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean White Consultation Form with Gold Border */}
          <div className="lg:col-span-7 card-gold p-8 sm:p-12 rounded-sm border border-gold-500/30 shadow-md">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-gold-600 mx-auto" />
                <h3 className="font-serif text-3xl text-navy-900">
                  Deal Request Initiated
                </h3>
                <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-navy-900">{formData.name}</strong>. Your inquiry has been routed directly to <strong className="text-navy-900">Info@, Elizabeth@, and Emmanuel@Hbranding.com</strong>.
                </p>
                <p className="text-xs text-neutral-500 font-light">
                  If your email client didn't open automatically, you can also reach us directly via WhatsApp at <strong className="text-navy-900 font-mono">07035737296</strong>.
                </p>
                <div className="pt-4 flex items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/2347035737296?text=${encodeURIComponent(
                      `Hello, I submitted an inquiry for ${formData.company || formData.name}: ${formData.service}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-navy-gold px-6 py-2.5 rounded-full text-xs uppercase tracking-ultra font-bold flex items-center gap-2"
                  >
                    <span>Instant WhatsApp Follow-Up</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs uppercase tracking-ultra font-medium text-gold-600 border-b border-gold-600 pb-1"
                  >
                    Submit another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pb-4 border-b border-gold-500/20">
                  <h3 className="font-serif text-2xl text-navy-900">
                    Request a Deal & Proposal
                  </h3>
                  <p className="text-xs text-neutral-500 font-light mt-1">
                    Directly sent to our executive directors at <span className="font-mono text-navy-900">Hbranding.com</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-ultra text-navy-900 font-medium mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Alaba"
                      className="w-full px-4 py-3 bg-paper-100 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-ultra text-navy-900 font-medium mb-2">
                      Organization / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Enterprise Ltd"
                      className="w-full px-4 py-3 bg-paper-100 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-ultra text-navy-900 font-medium mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 bg-paper-100 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-ultra text-navy-900 font-medium mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0703..."
                      className="w-full px-4 py-3 bg-paper-100 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-ultra text-navy-900 font-medium mb-2">
                    Primary Service / Gift Requirement
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-paper-100 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="Brand Identity Design">Brand Identity Design</option>
                    <option value="Premium Corporate Gifts">Premium Corporate Gifts (Hampers & VIP Boxes)</option>
                    <option value="Bundled Brand + Gift Packages">Bundled Brand + Welcome Kits</option>
                    <option value="Event & Exhibition Branding">Event & Exhibition Branding</option>
                    <option value="Custom Bespoke Gift Set">Custom Bespoke Corporate Gift Set</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-ultra text-navy-900 font-medium mb-2">
                    Project Brief & Volume (e.g. 50 VIP boxes, AGM date, custom branding)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline estimated quantity of gift units, target delivery date, or branding requirements..."
                    className="w-full px-4 py-3 bg-paper-100 border border-neutral-200 text-neutral-900 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-navy-gold py-4 text-xs uppercase tracking-ultra font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Send Deal Request to Hbranding Team</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
