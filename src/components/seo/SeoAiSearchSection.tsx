import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SeoAiSearchSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoAiSearchSection({ onHover, onLeave }: SeoAiSearchSectionProps) {
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
      {/* 2. MAIN SEO SERVICES SECTION (Dark Canvas with Luxury White Cards) */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            Our SEO Services
          </div>

          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-center max-w-4xl leading-[1.1]">
            Our SEO Services Include
          </h2>

          <p className="text-slate-300 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-7 sm:mb-8 font-medium leading-relaxed font-['Manrope']">
            Our SEO services focus on improving your website's search rankings, organic traffic, user experience, and online authority through a customised strategy built around your business goals.
          </p>

          {/* 6 Luxury White Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4.5 w-full max-w-4xl mb-3 sm:mb-4">
            {/* ── CARD 01: On-Page SEO ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  On-Page
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Search</span>{' '}
                  <span className="font-bold">SEO</span>
                </div>
              </div>

              {/* Bottom 3D Blue On-Page Web & Search Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(0,87,255,0.35)] md:drop-shadow-[0_25px_30px_rgba(0,87,255,0.45)]">
                  <defs>
                    <linearGradient id="blueGradAi1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#034694" />
                    </linearGradient>
                    <linearGradient id="blueGlossAi1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#blueGradAi1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#blueGlossAi1)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* On-Page Web Window */}
                    <rect x="58" y="65" width="84" height="68" rx="10" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <line x1="58" y1="84" x2="142" y2="84" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="72" cy="74.5" r="3.5" fill="#ffffff" />
                    <circle cx="83" cy="74.5" r="3.5" fill="#ffffff" />
                    <line x1="72" y1="98" x2="105" y2="98" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                    <line x1="72" y1="112" x2="94" y2="112" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                    {/* Integrated Search Loupe badge inside window */}
                    <circle cx="118" cy="110" r="12" fill="none" stroke="#ffffff" strokeWidth="5.5" />
                    <line x1="127" y1="119" x2="137" y2="129" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: Technical SEO ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Technical
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Search</span>{' '}
                  <span className="font-bold">SEO</span>
                </div>
              </div>

              {/* Bottom 3D Cyan/Tech-Blue Technical Code & Diagnostics Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(6,182,212,0.35)] md:drop-shadow-[0_25px_30px_rgba(6,182,212,0.45)]">
                  <defs>
                    <linearGradient id="aiTechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="40%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#1e1b4b" />
                    </linearGradient>
                    <linearGradient id="aiTechGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aiTechGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aiTechGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Technical Code Brackets < / > */}
                    <path d="M 68,90 L 52,104 L 68,118" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="84" y1="124" x2="98" y2="84" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                    <path d="M 114,90 L 130,104 L 114,118" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Diagnostics Mini Gear at top right */}
                    <circle cx="132" cy="68" r="12" fill="none" stroke="#ffffff" strokeWidth="4" />
                    <circle cx="132" cy="68" r="4.5" fill="#ffffff" />
                    <line x1="132" y1="52" x2="132" y2="56" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <line x1="132" y1="80" x2="132" y2="84" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <line x1="116" y1="68" x2="120" y2="68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <line x1="144" y1="68" x2="148" y2="68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Keyword Research ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Keyword
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Intent</span>{' '}
                  <span className="font-bold">Research</span>
                </div>
              </div>

              {/* Bottom 3D Fuchsia/Rose Keyword Key & Intent Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(225,29,72,0.35)] md:drop-shadow-[0_25px_30px_rgba(225,29,72,0.45)]">
                  <defs>
                    <linearGradient id="aiKeyGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="45%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#881337" />
                    </linearGradient>
                    <linearGradient id="aiKeyGloss3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aiKeyGrad3)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aiKeyGloss3)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Keyword Golden Key & Intent Sparkles */}
                    <circle cx="76" cy="84" r="18" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <circle cx="76" cy="84" r="6" fill="#ffffff" />
                    {/* Key Shaft */}
                    <line x1="90" y1="96" x2="132" y2="138" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                    {/* Key Teeth */}
                    <line x1="116" y1="122" x2="126" y2="112" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    <line x1="126" y1="132" x2="136" y2="122" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    {/* High-Intent Search Sparkle Star */}
                    <polygon points="132,66 135,74 143,77 135,80 132,88 129,80 121,77 129,74" fill="#ffffff" />
                    <polygon points="56,128 58,133 63,135 58,137 56,142 54,137 49,135 54,133" fill="#ffffff" opacity="0.8" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Content SEO ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Content
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Topical</span>{' '}
                  <span className="font-bold">SEO</span>
                </div>
              </div>

              {/* Bottom 3D Emerald Content Article & Pen Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(16,185,129,0.35)] md:drop-shadow-[0_25px_30px_rgba(16,185,129,0.45)]">
                  <defs>
                    <linearGradient id="greenGradAi4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <linearGradient id="greenGlossAi4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#greenGradAi4)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#greenGlossAi4)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Document Article & Writing Quill */}
                    <rect x="62" y="60" width="66" height="80" rx="8" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <line x1="74" y1="80" x2="116" y2="80" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    <line x1="74" y1="96" x2="116" y2="96" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                    <line x1="74" y1="112" x2="100" y2="112" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
                    {/* Pen Tip */}
                    <path d="M125 125 L142 85 L135 78 L118 118 Z" fill="#ffffff" />
                    <circle cx="132" cy="92" r="2.5" fill="#059669" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 05: Local SEO ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Local
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Maps</span>{' '}
                  <span className="font-bold">SEO</span>
                </div>
              </div>

              {/* Bottom 3D Amber Local Maps Pin Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(245,158,11,0.35)] md:drop-shadow-[0_25px_30px_rgba(245,158,11,0.45)]">
                  <defs>
                    <linearGradient id="amberGradAi5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="amberGlossAi5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#amberGradAi5)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#amberGlossAi5)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Perspective Map Grid & Pin */}
                    <ellipse cx="100" cy="132" rx="34" ry="12" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.6" />
                    <ellipse cx="100" cy="132" rx="18" ry="6" fill="#ffffff" opacity="0.4" />
                    {/* Location Pin */}
                    <path
                      d="M 100,60 C 85,60 74,71 74,86 C 74,106 100,130 100,130 C 100,130 126,106 126,86 C 126,71 115,60 100,60 Z"
                      fill="#ffffff"
                    />
                    <circle cx="100" cy="84" r="10" fill="#d97706" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 06: Off-Page SEO ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Off-Page
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Authority</span>{' '}
                  <span className="font-bold">SEO</span>
                </div>
              </div>

              {/* Bottom 3D Indigo/Violet Backlink & Authority Shield Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(99,102,241,0.35)] md:drop-shadow-[0_25px_30px_rgba(99,102,241,0.45)]">
                  <defs>
                    <linearGradient id="indigoGradAi6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3730a3" />
                    </linearGradient>
                    <linearGradient id="indigoGlossAi6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#indigoGradAi6)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#indigoGlossAi6)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Backlinks Link & Authority Shield */}
                    <path
                      d="M 100,58 L 126,68 C 126,96 114,118 100,132 C 86,118 74,96 74,68 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    {/* Interlocking Link */}
                    <path
                      d="M 94,88 L 88,94 C 84,98 84,104 88,108 C 92,112 98,112 102,108 L 108,102"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 106,92 L 112,86 C 116,82 116,76 112,72 C 108,68 102,68 98,72 L 92,78"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 3. BOTTOM DYNAMIC SCROLL CURVE (Morphs from Arch into Flat)*/}
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
