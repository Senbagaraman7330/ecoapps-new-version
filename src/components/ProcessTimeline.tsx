import { useEffect, useRef } from 'react';
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
}

const stepsData: StepItem[] = [
  {
    id: 'step-1',
    stepNumber: 'Step 1',
    stepName: 'Discover',
    title: 'Understand Business & Market',
    description: 'Understand the business, audience, competitors and current digital performance.',
  },
  {
    id: 'step-2',
    stepNumber: 'Step 2',
    stepName: 'Diagnose',
    title: 'Identify Leaks & Opportunities',
    description: 'Identify visibility gaps, conversion leaks and growth opportunities.',
  },
  {
    id: 'step-3',
    stepNumber: 'Step 3',
    stepName: 'Strategize',
    title: 'Customized Growth Strategy',
    description: 'Build a customised digital growth strategy.',
  },
  {
    id: 'step-4',
    stepNumber: 'Step 4',
    stepName: 'Build',
    title: 'Campaigns, Content & Tech',
    description: 'Create campaigns, content, creative, websites and technology.',
  },
  {
    id: 'step-5',
    stepNumber: 'Step 5',
    stepName: 'Launch',
    title: 'Go-to-Market with Tracking',
    description: 'Put the strategy into market with proper tracking.',
  },
  {
    id: 'step-6',
    stepNumber: 'Step 6',
    stepName: 'Optimize',
    title: 'Test, Analyse & Improve',
    description: 'Test, analyse and improve performance.',
  },
  {
    id: 'step-7',
    stepNumber: 'Step 7',
    stepName: 'Scale',
    title: 'Maximize Profitable Growth',
    description: 'Increase investment in the strategies that deliver profitable growth.',
  },
];

const stepColorThemes = [
  {
    // Step 1: Discover (Mint / Sky)
    cardBg: 'bg-gradient-to-br from-white via-sky-50/70 to-sky-100/50',
    border: 'border-sky-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(14,165,233,0.08)]',
    badge: 'bg-sky-100 border-sky-200 text-sky-700',
    hoverBorder: 'hover:border-sky-400',
  },
  {
    // Step 2: Diagnose (Royal Blue)
    cardBg: 'bg-gradient-to-br from-white via-blue-50/70 to-blue-100/50',
    border: 'border-blue-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(37,99,235,0.08)]',
    badge: 'bg-blue-100 border-blue-200 text-blue-700',
    hoverBorder: 'hover:border-blue-400',
  },
  {
    // Step 3: Strategize (Indigo / Purple)
    cardBg: 'bg-gradient-to-br from-white via-indigo-50/70 to-indigo-100/50',
    border: 'border-indigo-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(99,102,241,0.08)]',
    badge: 'bg-indigo-100 border-indigo-200 text-indigo-700',
    hoverBorder: 'hover:border-indigo-400',
  },
  {
    // Step 4: Build (Emerald / Mint)
    cardBg: 'bg-gradient-to-br from-white via-emerald-50/70 to-teal-100/50',
    border: 'border-emerald-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(16,185,129,0.08)]',
    badge: 'bg-emerald-100 border-emerald-200 text-emerald-700',
    hoverBorder: 'hover:border-emerald-400',
  },
  {
    // Step 5: Launch (Cyan / Cobalt)
    cardBg: 'bg-gradient-to-br from-white via-cyan-50/70 to-blue-100/50',
    border: 'border-cyan-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(6,182,212,0.08)]',
    badge: 'bg-cyan-100 border-cyan-200 text-cyan-700',
    hoverBorder: 'hover:border-cyan-400',
  },
  {
    // Step 6: Optimize (Warm Amber / Gold)
    cardBg: 'bg-gradient-to-br from-white via-amber-50/70 to-amber-100/50',
    border: 'border-amber-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(245,158,11,0.08)]',
    badge: 'bg-amber-100 border-amber-200 text-amber-800',
    hoverBorder: 'hover:border-amber-400',
  },
  {
    // Step 7: Scale (Purple / Violet)
    cardBg: 'bg-gradient-to-br from-white via-purple-50/70 to-indigo-100/50',
    border: 'border-purple-200/90',
    shadow: 'shadow-[0_10px_30px_rgba(168,85,247,0.08)]',
    badge: 'bg-purple-100 border-purple-200 text-purple-700',
    hoverBorder: 'hover:border-purple-400',
  },
];

interface ProcessTimelineProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ProcessTimeline({ onHover, onLeave }: ProcessTimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgElementRef = useRef<SVGSVGElement>(null);
  const svgBgPathRef = useRef<SVGPathElement>(null);
  const svgFillRef = useRef<SVGPathElement>(null);
  const travelerRef = useRef<SVGGElement>(null);
  const currentProgressRef = useRef<number>(0);
  const nodePointsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = document.querySelectorAll<HTMLElement>('.timeline_row');
      if (rows.length < stepsData.length) return;

      // First step is reached by default
      rows[0]?.classList.add('is-reached');

      // Calculate SVG path based on exact center coordinates
      const updatePath = () => {
        const contentEl = contentRef.current;
        if (!contentEl || rows.length < stepsData.length) return;

        const contentRect = contentEl.getBoundingClientRect();
        if (contentRect.width === 0) return;

        const points = Array.from(rows).map((row) => {
          const circle = row.querySelector('.timeline_circle-wrapper') as HTMLElement;
          if (!circle) return { x: contentRect.width / 2, y: 0 };
          const rect = circle.getBoundingClientRect();
          return {
            x: rect.left - contentRect.left + rect.width / 2,
            y: rect.top - contentRect.top + rect.height / 2,
          };
        });

        if (points.length < 2) return;
        nodePointsRef.current = points;

        let d = `M ${points[0].x} ${points[0].y}`;
        const curveOffset = 38;

        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const dy = p2.y - p1.y;
          const midY = (p1.y + p2.y) / 2;

          const isReversed = i % 2 === 1;
          const offset = isReversed ? -curveOffset : curveOffset;
          const midX = (p1.x + p2.x) / 2 + offset;

          const cp1x = p1.x;
          const cp1y = p1.y + dy * 0.24;
          const cp2x = midX;
          const cp2y = midY - dy * 0.14;

          const cp3x = midX;
          const cp3y = midY + dy * 0.14;
          const cp4x = p2.x;
          const cp4y = p2.y - dy * 0.24;

          d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${midX} ${midY}`;
          d += ` C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, ${p2.x} ${p2.y}`;
        }

        if (svgBgPathRef.current) {
          svgBgPathRef.current.setAttribute('d', d);
        }
        if (svgFillRef.current) {
          svgFillRef.current.setAttribute('d', d);
          const length = svgFillRef.current.getTotalLength();
          if (length > 0) {
            svgFillRef.current.style.strokeDasharray = `${length}`;
            const p = currentProgressRef.current || 0;
            svgFillRef.current.style.strokeDashoffset = `${length * (1 - p)}`;

            if (travelerRef.current) {
              const pt = svgFillRef.current.getPointAtLength(p * length);
              const ptAhead = svgFillRef.current.getPointAtLength(Math.min(length, p * length + 2));
              const angle = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI);
              travelerRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle})`);
            }
          }
        }
        if (svgElementRef.current) {
          svgElementRef.current.setAttribute('height', `${points[points.length - 1].y + 50}px`);
        }
      };

      updatePath();

      const t1 = setTimeout(updatePath, 50);
      const t2 = setTimeout(updatePath, 200);
      const t3 = setTimeout(updatePath, 600);

      if (document.fonts) {
        document.fonts.ready.then(() => {
          updatePath();
          ScrollTrigger.refresh();
        });
      }

      const resizeObserver = new ResizeObserver(() => {
        updatePath();
        ScrollTrigger.refresh();
      });
      if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
      }
      rows.forEach((row) => {
        resizeObserver.observe(row);
      });

      window.addEventListener('resize', updatePath);
      window.addEventListener('load', updatePath);
      ScrollTrigger.addEventListener('refresh', updatePath);

      // Fast, responsive ScrollTrigger scrub along the path
      ScrollTrigger.create({
        trigger: rows[0],
        endTrigger: rows[rows.length - 1],
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.4,
        onUpdate: (self) => {
          const progress = self.progress;
          currentProgressRef.current = progress;
          const direction = self.direction;

          if (svgFillRef.current) {
            const length = svgFillRef.current.getTotalLength();
            if (length > 0) {
              svgFillRef.current.style.strokeDasharray = `${length}`;
              svgFillRef.current.style.strokeDashoffset = `${length * (1 - progress)}`;

              if (travelerRef.current) {
                const currentDist = progress * length;
                const pt = svgFillRef.current.getPointAtLength(currentDist);

                const aheadDist = Math.min(length, currentDist + 2);
                const behindDist = Math.max(0, currentDist - 2);
                const ptAhead = svgFillRef.current.getPointAtLength(aheadDist);
                const ptBehind = svgFillRef.current.getPointAtLength(behindDist);

                let angle = Math.atan2(ptAhead.y - ptBehind.y, ptAhead.x - ptBehind.x) * (180 / Math.PI);

                if (direction === -1) {
                  angle += 180;
                }

                let arrowOpacity = 1;
                if (progress < 0.03) {
                  arrowOpacity = Math.max(0, progress / 0.03);
                } else if (progress > 0.97) {
                  arrowOpacity = Math.max(0, (1 - progress) / 0.03);
                }
                travelerRef.current.style.opacity = `${arrowOpacity}`;
                travelerRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle})`);

                if (nodePointsRef.current.length > 0) {
                  nodePointsRef.current.forEach((point, i) => {
                    if (i === 0) {
                      rows[i]?.classList.add('is-reached');
                      return;
                    }
                    if (pt.y >= point.y - 10) {
                      rows[i]?.classList.add('is-reached');
                    } else {
                      rows[i]?.classList.remove('is-reached');
                    }
                  });
                }
              }
            }
          }
        },
      });

      // Highlight active row as you scroll
      rows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 65%',
          end: 'bottom 40%',
          toggleClass: { targets: row, className: 'is-active' },
        });
      });

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        resizeObserver.disconnect();
        window.removeEventListener('resize', updatePath);
        window.removeEventListener('load', updatePath);
        ScrollTrigger.removeEventListener('refresh', updatePath);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="workflow-section relative px-4 sm:px-8 md:px-12 py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/20 to-slate-50/40 border-b border-slate-200 overflow-hidden"
      id="process"
    >
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-sky-100/30 via-blue-50/20 to-indigo-100/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-r from-indigo-100/20 via-sky-50/20 to-emerald-100/20 blur-3xl pointer-events-none rounded-full" />

      {/* Main Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-4 shadow-xs">
          <span>Our Process</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(32px,3.8vw,52px)] leading-[1.08] tracking-[-0.035em] text-[#0b1528] mb-4">
          From Business Challenge to Measurable Growth
        </h2>

        <p className="font-['Manrope'] text-[15px] sm:text-[16px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
          We combine strategy, design, and development into one efficient workflow for faster launches and measurable ROI.
        </p>
      </div>

      {/* Timeline Layout */}
      <div ref={contentRef} className="timeline-content relative z-10">

          {/* Dynamic Curved SVG Background Track */}
          <svg
            ref={svgElementRef}
            className="timeline_svg-track"
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}
          >
            <defs>
              <linearGradient id="timeline-arrow-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Base faint guide line */}
            <path
              ref={svgBgPathRef}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Animated gradient fill line */}
            <path
              ref={svgFillRef}
              fill="none"
              stroke="url(#timeline-arrow-gradient)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* Traveling Arrow Head with Dynamic Tangent Alignment */}
            <g ref={travelerRef} opacity="0" style={{ transition: 'opacity 0.2s ease' }}>
              <circle r="12" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" style={{ filter: 'drop-shadow(0 3px 8px rgba(2, 132, 199, 0.45))' }} />
              <path
                d="M -3 -4 L 4 0 L -3 4 L -1 0 Z"
                fill="#ffffff"
              />
            </g>
          </svg>

          {/* Compact Timeline Step Cards */}
          <div className="timeline_list">
            {stepsData.map((step, index) => {
              const theme = stepColorThemes[index] || stepColorThemes[0];
              const isReversed = index % 2 === 1;

              const titleNode = (
                <div className={isReversed ? 'timeline_right-space' : 'timeline_left-space'}>
                  <div className="step-tag">{step.stepNumber}</div>
                  <div className="step-title-italic">{step.stepName}</div>
                </div>
              );

              const circleNode = (
                <div className="timeline_circle-wrapper">
                  <div className="timeline_circle-placeholder"></div>
                  <div className="timeline_circle-outer">
                    <div className="timeline_circle-inner">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16L6 10H18L12 16Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              );

              const cardNode = (
                <div
                  className={`timeline_item ${theme.cardBg} border ${theme.border} ${theme.shadow} ${theme.hoverBorder} transition-all duration-300 cursor-pointer`}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  {/* Text Details */}
                  <div className="timeline-card-content flex-1">
                    <h3 className="text-lead">{step.title}</h3>
                    <p className="text-body">{step.description}</p>
                  </div>

                  {/* Compact High-Tech Preview Mockup */}
                  <div className="marge-image-wrap w-full">
                    {/* STEP 1: Understand Business & Market */}
                    {index === 0 && (
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-[11px] font-mono text-slate-300 font-bold">Market Intelligence Pod</span>
                          </div>
                          <span className="text-[9px] font-mono bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/30">
                            AUDIT
                          </span>
                        </div>

                        <div className="my-3 grid grid-cols-2 gap-2.5">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                            <div className="text-[9px] font-mono text-slate-400 uppercase">Demand Gap</div>
                            <div className="text-base font-bold text-white mt-0.5">High Intent</div>
                            <div className="text-[11px] text-sky-400 font-mono">↑ 64k Vol</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                            <div className="text-[9px] font-mono text-slate-400 uppercase">Competitive Edge</div>
                            <div className="text-base font-bold text-emerald-400 mt-0.5">Top Tier</div>
                            <div className="text-[11px] text-slate-400 font-mono">Rank #1</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>4 Buyer Personas</span>
                          <span className="text-emerald-400 font-bold">✓ Complete</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Identify Leaks & Opportunities */}
                    {index === 1 && (
                      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0b1528] to-slate-900 text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></div>
                            <span className="text-[11px] font-mono text-slate-300 font-bold">Funnel Leak Diagnostic</span>
                          </div>
                          <span className="text-[9px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30">
                            3 LEAKS
                          </span>
                        </div>

                        <div className="my-2.5 space-y-2">
                          <div>
                            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-0.5">
                              <span>Landing Drop-off</span>
                              <span className="text-rose-400 font-bold">-32%</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-rose-500 rounded-full w-[68%]"></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-0.5">
                              <span>Checkout Recovery</span>
                              <span className="text-emerald-400 font-bold">+$48.5k Opp</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full w-[84%]"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>Quick Wins Mapped</span>
                          <span className="text-sky-400 font-bold">Ready</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Customized Growth Strategy */}
                    {index === 2 && (
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sky-400 text-xs">⚡</span>
                            <span className="text-[11px] font-mono text-slate-300 font-bold">Growth Architecture</span>
                          </div>
                          <span className="text-[9px] font-mono bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/30">
                            ROADMAP V2
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 my-2.5 text-center">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                            <div className="text-[9px] font-mono text-sky-400 font-bold">CHANNELS</div>
                            <div className="text-[11px] font-bold text-white mt-0.5">SEO + Ads</div>
                          </div>
                          <div className="bg-sky-500/10 border border-sky-400/40 rounded-lg p-2">
                            <div className="text-[9px] font-mono text-sky-300 font-bold">FUNNEL</div>
                            <div className="text-[11px] font-bold text-emerald-400 mt-0.5">2.4x Lift</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                            <div className="text-[9px] font-mono text-emerald-400 font-bold">RETENTION</div>
                            <div className="text-[11px] font-bold text-white mt-0.5">AI Engine</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>90-Day ROI</span>
                          <span className="text-emerald-400 font-bold">Validated</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Campaigns, Content & Tech */}
                    {index === 3 && (
                      <div className="relative rounded-xl overflow-hidden bg-slate-950 text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <span className="text-[10px] font-mono text-slate-400">app.ecoapps.build</span>
                          </div>
                          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            DEPLOY
                          </span>
                        </div>

                        <div className="my-2.5 grid grid-cols-2 gap-2.5">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                            <div className="text-[9px] font-mono text-sky-400 font-bold mb-0.5">CREATIVES</div>
                            <div className="text-[11px] font-mono text-slate-200 font-bold">12 High-CTR Ads</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                            <div className="text-[9px] font-mono text-emerald-400 font-bold mb-0.5">FAST STACK</div>
                            <div className="text-[11px] font-mono text-slate-200 font-bold">100/100 Lighthouse</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>Landing Experience</span>
                          <span className="text-sky-400 font-bold">Production ✓</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Go-to-Market with Tracking */}
                    {index === 4 && (
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-[11px] font-mono text-slate-300 font-bold">GTM Attribution</span>
                          </div>
                          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            LIVE FEED
                          </span>
                        </div>

                        <div className="my-2.5 grid grid-cols-2 gap-2 text-center">
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                            <div className="text-[9px] font-mono text-slate-400">ACCURACY</div>
                            <div className="text-sm font-bold text-white mt-0.5">100% CAPI</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                            <div className="text-[9px] font-mono text-slate-400">EVENTS</div>
                            <div className="text-sm font-bold text-sky-400 mt-0.5">Real-Time</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>GA4 & Meta Synced</span>
                          <span className="text-emerald-400 font-bold">OK</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 6: Test, Analyse & Improve */}
                    {index === 5 && (
                      <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-slate-300 font-bold">A/B Split Test Engine</span>
                          </div>
                          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            WINNER
                          </span>
                        </div>

                        <div className="my-2.5 space-y-1.5">
                          <div className="flex items-center justify-between p-1.5 rounded bg-white/5 text-[11px] font-mono text-slate-300">
                            <span>Variant A</span>
                            <span className="text-slate-400">3.2% CVR</span>
                          </div>
                          <div className="flex items-center justify-between p-1.5 rounded bg-emerald-500/10 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 font-bold">
                            <span>Variant B</span>
                            <span>6.8% CVR (+112%)</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>Confidence</span>
                          <span className="text-emerald-400 font-bold">99.4%</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 7: Maximize Profitable Growth */}
                    {index === 6 && (
                      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#020617] text-white p-4 sm:p-5 flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div>
                            <div className="text-[9px] font-mono text-slate-400">Live Revenue</div>
                            <div className="font-extrabold text-base text-white">
                              $248,650 <span className="text-emerald-400 text-[10px]">↑ +38%</span>
                            </div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[9px] font-bold border border-emerald-500/30">
                            4.8× ROAS
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5 my-2 text-center">
                          <div className="bg-white/5 rounded p-1.5">
                            <div className="text-[8px] text-slate-400 font-mono">Speed</div>
                            <div className="font-bold text-white text-[11px]">0.4s</div>
                          </div>
                          <div className="bg-white/5 rounded p-1.5">
                            <div className="text-[8px] text-slate-400 font-mono">LTV</div>
                            <div className="font-bold text-emerald-400 text-[11px]">+64%</div>
                          </div>
                          <div className="bg-white/5 rounded p-1.5">
                            <div className="text-[8px] text-slate-400 font-mono">Scale</div>
                            <div className="font-bold text-sky-400 text-[11px]">Global</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                          <span>Compounding Engine</span>
                          <span className="text-sky-400 font-bold">Active</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );

              return (
                <div
                  key={step.id}
                  className={`timeline_row ${isReversed ? 'is-reversed' : ''} ${index === 0 ? 'is-reached' : ''}`}
                  data-step-index={index}
                >
                  {isReversed ? (
                    <>
                      {cardNode}
                      {circleNode}
                      {titleNode}
                    </>
                  ) : (
                    <>
                      {titleNode}
                      {circleNode}
                      {cardNode}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
}
