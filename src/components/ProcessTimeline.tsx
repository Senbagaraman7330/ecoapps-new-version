import { useState, useEffect, useRef } from 'react';
import {
  Search,
  Target,
  Compass,
  Code2,
  Rocket,
  BarChart3,
  TrendingUp,
  Check,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProcessTimeline.css';

gsap.registerPlugin(ScrollTrigger);

// Exact 3 Light Colors from the Feature Cards
const COLOR_THEMES = [
  {
    themeClass: 'process-theme-1',
    accentColor: '#0284c7', // Mint / Cyan (Sky-600)
    iconBg: '#e0f2fe',
    badgeBg: '#f0f9ff',
    badgeBorder: '#bae6fd',
  },
  {
    themeClass: 'process-theme-2',
    accentColor: '#2563eb', // Royal Blue (Blue-600)
    iconBg: '#dbeafe',
    badgeBg: '#f0f7ff',
    badgeBorder: '#bfdbfe',
  },
  {
    themeClass: 'process-theme-3',
    accentColor: '#7c3aed', // Purple / Indigo (Indigo/Purple-600)
    iconBg: '#ede9fe',
    badgeBg: '#f5f3ff',
    badgeBorder: '#ddd6fe',
  },
];

interface ProcessStep {
  id: number;
  numStr: string;
  name: string;
  tag: string;
  title: string;
  description: string;
  icon: typeof Search;
  themeClass: string;
  accentColor: string;
  iconBg: string;
  badgeBg: string;
  badgeBorder: string;
}

const rawSteps = [
  {
    id: 1,
    numStr: '01',
    name: 'DISCOVER',
    tag: 'STEP 01',
    title: 'Discover',
    description: 'We understand your business, customers, competitors, goals, and challenges.',
    icon: Search,
  },
  {
    id: 2,
    numStr: '02',
    name: 'DIAGNOSE',
    tag: 'STEP 02',
    title: 'Diagnose',
    description: 'We identify visibility gaps, conversion issues, and growth opportunities.',
    icon: Target,
  },
  {
    id: 3,
    numStr: '03',
    name: 'STRATEGIZE',
    tag: 'STEP 03',
    title: 'Strategize',
    description: 'We create a customized digital growth strategy based on your business objectives.',
    icon: Compass,
  },
  {
    id: 4,
    numStr: '04',
    name: 'BUILD',
    tag: 'STEP 04',
    title: 'Build',
    description: 'We develop the campaigns, content, websites, and digital systems required to execute the strategy.',
    icon: Code2,
  },
  {
    id: 5,
    numStr: '05',
    name: 'LAUNCH',
    tag: 'STEP 05',
    title: 'Launch',
    description: 'We take the solution to market with proper conversion tracking and analytics.',
    icon: Rocket,
  },
  {
    id: 6,
    numStr: '06',
    name: 'OPTIMIZE',
    tag: 'STEP 06',
    title: 'Optimize',
    description: 'We test, analyse, and improve performance using real data.',
    icon: BarChart3,
  },
  {
    id: 7,
    numStr: '07',
    name: 'SCALE',
    tag: 'STEP 07',
    title: 'Scale',
    description: 'We focus more on the strategies and channels that deliver verified and profitable growth.',
    icon: TrendingUp,
  },
];

// Loop the exact 3 colors across all 7 steps: 1 -> 2 -> 3 -> 1 -> 2 -> 3 -> 1
const steps: ProcessStep[] = rawSteps.map((step, idx) => {
  const theme = COLOR_THEMES[idx % 3];
  return {
    ...step,
    ...theme,
  };
});

interface ProcessTimelineProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ProcessTimeline({ onHover, onLeave }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth scroll sync with viewport scroll action
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 1. GSAP ScrollTrigger based tracking
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row, idx) => {
        if (!row) return;
        const stepNum = idx + 1;

        ScrollTrigger.create({
          trigger: row,
          start: 'top 65%',
          end: 'bottom 35%',
          onEnter: () => setActiveStep(stepNum),
          onEnterBack: () => setActiveStep(stepNum),
        });
      });
    }, section);

    // 2. High-precision scroll event listener fallback
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.52;
      let closestStep = 1;
      let minDistance = Infinity;

      rowRefs.current.forEach((row, idx) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const distance = Math.abs(rowCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestStep = idx + 1;
        }
      });

      // Only update if the section is currently in view
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
        setActiveStep(closestStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process-section relative px-4 sm:px-8 md:px-14 py-14 md:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200 overflow-hidden"
      id="process"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-r from-sky-100/40 via-blue-100/30 to-purple-100/30 blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-[#0057ff] text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-3 shadow-2xs">
          <span>How We Work</span>
        </div>

        <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(28px,3.5vw,46px)] leading-[1.12] tracking-tight text-[#0b1528] mb-3">
          From Business Challenges to Measurable Growth
        </h2>

        <p className="font-['Manrope'] text-[15px] sm:text-[16px] text-slate-600 max-w-2xl mx-auto">
          We follow a simple, structured process to turn business goals into measurable results.
        </p>
      </div>

      {/* Process Module (1-2-3 Loop Mode in Light Glassy Design) */}
      <div className="max-w-4xl mx-auto relative z-10 select-none">
        <div className="relative flex flex-col gap-3.5 sm:gap-4">

          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < activeStep;
            const isActive = stepNum === activeStep;

            return (
              <div
                key={step.numStr}
                ref={(el) => {
                  rowRefs.current[idx] = el;
                }}
                onClick={() => setActiveStep(stepNum)}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="grid grid-cols-[65px_36px_1fr] sm:grid-cols-[90px_48px_1fr] md:grid-cols-[110px_56px_1fr] items-center gap-2 sm:gap-4 md:gap-6 cursor-pointer group transition-all duration-300"
              >
                {/* ── LEFT: Big Number & Step Name ── */}
                <div className="flex flex-col items-end text-right pr-1 sm:pr-2">
                  <span
                    className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl md:text-4xl leading-none transition-colors duration-300"
                    style={{
                      color: isActive || isCompleted ? step.accentColor : '#cbd5e1',
                    }}
                  >
                    {step.numStr}
                  </span>
                  <span
                    className="font-['JetBrains_Mono'] text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.14em] uppercase transition-colors duration-300 mt-1"
                    style={{
                      color: isActive || isCompleted ? step.accentColor : '#94a3b8',
                    }}
                  >
                    {step.name}
                  </span>
                </div>

                {/* ── CENTER: Timeline Node & Glowing Trail Line ── */}
                <div className="relative flex flex-col items-center justify-center h-full min-h-[72px] sm:min-h-[84px]">
                  {/* Top connector line */}
                  {idx > 0 && (
                    <div
                      className={`absolute top-0 bottom-1/2 w-[2.5px] transition-all duration-300 ${stepNum <= activeStep
                          ? 'bg-gradient-to-b from-sky-400 to-[#0057ff] shadow-[0_0_8px_rgba(0,87,255,0.4)]'
                          : 'border-l-2 border-dashed border-slate-200'
                        }`}
                    />
                  )}

                  {/* Bottom connector line */}
                  {idx < steps.length - 1 && (
                    <div
                      className={`absolute top-1/2 bottom-0 w-[2.5px] transition-all duration-300 ${stepNum < activeStep
                          ? 'bg-gradient-to-b from-[#0057ff] to-sky-400 shadow-[0_0_8px_rgba(0,87,255,0.4)]'
                          : 'border-l-2 border-dashed border-slate-200'
                        }`}
                    />
                  )}

                  {/* Node Circle Indicator */}
                  <div
                    className={`relative z-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                        ? 'w-7 h-7 sm:w-9 sm:h-9 text-white ring-4 ring-white/90 scale-110 shadow-lg'
                        : isCompleted
                          ? 'w-6 h-6 sm:w-7 sm:h-7 text-white shadow-sm'
                          : 'w-5 h-5 sm:w-6 sm:h-6 bg-white border-2 border-slate-200 text-slate-300 group-hover:border-slate-300'
                      }`}
                    style={{
                      backgroundColor: isActive || isCompleted ? step.accentColor : '#ffffff',
                      boxShadow: isActive ? `0 0 16px ${step.accentColor}70` : undefined,
                    }}
                  >
                    {isCompleted ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                    ) : isActive ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    ) : (
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: step.accentColor, opacity: 0.6 }}
                      />
                    )}
                  </div>
                </div>

                {/* ── RIGHT: Step Card (Light Glassy 3-Color Loop Theme) ── */}
                <div
                  className={`process-card-glass ${step.themeClass} ${isActive ? 'is-active' : ''
                    } rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 border flex items-center justify-between gap-4`}
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 flex-1">
                    {/* Icon Box */}
                    {/* <div
                      className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs border"
                      style={{
                        backgroundColor: step.iconBg,
                        color: step.accentColor,
                        borderColor: step.badgeBorder,
                      }}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div> */}

                    {/* Step Content */}
                    <div className="flex flex-col">
                      <span
                        className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: step.accentColor }}
                      >
                        {step.tag}
                      </span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base sm:text-lg tracking-tight leading-snug text-[#0b1528]">
                        {step.title}
                      </h3>
                      <p className="font-['Manrope'] text-xs sm:text-[13.5px] leading-relaxed mt-1 text-slate-600 line-clamp-2 sm:line-clamp-none">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge (Right side) */}
                  <div className="shrink-0 hidden sm:flex items-center">
                    {isActive ? (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-['JetBrains_Mono'] text-[11px] font-bold shadow-xs border transition-colors duration-300"
                        style={{
                          backgroundColor: step.badgeBg,
                          borderColor: step.badgeBorder,
                          color: step.accentColor,
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: step.accentColor }}
                        />
                        <span>In Progress</span>
                      </span>
                    ) : isCompleted ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-['JetBrains_Mono'] text-[11px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Completed</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-500 font-['JetBrains_Mono'] text-[11px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span>Upcoming</span>
                      </span>
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


