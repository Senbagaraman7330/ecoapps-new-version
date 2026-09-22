import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CustomSoftwareServicesSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function CustomSoftwareServicesSection({
  onHover,
  onLeave,
}: CustomSoftwareServicesSectionProps) {
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
      {/* 2. MAIN SOFTWARE SERVICES SECTION (Dark Canvas)            */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 relative z-10" id="capabilities">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
            Our Custom Software Development Services
          </div>

          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-center max-w-4xl leading-[1.1]">
            Our Custom Software Development Services
          </h2>

          <p className="text-slate-300 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-7 sm:mb-8 font-medium leading-relaxed font-['Manrope']">
            At Eco Apps Solutions, we develop custom software solutions tailored to your business processes, operational requirements, users, and long-term goals.
          </p>

          {/* 6 Luxury White Cards Grid matching SeoServicePage */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 md:gap-4.5 w-full max-w-4xl mb-3 sm:mb-4">
            {/* ── CARD 01: Business Software Development ── */}
            <div
              id="services-business"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Business Software
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Workflow</span>{' '}
                  <span className="font-bold">Automation</span>
                </div>
              </div>

              {/* Bottom 3D Workflow Automation Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(0,87,255,0.35)]">
                  <defs>
                    <linearGradient id="softBlueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="softBlueGloss1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softBlueGrad1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softBlueGloss1)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Workflow Automation Nodes & Trigger Lightning */}
                    <circle cx="70" cy="80" r="12" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="130" cy="80" r="12" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <circle cx="100" cy="130" r="12" fill="none" stroke="#ffffff" strokeWidth="5" />
                    <path d="M 82,80 L 118,80" stroke="#ffffff" strokeWidth="4" strokeDasharray="3 3" />
                    <path d="M 76,90 L 92,120" stroke="#ffffff" strokeWidth="4" />
                    <path d="M 124,90 L 108,120" stroke="#ffffff" strokeWidth="4" />
                    <path d="M 98,72 L 94,84 L 103,84 L 97,98" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: Custom CRM Software ── */}
            <div
              id="services-crm"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Custom CRM
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Customer</span>{' '}
                  <span className="font-bold">Pipeline</span>
                </div>
              </div>

              {/* Bottom 3D CRM Pipeline Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(99,102,241,0.35)]">
                  <defs>
                    <linearGradient id="crmGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </linearGradient>
                    <linearGradient id="crmGloss2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#crmGrad2)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#crmGloss2)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* CRM Funnel & Contact Silhouette */}
                    <path d="M 68,68 L 132,68 L 112,102 L 112,132 L 88,132 L 88,102 Z" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinejoin="round" />
                    <circle cx="100" cy="85" r="7" fill="#ffffff" />
                    <path d="M 90,118 L 98,124 L 112,112" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: ERP & Business Management Software ── */}
            <div
              id="services-erp"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  ERP &amp; Management
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Centralised</span>{' '}
                  <span className="font-bold">Operations</span>
                </div>
              </div>

              {/* Bottom 3D ERP Operations Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(225,29,72,0.35)]">
                  <defs>
                    <linearGradient id="erpGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb7185" />
                      <stop offset="50%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#9f1239" />
                    </linearGradient>
                    <linearGradient id="erpGloss3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#erpGrad3)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#erpGloss3)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Central ERP Gear & Module Hub */}
                    <circle cx="100" cy="100" r="16" fill="none" stroke="#ffffff" strokeWidth="6" />
                    <circle cx="100" cy="100" r="32" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="14 10" />
                    <rect x="62" y="62" width="12" height="12" rx="3" fill="#ffffff" />
                    <rect x="126" y="62" width="12" height="12" rx="3" fill="#ffffff" />
                    <rect x="62" y="126" width="12" height="12" rx="3" fill="#ffffff" />
                    <rect x="126" y="126" width="12" height="12" rx="3" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Industry-Specific Software ── */}
            <div
              id="services-industry"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Industry-Specific
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Domain</span>{' '}
                  <span className="font-bold">Solutions</span>
                </div>
              </div>

              {/* Bottom 3D Industry Domain Layers Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(16,185,129,0.35)]">
                  <defs>
                    <linearGradient id="softGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <linearGradient id="softGreenGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(15 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softGreenGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softGreenGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Isometric Layered Stack & Focus Diamond */}
                    <path d="M 100,68 L 138,84 L 100,100 L 62,84 Z" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinejoin="round" />
                    <path d="M 62,98 L 100,114 L 138,98" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 62,112 L 100,128 L 138,112" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <polygon points="100,74 106,84 100,94 94,84" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 05: Workflow Automation & Security ── */}
            <div
              id="services-architecture"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Custom Architecture
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Security &amp;</span>{' '}
                  <span className="font-bold">Scale</span>
                </div>
              </div>

              {/* Bottom 3D Architecture Security Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(245,158,11,0.35)]">
                  <defs>
                    <linearGradient id="softAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="softAmberGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softAmberGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softAmberGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Security Vault Shield & Scale Cluster */}
                    <path
                      d="M 100,66 C 118,66 128,72 130,88 C 130,110 114,128 100,136 C 86,128 70,110 70,88 C 72,72 82,66 100,66 Z"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    <circle cx="100" cy="94" r="5" fill="#ffffff" />
                    <path d="M 100,99 L 100,110" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 06: Full-Lifecycle Reliability ── */}
            <div
              id="services-lifecycle"
              className="why-card bg-white text-slate-900 rounded-xl sm:rounded-2xl md:rounded-[1.25rem] p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-between shadow-md sm:shadow-lg relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[85px] sm:min-h-[105px] md:min-h-[120px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative z-10 max-w-[130px] sm:max-w-[175px] md:max-w-[210px]">
                <div className="text-[12px] sm:text-[14px] md:text-[15.5px] font-bold text-slate-950 tracking-tight leading-none mb-0.5 sm:mb-1">
                  Full-Lifecycle
                </div>
                <div className="text-[14px] sm:text-[16.5px] md:text-[18.5px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Support &amp;</span>{' '}
                  <span className="font-bold">Evolution</span>
                </div>
              </div>

              {/* Bottom 3D Evolution Rocket Graphic */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-2.5 md:-right-2.5 w-11 h-11 sm:w-14 sm:h-14 md:w-20 md:h-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 opacity-95">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_8px_12px_rgba(99,102,241,0.35)]">
                  <defs>
                    <linearGradient id="softIndigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4c1d95" />
                    </linearGradient>
                    <linearGradient id="softIndigoGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softIndigoGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#softIndigoGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Scaling Rocket & Infinite Evolution Loop */}
                    <path d="M 100,68 C 115,75 124,95 120,118 L 100,110 L 80,118 C 76,95 85,75 100,68 Z" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinejoin="round" />
                    <circle cx="100" cy="90" r="5" fill="#ffffff" />
                    <path d="M 94,124 L 100,134 L 106,124" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="72" y1="104" x2="64" y2="114" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                    <line x1="128" y1="104" x2="136" y2="114" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
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
