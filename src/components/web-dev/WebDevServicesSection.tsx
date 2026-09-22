import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WebDevServicesSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function WebDevServicesSection({
  onHover,
  onLeave,
}: WebDevServicesSectionProps) {
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
      {/* 2. MAIN WEB SERVICES SECTION (Dark Canvas with White Cards)*/}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            Our Website Development Services
          </div>

          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-center max-w-4xl leading-[1.1]">
            Our Website Development Services
          </h2>

          <p className="text-slate-300 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-7 sm:mb-8 font-medium leading-relaxed font-['Manrope']">
            At Eco Apps Solutions, we develop modern, responsive, and user-friendly websites based on your business requirements — from simple static websites to feature-rich dynamic websites and complete ecommerce stores.
          </p>

          {/* 6 Luxury White Cards Grid matching Home / SEO Service Page */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4.5 w-full max-w-4xl mb-3 sm:mb-4">
            {/* ── CARD 01: Static Website Development ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Static Website
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Simple.</span>{' '}
                  <span className="font-bold">Fast.</span>
                </div>
              </div>

              {/* Bottom 3D Blue Static Web Browser Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(0,87,255,0.35)]">
                  <defs>
                    <linearGradient id="webBlueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#034694" />
                    </linearGradient>
                    <linearGradient id="webBlueGloss1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webBlueGrad1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webBlueGloss1)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Browser Window & Fast Lightning */}
                    <rect x="58" y="65" width="84" height="68" rx="10" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <line x1="58" y1="84" x2="142" y2="84" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="72" cy="74.5" r="3.5" fill="#ffffff" />
                    <circle cx="83" cy="74.5" r="3.5" fill="#ffffff" />
                    {/* Fast Flash Bolt */}
                    <path d="M104 90 L92 110 L102 110 L94 126" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: Dynamic Website Development ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Dynamic Website
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Flexible.</span>{' '}
                  <span className="font-bold">Scalable.</span>
                </div>
              </div>

              {/* Bottom 3D Cyan/Purple Dynamic Server Nodes Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(99,102,241,0.35)]">
                  <defs>
                    <linearGradient id="webRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </linearGradient>
                    <linearGradient id="webRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webRibbon1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webRibbon2)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Database / Server Stacks */}
                    <rect x="65" y="68" width="70" height="18" rx="6" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="78" cy="77" r="3" fill="#ffffff" />
                    <rect x="65" y="92" width="70" height="18" rx="6" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="78" cy="101" r="3" fill="#ffffff" />
                    <rect x="65" y="116" width="70" height="18" rx="6" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="78" cy="125" r="3" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Dynamic Features Matrix ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Dynamic Websites
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Custom</span>{' '}
                  <span className="font-bold">Features</span>
                </div>
              </div>

              {/* Bottom 3D Glowing Hot Pink Component Grid Orb */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(244,63,94,0.4)]">
                  <defs>
                    <radialGradient id="webPinkOrb" cx="35%" cy="30%" r="65%">
                      <stop offset="0%" stopColor="#ff75c3" />
                      <stop offset="40%" stopColor="#f43f5e" />
                      <stop offset="85%" stopColor="#be123c" />
                      <stop offset="100%" stopColor="#881337" />
                    </radialGradient>
                    <linearGradient id="webOrbRim" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="100%" stopColor="#ff4b8b" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <circle cx="110" cy="110" r="72" fill="url(#webPinkOrb)" />
                  <ellipse cx="90" cy="75" rx="32" ry="16" fill="#ffffff" opacity="0.45" transform="rotate(-20 90 75)" />
                  <circle cx="110" cy="110" r="71" fill="none" stroke="url(#webOrbRim)" strokeWidth="2.5" />
                  {/* Modular Component Blocks */}
                  <g transform="translate(14, 14)">
                    <rect x="74" y="74" width="22" height="22" rx="6" fill="#ffffff" />
                    <rect x="104" y="74" width="22" height="22" rx="6" fill="none" stroke="#ffffff" strokeWidth="4.5" />
                    <rect x="74" y="104" width="22" height="22" rx="6" fill="none" stroke="#ffffff" strokeWidth="4.5" />
                    <rect x="104" y="104" width="22" height="22" rx="6" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Ecommerce Website Development ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Ecommerce
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Online</span>{' '}
                  <span className="font-bold">Sales</span>
                </div>
              </div>

              {/* Bottom 3D Emerald Shopping Bag Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(16,185,129,0.35)]">
                  <defs>
                    <linearGradient id="webGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <linearGradient id="webGreenGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webGreenGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webGreenGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Shopping Cart / Bag */}
                    <path
                      d="M 68,76 L 132,76 L 125,136 L 75,136 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 85,76 C 85,60 115,60 115,76"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="106" r="8" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 05: Ecommerce Features Matrix ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Ecommerce Platforms
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Modern</span>{' '}
                  <span className="font-bold">Stores</span>
                </div>
              </div>

              {/* Bottom 3D Amber Responsive Storefront Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(245,158,11,0.35)]">
                  <defs>
                    <linearGradient id="webAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="webAmberGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webAmberGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webAmberGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Storefront Awning & Price Tag */}
                    <path d="M 64,80 L 136,80 L 130,102 L 118,102 L 114,80 L 104,80 L 100,102 L 88,102 L 84,80 L 74,80 L 70,102 L 64,80 Z" fill="#ffffff" />
                    <rect x="72" y="102" width="56" height="30" rx="4" fill="none" stroke="#ffffff" strokeWidth="4.5" />
                    <line x1="90" y1="102" x2="90" y2="132" stroke="#ffffff" strokeWidth="4.5" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 06: Full-Cycle Web Scalability ── */}
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
                  <span className="font-serif italic font-normal">Web</span>{' '}
                  <span className="font-bold">Engineering</span>
                </div>
              </div>

              {/* Bottom 3D Indigo/Violet Terminal & Code Engine Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(99,102,241,0.35)]">
                  <defs>
                    <linearGradient id="webIndigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#3730a3" />
                    </linearGradient>
                    <linearGradient id="webIndigoGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webIndigoGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#webIndigoGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Code Terminal Prompt & Rocket */}
                    <path d="M 72,82 L 92,98 L 72,114" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="98" y1="114" x2="124" y2="114" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
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
