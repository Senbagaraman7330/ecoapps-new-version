import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { contactSchema } from '../data/schemas';
import { MapPin, Mail, Phone, Clock, Navigation, ExternalLink, Send, CheckCircle2, RefreshCw, ShieldCheck } from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Eco+Apps+Solutions/@10.9675734,76.9764262,17z/data=!4m6!3m5!1s0x3ba85b9c03939a49:0xeccdd74bb2b11d79!8m2!3d10.9677379!4d76.9789687!16s%2Fg%2F11z732wxqb?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D';

export default function ContactPage() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SEO & AI Search',
    budget: '₹50,000 – ₹1,00,000',
    message: '',
  });

  const generateCaptcha = () => {
    // Generates a simple, crisp 4-character alphanumeric matching code
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
    setCaptchaError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setCaptchaError('Security code does not match. Please try again.');
      generateCaptcha();
      return;
    }
    setCaptchaError('');
    setIsSubmitted(true);
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      <SEO
        title="Contact Eco Apps Solutions for Digital Marketing Services"
        description="Contact Eco Apps Solutions for Best SEO, Google Ads, Meta Ads, branding, website development and lead generation services in Coimbatore."
        canonical="https://ecoappssolutions.com/contact"
        schema={contactSchema}
      />
      <Cursor isHovered={isCursorHovered} />
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      {/* Hero Header */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 md:px-14 bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <span>Get in Touch</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0b1528] leading-[1.1] tracking-tight mb-5">
            Let's Build Your Next Stage of Growth
          </h1>

          <p className="font-['Manrope'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ready to increase your revenue, inbound leads, and search market share? Speak directly with our senior growth strategists in Coimbatore.
          </p>
        </div>
      </section>

      {/* 2-Column Section: Left (Interactive Contact Form) | Right (Location & Interactive Google Map) */}
      <section className="py-14 md:py-20 px-6 md:px-14 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── Left Column: Form (7 cols) ── */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_15px_40px_rgba(14,165,233,0.06)]">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#0b1528] tracking-tight mb-2">
              Book a Growth Strategy Session
            </h2>
            <p className="text-slate-500 text-sm mb-8 font-medium">
              Fill out the details below and we will get back to you with a comprehensive audit within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-emerald-900">
                  Strategy Request Received!
                </h3>
                <p className="text-sm text-emerald-700 max-w-md">
                  Thank you, {formData.name || 'there'}! Our strategy team is reviewing your project details and will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0057ff] focus:ring-2 focus:ring-sky-100 outline-none transition text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0057ff] focus:ring-2 focus:ring-sky-100 outline-none transition text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91- 6382649491"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0057ff] focus:ring-2 focus:ring-sky-100 outline-none transition text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0057ff] outline-none transition text-sm font-bold text-slate-800 cursor-pointer"
                    >
                      <option>SEO &amp; AI Search</option>
                      <option>Performance Marketing &amp; PPC</option>
                      <option>Website &amp; Custom Software</option>
                      <option>AI &amp; CRM Automation</option>
                      <option>Full-Funnel Digital Growth</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Estimated Monthly Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0057ff] outline-none transition text-sm font-bold text-slate-800 cursor-pointer"
                  >
                    <option>₹25,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹2,50,000</option>
                    <option>₹2,50,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Project Details &amp; Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your target audience, current bottlenecks, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0057ff] focus:ring-2 focus:ring-sky-100 outline-none transition text-sm font-medium"
                  />
                </div>

                {/* ── Very Simple Matching Captcha Verification ── */}
                <div className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#0057ff]" />
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Security Verification *
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    {/* Matching Captcha Code Badge */}
                    <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 select-none shadow-inner shrink-0">
                      <span className="font-['JetBrains_Mono'] text-lg font-extrabold tracking-[0.35em] text-sky-400 font-mono">
                        {captchaCode}
                      </span>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
                        title="Generate New Code"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Input Field to Match Captcha Code */}
                    <input
                      type="text"
                      required
                      placeholder="Type the code shown on left"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        if (captchaError) setCaptchaError('');
                      }}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-[#0057ff] focus:ring-2 focus:ring-sky-100 outline-none transition text-sm font-semibold tracking-wider uppercase placeholder:normal-case placeholder:font-normal"
                    />
                  </div>

                  {captchaError && (
                    <p className="text-xs font-semibold text-rose-600 mt-2">
                      {captchaError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 font-['Manrope'] font-bold text-base text-white bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] hover:from-[#004cd6] hover:to-[#0284c7] rounded-xl shadow-[0_8px_24px_rgba(0,87,255,0.3)] hover:shadow-[0_12px_32px_rgba(0,87,255,0.4)] transition-all duration-200 cursor-pointer"
                >
                  <span>Submit Growth Strategy Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* ── Right Column: Direct Info & Map (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col gap-4">
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl text-[#0b1528]">
                Direct Contact Details
              </h3>

              <div className="space-y-4 font-['Manrope'] text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0057ff] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Eco Apps Solutions</p>
                    <p className="text-slate-500 text-xs">A Unit of Data Apps Technologies</p>
                    <p className="text-slate-600 text-xs mt-1">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0057ff] shrink-0" />
                  <a href="mailto:sales@ecoappssolutions.com" className="text-slate-900 font-semibold hover:text-[#0057ff] transition-colors">
                    sales@ecoappssolutions.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0057ff] shrink-0" />
                  <a href="tel:+916382649491" className="text-slate-900 font-semibold hover:text-[#0057ff] transition-colors">
                    +91- 6382649491
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#0057ff] shrink-0" />
                  <span>Mon – Fri: 9:00 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-slate-900">
                    Office Location Map
                  </h4>
                  <p className="font-['JetBrains_Mono'] text-xs text-slate-400">10.9677° N, 76.9790° E</p>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-sky-50 hover:bg-[#0057ff] text-[#0057ff] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                  title="Open in Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 aspect-[16/10] min-h-[220px]">
                <iframe
                  title="Eco Apps Solutions Location Map"
                  src="https://maps.google.com/maps?q=10.9677379,76.9789687&hl=en&z=16&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-sky-500/10 transition-colors z-10 flex items-end justify-end p-3 cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#0b1528] text-xs font-bold shadow-md border border-slate-200">
                    <Navigation className="w-3.5 h-3.5 text-[#0057ff]" />
                    <span>Open in Maps</span>
                  </span>
                </a>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 font-['Manrope'] font-bold text-xs text-[#0057ff] bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
