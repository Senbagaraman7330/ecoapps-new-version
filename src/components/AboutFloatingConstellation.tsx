import './Constellation.css';
import './AboutFloatingConstellation.css';

interface AboutFloatingConstellationProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function AboutFloatingConstellation({
  onHover,
  onLeave,
}: AboutFloatingConstellationProps) {
  return (
    <div className="about-floating-container" aria-hidden="true">
      <div className="about-floating-wrapper">
        {/* ── 1. GOOGLE (Top Left) ── */}
        <div
          className="about-float-item about-tile-google w-[118px] h-[96px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Google Ecosystem & Search Engine Marketing"
        >
          <div className="tile-inner tile-cyan-grad w-full h-full rounded-[26px] flex flex-col items-center justify-center relative overflow-hidden group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 48 48" className="w-7 h-7 drop-shadow-sm">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold tracking-wider font-mono text-slate-700 mt-1 uppercase">Google</span>
          </div>
        </div>

        {/* ── 2. REACT (Top Right) ── */}
        <div
          className="about-float-item about-tile-react w-[118px] h-[96px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Modern React Frontend Architecture"
        >
          <div className="tile-inner tile-blue-grad w-full h-full rounded-[26px] flex flex-col items-center justify-center group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 56 56" className="w-7 h-7 drop-shadow-sm" fill="none">
                <ellipse cx="28" cy="28" rx="21" ry="8" stroke="#0284c7" strokeWidth="2.2" />
                <ellipse cx="28" cy="28" rx="21" ry="8" stroke="#0284c7" strokeWidth="2.2" transform="rotate(60 28 28)" />
                <ellipse cx="28" cy="28" rx="21" ry="8" stroke="#0284c7" strokeWidth="2.2" transform="rotate(120 28 28)" />
                <circle cx="28" cy="28" r="3.5" fill="#0284c7" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold tracking-wider font-mono text-sky-900 mt-1 uppercase">React</span>
          </div>
        </div>

        {/* ── 3. META (Mid Left) ── */}
        <div
          className="about-float-item about-tile-meta w-[118px] h-[96px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Meta & Instagram Ads Platform"
        >
          <div className="tile-inner tile-blue-grad w-full h-full rounded-[26px] flex flex-col items-center justify-center group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 56 56" className="w-7 h-7 drop-shadow-sm" fill="none">
                <defs>
                  <linearGradient id="metaGradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0081FB" />
                    <stop offset="50%" stopColor="#0064E0" />
                    <stop offset="100%" stopColor="#004fc4" />
                  </linearGradient>
                </defs>
                <path
                  d="M13.6 19.2c-5.8 0-9.6 4.3-9.6 9.6 0 5.4 3.8 9.6 9.6 9.6 4.8 0 8.5-3.3 11.5-8.2l2.9-4.7c2.5-4.1 5.3-6.3 8.4-6.3 5.1 0 8.4 3.7 8.4 8.4 0 4.8-3.3 8.5-8.4 8.5-3.1 0-5.9-2.2-8.4-6.3l-1.6-2.6c-.6-.9-1.9-.9-2.5 0l-1.6 2.6c-2.5 4.1-5.3 6.3-8.4 6.3-6.8 0-11.6-5.2-11.6-11.6 0-6.4 4.8-11.6 11.6-11.6 4.1 0 7.6 2.5 10.3 6.9l1.8 2.9c.4.6 1.3.6 1.7 0l1.8-2.9C33.8 17.5 37.3 15 41.4 15c6.8 0 11.6 5.2 11.6 11.6 0 6.4-4.8 11.6-11.6 11.6-4.1 0-7.6-2.5-10.3-6.9l-1.8-2.9c-.4-.6-1.3-.6-1.7 0l-1.8 2.9c-2.7 4.4-6.2 6.9-10.3 6.9-5.1 0-8.4-3.7-8.4-8.4 0-4.8 3.3-8.5 8.4-8.5 3.1 0 5.9 2.2 8.4 6.3l2.9 4.7c3 4.9 6.7 8.2 11.5 8.2 5.8 0 9.6-4.2 9.6-9.6 0-5.3-3.8-9.6-9.6-9.6-3.8 0-6.9 2.2-9.4 6.3l-2.1 3.5c-.4.6-1.3.6-1.7 0l-2.1-3.5c-2.5-4.1-5.6-6.3-9.4-6.3z"
                  fill="url(#metaGradAbout)"
                />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold tracking-wider font-mono text-blue-900 mt-1 uppercase">Meta</span>
          </div>
        </div>

        {/* ── 4. CODE & DEV (Mid Right) ── */}
        <div
          className="about-float-item about-tile-code w-[118px] h-[96px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Custom Development & Intelligent APIs"
        >
          <div className="tile-inner tile-cyan-grad w-full h-full rounded-[26px] flex flex-col items-center justify-center group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 56 56" className="w-7 h-7 drop-shadow-sm" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 18 L6 28 L16 38" stroke="#0284c7" />
                <path d="M40 18 L50 28 L40 38" stroke="#0284c7" />
                <line x1="32" y1="14" x2="24" y2="42" stroke="#6366f1" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold tracking-wider font-mono text-cyan-900 mt-1 uppercase">Code &amp; API</span>
          </div>
        </div>

        {/* ── 5. INSTAGRAM (Bottom Left) ── */}
        <div
          className="about-float-item about-tile-insta w-[118px] h-[96px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Instagram Brand Growth & Content"
        >
          <div className="tile-inner tile-indigo-grad w-full h-full rounded-[26px] flex flex-col items-center justify-center group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 56 56" className="w-7 h-7 drop-shadow-sm" fill="none">
                <defs>
                  <linearGradient id="instaGradAbout" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="25%" stopColor="#dd2a7b" />
                    <stop offset="60%" stopColor="#8134af" />
                    <stop offset="100%" stopColor="#515bd4" />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="36" height="36" rx="10" stroke="url(#instaGradAbout)" strokeWidth="3.6" fill="none" />
                <circle cx="28" cy="28" r="8" stroke="url(#instaGradAbout)" strokeWidth="3.6" fill="none" />
                <circle cx="38" cy="18" r="2.2" fill="url(#instaGradAbout)" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold tracking-wider font-mono text-purple-900 mt-1 uppercase">Instagram</span>
          </div>
        </div>

        {/* ── 6. CLOUD (Bottom Right) ── */}
        <div
          className="about-float-item about-tile-cloud w-[118px] h-[96px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Scalable Cloud Infrastructure"
        >
          <div className="tile-inner tile-indigo-grad w-full h-full rounded-[26px] flex flex-col items-center justify-center group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 56 56" className="w-7 h-7 drop-shadow-sm" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 26 a9 9 0 0 1 17 -4 a11 11 0 0 1 15 10 a7 7 0 0 1 -3 13 L14 45 a7 7 0 0 1 0 -14" stroke="#4f46e5" />
                <line x1="28" y1="34" x2="28" y2="45" stroke="#0284c7" strokeWidth="2.5" />
                <polyline points="23 40 28 45 33 40" stroke="#0284c7" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="text-[9px] font-extrabold tracking-wider font-mono text-indigo-950 mt-1 uppercase">Cloud</span>
          </div>
        </div>

        {/* ── 7. SHIELD PILL (Top Center-Left) ── */}
        <div
          className="about-float-item about-pill-shield w-12 h-12 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Verified Security & Quality"
        >
          <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center shadow-md">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-sky-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 8. TERMINAL PILL (Top Center-Right) ── */}
        <div
          className="about-float-item about-pill-terminal w-12 h-12 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Automation & Fast Tooling"
        >
          <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center shadow-md">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <polyline points="4 7 10 12 4 17" className="text-sky-400" />
                <line x1="12" y1="17" x2="20" y2="17" className="text-emerald-400" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 9. YOUTUBE PILL (Bottom Left-Center) ── */}
        <div
          className="about-float-item about-pill-youtube w-12 h-12 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="High-Reach Video Strategy"
        >
          <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center shadow-md">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4.5 h-4.5">
                <path
                  fill="#FF0000"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                />
                <polygon fill="#FFFFFF" points="9.545,15.568 15.818,12 9.545,8.432" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── 10. NEURAL AI HEX (Bottom Right-Center) ── */}
        <div
          className="about-float-item about-tile-neural w-[114px] h-[94px] cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          title="Intelligent Neural AI & Agents"
        >
          <div className="tile-inner tile-cyan-grad w-full h-full rounded-[24px] flex flex-col items-center justify-center group shadow-md">
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 drop-shadow-sm">
                <path d="M28 6 L46 16 L46 38 L28 48 L10 38 L10 16 Z" className="text-sky-600" />
                <circle cx="28" cy="6" r="2.5" fill="#0284c7" />
                <circle cx="46" cy="16" r="2.5" fill="#0284c7" />
                <circle cx="46" cy="38" r="2.5" fill="#0284c7" />
                <circle cx="28" cy="48" r="2.5" fill="#0284c7" />
                <circle cx="10" cy="38" r="2.5" fill="#0284c7" />
                <circle cx="10" cy="16" r="2.5" fill="#0284c7" />
                <circle cx="28" cy="27" r="4" fill="#4f46e5" />
                <path d="M28 27 L28 6 M28 27 L46 16 M28 27 L46 38 M28 27 L28 48 M28 27 L10 38 M28 27 L10 16" strokeWidth="1.5" className="text-sky-500" />
              </svg>
            </div>
            <span className="text-[8.5px] font-extrabold tracking-wider font-mono text-sky-950 mt-0.5 uppercase">Neural AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
