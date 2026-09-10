import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-ecoapps.png';

interface HeaderProps {
  onHover: () => void;
  onLeave: () => void;
}

const marketingServices = [
  { name: 'SEO & AI SEO Services', href: '/seo-service' },
  { name: 'Paid ads and PPC', href: '/paid-ads-ppc' },
  { name: 'Social media marketing', href: '/social-media-marketing' },
  { name: 'Ecommerce marketing', href: '/ecommerce-marketing' },
  { name: 'B2B marketing', href: '/b2b-marketing' },
];

const softwareServices = [
  { name: 'AI automation and AI agents', href: '/ai-automation' },
  { name: 'Custom developments', href: '/custom-software-development' },
  { name: 'CRM automation', href: '/crm-automation' },
  { name: 'Website development', href: '/website-development' },
  { name: 'Mobile app development', href: '/mobile-app-development' },
];

export default function Header({ onHover, onLeave }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<'marketing' | 'software' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<'marketing' | 'software' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
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
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (scrollY > lastScrollY.current && scrollY > 80) {
        setIsHidden(true);
      } else if (scrollY < lastScrollY.current) {
        setIsHidden(false);
      }
      
      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close the mobile drawer automatically if the viewport grows back into
  // the desktop breakpoint (e.g. rotating a tablet, or resizing a window).
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock background scroll while the mobile drawer is open, so the sheet
  // reads as a modal rather than fighting page scroll underneath it.
  useEffect(() => {
    if (mobileMenuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isHidden && !mobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_-6px_rgba(11,21,40,0.08)] border-b border-slate-200/80 py-3 md:py-3.5'
          : 'bg-white/90 backdrop-blur-lg border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(11,21,40,0.03)] py-4 md:py-5'
      }`}
    >
      <div
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
        className="w-full max-w-[1520px] mx-auto flex items-center justify-between px-6 sm:px-10 md:px-12 lg:px-16"
      >
        {/* Brand Logo */}
        <div className="flex items-center shrink-0 pr-6 xl:pr-10">
          <Link
            to="/"
            className="flex items-center gap-3 select-none cursor-pointer transition-transform duration-200 hover:scale-[1.02] z-20"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <img
              src={logoImg}
              alt="EcoApps Solutions - Tech & Digital Marketing"
              className={`w-auto object-contain drop-shadow-xs transition-all duration-300 ${
                isScrolled
                  ? 'h-9 sm:h-9 md:h-[36px]'
                  : 'h-10 sm:h-10 md:h-[42px]'
              }`}
            />
          </Link>
        </div>

        {/* Desktop Navigation Menus */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-9 font-['Manrope'] text-[15px] xl:text-[15.5px] font-semibold text-slate-700">
          {/* 1. Home */}
          <Link
            to="/"
            className="relative px-3 py-1.5 transition-colors duration-200 hover:text-[#0057ff] group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </Link>

          {/* 2. Marketing services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('marketing')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'marketing' ? null : 'marketing')}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 transition-colors duration-200 cursor-pointer ${
                activeDropdown === 'marketing' ? 'text-[#0057ff]' : 'text-slate-700 hover:text-[#0057ff]'
              }`}
            >
              <span>Marketing services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${
                  activeDropdown === 'marketing' ? 'rotate-180 text-[#0057ff]' : 'text-slate-500'
                }`}
              />
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] rounded-full transition-all duration-200 ${
                  activeDropdown === 'marketing' ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>

            {/* Dropdown Menu Panel */}
            <div
              className={`absolute top-full left-0 pt-2.5 transition-all duration-200 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${
                activeDropdown === 'marketing'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-2 invisible pointer-events-none'
              }`}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-[0_16px_40px_-6px_rgba(11,21,40,0.12)] border border-slate-100 min-w-[275px] flex flex-col gap-0.5">
                {marketingServices.map((service, index) => {
                  const isRoute = service.href.startsWith('/');
                  const itemContent = (
                    <>
                      <span>{service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-[#0057ff]" />
                    </>
                  );
                  const itemClass = "px-4 py-3 rounded-xl font-bold text-[14px] text-slate-800 hover:text-[#0057ff] hover:bg-blue-50/70 transition-colors flex items-center justify-between group cursor-pointer";

                  return isRoute ? (
                    <Link
                      key={index}
                      to={service.href}
                      className={itemClass}
                      onClick={() => setActiveDropdown(null)}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      {itemContent}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={service.href}
                      className={itemClass}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      {itemContent}
                    </a>
                  );
                })}
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
              className={`relative flex items-center gap-1.5 px-3 py-1.5 transition-colors duration-200 cursor-pointer ${
                activeDropdown === 'software' ? 'text-[#0057ff]' : 'text-slate-700 hover:text-[#0057ff]'
              }`}
            >
              <span>Software services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 stroke-[2.5] ${
                  activeDropdown === 'software' ? 'rotate-180 text-[#0057ff]' : 'text-slate-500'
                }`}
              />
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] rounded-full transition-all duration-200 ${
                  activeDropdown === 'software' ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>

            {/* Dropdown Menu Panel */}
            <div
              className={`absolute top-full left-0 pt-2.5 transition-all duration-200 before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-3 ${
                activeDropdown === 'software'
                  ? 'opacity-100 translate-y-0 visible pointer-events-auto'
                  : 'opacity-0 translate-y-2 invisible pointer-events-none'
              }`}
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-[0_16px_40px_-6px_rgba(11,21,40,0.12)] border border-slate-100 min-w-[280px] flex flex-col gap-0.5">
                {softwareServices.map((service, index) => {
                  const isRoute = service.href.startsWith('/');
                  const itemContent = (
                    <>
                      <span>{service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-[#0057ff]" />
                    </>
                  );
                  const itemClass = "px-4 py-3 rounded-xl font-bold text-[14px] text-slate-800 hover:text-[#0057ff] hover:bg-blue-50/70 transition-colors flex items-center justify-between group cursor-pointer";

                  return isRoute ? (
                    <Link
                      key={index}
                      to={service.href}
                      className={itemClass}
                      onClick={() => setActiveDropdown(null)}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      {itemContent}
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={service.href}
                      className={itemClass}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      {itemContent}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4. About */}
          <Link
            to="/about"
            className="relative px-3 py-1.5 transition-colors duration-200 hover:text-[#0057ff] group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>About</span>
            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </Link>

          {/* 5. Contact */}
          <Link
            to="/contact"
            className="relative px-3 py-1.5 transition-colors duration-200 hover:text-[#0057ff] group cursor-pointer"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Contact</span>
            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
          </Link>
        </nav>

        {/* Right Action CTA Button - Blue Style */}
        <div className="hidden lg:flex items-center shrink-0 pl-6 xl:pl-8">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 font-['Manrope'] font-bold text-white bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] hover:from-[#004cd6] hover:to-[#0284c7] rounded-xl shadow-[0_4px_14px_rgba(0,87,255,0.35)] hover:shadow-[0_6px_20px_rgba(0,87,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap ${
              isScrolled ? 'px-4 py-1.5 text-[12.5px]' : 'px-5 py-2 text-[13.5px]'
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </Link>
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 font-['Manrope'] shadow-xl animate-in slide-in-from-top-2 fade-in duration-250 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-[16px] text-slate-900 py-1"
            >
              Home
            </Link>

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
                  {marketingServices.map((service, index) => {
                    const isRoute = service.href.startsWith('/');
                    return isRoute ? (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-medium text-[14px] text-slate-600 hover:text-[#0057ff] py-1.5"
                      >
                        {service.name}
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-medium text-[14px] text-slate-600 hover:text-[#0057ff] py-1.5"
                      >
                        {service.name}
                      </a>
                    );
                  })}
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
                  {softwareServices.map((service, index) => {
                    const isRoute = service.href.startsWith('/');
                    return isRoute ? (
                      <Link
                        key={index}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-medium text-[14px] text-slate-600 hover:text-[#0057ff] py-1.5"
                      >
                        {service.name}
                      </Link>
                    ) : (
                      <a
                        key={index}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-medium text-[14px] text-slate-600 hover:text-[#0057ff] py-1.5"
                      >
                        {service.name}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="border-t border-slate-100 pt-3 font-bold text-[16px] text-slate-900 py-1"
            >
              About
            </Link>

            <Link
              to="/faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="border-t border-slate-100 pt-3 font-bold text-[16px] text-slate-900 py-1"
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="border-t border-slate-100 pt-3 font-bold text-[16px] text-slate-900 py-1"
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center inline-flex items-center gap-2.5 px-5 py-3 font-['Manrope'] text-[14px] font-bold text-white bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] rounded-xl shadow-[0_4px_14px_rgba(0,87,255,0.35)]"
              >
                Book Strategy Call
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
