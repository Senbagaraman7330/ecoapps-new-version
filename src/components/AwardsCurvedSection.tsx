import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AwardsCurvedSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function AwardsCurvedSection({ onHover, onLeave }: AwardsCurvedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topCurveSvgRef = useRef<SVGSVGElement>(null);
  const topCurvePathRef = useRef<SVGPathElement>(null);
  const bottomCurveSvgRef = useRef<SVGSVGElement>(null);
  const bottomCurvePathRef = useRef<SVGPathElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. TOP CURVE: Animates from a broad, natural spherical dome into a perfectly flat straight line
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

      // 2. BOTTOM CURVE: Animates from a broad, natural spherical dome into a perfectly flat straight line
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

      // 3. Award Cards 3D Mouse Tilt
      const cards = document.querySelectorAll<HTMLElement>('.why-card');
      cards.forEach((card) => {
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
      {/* 1. CASE STUDIES SECTION (Light Canvas)                     */}
      {/* ────────────────────────────────────────────────────────── */}
      {/* <section className="py-14 md:py-18 px-6 relative z-10" id="case-studies">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white rounded-full px-3.5 py-1 text-[10px] font-bold text-slate-600 mb-4 tracking-widest uppercase shadow-2xs">
            <Star className="w-3 h-3 text-sky-600 fill-sky-600" /> Case Studies
          </div>
          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0b1528] leading-[1.1] mb-4">
            Real Work.{' '}
            <span className="font-serif italic font-normal text-slate-700 block md:inline">
              Real Growth.
            </span>
          </h2>
          <p className="text-slate-600 font-['Manrope'] text-[15px] md:text-[16.5px] leading-relaxed max-w-2xl mx-auto">
            Show each project through the challenge, strategy and measurable result. The case study content should focus on what changed for the client rather than only displaying a portfolio image.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <a
            href="#all-case-studies"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="inline-flex items-center gap-2.5 bg-[#0b1528] text-white px-7 py-3.5 rounded-full font-bold hover:bg-slate-800 transition text-sm shadow-lg cursor-pointer"
          >
            View All Success Stories <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section> */}

      {/* ────────────────────────────────────────────────────────── */}
      {/* 2. TOP DYNAMIC SCROLL CURVE (Morphs from Arch into Flat)   */}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full -mb-1 z-20 pointer-events-none">
        <svg
          ref={topCurveSvgRef}
          viewBox="0 0 1440 240"
          className="w-full h-24 md:h-36 lg:h-44 block"
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
      {/* 3. AI SECTION & WHY ECO APPS (Dark Canvas)                 */}
      {/* ────────────────────────────────────────────────────────── */}
      <section ref={awardsRef} className="bg-black text-white pt-14 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">

          {/* Why Eco Apps / Why Choose Us Header */}
          <div className="w-full text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-[11px] font-mono font-bold tracking-widest uppercase mb-4 shadow-2xs">
              Why Choose Us • Why Eco Apps
            </div>
            <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Built for Measurable Business Outcomes
            </h2>
            <p className="text-slate-400 text-[15px] md:text-[17px] max-w-2xl mx-auto mt-4 font-medium leading-relaxed font-['Manrope']">
              Every system, creative asset, and campaign we engineer is focused on compounding growth, direct accountability, and real business results.
            </p>
          </div>

          {/* 6 Luxury White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* ── CARD 01: Strategy First ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-[2.2rem] p-7 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[470px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl md:text-[28px] font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Strategy
                </div>
                <div className="text-3xl md:text-[34px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">First</span>{' '}
                  <span className="font-bold">Clarity</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-xs font-semibold text-sky-600 mb-3 tracking-tight">
                  Every engagement begins with clarity.
                </p>

                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  WE HELP / WE HANDLE:
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Your industry landscape</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Competitor positioning</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Audience behaviour patterns</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Revenue targets</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Lead quality benchmarks</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 max-w-[240px]">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-['Manrope']">
                    Growth without direction wastes money. We eliminate guesswork.
                  </p>
                </div>
              </div>

              {/* Bottom 3D Blue Floating Icon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 opacity-90">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_25px_30px_rgba(0,87,255,0.4)]">
                  <defs>
                    <linearGradient id="blueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2575fc" />
                      <stop offset="50%" stopColor="#0052d4" />
                      <stop offset="100%" stopColor="#003594" />
                    </linearGradient>
                    <linearGradient id="blueGloss1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-15 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#blueGrad1)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#blueGloss1)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <text
                      x="100"
                      y="125"
                      fill="#ffffff"
                      fontSize="60"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                    >
                      01
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 02: Structured Content Production ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-[2.2rem] p-7 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[470px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl md:text-[28px] font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Structured
                </div>
                <div className="text-3xl md:text-[34px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Content</span>{' '}
                  <span className="font-bold">Production</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-xs font-semibold text-sky-600 mb-3 tracking-tight">
                  We don’t shoot casually.
                </p>

                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  WE HELP / WE HANDLE:
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Reel concepts aligned with business goals</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Educational authority-building videos</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Trust-building founder content</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Product-focused storytelling</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Conversion-driven creatives</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 max-w-[240px]">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-['Manrope']">
                    We’ve produced thousands of performance-led reels across 100+ brands. Every piece of content has a purpose.
                  </p>
                </div>
              </div>

              {/* Bottom 3D Iridescent Purple/Cyan Ribbon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 opacity-90">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_35px_rgba(99,102,241,0.45)]">
                  <defs>
                    <linearGradient id="aiRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="40%" stopColor="#818cf8" />
                      <stop offset="80%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="aiRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(40, 20) rotate(12)">
                    <path
                      d="M 40,20 L 75,5 C 85,2 95,8 98,18 L 105,45 L 85,55 Z"
                      fill="url(#aiRibbon2)"
                      opacity="0.8"
                    />
                    <path
                      d="M 50,55 L 90,40 C 98,45 102,55 98,65 L 75,135 C 72,145 62,150 52,145 L 20,130 Z"
                      fill="url(#aiRibbon1)"
                    />
                    <path
                      d="M 75,70 L 125,90 C 135,95 138,108 132,118 L 115,145 C 110,152 98,154 90,148 L 45,120 Z"
                      fill="url(#aiRibbon2)"
                      opacity="0.9"
                    />
                    <path
                      d="M 50,55 L 75,135"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Editing & Account Management ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-[2.2rem] p-7 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[470px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl md:text-[28px] font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Editing &amp;
                </div>
                <div className="text-3xl md:text-[34px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Account</span>{' '}
                  <span className="font-bold">Management</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-xs font-semibold text-sky-600 mb-3 tracking-tight">
                  We handle your social presence end-to-end.
                </p>

                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  WE HELP / WE HANDLE:
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>16 structured reels per month (standard model)</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Caption strategy</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Content calendar</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Posting &amp; monitoring</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Engagement flow management</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 max-w-[240px]">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-['Manrope']">
                    Your social presence becomes consistent and intentional.
                  </p>
                </div>
              </div>

              {/* Bottom 3D Glowing Hot Pink / Magenta Glass Orb */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 opacity-90">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_40px_rgba(244,63,94,0.5)]">
                  <defs>
                    <radialGradient id="perfPinkOrb" cx="35%" cy="30%" r="65%">
                      <stop offset="0%" stopColor="#ff75c3" />
                      <stop offset="40%" stopColor="#f43f5e" />
                      <stop offset="85%" stopColor="#be123c" />
                      <stop offset="100%" stopColor="#881337" />
                    </radialGradient>
                    <linearGradient id="perfOrbRim" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
                      <stop offset="100%" stopColor="#ff4b8b" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <circle cx="110" cy="110" r="72" fill="url(#perfPinkOrb)" />
                  <ellipse cx="90" cy="75" rx="32" ry="16" fill="#ffffff" opacity="0.45" transform="rotate(-20 90 75)" />
                  <circle cx="110" cy="110" r="71" fill="none" stroke="url(#perfOrbRim)" strokeWidth="2.5" />
                  <text
                    x="108"
                    y="132"
                    fill="#ffffff"
                    fontSize="56"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                    opacity="0.95"
                  >
                    ⚡
                  </text>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Performance Advertising ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-[2.2rem] p-7 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[470px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl md:text-[28px] font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Performance
                </div>
                <div className="text-3xl md:text-[34px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Paid</span>{' '}
                  <span className="font-bold">Advertising</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-xs font-semibold text-sky-600 mb-3 tracking-tight">
                  We don’t just run ads. We optimise them.
                </p>

                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  WE HELP / WE HANDLE:
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Lead generation</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Conversion tracking</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Retargeting warm audiences</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Creative testing</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Scaling winning campaigns</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 max-w-[240px]">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-['Manrope']">
                    We review campaigns daily, optimise weekly, and scale when data proves consistency — because ads without monitoring burn money.
                  </p>
                </div>
              </div>

              {/* Bottom 3D Emerald Floating Icon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 opacity-90">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_25px_30px_rgba(16,185,129,0.4)]">
                  <defs>
                    <linearGradient id="greenGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#064e3b" />
                    </linearGradient>
                    <linearGradient id="greenGloss4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(15 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#greenGrad4)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#greenGloss4)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <text
                      x="100"
                      y="125"
                      fill="#ffffff"
                      fontSize="60"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                    >
                      &lt;/&gt;
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 05: Business Automation ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-[2.2rem] p-7 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[470px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl md:text-[28px] font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Business
                </div>
                <div className="text-3xl md:text-[34px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Intelligent</span>{' '}
                  <span className="font-bold">Automation</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-xs font-semibold text-sky-600 mb-3 tracking-tight">
                  We automate repetitive work so your business can work smarter.
                </p>

                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  WE HELP / WE HANDLE:
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Automate repetitive business tasks</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Connect your everyday tools</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Streamline lead follow-ups</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Automate customer communication</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Build workflows around your business process</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 max-w-[240px]">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-['Manrope']">
                    Less manual work. Fewer repetitive tasks. More time for growth.
                  </p>
                </div>
              </div>

              {/* Bottom 3D Amber Floating Icon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 opacity-90">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_25px_30px_rgba(245,158,11,0.4)]">
                  <defs>
                    <linearGradient id="amberGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#9a3412" />
                    </linearGradient>
                    <linearGradient id="amberGloss5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(12 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#amberGrad5)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#amberGloss5)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* Sleek vector data analytics bars & trendline */}
                    <rect x="62" y="96" width="16" height="36" rx="5" fill="#ffffff" opacity="0.75" />
                    <rect x="86" y="74" width="16" height="58" rx="5" fill="#ffffff" opacity="0.9" />
                    <rect x="110" y="52" width="16" height="80" rx="5" fill="#ffffff" />
                    <path
                      d="M 58,102 Q 86,72 126,44"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.95"
                    />
                    <circle cx="126" cy="44" r="5" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 06: Technology Solutions ── */}
            <div
              className="why-card bg-white text-slate-900 rounded-[2.2rem] p-7 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[470px] border border-slate-100 group"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl md:text-[28px] font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Technology
                </div>
                <div className="text-3xl md:text-[34px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Custom</span>{' '}
                  <span className="font-bold">Solutions</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-xs font-semibold text-sky-600 mb-3 tracking-tight">
                  We build technology around your business needs.
                </p>

                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  WE HELP / WE HANDLE:
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Build custom websites and web applications</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Develop business software and digital tools</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Integrate AI into everyday workflows</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Connect systems and business data</span>
                  </li>
                  <li className="text-[12.5px] text-slate-700 flex items-start gap-2 font-['Manrope'] font-medium leading-snug">
                    <span className="text-sky-500 font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Create solutions that simplify operations</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-100 max-w-[240px]">
                  <p className="text-xs text-slate-600 font-medium leading-relaxed font-['Manrope']">
                    Technology should solve real business problems — not add more complexity.
                  </p>
                </div>
              </div>

              {/* Bottom 3D Indigo/Violet Floating Icon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 opacity-90">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_25px_30px_rgba(99,102,241,0.4)]">
                  <defs>
                    <linearGradient id="indigoGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="50%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#312e81" />
                    </linearGradient>
                    <linearGradient id="indigoGloss6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-10 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#indigoGrad6)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#indigoGloss6)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <text
                      x="100"
                      y="125"
                      fill="#ffffff"
                      fontSize="64"
                      fontWeight="900"
                      fontFamily="system-ui, -apple-system, sans-serif"
                      textAnchor="middle"
                    >
                      ↗
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 4. BOTTOM DYNAMIC SCROLL CURVE (Morphs from Arch into Flat)*/}
      {/* ────────────────────────────────────────────────────────── */}
      <div className="relative w-full -mt-1 z-20 pointer-events-none bg-black">
        <svg
          ref={bottomCurveSvgRef}
          viewBox="0 0 1440 240"
          className="w-full h-36 md:h-52 lg:h-64 block"
          preserveAspectRatio="none"
        >
          <path
            ref={bottomCurvePathRef}
            d="M 0,240 C 320,-80 1120,-80 1440,240 L 1440,240 L 0,240 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* 5. RESOURCES & BLOG SECTION (Light Canvas)                  */}
      {/* ────────────────────────────────────────────────────────── */}
      {/* <section className="bg-white pt-20 pb-36 px-6 relative z-10" id="blog">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 border border-slate-200 bg-white rounded-full px-4 py-1.5 text-[10px] font-bold text-slate-600 mb-6 tracking-widest uppercase shadow-xs">
              <Box className="w-3 h-3 text-sky-600" /> Resources
            </div>
            <h2 className="section-title-reveal text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] max-w-4xl mx-auto tracking-tight text-[#0b1528]">
              Get deeper insights, tips,{' '}
              <span className="font-serif italic font-normal text-slate-700 block md:inline">
                and real talk from the blog.
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col lg:flex-row max-w-6xl mx-auto">

            <div className="lg:w-[45%] bg-[#0b1528] text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-[11px] font-bold uppercase tracking-widest mb-12 text-slate-400 border-b border-white/20 pb-4 w-fit">
                  + Trusted by 80+ SaaS startups & product teams
                </div>
                <div className="flex flex-col gap-10 mt-auto">
                  <div className="flex items-center gap-8">
                    <span className="font-black text-2xl tracking-widest font-sans">ECOAPPS</span>
                    <span className="font-bold text-2xl flex items-center gap-1">
                      <span className="text-sky-400">⚡</span> SCALE
                    </span>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-bold text-lg tracking-widest uppercase text-slate-300">
                      BLAZE
                    </span>
                    <span className="font-bold text-xl text-slate-300 leading-tight">
                      Advance
                      <br />
                      Growth
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 to-transparent mix-blend-overlay"></div>
            </div>

            <div className="lg:w-[55%] p-10 md:p-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-500">
                    Project Scope
                  </label>
                  <select className="w-full border-b border-slate-300 py-3 text-sm font-bold text-slate-800 bg-transparent outline-none focus:border-sky-600 transition cursor-pointer">
                    <option>$10k – $25k</option>
                    <option>$25k – $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-500">
                    Timeline
                  </label>
                  <select className="w-full border-b border-slate-300 py-3 text-sm font-bold text-slate-800 bg-transparent outline-none focus:border-sky-600 transition cursor-pointer">
                    <option>Within 1 Month</option>
                    <option>1 – 3 Months</option>
                    <option>Ongoing Advisory</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-[11px] font-bold uppercase tracking-widest mb-2 text-slate-900">
                  What Are You Building*
                </label>
                <input
                  type="text"
                  placeholder="Tell us what are you building"
                  className="w-full border-b border-slate-300 py-3 text-sm font-medium outline-none focus:border-sky-600 transition placeholder:text-slate-400"
                />
              </div>

              <div className="mb-12">
                <label className="block text-[11px] font-bold uppercase tracking-widest mb-4 text-slate-900">
                  What Do You Need Help With?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'UI/UX Design',
                    'SaaS Design',
                    'MVP Development',
                    'Mobile Apps',
                    'Web Development',
                    'Webflow',
                    'AI Products',
                  ].map((t) => (
                    <div
                      key={t}
                      className="border border-slate-200 rounded-full px-4 py-2 text-xs font-bold text-slate-600 cursor-pointer hover:border-black hover:text-black transition"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <button
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  className="w-full sm:w-auto bg-[#0b1528] text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition text-sm shadow-xl cursor-pointer"
                >
                  Book a 30-Min Call
                </button>
                <div className="text-center sm:text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Prefer email instead?
                  </div>
                  <a
                    href="mailto:sales@ecoappssolutions.com"
                    className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-sky-600 transition text-slate-900"
                  >
                    sales@ecoappssolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
