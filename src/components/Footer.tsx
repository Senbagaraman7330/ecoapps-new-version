import { ArrowRight, MapPin } from 'lucide-react';
import logoImg from '../assets/logo-ecoapps.png';

interface FooterProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function Footer({ onHover, onLeave }: FooterProps) {
  return (
    <footer className="site-footer bg-white px-6 sm:px-10 md:px-14 lg:px-16 pt-16 pb-12 border-t border-slate-200" id="contact">
      <div className="max-w-[1520px] mx-auto">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-200">
          
          {/* Brand & Strategy Call to Action */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <a 
              href="#" 
              className="inline-block mb-4 transition-transform hover:scale-[1.02]"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <img
                src={logoImg}
                alt="Eco Apps Solutions - Tech & Digital Marketing"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            <div className="mb-2.5">
              <span className="font-['JetBrains_Mono'] text-[12px] font-bold tracking-wider text-[#0057ff] uppercase">
                Tech & Digital Marketing
              </span>
            </div>

            <p className="font-['Manrope'] text-[14.5px] leading-relaxed text-slate-600 mb-6 max-w-sm">
              Next-generation digital marketing and technology solutions helping businesses grow online.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 font-['Manrope'] font-bold text-[#0b1528] bg-white border-[1.5px] border-[#0b1528] rounded-xl shadow-[0_4px_0_#0b1528] hover:translate-y-0.5 hover:shadow-[0_2px_0_#0b1528] hover:bg-slate-50 active:translate-y-1 active:shadow-none transition-all duration-200 px-5 py-2.5 text-sm cursor-pointer"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span>Get Your Growth Strategy</span>
              <ArrowRight className="w-4 h-4 text-[#0057ff]" />
            </a>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-4">
            
            {/* 1. Company */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.16em] text-[#0b1528] font-bold mb-4 pb-1 border-b border-slate-100">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 font-['Manrope'] text-[13.5px] text-slate-600">
                <li>
                  <a href="#" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Book a Strategy Call
                  </a>
                </li>
              </ul>
            </div>

            {/* 2. Marketing Services */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.16em] text-[#0b1528] font-bold mb-4 pb-1 border-b border-slate-100">
                Marketing Services
              </h4>
              <ul className="flex flex-col gap-2.5 font-['Manrope'] text-[13.5px] text-slate-600">
                <li>
                  <a href="#seo-service" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    SEO Services
                  </a>
                </li>
                <li>
                  <a href="#ai-seo-service" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    AI SEO Services
                  </a>
                </li>
                <li>
                  <a href="#paid-ads-ppc" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Paid Ads & PPC
                  </a>
                </li>
                <li>
                  <a href="#social-media-marketing" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="#ecommerce-marketing" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Ecommerce Marketing
                  </a>
                </li>
                <li>
                  <a href="#b2b-marketing" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    B2B Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. Software Services */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.16em] text-[#0b1528] font-bold mb-4 pb-1 border-b border-slate-100">
                Software Services
              </h4>
              <ul className="flex flex-col gap-2.5 font-['Manrope'] text-[13.5px] text-slate-600">
                <li>
                  <a href="#ai-automation-agents" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    AI Automation & AI Agents
                  </a>
                </li>
                <li>
                  <a href="#custom-developments" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Custom Development
                  </a>
                </li>
                <li>
                  <a href="#crm-automation" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    CRM Automation
                  </a>
                </li>
                <li>
                  <a href="#website-development" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="#mobile-app-development" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Mobile App Development
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. Resources */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.16em] text-[#0b1528] font-bold mb-4 pb-1 border-b border-slate-100">
                Resources
              </h4>
              <ul className="flex flex-col gap-2.5 font-['Manrope'] text-[13.5px] text-slate-600">
                <li>
                  <a href="#blog" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* 5. Legal */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.16em] text-[#0b1528] font-bold mb-4 pb-1 border-b border-slate-100">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5 font-['Manrope'] text-[13.5px] text-slate-600">
                <li>
                  <a href="#privacy" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="hover:text-[#0057ff] hover:translate-x-1 inline-block transition-all duration-150" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-['JetBrains_Mono'] text-[11.5px] tracking-wide text-slate-500 text-center md:text-left">
          <div>
            © 2026 <span className="font-semibold text-slate-700">Eco Apps Solutions</span> — A Unit of <span className="font-semibold text-slate-700">Data Apps Technologies</span>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-600 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#0057ff] shrink-0" />
            <span>Coimbatore | Tamil Nadu | India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
