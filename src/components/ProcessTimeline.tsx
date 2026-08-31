import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProcessTimeline.css';

gsap.registerPlugin(ScrollTrigger);

interface StepItem {
  id: string;
  stepNumber: string;
  stepName: string;
  title: string;
  description: string;
  type: 'strategy' | 'product' | 'launch';
}

const stepsData: StepItem[] = [
  {
    id: 'step-1',
    stepNumber: 'Step 1',
    stepName: 'Plan',
    title: 'Define the Product Goal',
    description:
      'We start by understanding your product idea and the most important features you need first.',
    type: 'strategy',
  },
  {
    id: 'step-2',
    stepNumber: 'Step 2',
    stepName: 'Structure',
    title: 'Create Product Experience',
    description:
      'We plan the screens, user flows, and product structure before moving into development.',
    type: 'product',
  },
  {
    id: 'step-3',
    stepNumber: 'Step 3',
    stepName: 'Build',
    title: 'Design & Develop together',
    description:
      'Our designers and dev work together to turn the product into a launch-ready experience.',
    type: 'launch',
  },
];

interface ProcessTimelineProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ProcessTimeline({ onHover, onLeave }: ProcessTimelineProps) {
  const [reachedSteps, setReachedSteps] = useState<boolean[]>([true, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackFillRef = useRef<HTMLDivElement>(null);
  const railDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = document.querySelectorAll<HTMLElement>('.timeline_row');
      if (rows.length < 3) return;

      // Master ScrollTrigger for the Timeline Section
      ScrollTrigger.create({
        trigger: '.workflow-section',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress;

          // 1. Update the line height
          if (trackFillRef.current) {
            trackFillRef.current.style.height = `${Math.min(100, progress * 100)}%`;
          }

          // 2. Update the right rail dot position
          if (railDotRef.current) {
            const railHeight = sectionRef.current?.offsetHeight ? sectionRef.current.offsetHeight - 240 : 800;
            railDotRef.current.style.transform = `translateY(${progress * railHeight}px)`;
          }

          // 3. Step reaching logic:
          // Step 1 is always reached once section is visible
          // Step 2 is reached around 45% - 50% scroll progress (when the line touches Step 2's circle)
          // Step 3 is reached around 85% - 90% scroll progress (when the line touches Step 3's circle)
          const isStep1Reached = true;
          const isStep2Reached = progress >= 0.42;
          const isStep3Reached = progress >= 0.82;

          setReachedSteps([isStep1Reached, isStep2Reached, isStep3Reached]);
        },
      });

      // Individual row trigger to activate the specific row's text highlight
      rows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 55%',
          end: 'bottom 45%',
          toggleClass: { targets: row, className: 'is-active' },
        });

        // Entrance animation for cards
        gsap.from(row.querySelector('.timeline_item'), {
          y: 40,
          opacity: 0.8,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="workflow-section relative px-6 md:px-14 py-28 md:py-36 bg-white border-b border-slate-200 overflow-hidden"
      id="process"
    >
      {/* Right Edge Rail with Tracking Dot (Orbix Studio signature detail) */}
      <div className="timeline-right-rail" aria-hidden="true">
        <div ref={railDotRef} className="timeline-rail-dot"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-xs">
          <span>Our Process</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4.8vw,66px)] leading-[1.06] tracking-[-0.035em] text-[#0b1528] mb-6">
          A Faster Way To Design And{' '}
          <span className="font-serif italic font-normal text-sky-600">
            Build Digital Products
          </span>
        </h2>

        <p className="font-['Manrope'] text-[17px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
          We simplify the product creation process for SaaS and modern businesses by combining strategy, design, and development into one efficient workflow focused on faster launches.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="timeline-content">
        {/* Continuous Center Background Track */}
        <div className="timeline_progress-track">
          <div ref={trackFillRef} className="timeline_progress-fill"></div>
        </div>

        {/* Steps List */}
        <div className="timeline_list">
          {stepsData.map((step, index) => {
            const isReached = reachedSteps[index];

            return (
              <div
                key={step.id}
                className={`timeline_row ${isReached ? 'is-reached' : ''}`}
                data-step-index={index}
              >
                {/* Left Column: Step Tag & Large Serif Italic Title */}
                <div className="timeline_left-space">
                  <div className="step-tag">{step.stepNumber}</div>
                  <div className="step-title-italic">{step.stepName}</div>
                </div>

                {/* Center Node Indicator on Track */}
                <div className="timeline_circle-wrapper">
                  {/* Subtle placeholder ring before line reaches this step */}
                  <div className="timeline_circle-placeholder"></div>

                  {/* Active Circle Halo with Downward Arrow Button */}
                  <div className="timeline_circle-outer">
                    <div className="timeline_circle-inner">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="transform rotate-0"
                      >
                        <path d="M12 16L6 10H18L12 16Z" />
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
                    <h3 className="text-lead">{step.title}</h3>
                    <p className="text-body">{step.description}</p>
                  </div>

                  {/* Right part of Item: Custom Framed Visual Media */}
                  <div className="marge-image-wrap">
                    {step.type === 'strategy' && (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[16/10] flex flex-col justify-between p-5 text-white shadow-md">
                        {/* Video Call Mockup Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="font-['JetBrains_Mono'] text-xs text-slate-200 font-medium">
                              Strategy Discovery Session
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-['JetBrains_Mono'] text-sky-300">
                            HD • LIVE
                          </span>
                        </div>

                        {/* Video Participant Avatar & Center Graphics */}
                        <div className="my-auto flex items-center gap-5 p-2">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 border-2 border-white/80 shadow-xl flex items-center justify-center text-4xl shrink-0">
                            <span>👨‍💻</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base md:text-lg text-white">
                                Product Strategy Lead
                              </h4>
                              <span className="px-2 py-0.5 rounded bg-sky-500/80 text-[10px] font-bold">
                                EcoApps Pod
                              </span>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 font-['Manrope'] leading-relaxed">
                              "Aligning product roadmap, core user journeys, and high-impact revenue milestones."
                            </p>
                          </div>
                        </div>

                        {/* Video Control Bar */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                          <div className="flex items-center gap-2 text-xs text-slate-400 font-['JetBrains_Mono']">
                            <span>🔒 Encrypted</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                              🎙️
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                              📹
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                              💬
                            </div>
                            <div className="px-3 py-1 rounded-full bg-red-500/90 text-white font-['JetBrains_Mono'] text-xs font-bold">
                              End
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.type === 'product' && (
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50/50 via-white to-sky-50 aspect-[16/10] flex flex-col justify-between p-5 border border-slate-200/80 shadow-md">
                        {/* Browser Bar */}
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                          </div>
                          <span className="text-[11px] font-['JetBrains_Mono'] text-slate-600 bg-white px-3.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                            app.ecoapps.com/delivery-experience
                          </span>
                          <span className="text-[11px] font-['JetBrains_Mono'] font-bold text-sky-600">
                            PROTOTYPE
                          </span>
                        </div>

                        {/* Product Mockup Screen Showcase */}
                        <div className="my-auto text-center py-2">
                          <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl text-[#0b1528] mb-1">
                            Fast, Fresh & Delivered To Your Door
                          </h4>
                          <p className="text-xs text-slate-500 mb-3">
                            Responsive customer experience & automated ordering funnel
                          </p>

                          {/* App Flow Badges */}
                          <div className="flex justify-center items-center gap-3">
                            <div className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                              <div className="text-[9px] text-slate-400 font-['JetBrains_Mono']">Conversion Lift</div>
                              <div className="text-xs font-bold text-emerald-600">+42.8%</div>
                            </div>
                            <div className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold shadow-md shadow-orange-500/20">
                              Ready For Launch →
                            </div>
                          </div>
                        </div>

                        {/* Bottom Status */}
                        <div className="flex items-center justify-between text-[11px] font-['JetBrains_Mono'] text-slate-500 pt-2.5 border-t border-slate-200">
                          <span>📱 Multi-Device Adaptive</span>
                          <span className="text-sky-600 font-bold">Figma & React Live</span>
                        </div>
                      </div>
                    )}

                    {step.type === 'launch' && (
                      <div className="relative rounded-2xl overflow-hidden bg-[#0b1528] aspect-[16/10] flex flex-col justify-between p-5 text-white shadow-md">
                        {/* Dashboard Top Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div>
                            <span className="text-[10px] font-['JetBrains_Mono'] text-slate-400">
                              Welcome Back, Growth Lead
                            </span>
                            <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm md:text-base text-white">
                              Live Production & Campaign Suite
                            </h4>
                          </div>
                          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-['JetBrains_Mono'] font-bold">
                            99.9% UPTIME
                          </span>
                        </div>

                        {/* Analytics Gauges & Chart Simulation */}
                        <div className="my-auto space-y-3.5 py-2">
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">
                                ARR Metric
                              </div>
                              <div className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-white">
                                $248,500 <span className="text-emerald-400 text-xs font-semibold">↑ +38%</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-[10px] text-slate-400 font-['JetBrains_Mono']">
                                Compliance Score
                              </div>
                              <div className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-amber-400">
                                94%
                              </div>
                            </div>
                          </div>

                          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden p-0.5">
                            <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 h-full w-[94%] rounded-full animate-pulse"></div>
                          </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-3 gap-2.5 pt-2.5 border-t border-white/10 text-center font-['JetBrains_Mono'] text-[11px]">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-slate-400 text-[10px]">Speed</div>
                            <div className="font-bold text-white">0.6s</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-slate-400 text-[10px]">ROAS</div>
                            <div className="font-bold text-emerald-400">4.8×</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-slate-400 text-[10px]">Leads</div>
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
