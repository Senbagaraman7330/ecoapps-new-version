import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MobileAppServicesSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function MobileAppServicesSection({
  onHover,
  onLeave,
}: MobileAppServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurveSvgRef = useRef<SVGSVGElement>(null);
  const topCurvePathRef = useRef<SVGPathElement>(null);
  const bottomCurveSvgRef = useRef<SVGSVGElement>(null);
  const bottomCurvePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. TOP DYNAMIC SCROLL CURVE: Morphs from dome into flat line
      if (topCurveSvgRef.current && topCurvePathRef.current) {
        ScrollTrigger.create({
          trigger: topCurveSvgRef.current,
          start: 'top bottom',
          end: 'bottom 40%',
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const cpY = -80 + p * 320;
            topCurvePathRef.current?.setAttribute(
              'd',
              `M 0,240 C 320,${cpY} 1120,${cpY} 1440,240 L 1440,240 L 0,240 Z`
            );
          },
        });
      }

      // 2. BOTTOM DYNAMIC SCROLL CURVE: Morphs from dome into flat line
      if (bottomCurveSvgRef.current && bottomCurvePathRef.current) {
        ScrollTrigger.create({
          trigger: bottomCurveSvgRef.current,
          start: 'top bottom',
          end: 'bottom 40%',
          scrub: 0.5,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const cpY = -80 + p * 320;
            bottomCurvePathRef.current?.setAttribute(
              'd',
              `M 0,240 C 320,${cpY} 1120,${cpY} 1440,240 L 1440,240 L 0,240 Z`
            );
          },
        });
      }

      // 3. 3D Mouse Tilt on Luxury White Cards
      const cards = containerRef.current?.querySelectorAll<HTMLElement>('.why-card');
      cards?.forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, {
            rotationY: x * 8,
            rotationX: -y * 8,
            y: -6,
            duration: 0.4,
            transformPerspective: 1000,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            duration: 0.7,
            ease: 'elastic.out(1, 0.6)',
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-white overflow-hidden">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 1. TOP DYNAMIC SCROLL CURVE (Morphs from Arch into Flat)   */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full -mb-1 z-20 pointer-events-none">
        <svg
          ref={topCurveSvgRef}
          viewBox="0 0 1440 240"
          className="w-full h-12 sm:h-16 md:h-20 block"
          preserveAspectRatio="none"
        >
          <path
            ref={topCurvePathRef}
            d="M 0,240 C 320,-80 1120,-80 1440,240 L 1440,240 L 0,240 Z"
            fill="#000000"
          />
        </svg>
      </div>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 2. MAIN MOBILE APP SERVICES SECTION (Dark Canvas)          */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            Our Mobile App Development Services
          </div>

          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-center max-w-4xl leading-[1.1]">
            Our Mobile App Development Services
          </h2>

          <p className="text-slate-300 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-7 sm:mb-8 font-medium leading-relaxed font-['Manrope']">
            At Eco Apps Solutions, we design and develop modern, user-friendly, and scalable mobile applications that help businesses connect with customers, streamline operations, improve engagement, and create new digital opportunities.
          </p>

          {/* 3 Luxury White Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4.5 w-full max-w-4xl mb-3 sm:mb-4">
            {/* ── CARD 01: Android App Development ── */}
            <div
              id="services-android"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Android App
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Native</span>{' '}
                  <span className="font-bold">Development</span>
                </div>
              </div>

              {/* Bottom 3D Native Smartphone Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(0,87,255,0.35)]">
                  <defs>
                    <linearGradient id="appBlueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="appBlueGloss1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#appBlueGrad1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#appBlueGloss1)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Native Smartphone Outline & App Icon */}
                    <rect x="68" y="60" width="64" height="96" rx="16" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <line x1="90" y1="70" x2="110" y2="70" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="100" cy="138" r="4.5" fill="#ffffff" />
                    <rect x="80" y="84" width="40" height="38" rx="8" fill="#ffffff" opacity="0.3" />
                    <path d="M 94,96 L 100,102 L 108,94" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: iOS App Development ── */}
            <div
              id="services-ios"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  iOS App
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Apple</span>{' '}
                  <span className="font-bold">Ecosystem</span>
                </div>
              </div>

              {/* Bottom 3D iOS Device Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(99,102,241,0.35)]">
                  <defs>
                    <linearGradient id="appRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </linearGradient>
                    <linearGradient id="appRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#appRibbon1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#appRibbon2)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* iOS Dynamic Island Smartphone & App Store Star */}
                    <rect x="68" y="56" width="64" height="100" rx="18" fill="none" stroke="#ffffff" strokeWidth="6" />
                    {/* Dynamic Island pill */}
                    <rect x="88" y="66" width="24" height="6" rx="3" fill="#ffffff" />
                    {/* Home bar */}
                    <line x1="86" y1="144" x2="114" y2="144" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                    {/* Star Badge */}
                    <polygon points="100,88 104,98 114,99 106,106 108,116 100,111 92,116 94,106 86,99 96,98" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Cross-Platform App Development ── */}
            <div
              id="services-cross"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Cross-Platform
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Unified</span>{' '}
                  <span className="font-bold">Apps</span>
                </div>
              </div>

              {/* Bottom 3D Cross Platform Dual Screen Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(244,63,94,0.4)]">
                  <defs>
                    <linearGradient id="appPinkOrb" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="50%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#881337" />
                    </linearGradient>
                    <linearGradient id="appOrbRim" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#appPinkOrb)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#appOrbRim)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Dual Overlapping Mobile Frames & Sync Arrows */}
                    <rect x="58" y="70" width="48" height="74" rx="10" fill="none" stroke="#ffffff" strokeWidth="5" opacity="0.6" />
                    <rect x="94" y="60" width="48" height="74" rx="10" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <path d="M 76,104 L 88,104 L 88,96" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 116,92 L 104,92 L 104,100" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 3. BOTTOM DYNAMIC SCROLL CURVE (Morphs into White)         */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full -mt-1 z-20 pointer-events-none bg-black">
        <svg
          ref={bottomCurveSvgRef}
          viewBox="0 0 1440 240"
          className="w-full h-12 sm:h-16 md:h-20 block"
          preserveAspectRatio="none"
        >
          <path
            ref={bottomCurvePathRef}
            d="M 0,240 C 320,-80 1120,-80 1440,240 L 1440,240 L 0,240 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
