import { useEffect, useRef, useState } from 'react';
import './ProcessTimeline.css';

interface StepItem {
  id: string;
  stepNumber: string;
  stepName: string;
  title: string;
  description: string;
  badge: string;
  type: 'strategy' | 'product' | 'launch';
}

const stepsData: StepItem[] = [
  {
    id: 'step-1',
    stepNumber: 'Step 1',
    stepName: 'Plan',
    title: 'Define the Product & Growth Goal',
    description:
      'We start by understanding your product idea, audience intent, competitive landscape, and the most impactful features you need first.',
    badge: 'Discovery & Strategy',
    type: 'strategy',
  },
  {
    id: 'step-2',
    stepNumber: 'Step 2',
    stepName: 'Structure',
    title: 'Create Product Experience',
    description:
      'We plan the screens, high-converting user flows, interactive prototypes, and product structure before moving into rapid development.',
    badge: 'UI/UX & Architecture',
    type: 'product',
  },
  {
    id: 'step-3',
    stepNumber: 'Step 3',
    stepName: 'Build',
    title: 'Design & Develop Together',
    description:
      'Our designers and full-stack developers work in parallel to turn your product into a launch-ready, high-converting revenue experience.',
    badge: 'Parallel Engineering & Launch',
    type: 'launch',
  },
];

interface ProcessTimelineProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ProcessTimeline({ onHover, onLeave }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rows = document.querySelectorAll('.timeline_row');
      const triggerY = window.innerHeight * 0.45;

      rows.forEach((row, index) => {
        const rect = row.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="workflow-section relative px-6 md:px-14 py-28 md:py-36 bg-white border-b border-slate-200 overflow-hidden"
      id="process"
    >
      {/* Right Edge Rail with Tracking Dot (Orbix Studio signature detail) */}
      <div className="timeline-right-rail" aria-hidden="true">
        <div className="timeline-rail-dot"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-24 md:mb-28">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-xs">
          <span>Our Process</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,4.5vw,62px)] leading-[1.08] tracking-[-0.035em] text-[#0b1528] mb-6">
          A Faster Way To Design And{' '}
          <span className="font-serif italic font-normal text-sky-600">
            Build Digital Products
          </span>
        </h2>

        <p className="font-['Manrope'] text-[17px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
          We simplify the product creation process for growing businesses and SaaS companies by combining strategy, design, and development into one efficient workflow focused on faster launches.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="timeline-content">
        {/* Continuous Center Background Track */}
        <div className="timeline_progress-track">
          <div className="timeline_progress-fill" id="timelineProgressFill"></div>
        </div>

        {/* Steps List */}
        <div className="timeline_list">
          {stepsData.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.id}
                className={`timeline_row ${isActive ? 'is-active' : ''}`}
                data-step-index={index}
              >
                {/* Left Column: Step Tag & Large Serif Italic Title */}
                <div className="timeline_left-space">
                  <div className="step-tag">{step.stepNumber}</div>
                  <div className="step-title-italic">{step.stepName}</div>
                </div>

                {/* Center Node Indicator on Track */}
                <div className="timeline_circle-wrapper">
                  <div className="timeline_circle-outer">
                    <div className="timeline_circle-inner">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Right Column: Content + Media Card */}
                <div
                  className="timeline_item"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  {/* Left part of Item: Lead Text & Description */}
                  <div className="timeline-card-content">
                    <div className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] font-bold tracking-widest text-sky-600 uppercase">
                      <span>{step.badge}</span>
                      <span>•</span>
                      <span>0{index + 1}</span>
                    </div>

                    <h3 className="text-lead">{step.title}</h3>

                    <p className="text-body">{step.description}</p>
                  </div>

                  {/* Right part of Item: Custom Framed Visual Media */}
                  <div className="marge-image-wrap">
                    {step.type === 'strategy' && (
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] flex flex-col justify-between p-4 md:p-5 text-white shadow-md">
                        {/* Video Call Mockup Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="font-['JetBrains_Mono'] text-[11px] text-slate-300">
                              Discovery Call with Product Lead
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-['JetBrains_Mono'] text-sky-300">
                            LIVE
                          </span>
                        </div>

                        {/* Video Participant Avatar & Center Graphics */}
                        <div className="my-auto flex flex-col items-center justify-center text-center p-3">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-600 border-2 border-white/80 shadow-xl flex items-center justify-center text-3xl mb-3">
                            <span>👋</span>
                          </div>
                          <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-white">
                            Senior Growth Architect
                          </h4>
                          <p className="text-xs text-slate-300 font-['Manrope']">
                            Aligning features, target persona & sprint scope
                          </p>
                        </div>

                        {/* Video Control Bar */}
                        <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/10">
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs">
                            🎙️
                          </div>
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs">
                            📹
                          </div>
                          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs">
                            💬
                          </div>
                          <div className="w-7 h-7 rounded-full bg-red-500/90 flex items-center justify-center text-xs text-white">
                            ✕
                          </div>
                        </div>
                      </div>
                    )}

                    {step.type === 'product' && (
                      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-white aspect-[4/3] flex flex-col justify-between p-4 md:p-5 border border-slate-200/80 shadow-md">
                        {/* Browser Bar */}
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                          </div>
                          <span className="text-[10px] font-['JetBrains_Mono'] text-slate-500 bg-white px-3 py-0.5 rounded-full border border-slate-200">
                            app.ecoapps.com/store-flow
                          </span>
                          <span className="text-[10px] font-['JetBrains_Mono'] font-bold text-sky-600">
                            PROTOTYPE
                          </span>
                        </div>

                        {/* Product Mockup Screen Showcase */}
                        <div className="my-auto text-center py-2">
                          <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-[#0b1528] mb-1">
                            Fast, Fresh & Delivered To Your Door
                          </h4>
                          <p className="text-xs text-slate-500 mb-3">
                            High-impact mobile & web application experience
                          </p>

                          {/* App Flow Badges */}
                          <div className="flex justify-center items-center gap-2">
                            <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                              <div className="text-[9px] text-slate-400 font-['JetBrains_Mono']">Conversion</div>
                              <div className="text-xs font-bold text-emerald-600">+42.6%</div>
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-md shadow-blue-500/20">
                              Ready for Launch
                            </div>
                          </div>
                        </div>

                        {/* Bottom Status */}
                        <div className="flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-slate-500 pt-2 border-t border-slate-200">
                          <span>📱 Multi-Device Adaptive</span>
                          <span className="text-sky-600 font-bold">Figma & React Live</span>
                        </div>
                      </div>
                    )}

                    {step.type === 'launch' && (
                      <div className="relative rounded-xl overflow-hidden bg-[#0b1528] aspect-[4/3] flex flex-col justify-between p-4 md:p-5 text-white shadow-md">
                        {/* Dashboard Top Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div>
                            <span className="text-[10px] font-['JetBrains_Mono'] text-slate-400">
                              Production Suite
                            </span>
                            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-white">
                              Real-Time Growth & Analytics
                            </h4>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-['JetBrains_Mono'] font-bold">
                            99.9% UPTIME
                          </span>
                        </div>

                        {/* Analytics Gauges & Chart Simulation */}
                        <div className="my-auto space-y-3 py-2">
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">
                                ARR Metric
                              </div>
                              <div className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-white">
                                $248,500 <span className="text-emerald-400 text-xs">↑ +38%</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">
                                Compliance Score
                              </div>
                              <div className="text-xl font-bold font-['Plus_Jakarta_Sans'] text-sky-400">
                                94%
                              </div>
                            </div>
                          </div>

                          <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 h-full w-[94%] rounded-full"></div>
                          </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-['JetBrains_Mono'] text-[10px]">
                          <div className="bg-white/5 rounded p-1.5">
                            <div className="text-slate-400">Speed</div>
                            <div className="font-bold text-white">0.6s</div>
                          </div>
                          <div className="bg-white/5 rounded p-1.5">
                            <div className="text-slate-400">ROAS</div>
                            <div className="font-bold text-emerald-400">4.8×</div>
                          </div>
                          <div className="bg-white/5 rounded p-1.5">
                            <div className="text-slate-400">Leads</div>
                            <div className="font-bold text-sky-400">2.4k+</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
