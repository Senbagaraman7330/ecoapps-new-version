import { useState } from 'react';
import Header from '../components/Header';
import AboutFloatingConstellation from '../components/AboutFloatingConstellation';
import ProcessTimeline from '../components/ProcessTimeline';
import TeamShowcase from '../components/TeamShowcase';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

export default function AboutPage() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  return (
    <div className="relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      <Cursor isHovered={isCursorHovered} />
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      {/* About Hero with Exact Full Screen (100vh) Coverage & Floating Icon Constellation */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20 pb-8 px-6 sm:px-10 md:px-14 bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-200 overflow-hidden box-border">
        {/* Floating Icons Constellation Animation */}
        <AboutFloatingConstellation onHover={handleCursorHover} onLeave={handleCursorLeave} />

        <div className="max-w-4xl mx-auto text-center relative z-10 my-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-2xs">
            <span>About Eco Apps Solutions</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0b1528] leading-[1.12] tracking-tight mb-6">
            <span className="block">Engineering Digital Growth</span>
            <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent pb-1">
              with Technology &amp; Modern Marketing
            </span>
          </h1>

          <p className="font-['Manrope'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Eco Apps Solutions, a unit of Data Apps Technologies based in Coimbatore, is a next-generation growth agency. We combine artificial intelligence, performance marketing, search engine optimization, and custom software engineering to build compounding digital engines for ambitious companies.
          </p>
        </div>
      </section>

      {/* Core Principles / 4 Luxury Cards Section */}
      <section className="py-16 md:py-24 px-6 md:px-14 bg-slate-50/70 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
              <span>Our Core Philosophy</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-4xl text-[#0b1528] tracking-tight mb-3">
              Principles That Guide Everything We Build
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-['Manrope']">
              No vanity metrics, no disconnected tactics. We build scalable systems that convert.
            </p>
          </div>

          {/* 4 Luxury White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 w-full">
            {/* ── CARD 01: Outcome Focused ── */}
            <div
              className="bg-white text-slate-900 rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[380px] border border-slate-200/90 group hover:-translate-y-1.5"
              onMouseEnter={handleCursorHover}
              onMouseLeave={handleCursorLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Outcome
                </div>
                <div className="text-[26px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Focused</span>{' '}
                  <span className="font-bold">Growth</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Measurable Business ROI
                </p>
                <h4 className="text-sm font-bold text-slate-950 mb-1.5 tracking-tight">
                  Outcome Focused
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[210px] font-['Manrope'] font-medium">
                  Every line of code and marketing dollar is measured by qualified leads and revenue growth.
                </p>
              </div>

              {/* Bottom 3D Blue Floating Icon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_25px_rgba(0,87,255,0.35)]">
                  <defs>
                    <linearGradient id="aboutBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2575fc" />
                      <stop offset="50%" stopColor="#0052d4" />
                      <stop offset="100%" stopColor="#003594" />
                    </linearGradient>
                    <linearGradient id="aboutBlueGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-15 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aboutBlueGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aboutBlueGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    <text
                      x="100"
                      y="125"
                      fill="#ffffff"
                      fontSize="56"
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

            {/* ── CARD 02: AI & Automation ── */}
            <div
              className="bg-white text-slate-900 rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[380px] border border-slate-200/90 group hover:-translate-y-1.5"
              onMouseEnter={handleCursorHover}
              onMouseLeave={handleCursorLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Intelligent
                </div>
                <div className="text-[26px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">AI &amp;</span>{' '}
                  <span className="font-bold">Automation</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Modern Workflow Engineering
                </p>
                <h4 className="text-sm font-bold text-slate-950 mb-1.5 tracking-tight">
                  AI &amp; Automation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[210px] font-['Manrope'] font-medium">
                  We integrate state-of-the-art AI tooling and workflows to dramatically reduce manual friction.
                </p>
              </div>

              {/* Bottom 3D Iridescent Origami Ribbon Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_25px_rgba(99,102,241,0.4)]">
                  <defs>
                    <linearGradient id="aboutAiRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="40%" stopColor="#818cf8" />
                      <stop offset="80%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="aboutAiRibbon2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <g transform="translate(40, 20) rotate(12)">
                    <path
                      d="M 40,20 L 75,5 C 85,2 95,8 98,18 L 105,45 L 85,55 Z"
                      fill="url(#aboutAiRibbon2)"
                      opacity="0.85"
                    />
                    <path
                      d="M 40,20 L 85,55 L 60,110 L 20,60 Z"
                      fill="url(#aboutAiRibbon1)"
                    />
                    <path
                      d="M 60,110 L 85,55 L 115,85 C 125,95 120,110 110,115 L 75,125 Z"
                      fill="url(#aboutAiRibbon2)"
                      opacity="0.9"
                    />
                    <path
                      d="M 20,60 L 60,110 L 30,130 C 20,135 10,125 12,115 L 15,80 Z"
                      fill="url(#aboutAiRibbon1)"
                      opacity="0.75"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 03: Continuous Scale ── */}
            <div
              className="bg-white text-slate-900 rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[380px] border border-slate-200/90 group hover:-translate-y-1.5"
              onMouseEnter={handleCursorHover}
              onMouseLeave={handleCursorLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Continuous
                </div>
                <div className="text-[26px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Predictable</span>{' '}
                  <span className="font-bold">Scale</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  High-Velocity Architecture
                </p>
                <h4 className="text-sm font-bold text-slate-950 mb-1.5 tracking-tight">
                  Continuous Scale
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[210px] font-['Manrope'] font-medium">
                  Architecting digital systems and funnels that scale seamlessly as your market demands multiply.
                </p>
              </div>

              {/* Bottom 3D Orange Growth Bar Graph Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_25px_rgba(245,158,11,0.35)]">
                  <defs>
                    <linearGradient id="aboutAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="aboutAmberGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-15 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aboutAmberGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aboutAmberGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* 3D Bar Chart */}
                    <rect x="52" y="105" width="18" height="40" rx="6" fill="#ffffff" opacity="0.9" />
                    <rect x="78" y="85" width="18" height="60" rx="6" fill="#ffffff" opacity="0.95" />
                    <rect x="104" y="65" width="18" height="80" rx="6" fill="#ffffff" />
                    <rect x="130" y="45" width="18" height="100" rx="6" fill="#ffffff" />
                  </g>
                </svg>
              </div>
            </div>

            {/* ── CARD 04: Total Transparency ── */}
            <div
              className="bg-white text-slate-900 rounded-[2.2rem] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl relative overflow-hidden cursor-pointer transition-all duration-300 min-h-[380px] border border-slate-200/90 group hover:-translate-y-1.5"
              onMouseEnter={handleCursorHover}
              onMouseLeave={handleCursorLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Typography */}
              <div className="relative z-10">
                <div className="text-2xl font-bold text-slate-950 tracking-tight leading-none mb-1">
                  Total
                </div>
                <div className="text-[26px] text-slate-950 tracking-tight leading-tight">
                  <span className="font-serif italic font-normal">Active</span>{' '}
                  <span className="font-bold">Transparency</span>
                </div>

                <div className="w-full h-px bg-slate-200/80 my-4" />

                <p className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  Live Analytics &amp; Reporting
                </p>
                <h4 className="text-sm font-bold text-slate-950 mb-1.5 tracking-tight">
                  Total Transparency
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[210px] font-['Manrope'] font-medium">
                  Complete visibility with live analytics dashboards, weekly checkpoints, and honest counsel.
                </p>
              </div>

              {/* Bottom 3D Emerald Shield Graphic */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_25px_rgba(16,185,129,0.35)]">
                  <defs>
                    <linearGradient id="aboutEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#047857" />
                    </linearGradient>
                    <linearGradient id="aboutEmeraldGloss" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <g transform="rotate(-15 100 100)">
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aboutEmeraldGrad)" />
                    <rect x="25" y="25" width="150" height="150" rx="42" fill="url(#aboutEmeraldGloss)" />
                    <path
                      d="M 35,45 C 55,30 145,30 165,45 C 130,85 70,85 35,45 Z"
                      fill="#ffffff"
                      opacity="0.25"
                    />
                    {/* 3D Checkmark */}
                    <path
                      d="M 68,102 L 90,124 L 134,80"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <ProcessTimeline onHover={handleCursorHover} onLeave={handleCursorLeave} />

      {/* Team Showcase */}
      <TeamShowcase onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <FinalCTA onHover={handleCursorHover} onLeave={handleCursorLeave} />
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
