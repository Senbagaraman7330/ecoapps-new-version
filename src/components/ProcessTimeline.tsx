interface ProcessStep {
  stepNumber: string;
  stepName: string;
  title: string;
  description: string;
  tag: string;
  previewType: 'discovery' | 'experience' | 'dashboard';
}

const steps: ProcessStep[] = [
  {
    stepNumber: 'Step 1',
    stepName: 'Plan',
    title: 'Define the Growth & Product Goal',
    description:
      'We start by understanding your market positioning, high-intent audience segments, and the core conversion opportunities you need first.',
    tag: 'Discovery & Strategy',
    previewType: 'discovery',
  },
  {
    stepNumber: 'Step 2',
    stepName: 'Structure',
    title: 'Create High-Converting Experiences',
    description:
      'We architect the screens, seamless customer journeys, interactive funnels, and conversion structure before moving into rapid development.',
    tag: 'UI/UX & Funnel Architecture',
    previewType: 'experience',
  },
  {
    stepNumber: 'Step 3',
    stepName: 'Build',
    title: 'Design & Develop Together',
    description:
      'Our strategists, designers, and full-stack engineers work in parallel to turn your product into a launch-ready, high-performing growth machine.',
    tag: 'Full-Stack & Growth Launch',
    previewType: 'dashboard',
  },
];

interface ProcessTimelineProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ProcessTimeline({ onHover, onLeave }: ProcessTimelineProps) {
  return (
    <section
      className="process-timeline-section relative px-6 md:px-14 py-28 md:py-36 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-slate-200 overflow-hidden"
      id="process"
    >
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto text-center mb-24 md:mb-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
          <span>Our Proven Process</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,4.5vw,60px)] leading-[1.08] tracking-[-0.035em] text-[#0b1528] mb-6">
          A Faster Way To Design And{' '}
          <span className="italic font-serif font-normal bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Build Digital Growth
          </span>
        </h2>

        <p className="font-['Manrope'] text-[17px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
          We simplify digital transformation and customer acquisition by combining strategy, design, and high-performance technology into one efficient workflow focused on faster launches and compounding revenue.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="timeline-container relative max-w-6xl mx-auto">
        {/* Continuous Background Vertical Line */}
        <div className="timeline-track-bg absolute left-[28px] md:left-[210px] top-8 bottom-12 w-[2px] bg-slate-200 z-0"></div>

        {/* Dynamic Animated Progress Fill Line */}
        <div
          className="timeline-track-fill absolute left-[28px] md:left-[210px] top-8 w-[2px] bg-gradient-to-b from-sky-500 via-blue-600 to-indigo-600 z-0 origin-top will-change-transform"
          style={{ height: '0%' }}
        ></div>

        {/* Steps List */}
        <div className="space-y-24 md:space-y-36 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.stepNumber}
              className="timeline-row group grid grid-cols-1 md:grid-cols-[180px_60px_1fr] gap-6 md:gap-8 items-start"
            >
              {/* Left Column: Step Badge & Serif Subtitle */}
              <div className="timeline-left hidden md:flex flex-col items-end pt-2 text-right pr-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 font-['JetBrains_Mono'] text-xs font-bold tracking-wider mb-2">
                  {step.stepNumber}
                </span>
                <span className="font-serif italic text-3xl font-normal text-[#0b1528] tracking-tight">
                  {step.stepName}
                </span>
              </div>

              {/* Center Column: Node Indicator Icon on Track */}
              <div className="timeline-node-wrapper flex md:justify-center items-start pt-1">
                {/* Mobile step tag shown above on small screens */}
                <div className="flex md:hidden items-center gap-3 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-['JetBrains_Mono'] text-xs font-bold">
                    {step.stepNumber}
                  </span>
                  <span className="font-serif italic text-2xl font-normal text-[#0b1528]">
                    {step.stepName}
                  </span>
                </div>

                <div className="timeline-node relative w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-sky-500 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.35)]">
                  {/* Glowing inner orb */}
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-inner">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column: Step Content & Media Preview Card */}
              <div
                className="timeline-card-wrapper bg-white/80 backdrop-blur-md rounded-[32px] p-6 md:p-9 border border-slate-200/90 shadow-[0_12px_36px_rgba(11,21,40,0.06)] hover:shadow-[0_20px_48px_rgba(14,165,233,0.14)] hover:border-sky-300/80 transition-all duration-500 hover:-translate-y-1.5"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                {/* Text Content */}
                <div className="mb-8">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-widest text-sky-600">
                      {step.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 font-['JetBrains_Mono']">
                      0{index + 1} / 03
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl md:text-3xl text-[#0b1528] tracking-tight leading-tight mb-3">
                    {step.title}
                  </h3>

                  <p className="font-['Manrope'] text-[15px] md:text-base leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                {/* Media Showcase Card with Realistic Custom UI Mockups */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 p-2 md:p-3 shadow-inner">
                  {step.previewType === 'discovery' && (
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1528] p-6 min-h-[280px] md:min-h-[340px] flex flex-col justify-between text-white">
                      {/* Top Bar Video UI */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                          <span className="font-['JetBrains_Mono'] text-xs font-semibold text-white/90">
                            Live Discovery Session — Strategy Pod
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-['JetBrains_Mono'] text-sky-300">
                            HD 1080p
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-['JetBrains_Mono']">
                            RECORDING
                          </span>
                        </div>
                      </div>

                      {/* Video Center Speaker Mockup */}
                      <div className="my-6 flex flex-col sm:flex-row items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-sky-400/80 shrink-0 shadow-lg bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-3xl font-bold">
                          <span>👨‍💼</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-white">
                              Growth Architect & Lead Strategist
                            </h4>
                            <span className="px-2 py-0.5 rounded bg-sky-500 text-[10px] font-bold">
                              EcoApps Pod
                            </span>
                          </div>
                          <p className="text-sm text-slate-300 font-['Manrope'] leading-relaxed">
                            "Mapping your customer acquisition bottlenecks, optimizing audience segments, and establishing clear conversion milestones for the sprint."
                          </p>
                        </div>
                      </div>

                      {/* Call Controls Bar */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-slate-400">
                          <span>🎙️ Audio Connected</span>
                          <span className="text-slate-600">•</span>
                          <span>🔒 End-to-End Encrypted</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                            🎤
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                            📹
                          </div>
                          <div className="px-4 py-1.5 rounded-full bg-red-500/80 text-white font-['JetBrains_Mono'] text-xs font-bold hover:bg-red-600 transition">
                            Leave
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {step.previewType === 'experience' && (
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#0b1528] to-slate-950 p-6 min-h-[280px] md:min-h-[340px] text-white">
                      {/* Browser Window Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
                        </div>
                        <div className="px-6 py-1 rounded-full bg-white/10 text-xs font-['JetBrains_Mono'] text-slate-300">
                          preview.ecoapps.app/growth-funnel
                        </div>
                        <div className="text-xs text-sky-400 font-bold font-['JetBrains_Mono']">
                          PROTOTYPE V3
                        </div>
                      </div>

                      {/* Funnel Wireframe Showcase */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <div className="text-[11px] font-['JetBrains_Mono'] text-sky-400 font-bold mb-2">
                            01. LANDING HERO
                          </div>
                          <div className="h-2 w-3/4 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-white/20 rounded mb-4"></div>
                          <div className="h-6 w-full bg-sky-500/30 rounded border border-sky-400/50 flex items-center justify-center text-[10px] font-bold text-sky-200">
                            CTA TRIGGER →
                          </div>
                        </div>

                        <div className="bg-white/10 border border-sky-400/40 rounded-xl p-4 relative shadow-lg shadow-sky-500/10">
                          <div className="text-[11px] font-['JetBrains_Mono'] text-sky-300 font-bold mb-2">
                            02. VALUE CAPTURE
                          </div>
                          <div className="h-2 w-full bg-white/40 rounded mb-2"></div>
                          <div className="h-2 w-2/3 bg-white/20 rounded mb-4"></div>
                          <div className="h-6 w-full bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                            1-CLICK QUALIFY
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                          <div className="text-[11px] font-['JetBrains_Mono'] text-emerald-400 font-bold mb-2">
                            03. CHECKOUT & SCALE
                          </div>
                          <div className="h-2 w-4/5 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 w-1/3 bg-white/20 rounded mb-4"></div>
                          <div className="h-6 w-full bg-emerald-500/30 rounded border border-emerald-400/50 flex items-center justify-center text-[10px] font-bold text-emerald-200">
                            CONFIRMATION ✓
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 font-['JetBrains_Mono'] pt-2 border-t border-white/10">
                        <span>⚡ Conversion Flow Optimized</span>
                        <span className="text-emerald-400 font-bold">+44% Expected Lift</span>
                      </div>
                    </div>
                  )}

                  {step.previewType === 'dashboard' && (
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-[#020617] p-6 min-h-[280px] md:min-h-[340px] text-white">
                      {/* Metric Banner */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                        <div>
                          <div className="font-['JetBrains_Mono'] text-[11px] text-slate-400 uppercase tracking-wider">
                            Live Revenue & Pipeline
                          </div>
                          <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl text-white">
                            $248,650{' '}
                            <span className="text-emerald-400 text-sm font-semibold ml-2">
                              ↑ +38.4%
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-['JetBrains_Mono'] text-xs font-bold border border-emerald-500/30">
                            Launch Complete
                          </span>
                          <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-['JetBrains_Mono'] text-xs font-bold border border-sky-500/30">
                            99.9% Uptime
                          </span>
                        </div>
                      </div>

                      {/* Interactive Graph Simulation */}
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-xs font-['JetBrains_Mono'] text-slate-400">
                          <span>Traffic to Qualified Lead Rate</span>
                          <span className="text-sky-400 font-bold">14.8% (Top 1% Tier)</span>
                        </div>
                        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
                          <div className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full w-[88%] animate-pulse"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/10">
                        <div className="bg-white/5 rounded-lg p-2.5 text-center">
                          <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">Speed</div>
                          <div className="font-bold text-white text-sm">0.6s</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2.5 text-center">
                          <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">ROAS</div>
                          <div className="font-bold text-emerald-400 text-sm">4.8×</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2.5 text-center">
                          <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">Leads</div>
                          <div className="font-bold text-white text-sm">+2,400</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2.5 text-center">
                          <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">Scale</div>
                          <div className="font-bold text-sky-400 text-sm">Global</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
