import { forwardRef } from 'react';
import './Constellation.css';

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
          {/* 1. TOP LOCK (Navy Pill) */}
          <div
            className="tile tile-lock absolute w-16 h-16 cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </div>
            </div>
          </div>

          {/* 2. SKY CYAN EXPAND */}
          <div
            className="tile tile-expand absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-cyan-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <circle cx="28" cy="28" r="22" strokeOpacity="0.15" />
                  <path d="M14 14 L24 24 M14 14 L14 21 M14 14 L21 14" />
                  <path d="M42 14 L32 24 M42 14 L42 21 M42 14 L35 14" />
                  <path d="M14 42 L24 32 M14 42 L14 35 M14 42 L21 42" />
                  <path d="M42 42 L32 32 M42 42 L42 35 M42 42 L35 42" />
                </svg>
              </div>
            </div>
          </div>

          {/* 3. ROYAL BLUE CHART */}
          <div
            className="tile tile-chart absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-blue-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <rect x="8" y="12" width="40" height="28" rx="2" />
                  <line x1="28" y1="40" x2="28" y2="48" />
                  <line x1="22" y1="48" x2="34" y2="48" />
                  <line x1="16" y1="32" x2="16" y2="36" />
                  <line x1="22" y1="26" x2="22" y2="36" />
                  <line x1="28" y1="22" x2="28" y2="36" />
                  <line x1="34" y1="28" x2="34" y2="36" />
                  <line x1="40" y1="18" x2="40" y2="36" />
                </svg>
              </div>
            </div>
          </div>

          {/* 4. INDIGO CLOUD */}
          <div
            className="tile tile-cloud absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-indigo-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M16 30 a8 8 0 0 1 4-15 a10 10 0 0 1 19 4 a6 6 0 0 1 0 11 Z" />
                  <circle cx="18" cy="42" r="1.4" fill="currentColor" />
                  <circle cx="26" cy="44" r="1.4" fill="currentColor" />
                  <circle cx="34" cy="42" r="1.4" fill="currentColor" />
                  <circle cx="22" cy="48" r="1.2" fill="currentColor" />
                  <circle cx="30" cy="48" r="1.2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* 5. BLACK DATABASE (CENTER) */}
          <div
            className="tile tile-db absolute w-[156px] h-[132px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <ellipse cx="28" cy="14" rx="14" ry="5" />
                  <path d="M14 14 v14 a14 5 0 0 0 28 0 v-14" />
                  <path d="M14 28 v14 a14 5 0 0 0 28 0 v-14" />
                </svg>
              </div>
            </div>
          </div>

          {/* 6. SKY CYAN THUMB */}
          <div
            className="tile tile-thumb absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-cyan-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M14 28 L14 46 L20 46 L20 28 Z" />
                  <path d="M20 30 L26 18 a3 3 0 0 1 5.5 2.5 L29 28 L40 28 a4 4 0 0 1 4 4.5 L42 42 a4 4 0 0 1 -4 4 L24 46" />
                  <path d="M30 12 L32 16 M36 14 L36 18 M40 18 L37 20" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>

          {/* 7. CURSOR PILL */}
          <div
            className="tile tile-cursor absolute w-16 h-16 cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" className="w-full h-full">
                  <path d="M7 4 L7 18 L11 14 L14 20 L17 19 L14 13 L18 13 Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* 8. ROYAL BLUE PERSON */}
          <div
            className="tile tile-person absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-blue-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <circle cx="28" cy="28" r="20" strokeDasharray="6 4" />
                  <circle cx="28" cy="22" r="6" />
                  <path d="M16 40 a12 10 0 0 1 24 0" />
                  <path d="M44 18 L48 18 L48 14" />
                  <path d="M12 38 L8 38 L8 42" />
                </svg>
              </div>
            </div>
          </div>

          {/* 9. INDIGO GLOBE */}
          <div
            className="tile tile-globe absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-indigo-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <circle cx="28" cy="28" r="18" />
                  <ellipse cx="28" cy="28" rx="18" ry="7" />
                  <ellipse cx="28" cy="28" rx="7" ry="18" />
                  <path d="M10 28 L46 28" />
                  <path d="M28 10 L28 46" />
                </svg>
              </div>
            </div>
          </div>

          {/* 10. THUMB UP PILL */}
          <div
            className="tile tile-thumbpill absolute w-16 h-16 cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-navy-grad w-full h-full rounded-full flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M7 11v9a1 1 0 0 0 1 1h2v-10z" />
                  <path d="M10 11l3-7a2 2 0 0 1 3.5 1.5L15.5 10H19a2 2 0 0 1 2 2.3l-1 6a2 2 0 0 1-2 1.7H10" />
                </svg>
              </div>
            </div>
          </div>

          {/* 11. SKY CYAN HEXAGON */}
          <div
            className="tile tile-hex absolute w-[142px] h-[118px] cursor-pointer z-[2]"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="tile-inner tile-cyan-grad w-full h-full rounded-[36px] flex items-center justify-center transition-transform duration-400 hover:-translate-y-2.5 hover:scale-105">
              <div className="w-1/2 h-1/2 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:-rotate-3">
                <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M28 6 L46 16 L46 38 L28 48 L10 38 L10 16 Z" />
                  <circle cx="28" cy="6" r="2.5" fill="currentColor" />
                  <circle cx="46" cy="16" r="2.5" fill="currentColor" />
                  <circle cx="46" cy="38" r="2.5" fill="currentColor" />
                  <circle cx="28" cy="48" r="2.5" fill="currentColor" />
                  <circle cx="10" cy="38" r="2.5" fill="currentColor" />
                  <circle cx="10" cy="16" r="2.5" fill="currentColor" />
                  <circle cx="28" cy="27" r="3.5" fill="currentColor" />
                  <path d="M28 27 L28 6 M28 27 L46 16 M28 27 L46 38 M28 27 L28 48 M28 27 L10 38 M28 27 L10 16" strokeWidth="1.3" />
                </svg>
              </div>
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
