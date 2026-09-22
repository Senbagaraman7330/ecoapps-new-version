import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import logoImg from '../assets/logo-ecoapps.png';

interface FooterProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function Footer({ onHover, onLeave }: FooterProps) {
  return (
    <footer className="site-footer footer-glass relative z-10 w-full overflow-hidden border-t border-sky-200/80 pt-6 md:pt-8 pb-4 md:pb-5" id="footer">
      {/* ── Ambient Glowing Background Atmosphere in EcoApps Rhythm ── */}
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none overflow-hidden" aria-hidden="true">
        {/* Sky / Cyan Primary Glow Orb */}
        <div className="absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />
        {/* Cobalt / Royal Blue Secondary Glow Orb */}
        <div className="absolute right-1/4 -bottom-16 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      {/* Top-edge ambient glass shimmer */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

      {/* ── Inner Content Container Centered across Screen ── */}
      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 pb-6 border-b border-slate-200/80">

          {/* Brand & Strategy Call to Action */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Link
              to="/"
              className="inline-block mb-2.5 transition-transform hover:scale-[1.02]"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <img
                src={logoImg}
                alt="EcoApps Solutions - Tech & Digital Marketing"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="font-['Manrope'] text-[12.5px] leading-relaxed text-slate-600 mb-2.5 max-w-sm">
              Next-generation digital marketing and technology solutions helping businesses grow online.
            </p>



            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 font-['Manrope'] font-bold text-white bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] hover:from-[#004cd6] hover:to-[#0284c7] rounded-lg shadow-[0_3px_10px_rgba(0,87,255,0.25)] px-3.5 py-1.5 text-[11.5px] cursor-pointer mb-3.5"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-3 h-3 text-white" />
            </Link>

            {/* Social Channels: LinkedIn, YouTube, Instagram, Facebook */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/eco-apps-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-lg bg-white/90 border border-slate-200 text-slate-600 hover:text-[#0057ff] hover:border-sky-300 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/@ecoappssolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 rounded-lg bg-white/90 border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-300 hover:bg-red-50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/eco_apps_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 rounded-lg bg-white/90 border border-slate-200 text-slate-600 hover:text-[#0057ff] hover:border-sky-300 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/ecoappssolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 rounded-lg bg-white/90 border border-slate-200 text-slate-600 hover:text-[#0057ff] hover:border-sky-300 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <svg className="w-3 h-3 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 lg:gap-4">

            {/* 1. Company */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[0.14em] text-[#0b1528] font-bold mb-2 pb-1 border-b border-slate-200/80">
                Company
              </h4>
              <ul className="flex flex-col gap-1.5 font-['Manrope'] text-[12.5px] text-slate-600">
                <li>
                  <Link to="/" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Marketing Services */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[0.14em] text-[#0b1528] font-bold mb-2 pb-1 border-b border-slate-200/80">
                Marketing
              </h4>
              <ul className="flex flex-col gap-1.5 font-['Manrope'] text-[12.5px] text-slate-600">
                <li>
                  <Link to="/seo-service" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    SEO &amp; AI SEO Services
                  </Link>
                </li>
                <li>
                  <Link to="/social-media-marketing" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link to="/ecommerce-marketing" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Ecommerce Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/b2b-marketing" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    B2B Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3. Development Services */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[0.14em] text-[#0b1528] font-bold mb-2 pb-1 border-b border-slate-200/80">
                Development
              </h4>
              <ul className="flex flex-col gap-1.5 font-['Manrope'] text-[12.5px] text-slate-600">
                <li>
                  <Link to="/website-development" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link to="/mobile-app-development" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/custom-software-development" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    Custom Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4. Resources */}
            <div className="flex flex-col">
              <h4 className="font-['JetBrains_Mono'] text-[10.5px] uppercase tracking-[0.14em] text-[#0b1528] font-bold mb-2 pb-1 border-b border-slate-200/80">
                Resources
              </h4>
              <ul className="flex flex-col gap-1.5 font-['Manrope'] text-[12.5px] text-slate-600">
                <li>
                  <Link to="/faqs" className="hover:text-[#0057ff] hover:translate-x-0.5 inline-block transition-all" onMouseEnter={onHover} onMouseLeave={onLeave}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-2.5 font-['JetBrains_Mono'] text-[10.5px] tracking-wide text-slate-500 text-center md:text-left">
          <div>
            © 2026 <span className="font-semibold text-slate-700">Eco Apps Solutions</span> — A Unit of{' '}
            <a
              href="https://dataapps.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-700 hover:text-[#0057ff] transition-colors underline decoration-slate-300 hover:decoration-[#0057ff]"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              Data Apps Technologies
            </a>
            . All Rights Reserved.
          </div>
          <a
            href="https://www.google.com/maps/place/Eco+Apps+Solutions/@10.9675734,76.9764262,17z/data=!4m6!3m5!1s0x3ba85b9c03939a49:0xeccdd74bb2b11d79!8m2!3d10.9677379!4d76.9789687!16s%2Fg%2F11z732wxqb?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-[#0057ff] font-medium bg-white/70 hover:bg-white px-2.5 py-0.5 rounded-full border border-slate-200/70 hover:border-sky-300 shadow-2xs transition-all duration-150 cursor-pointer text-[10px]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <MapPin className="w-3 h-3 text-[#0057ff] shrink-0" />
            <span>Coimbatore</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
