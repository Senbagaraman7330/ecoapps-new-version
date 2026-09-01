import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/EcoApps-Logo.webp';

interface HeaderProps {
  onHover: () => void;
  onLeave: () => void;
}

const marketingServices = [
  { name: 'SEO service', href: '#seo-service' },
  { name: 'AI SEO Service', href: '#ai-seo-service' },
  { name: 'Paid ads and PPC', href: '#paid-ads-ppc' },
  { name: 'Social media marketing', href: '#social-media-marketing' },
  { name: 'Ecommerce marketing', href: '#ecommerce-marketing' },
  { name: 'B2B marketing', href: '#b2b-marketing' },
];

const softwareServices = [
  { name: 'AI automation and AI agents', href: '#ai-automation-agents' },
  { name: 'Custom developments', href: '#custom-developments' },
  { name: 'CRM automation', href: '#crm-automation' },
  { name: 'Website development', href: '#website-development' },
  { name: 'Mobile app development', href: '#mobile-app-development' },
];

export default function Header({ onHover, onLeave }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<'marketing' | 'software' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<'marketing' | 'software' | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: 'marketing' | 'software') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
    onHover();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    onLeave();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/70 transition-all duration-300 w-full">
      <div className="w-full max-w-[1520px] mx-auto flex items-center justify-between px-6 sm:px-10 md:px-12 lg:px-16 py-4 md:py-5">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0 pr-6 xl:pr-10">
          <a
            href="#"
            className="flex items-center gap-3 select-none cursor-pointer transition-transform duration-300 hover:scale-[1.02] z-20"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <img
              src={logoImg}
              alt="EcoApps Solutions - Tech & Digital Marketing"
              className="h-10 md:h-12 w-auto object-contain drop-shadow-xs"
            />
          </a>
        </div>

        {/* Desktop Navigation Menus */}
        <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 font-['Manrope'] text-[15px] font-bold text-slate-800">
          {/* 1. Home */}
          <a
            href="#"
            className="relative px-3 py-2 transition-colors duration-200 hover:text-[#0057ff] group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0057ff] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </a>

          {/* 2. Marketing services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('marketing')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'marketing' ? null : 'marketing')}
              className={`relative flex items-center gap-1.5 px-3 py-2 transition-colors duration-200 cursor-pointer ${
                activeDropdown === 'marketing' ? 'text-[#0057ff]' : 'text-slate-800 hover:text-[#0057ff]'
              }`}
            >
              <span>Marketing services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 stroke-[2.5] ${
                  activeDropdown === 'marketing' ? 'rotate-180 text-[#0057ff]' : 'text-slate-600'
                }`}
              />
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0057ff] rounded-full transition-all duration-200 ${
                  activeDropdown === 'marketing' ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>

            {/* Dropdown Menu Panel */}
            <div
              className={`absolute top-full left-0 pt-3.5 transition-all duration-200 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 ${
                activeDropdown === 'marketing'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-2 invisible pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 min-w-[280px] flex flex-col gap-0.5">
                {marketingServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="px-4 py-3 rounded-xl font-bold text-[14px] text-slate-800 hover:text-[#0057ff] hover:bg-blue-50/70 transition-colors flex items-center justify-between group cursor-pointer"
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-[#0057ff]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Software services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('software')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'software' ? null : 'software')}
              className={`relative flex items-center gap-1.5 px-3 py-2 transition-colors duration-200 cursor-pointer ${
                activeDropdown === 'software' ? 'text-[#0057ff]' : 'text-slate-800 hover:text-[#0057ff]'
              }`}
            >
              <span>Software services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 stroke-[2.5] ${
                  activeDropdown === 'software' ? 'rotate-180 text-[#0057ff]' : 'text-slate-600'
                }`}
              />
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0057ff] rounded-full transition-all duration-200 ${
                  activeDropdown === 'software' ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>

            {/* Dropdown Menu Panel */}
            <div
              className={`absolute top-full left-0 pt-3.5 transition-all duration-200 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4 ${
                activeDropdown === 'software'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-2 invisible pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 min-w-[300px] flex flex-col gap-0.5">
                {softwareServices.map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="px-4 py-3 rounded-xl font-bold text-[14px] text-slate-800 hover:text-[#0057ff] hover:bg-blue-50/70 transition-colors flex items-center justify-between group cursor-pointer"
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-[#0057ff]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 4. About */}
          <a
            href="#case-studies"
            className="relative px-3 py-2 transition-colors duration-200 hover:text-[#0057ff] group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>About</span>
            <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0057ff] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </a>

          {/* 5. Contact */}
          <a
            href="#contact"
            className="relative px-3 py-2 transition-colors duration-200 hover:text-[#0057ff] group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#0057ff] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </a>
        </nav>

        {/* Right Action CTA Button */}
        <div className="hidden lg:flex items-center shrink-0 pl-6 xl:pl-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 font-['Manrope'] text-[14px] font-bold text-[#0b1528] bg-white border-[1.5px] border-[#0b1528] rounded-xl shadow-[0_4px_0_#0b1528] hover:translate-y-0.5 hover:shadow-[0_2px_0_#0b1528] hover:bg-slate-50 active:translate-y-1 active:shadow-none transition-all duration-200 cursor-pointer whitespace-nowrap"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Book Strategy Call
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors z-20 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 font-['Manrope'] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-[16px] text-slate-900 py-1"
            >
              Home
            </a>

            {/* Mobile Marketing Services Accordion */}
            <div className="border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === 'marketing' ? null : 'marketing')}
                className="w-full flex items-center justify-between font-bold text-[16px] text-slate-900 py-1"
              >
                <span>Marketing services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileExpanded === 'marketing' ? 'rotate-180 text-[#0057ff]' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'marketing' && (
                <div className="pl-3 pt-2 pb-1 flex flex-col gap-2">
                  {marketingServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-medium text-[14px] text-slate-600 hover:text-[#0057ff] py-1.5"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Software Services Accordion */}
            <div className="border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setMobileExpanded(mobileExpanded === 'software' ? null : 'software')}
                className="w-full flex items-center justify-between font-bold text-[16px] text-slate-900 py-1"
              >
                <span>Software services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileExpanded === 'software' ? 'rotate-180 text-[#0057ff]' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'software' && (
                <div className="pl-3 pt-2 pb-1 flex flex-col gap-2">
                  {softwareServices.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-medium text-[14px] text-slate-600 hover:text-[#0057ff] py-1.5"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="border-t border-slate-100 pt-3 font-bold text-[16px] text-slate-900 py-1"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="border-t border-slate-100 pt-3 font-bold text-[16px] text-slate-900 py-1"
            >
              Contact
            </a>

            <div className="pt-4 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center inline-flex items-center gap-2.5 px-5 py-3 font-['Manrope'] text-[14px] font-bold text-[#0b1528] bg-white border-[1.5px] border-[#0b1528] rounded-xl shadow-[0_4px_0_#0b1528]"
              >
                Book Strategy Call
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
