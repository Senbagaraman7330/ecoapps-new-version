import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface EcommerceServicesSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function EcommerceServicesSection({ onHover, onLeave }: EcommerceServicesSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurveSvgRef = useRef<SVGSVGElement>(null);
  const topCurvePathRef = useRef<SVGPathElement>(null);
  const bottomCurveSvgRef = useRef<SVGSVGElement>(null);
  const bottomCurvePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. TOP DYNAMIC SCROLL CURVE: Morphs from natural dome into flat line
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

      // 2. BOTTOM DYNAMIC SCROLL CURVE: Morphs from natural dome into flat line
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
    <div ref={containerRef} id="ecommerce-services" className="relative w-full bg-[#f8fafc] overflow-hidden">
      {/* ────────────────────────────────────────────────────────── */}
      {/* 1. TOP DYNAMIC SCROLL CURVE (Morphs from Arch into Flat)   */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full -mb-1 z-20 pointer-events-none">
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
      {/* 2. MAIN ECOMMERCE SERVICES SECTION (Dark Canvas with Luxury White Cards) */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-[11px] font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            Our Ecommerce Marketing Services
          </div>

          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-center max-w-4xl leading-[1.1]">
            Our Ecommerce Marketing Services
          </h2>

          <p className="text-slate-300 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-7 sm:mb-8 font-medium leading-relaxed font-['Manrope']">
            We help ecommerce businesses attract the right customers, increase product visibility, drive qualified traffic, improve conversions, and grow online sales.
          </p>

          {/* 6 Luxury White Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4.5 w-full max-w-4xl mb-3 sm:mb-4">
            {/* ── CARD 01: Ecommerce Search SEO ── */}
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
                  <span className="font-serif italic font-normal">Search</span>{' '}
                  <span className="font-bold">SEO</span>
                </div>
              </div>

              {/* 3D Blue Shopping Bag Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(2,132,199,0.35)]">
                  <defs>
                    <linearGradient id="ecomSeoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="ecomSeoGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomSeoGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomSeoGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Shopping Bag and Search glyph */}
                    <path
                      d="M 68,75 L 132,75 L 126,140 L 74,140 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 84,75 C 84,58 116,58 116,75"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="108" r="9" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <line x1="106" y1="114" x2="114" y2="122" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: Ecommerce PPC & Paid Ads ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Ecommerce PPC
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">&amp; Paid</span>{' '}
                  <span className="font-bold">Ads</span>
                </div>
              </div>

              {/* 3D Blue Ads Target Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(37,99,235,0.35)] md:drop-shadow-[0_25px_30px_rgba(37,99,235,0.45)]">
                  <defs>
                    <linearGradient id="ecomPpcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <linearGradient id="ecomPpcGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomPpcGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomPpcGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Target & High ROAS Arrow glyph */}
                    <circle cx="100" cy="100" r="34" fill="none" stroke="#ffffff" strokeWidth="6" opacity="0.6" />
                    <circle cx="100" cy="100" r="20" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <circle cx="100" cy="100" r="6" fill="#ffffff" />
                    <line x1="100" y1="56" x2="100" y2="70" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    <line x1="100" y1="130" x2="100" y2="144" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    <line x1="56" y1="100" x2="70" y2="100" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                    <line x1="130" y1="100" x2="144" y2="100" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Social Media Marketing ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Social Media
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Brand</span>{' '}
                  <span className="font-bold">Marketing</span>
                </div>
              </div>

              {/* 3D Pink/Violet Social Reach Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(219,39,119,0.35)] md:drop-shadow-[0_25px_30px_rgba(219,39,119,0.45)]">
                  <defs>
                    <linearGradient id="ecomSocialGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="50%" stopColor="#db2777" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="ecomSocialGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomSocialGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomSocialGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Share / Social Network Nodes glyph */}
                    <circle cx="75" cy="100" r="14" fill="#ffffff" />
                    <circle cx="125" cy="74" r="14" fill="#ffffff" />
                    <circle cx="125" cy="126" r="14" fill="#ffffff" />
                    <line x1="75" y1="100" x2="125" y2="74" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                    <line x1="75" y1="100" x2="125" y2="126" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Product & Content Marketing ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Product &amp; Content
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Creative</span>{' '}
                  <span className="font-bold">Marketing</span>
                </div>
              </div>

              {/* 3D Amber Creative Sparkle Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(245,158,11,0.35)] md:drop-shadow-[0_25px_30px_rgba(245,158,11,0.45)]">
                  <defs>
                    <linearGradient id="ecomContentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fde047" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#b45309" />
                    </linearGradient>
                    <linearGradient id="ecomContentGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(14 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomContentGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomContentGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Creative Sparkle star */}
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

            {/* ── CARD 05: Conversion Rate Optimisation ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Conversion Rate
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Funnel</span>{' '}
                  <span className="font-bold">Optimisation</span>
                </div>
              </div>

              {/* 3D Violet Conversion Funnel Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(124,58,237,0.35)] md:drop-shadow-[0_25px_30px_rgba(124,58,237,0.45)]">
                  <defs>
                    <linearGradient id="ecomCroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4c1d95" />
                    </linearGradient>
                    <linearGradient id="ecomCroGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomCroGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomCroGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Funnel & Check glyph */}
                    <path
                      d="M 66,72 L 134,72 L 112,106 L 112,130 L 88,130 L 88,106 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    <polyline points="92 90 98 96 110 82" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 06: Remarketing & Retargeting ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Remarketing
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">&amp;</span>{' '}
                  <span className="font-bold">Retargeting</span>
                </div>
              </div>

              {/* 3D Cyan Cart Recovery Floating Badge */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_15px_20px_rgba(14,165,233,0.35)] md:drop-shadow-[0_25px_30px_rgba(14,165,233,0.45)]">
                  <defs>
                    <linearGradient id="ecomRetargetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="ecomRetargetGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomRetargetGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#ecomRetargetGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Retarget loop arrow glyph */}
                    <path
                      d="M 124,78 A 30,30 0 1,0 134,106"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <polyline points="118 64 126 78 112 86" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
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
