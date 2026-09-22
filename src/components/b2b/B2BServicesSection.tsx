import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface B2BServicesSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function B2BServicesSection({ onHover, onLeave }: B2BServicesSectionProps) {
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
            const cpY = 0 + p * 200;
            topCurvePathRef.current?.setAttribute(
              'd',
              `M 0,200 C 320,${cpY} 1120,${cpY} 1440,200 L 1440,200 L 0,200 Z`
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
            const cpY = 0 + p * 200;
            bottomCurvePathRef.current?.setAttribute(
              'd',
              `M 0,200 C 320,${cpY} 1120,${cpY} 1440,200 L 1440,200 L 0,200 Z`
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
            duration: 0.6,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#f8fafc] overflow-hidden" id="b2b-services">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 1. TOP CURVED DOME TRANSITION (White to Black)             */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden leading-none z-20 pointer-events-none -mb-1">
        <svg
          ref={topCurveSvgRef}
          viewBox="0 0 1440 200"
          className="w-full h-12 sm:h-16 md:h-20 block overflow-visible"
          preserveAspectRatio="none"
        >
          <path
            ref={topCurvePathRef}
            d="M 0,200 C 320,0 1120,0 1440,200 L 1440,200 L 0,200 Z"
            fill="#000000"
          />
        </svg>
      </div>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 2. MAIN B2B SERVICES SECTION (Dark Canvas with White Cards)*/}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            Our B2B Marketing Services
          </div>

          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-center max-w-4xl leading-[1.1]">
            Our B2B Marketing Services
          </h2>

          <p className="text-slate-300 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-7 sm:mb-8 font-medium leading-relaxed font-['Manrope']">
            We combine SEO, high-intent advertising, LinkedIn marketing, demand generation, and Account-Based Marketing (ABM) to help your business reach decision-makers and close high-value deals.
          </p>

          {/* 6 Luxury White Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4.5 w-full max-w-4xl mb-3 sm:mb-4">
            {/* ── CARD 01: B2B Lead Generation ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  B2B
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Lead</span>{' '}
                  <span className="font-bold">Generation</span>
                </div>
              </div>

              {/* 3D Blue Lead Target Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(0,87,255,0.35)] md:drop-shadow-[0_25px_30px_rgba(0,87,255,0.45)]">
                  <defs>
                    <linearGradient id="b2bLeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#034694" />
                    </linearGradient>
                    <linearGradient id="b2bLeadGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bLeadGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bLeadGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <circle cx="100" cy="100" r="32" fill="none" stroke="#ffffff" strokeWidth="6" opacity="0.6" />
                    <circle cx="100" cy="100" r="18" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <circle cx="100" cy="100" r="6" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: LinkedIn Marketing ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  LinkedIn
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Executive</span>{' '}
                  <span className="font-bold">Marketing</span>
                </div>
              </div>

              {/* 3D LinkedIn Sapphire Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(10,102,194,0.35)] md:drop-shadow-[0_25px_30px_rgba(10,102,194,0.45)]">
                  <defs>
                    <linearGradient id="b2bLiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0a85ea" />
                      <stop offset="45%" stopColor="#0a66c2" />
                      <stop offset="100%" stopColor="#004182" />
                    </linearGradient>
                    <linearGradient id="b2bLiGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bLiGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bLiGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <text
                      x="100"
                      y="126"
                      fill="#ffffff"
                      fontSize="64"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                      letterSpacing="-1px"
                    >
                      in
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Google Ads for B2B ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  High-Intent
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Google Ads</span>{' '}
                  <span className="font-bold">for B2B</span>
                </div>
              </div>

              {/* 3D Crimson / Ruby Google Ads Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(225,29,72,0.35)] md:drop-shadow-[0_25px_30px_rgba(225,29,72,0.45)]">
                  <defs>
                    <linearGradient id="b2bGoogleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="45%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#881337" />
                    </linearGradient>
                    <linearGradient id="b2bGoogleGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bGoogleGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bGoogleGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <circle cx="94" cy="94" r="24" fill="none" stroke="#ffffff" strokeWidth="7" />
                    <line x1="112" y1="112" x2="132" y2="132" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Meta Ads for B2B ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Meta Ads
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Demand &amp;</span>{' '}
                  <span className="font-bold">Remarketing</span>
                </div>
              </div>

              {/* 3D Emerald Green Social Nodes Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(16,185,129,0.35)] md:drop-shadow-[0_25px_30px_rgba(16,185,129,0.45)]">
                  <defs>
                    <linearGradient id="b2bMetaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <linearGradient id="b2bMetaGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(14 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bMetaGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bMetaGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <circle cx="75" cy="100" r="14" fill="#ffffff" />
                    <circle cx="125" cy="74" r="14" fill="#ffffff" />
                    <circle cx="125" cy="126" r="14" fill="#ffffff" />
                    <line x1="75" y1="100" x2="125" y2="74" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                    <line x1="75" y1="100" x2="125" y2="126" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 05: Account-Based Marketing (ABM) ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Account-Based
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Marketing</span>{' '}
                  <span className="font-bold">(ABM)</span>
                </div>
              </div>

              {/* 3D Indigo/Violet Enterprise ABM Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(99,102,241,0.35)] md:drop-shadow-[0_25px_30px_rgba(99,102,241,0.45)]">
                  <defs>
                    <linearGradient id="b2bAbmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#312e81" />
                    </linearGradient>
                    <linearGradient id="b2bAbmGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bAbmGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bAbmGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <rect x="70" y="70" width="60" height="60" rx="10" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <circle cx="100" cy="100" r="10" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 06: Demand Generation for B2B ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Full-Cycle
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Demand</span>{' '}
                  <span className="font-bold">Generation</span>
                </div>
              </div>

              {/* 3D Warm Amber / Gold Sparkle Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(245,158,11,0.35)] md:drop-shadow-[0_25px_30px_rgba(245,158,11,0.45)]">
                  <defs>
                    <linearGradient id="b2bDemandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="b2bDemandGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bDemandGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#b2bDemandGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <path
                      d="M 100,64 C 100,82 86,94 68,94 C 86,94 100,106 100,124 C 100,106 114,94 132,94 C 114,94 100,82 100,64 Z"
                      fill="#ffffff"
                    />
                    <circle cx="72" cy="120" r="4.5" fill="#ffffff" opacity="0.9" />
                    <circle cx="128" cy="72" r="4.5" fill="#ffffff" opacity="0.9" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4. BOTTOM CURVED DOME TRANSITION (Black to White)          */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full -mt-1 z-20 pointer-events-none bg-black">
        <svg
          ref={bottomCurveSvgRef}
          viewBox="0 0 1440 200"
          className="w-full h-12 sm:h-16 md:h-20 block overflow-visible"
          preserveAspectRatio="none"
        >
          <path
            ref={bottomCurvePathRef}
            d="M 0,200 C 320,0 1120,0 1440,200 L 1440,200 L 0,200 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
