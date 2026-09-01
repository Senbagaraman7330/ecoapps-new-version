import { forwardRef } from 'react';
import './Constellation.css';
import logoImg from '../assets/logo.webp';

interface ConstellationProps {
  innerRef: React.RefObject<HTMLDivElement | null>;
  onHover: () => void;
  onLeave: () => void;
}

const Constellation = forwardRef<HTMLDivElement, ConstellationProps>(
  ({ innerRef, onHover, onLeave }, ref) => {
    return (
      <div className="constellation relative w-[600px] h-[660px] max-w-full" id="constellation" ref={ref}>
        <svg className="constellation-lines absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 660" preserveAspectRatio="xMidYMid meet">
          {/* top branch */}
          <path d="M 295 64 C 270 90, 220 110, 166 152" />
          <path d="M 305 64 C 330 90, 380 110, 434 152" />
          {/* top to center */}
          <path d="M 166 200 C 175 230, 230 260, 280 285" />
          <path d="M 434 200 C 425 230, 370 260, 320 285" />
          {/* horizontal mid lines */}
          <path d="M 76 305 C 130 305, 200 305, 248 302" />
          <path d="M 524 305 C 470 305, 400 305, 352 302" />
          {/* center down */}
          <path d="M 285 372 C 270 405, 240 440, 214 452" />
          <path d="M 315 372 C 330 405, 360 440, 386 452" />
          {/* pills to inner */}
          <path d="M 110 437 C 145 442, 175 448, 214 452" />
          <path d="M 490 437 C 455 442, 425 448, 386 452" />
          {/* to hex */}
          <path d="M 214 502 C 235 540, 270 575, 300 603" />
          <path d="M 386 502 C 365 540, 330 575, 300 603" />
        </svg>

        <div className="constellation-inner relative w-full h-full z-[1]" id="constellationInner" ref={innerRef}>
          {/* 1. TOP SHIELD (Security & Performance Pill) */}
          <div
            className="tile tile-lock absolute w-16 h-16 cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Verified Security & Quality"
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-sky-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* LEFT HALF: SOCIAL MEDIA & MARKETING PLATFORMS              */}
          {/* ══════════════════════════════════════════════════════════ */}

          {/* 2. GOOGLE (Top-Left Card) */}
          <div
            className="tile tile-expand absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Google Search & Ads Ecosystem"
          >
            <div className="tile-inner tile-cyan-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 relative overflow-hidden group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 48 48" className="w-10 h-10 drop-shadow-sm">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-slate-700 mt-1 uppercase">Google</span>
            </div>
          </div>

          {/* 4. META (Mid-Left Card) */}
          <div
            className="tile tile-cloud absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Meta & Facebook Ads Platform"
          >
            <div className="tile-inner tile-blue-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 56 56" className="w-11 h-11 drop-shadow-sm" fill="none">
                  <defs>
                    <linearGradient id="metaGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0081FB" />
                      <stop offset="50%" stopColor="#0064E0" />
                      <stop offset="100%" stopColor="#004fc4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M13.6 19.2c-5.8 0-9.6 4.3-9.6 9.6 0 5.4 3.8 9.6 9.6 9.6 4.8 0 8.5-3.3 11.5-8.2l2.9-4.7c2.5-4.1 5.3-6.3 8.4-6.3 5.1 0 8.4 3.7 8.4 8.4 0 4.8-3.3 8.5-8.4 8.5-3.1 0-5.9-2.2-8.4-6.3l-1.6-2.6c-.6-.9-1.9-.9-2.5 0l-1.6 2.6c-2.5 4.1-5.3 6.3-8.4 6.3-6.8 0-11.6-5.2-11.6-11.6 0-6.4 4.8-11.6 11.6-11.6 4.1 0 7.6 2.5 10.3 6.9l1.8 2.9c.4.6 1.3.6 1.7 0l1.8-2.9C33.8 17.5 37.3 15 41.4 15c6.8 0 11.6 5.2 11.6 11.6 0 6.4-4.8 11.6-11.6 11.6-4.1 0-7.6-2.5-10.3-6.9l-1.8-2.9c-.4-.6-1.3-.6-1.7 0l-1.8 2.9c-2.7 4.4-6.2 6.9-10.3 6.9-5.1 0-8.4-3.7-8.4-8.4 0-4.8 3.3-8.5 8.4-8.5 3.1 0 5.9 2.2 8.4 6.3l2.9 4.7c3 4.9 6.7 8.2 11.5 8.2 5.8 0 9.6-4.2 9.6-9.6 0-5.3-3.8-9.6-9.6-9.6-3.8 0-6.9 2.2-9.4 6.3l-2.1 3.5c-.4.6-1.3.6-1.7 0l-2.1-3.5c-2.5-4.1-5.6-6.3-9.4-6.3z"
                    fill="url(#metaGradHero)"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-blue-900 mt-1 uppercase">Meta</span>
            </div>
          </div>

          {/* 7. YOUTUBE (Lower-Left Pill) */}
          <div
            className="tile tile-cursor absolute w-16 h-16 cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="YouTube Video & Ad Reach"
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path
                    fill="#FF0000"
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                  />
                  <polygon fill="#FFFFFF" points="9.545,15.568 15.818,12 9.545,8.432" />
                </svg>
              </div>
            </div>
          </div>

          {/* 8. INSTAGRAM (Lower-Left Card) */}
          <div
            className="tile tile-person absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Instagram Brand Growth & Engagement"
          >
            <div className="tile-inner tile-indigo-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 56 56" className="w-10 h-10 drop-shadow-sm" fill="none">
                  <defs>
                    <linearGradient id="instaGradHero" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f58529" />
                      <stop offset="25%" stopColor="#dd2a7b" />
                      <stop offset="60%" stopColor="#8134af" />
                      <stop offset="100%" stopColor="#515bd4" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="10" width="36" height="36" rx="10" stroke="url(#instaGradHero)" strokeWidth="3.6" fill="none" />
                  <circle cx="28" cy="28" r="8" stroke="url(#instaGradHero)" strokeWidth="3.6" fill="none" />
                  <circle cx="38" cy="18" r="2.2" fill="url(#instaGradHero)" />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-purple-900 mt-1 uppercase">Instagram</span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* CENTER: ECOAPPS 3D LOGO CORE                               */}
          {/* ══════════════════════════════════════════════════════════ */}
          <div
            className="tile tile-db absolute w-[156px] h-[132px] cursor-pointer z-[3]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="EcoApps Solutions — Technology & Modern Marketing"
          >
            <div className="tile-inner tile-center-logo w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group relative overflow-hidden">
              {/* Subtle ambient cyan radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,165,233,0.32)_0%,transparent_75%)] pointer-events-none" />

              <div className="relative w-16 h-16 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src={logoImg}
                  alt="EcoApps Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(2,132,199,0.55)]"
                />
              </div>
              <span className="relative z-10 text-[11px] font-extrabold tracking-widest font-['Plus_Jakarta_Sans'] text-white mt-1 uppercase drop-shadow-sm">
                EcoApps
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════ */}
          {/* RIGHT HALF: TECHNOLOGY & SOFTWARE ENGINEERING              */}
          {/* ══════════════════════════════════════════════════════════ */}

          {/* 3. REACT (Top-Right Card) */}
          <div
            className="tile tile-chart absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="React Modern Frontend Architecture"
          >
            <div className="tile-inner tile-blue-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 56 56" className="w-11 h-11 drop-shadow-sm" fill="none">
                  <ellipse cx="28" cy="28" rx="21" ry="8" stroke="#0284c7" strokeWidth="2.2" />
                  <ellipse cx="28" cy="28" rx="21" ry="8" stroke="#0284c7" strokeWidth="2.2" transform="rotate(60 28 28)" />
                  <ellipse cx="28" cy="28" rx="21" ry="8" stroke="#0284c7" strokeWidth="2.2" transform="rotate(120 28 28)" />
                  <circle cx="28" cy="28" r="3.5" fill="#0284c7" />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-sky-900 mt-1 uppercase">React</span>
            </div>
          </div>

          {/* 6. CODE & DEV (Mid-Right Card) */}
          <div
            className="tile tile-thumb absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Full-Stack Custom Development & APIs"
          >
            <div className="tile-inner tile-cyan-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 56 56" className="w-11 h-11 drop-shadow-sm" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 18 L6 28 L16 38" stroke="#0284c7" />
                  <path d="M40 18 L50 28 L40 38" stroke="#0284c7" />
                  <line x1="32" y1="14" x2="24" y2="42" stroke="#6366f1" />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-cyan-900 mt-1 uppercase">Code & API</span>
            </div>
          </div>

          {/* 10. TERMINAL (Lower-Right Pill) */}
          <div
            className="tile tile-thumbpill absolute w-16 h-16 cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Cloud CLI & Terminal Automation"
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-7 h-7 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <polyline points="4 7 10 12 4 17" className="text-sky-400" />
                  <line x1="12" y1="17" x2="20" y2="17" className="text-emerald-400" />
                </svg>
              </div>
            </div>
          </div>

          {/* 9. CLOUD INFRASTRUCTURE (Lower-Right Card) */}
          <div
            className="tile tile-globe absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Cloud Infrastructure & High-Availability Systems"
          >
            <div className="tile-inner tile-indigo-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 56 56" className="w-11 h-11 drop-shadow-sm" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 26 a9 9 0 0 1 17 -4 a11 11 0 0 1 15 10 a7 7 0 0 1 -3 13 L14 45 a7 7 0 0 1 0 -14" stroke="#4f46e5" />
                  <line x1="28" y1="34" x2="28" y2="45" stroke="#0284c7" strokeWidth="2.5" />
                  <polyline points="23 40 28 45 33 40" stroke="#0284c7" strokeWidth="2.5" />
                </svg>
              </div>
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-indigo-950 mt-1 uppercase">Cloud</span>
            </div>
          </div>

          {/* 11. AI / NEURAL NETWORK (Bottom Center Anchor) */}
          <div
            className="tile tile-hex absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            title="Intelligent AI & Neural Automation"
          >
            <div className="tile-inner tile-cyan-grad w-full h-full rounded-[36px] flex flex-col items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105 group">
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11 drop-shadow-sm">
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
              <span className="text-[10px] font-extrabold tracking-wider font-mono text-sky-950 mt-1 uppercase">Neural AI</span>
            </div>
          </div>
        </div>

        {/* Sparkle star */}
        <div className="sparkle absolute w-8 h-8 bottom-7 right-7 text-sky-500 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
        </div>
      </div>
    );
  }
);

Constellation.displayName = 'Constellation';
export default Constellation;
