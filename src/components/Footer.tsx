import logoImg from '../assets/EcoApps-Logo.webp';

interface FooterProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function Footer({ onHover, onLeave }: FooterProps) {
  return (
    <footer className="site-footer bg-white px-6 md:px-14 pt-16 pb-10 border-t border-slate-200" id="contact">
      <div className="footer-top flex flex-col lg:flex-row justify-between gap-12 mb-16">
        <div className="footer-brand max-w-sm">
          <img
            src={logoImg}
            alt="EcoApps Solutions"
            className="h-10 w-auto object-contain mb-4"
          />
          <p className="font-['Manrope'] text-sm leading-relaxed text-slate-500">
            Empowering global brands with intelligent digital marketing, high-performance web applications, and scalable conversion infrastructure.
          </p>
        </div>

        <div className="footer-cols flex flex-wrap gap-12 md:gap-16">
          <div className="footer-col">
            <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#0b1528] font-bold mb-5">
              Solutions
            </h4>
            <div className="flex flex-col gap-3 font-['Manrope'] text-sm text-slate-500">
              <a href="#analytics" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Digital Marketing</a>
              <a href="#experiments" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Custom Web Apps</a>
              <a href="#sessions" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Conversion Funnels</a>
              <a href="#integrations" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Cloud Integrations</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#0b1528] font-bold mb-5">
              Company
            </h4>
            <div className="flex flex-col gap-3 font-['Manrope'] text-sm text-slate-500">
              <a href="#about" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>About EcoApps</a>
              <a href="#blog" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Case Studies</a>
              <a href="#careers" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Careers</a>
              <a href="#contact" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Contact Support</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] text-[#0b1528] font-bold mb-5">
              Legal
            </h4>
            <div className="flex flex-col gap-3 font-['Manrope'] text-sm text-slate-500">
              <a href="#privacy" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Privacy Policy</a>
              <a href="#terms" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Terms of Service</a>
              <a href="#security" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>Security</a>
              <a href="#gdpr" className="hover:text-sky-600 transition-colors" onMouseEnter={onHover} onMouseLeave={onLeave}>GDPR Compliance</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 text-center sm:text-left">
        <span>© 2026 EcoApps Solutions — Tech & Digital Marketing. All rights reserved.</span>
        <span>Engineered for conversion excellence</span>
      </div>
    </footer>
  );
}
