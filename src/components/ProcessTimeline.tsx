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
    cardBg: 'bg-gradient-to-br from-white via-sky-50 to-sky-100/70',
    border: 'border-sky-200',
    shadow: 'shadow-[0_15px_35px_rgba(14,165,233,0.12)]',
    badge: 'bg-sky-100 border-sky-200 text-sky-700',
    hoverBorder: 'hover:border-sky-400',
  },
  {
    // Step 2: Diagnose (Royal Blue)
    cardBg: 'bg-gradient-to-br from-white via-blue-50 to-blue-100/70',
    border: 'border-blue-200',
    shadow: 'shadow-[0_15px_35px_rgba(37,99,235,0.12)]',
    badge: 'bg-blue-100 border-blue-200 text-blue-700',
    hoverBorder: 'hover:border-blue-400',
  },
  {
    // Step 3: Strategize (Indigo / Purple)
    cardBg: 'bg-gradient-to-br from-white via-indigo-50 to-indigo-100/70',
    border: 'border-indigo-200',
    shadow: 'shadow-[0_15px_35px_rgba(99,102,241,0.12)]',
    badge: 'bg-indigo-100 border-indigo-200 text-indigo-700',
    hoverBorder: 'hover:border-indigo-400',
  },
  {
    // Step 4: Build (Emerald / Mint)
    cardBg: 'bg-gradient-to-br from-white via-emerald-50 to-teal-100/70',
    border: 'border-emerald-200',
    shadow: 'shadow-[0_15px_35px_rgba(16,185,129,0.12)]',
    badge: 'bg-emerald-100 border-emerald-200 text-emerald-700',
    hoverBorder: 'hover:border-emerald-400',
  },
  {
    // Step 5: Launch (Cyan / Cobalt)
    cardBg: 'bg-gradient-to-br from-white via-cyan-50 to-blue-100/70',
    border: 'border-cyan-200',
    shadow: 'shadow-[0_15px_35px_rgba(6,182,212,0.12)]',
    badge: 'bg-cyan-100 border-cyan-200 text-cyan-700',
    hoverBorder: 'hover:border-cyan-400',
  },
  {
    // Step 6: Optimize (Warm Amber / Gold)
    cardBg: 'bg-gradient-to-br from-white via-amber-50 to-amber-100/70',
    border: 'border-amber-200',
    shadow: 'shadow-[0_15px_35px_rgba(245,158,11,0.12)]',
    badge: 'bg-amber-100 border-amber-200 text-amber-800',
    hoverBorder: 'hover:border-amber-400',
  },
  {
    // Step 7: Scale (Purple / Violet)
    cardBg: 'bg-gradient-to-br from-white via-purple-50 to-indigo-100/70',
    border: 'border-purple-200',
    shadow: 'shadow-[0_15px_35px_rgba(168,85,247,0.12)]',
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
  const railDotRef = useRef<HTMLDivElement>(null);
  const currentProgressRef = useRef<number>(0);
  const nodePointsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = document.querySelectorAll<HTMLElement>('.timeline_row');
      if (rows.length < stepsData.length) return;

      // Ensure Step 1 arrow is active by default
      rows[0]?.classList.add('is-reached');

      // Calculate SVG path based on exact node positions
      const updatePath = () => {
        const contentEl = contentRef.current;
        if (!contentEl || rows.length < stepsData.length) return;

        const contentRect = contentEl.getBoundingClientRect();
        if (contentRect.width === 0) return;
        
        // Find exact center coordinates of every arrow circle wrapper relative to the content container
        const points = Array.from(rows).map((row) => {
          const circle = row.querySelector('.timeline_circle-wrapper') as HTMLElement;
          if (!circle) return { x: contentRect.width / 2, y: 0 };
          const rect = circle.getBoundingClientRect();
          return {
            x: rect.left - contentRect.left + rect.width / 2,
            y: rect.top - contentRect.top + rect.height / 2
          };
        });

        if (points.length < 2) return;
        nodePointsRef.current = points;

        // Path starts at the exact center of Arrow Mark 1 and terminates at the exact center of the final Arrow Mark
        let d = `M ${points[0].x} ${points[0].y}`;
        const curveOffset = 45; // Clean, elegant horizontal bow

        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          const dy = p2.y - p1.y;
          const midY = (p1.y + p2.y) / 2;
          
          // Alternating curve direction: Step 1->2 bows Right (+), Step 2->3 bows Left (-)
          const isReversed = i % 2 === 1;
          const offset = isReversed ? -curveOffset : curveOffset;
          const midX = (p1.x + p2.x) / 2 + offset;

          // Segment 1: Leave p1 vertically downwards and arch smoothly towards the middle peak
          const cp1x = p1.x;
          const cp1y = p1.y + dy * 0.24;
          const cp2x = midX;
          const cp2y = midY - dy * 0.14;

          // Segment 2: Continue from the middle peak and arrive vertically straight down into p2
          const cp3x = midX;
          const cp3y = midY + dy * 0.14;
          const cp4x = p2.x;
          const cp4y = p2.y - dy * 0.24;

          d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${midX} ${midY}`;
          d += ` C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, ${p2.x} ${p2.y}`;
        }

        // Direct DOM updates for zero-latency synchronization
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

            // Initial traveler placement
            if (travelerRef.current) {
              const pt = svgFillRef.current.getPointAtLength(p * length);
              const ptAhead = svgFillRef.current.getPointAtLength(Math.min(length, p * length + 2));
              const angle = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI);
              travelerRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle})`);
            }
          }
        }
        if (svgElementRef.current) {
          svgElementRef.current.setAttribute('height', `${points[points.length - 1].y + 60}px`);
        }
      };

      // 1. Initial measurement
      updatePath();

      // 2. Multi-stage timeouts for initial font / image / 3D constellation hydration
      const t1 = setTimeout(updatePath, 50);
      const t2 = setTimeout(updatePath, 200);
      const t3 = setTimeout(updatePath, 600);
      const t4 = setTimeout(updatePath, 1200);

      // 3. Document fonts ready hook
      if (document.fonts) {
        document.fonts.ready.then(() => {
          updatePath();
          ScrollTrigger.refresh();
        });
      }

      // 4. Comprehensive Resize observers for content container, body, and all individual rows
      const resizeObserver = new ResizeObserver(() => {
        updatePath();
        ScrollTrigger.refresh();
      });
      if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
      }
      if (document.body) {
        resizeObserver.observe(document.body);
      }
      rows.forEach((row) => {
        resizeObserver.observe(row);
      });

      window.addEventListener('resize', updatePath);
      window.addEventListener('load', updatePath);
      ScrollTrigger.addEventListener('refresh', updatePath);

      // 5. Continuous SVG Path Fill + Real-Time Node Pop Synchronization
      ScrollTrigger.create({
        trigger: rows[0],
        endTrigger: rows[rows.length - 1],
        start: 'center center',
        end: 'center center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          currentProgressRef.current = progress;
          const direction = self.direction; // 1 = scrolling down, -1 = scrolling up

          if (svgFillRef.current) {
            const length = svgFillRef.current.getTotalLength();
            if (length > 0) {
              svgFillRef.current.style.strokeDasharray = `${length}`;
              svgFillRef.current.style.strokeDashoffset = `${length * (1 - progress)}`;

              // Traveling Arrow Position & Tangent Angle - 100% In Sync with Leading Edge
              if (travelerRef.current) {
                const currentDist = progress * length;
                const pt = svgFillRef.current.getPointAtLength(currentDist);

                // Sample points ahead and behind to compute the exact curve tangent
                const aheadDist = Math.min(length, currentDist + 2);
                const behindDist = Math.max(0, currentDist - 2);
                const ptAhead = svgFillRef.current.getPointAtLength(aheadDist);
                const ptBehind = svgFillRef.current.getPointAtLength(behindDist);

                let angle = Math.atan2(ptAhead.y - ptBehind.y, ptAhead.x - ptBehind.x) * (180 / Math.PI);

                // Rotate 180 degrees when scrolling upward so arrow points in the travel direction
                if (direction === -1) {
                  angle += 180;
                }

                // Smooth gradual fade in at start and fade out at destination
                let arrowOpacity = 1;
                if (progress < 0.04) {
                  arrowOpacity = Math.max(0, progress / 0.04);
                } else if (progress > 0.96) {
                  arrowOpacity = Math.max(0, (1 - progress) / 0.04);
                }
                travelerRef.current.style.opacity = `${arrowOpacity}`;
                travelerRef.current.setAttribute('transform', `translate(${pt.x}, ${pt.y}) rotate(${angle})`);

                // Instantly synchronize node pop appearance with the exact arrival of the traveling arrow
                if (nodePointsRef.current.length > 0) {
                  nodePointsRef.current.forEach((point, i) => {
                    if (i === 0) {
                      rows[i]?.classList.add('is-reached');
                      return;
                    }
                    if (pt.y >= point.y - 12) {
                      rows[i]?.classList.add('is-reached');
                    } else {
                      rows[i]?.classList.remove('is-reached');
                    }
                  });
                }
              }
            }
          }

          if (railDotRef.current && sectionRef.current) {
            const maxTravel = sectionRef.current.offsetHeight - 260;
            railDotRef.current.style.transform = `translateY(${progress * maxTravel}px)`;
          }
        },
      });

      // 6. Strict Active Row Highlighting for Text/Cards
      rows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: 'top 55%',
          end: 'bottom 45%',
          toggleClass: { targets: row, className: 'is-active' },
        });
      });

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
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
      className="workflow-section relative px-6 md:px-14 py-28 md:py-36 bg-gradient-to-b from-white via-sky-50/20 to-slate-50/40 border-b border-slate-200 overflow-hidden"
      id="process"
    >
      {/* Soft Ambient Background Glow Tints matching Features rhythm */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-sky-100/40 via-blue-50/30 to-indigo-100/30 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-indigo-100/30 via-sky-50/30 to-emerald-100/30 blur-3xl pointer-events-none rounded-full" />

      {/* Right Edge Rail with Tracking Dot */}
      <div className="timeline-right-rail" aria-hidden="true">
        <div ref={railDotRef} className="timeline-rail-dot"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-xs">
          <span>Our Process</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4.8vw,66px)] leading-[1.06] tracking-[-0.035em] text-[#0b1528] mb-6">
          From Business Challenge to Measurable Growth
        </h2>

        <p className="font-['Manrope'] text-[17px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
          We simplify the product creation process for SaaS and modern businesses by combining strategy, design, and development into one efficient workflow focused on faster launches.
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
          {/* Base faint guide line with subtle reduced opacity */}
          <path 
            ref={svgBgPathRef}
            fill="none" 
            stroke="#cbd5e1" 
            strokeOpacity="0.4"
            strokeWidth="4" 
            strokeLinecap="round"
          />
          {/* Animated gradient fill line */}
          <path 
            ref={svgFillRef}
            fill="none" 
            stroke="url(#timeline-gradient)" 
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Traveling Arrow Indicator along the curve */}
          <g ref={travelerRef} opacity="0" style={{ transition: 'opacity 0.25s ease' }}>
            <circle r="14" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" style={{ filter: 'drop-shadow(0 4px 10px rgba(2, 132, 199, 0.5))' }} />
            <path
              d="M -3.5 -5 L 4.5 0 L -3.5 5 L -1 0 Z"
              fill="#ffffff"
            />
          </g>

          <defs>
            <linearGradient id="timeline-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Steps List */}
        <div className="timeline_list">
          {stepsData.map((step, index) => {
            const theme = stepColorThemes[index] || stepColorThemes[0];
            const isReversed = index % 2 === 1; // Step 1 (idx 0) on Right, Step 2 (idx 1) on Left, Step 3 on Right, Step 4 on Left...

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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 16L6 10H18L12 16Z" />
                    </svg>
                  </div>
                </div>
              </div>
            );

            const cardNode = (
              <div
                className={`timeline_item ${theme.cardBg} border ${theme.border} ${theme.shadow} ${theme.hoverBorder} transition-all duration-500 cursor-pointer`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                {/* Text & Key Highlights */}
                <div className="timeline-card-content flex-1">
                  <h3 className="text-lead">{step.title}</h3>
                  <p className="text-body">{step.description}</p>
                </div>

                {/* High-End Custom UI / Image Preview Mockup */}
                <div className="marge-image-wrap w-full">
                    {/* STEP 1: Understand Business & Market */}
                    {index === 0 && (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-xs font-mono text-slate-300 font-bold">Market Intelligence Pod</span>
                          </div>
                          <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-md border border-sky-500/30">
                            COMPETITOR AUDIT
                          </span>
                        </div>

                        <div className="my-4 grid grid-cols-2 gap-3">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                            <div className="text-[10px] font-mono text-slate-400 uppercase">Search Demand Gap</div>
                            <div className="text-xl font-bold text-white mt-1">High Intent</div>
                            <div className="text-xs text-sky-400 mt-1 font-mono">↑ 64,000 Mo. Vol</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                            <div className="text-[10px] font-mono text-slate-400 uppercase">Competitive Edge</div>
                            <div className="text-xl font-bold text-emerald-400 mt-1">Top Tier</div>
                            <div className="text-xs text-slate-400 mt-1 font-mono">Rank #1 Target</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>Audience Segmentation: 4 Personas</span>
                          <span className="text-emerald-400 font-bold">✓ Audit Complete</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Identify Leaks & Opportunities */}
                    {index === 1 && (
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b1528] to-slate-900 text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></div>
                            <span className="text-xs font-mono text-slate-300 font-bold">Funnel Leak Diagnostic</span>
                          </div>
                          <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-md border border-rose-500/30">
                            3 LEAKS FOUND
                          </span>
                        </div>

                        <div className="my-3 space-y-2.5">
                          <div>
                            <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                              <span>Mobile Landing Drop-off</span>
                              <span className="text-rose-400 font-bold">-32% Leaking</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-rose-500 rounded-full w-[68%]"></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                              <span>Checkout Friction Recovery</span>
                              <span className="text-emerald-400 font-bold">+$48,500/mo Opp.</span>
                            </div>
                            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full w-[84%]"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>Quick Wins Identified</span>
                          <span className="text-sky-400 font-bold">Ready to Optimize</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Customized Growth Strategy */}
                    {index === 2 && (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sky-400">⚡</span>
                            <span className="text-xs font-mono text-slate-300 font-bold">Growth Architecture Blueprint</span>
                          </div>
                          <span className="text-[10px] font-mono bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-md border border-sky-500/30">
                            ROADMAP V2
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2.5 my-3">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                            <div className="text-[10px] font-mono text-sky-400 font-bold mb-1">CHANNELS</div>
                            <div className="text-xs font-bold text-white">SEO + Ads</div>
                            <div className="text-[10px] text-slate-400 mt-1">Multi-Touch</div>
                          </div>
                          <div className="bg-sky-500/10 border border-sky-400/40 rounded-xl p-3 text-center">
                            <div className="text-[10px] font-mono text-sky-300 font-bold mb-1">FUNNEL</div>
                            <div className="text-xs font-bold text-white">High-Convert</div>
                            <div className="text-[10px] text-emerald-400 mt-1">2.4x Lift</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                            <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">RETENTION</div>
                            <div className="text-xs font-bold text-white">AI Automation</div>
                            <div className="text-[10px] text-slate-400 mt-1">LTV Booster</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>Milestone: 90-Day ROI</span>
                          <span className="text-emerald-400 font-bold">Validated</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Campaigns, Content & Tech */}
                    {index === 3 && (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-950 text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
                            <span className="text-[11px] font-mono text-slate-400 ml-2">app.ecoapps.build</span>
                          </div>
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            DEPLOY READY
                          </span>
                        </div>

                        <div className="my-3 grid grid-cols-2 gap-3">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <div className="text-[10px] font-mono text-sky-400 font-bold mb-1">CREATIVE ASSETS</div>
                            <div className="h-1.5 w-full bg-white/20 rounded mb-1.5"></div>
                            <div className="h-1.5 w-3/4 bg-white/20 rounded mb-2"></div>
                            <div className="text-[10px] font-mono text-slate-300 font-bold">12 High-CTR Ad Variations</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">FAST STACK</div>
                            <div className="h-1.5 w-full bg-emerald-400/30 rounded mb-1.5"></div>
                            <div className="h-1.5 w-2/3 bg-emerald-400/30 rounded mb-2"></div>
                            <div className="text-[10px] font-mono text-slate-300 font-bold">100/100 Lighthouse Performance</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>Landing Experience V3</span>
                          <span className="text-sky-400 font-bold">Production Build ✓</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Go-to-Market with Tracking */}
                    {index === 4 && (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-xs font-mono text-slate-300 font-bold">GTM Multi-Touch Attribution</span>
                          </div>
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            LIVE FEED
                          </span>
                        </div>

                        <div className="my-3 grid grid-cols-2 gap-3">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                            <div className="text-[10px] font-mono text-slate-400">PIXEL ACCURACY</div>
                            <div className="text-lg font-bold text-white mt-1">100% CAPI</div>
                            <div className="text-[10px] text-emerald-400 mt-0.5">Server-Side Active</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                            <div className="text-[10px] font-mono text-slate-400">EVENTS LOGGED</div>
                            <div className="text-lg font-bold text-sky-400 mt-1">Real-Time</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">Zero Data Loss</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>GA4 & Meta API Synced</span>
                          <span className="text-emerald-400 font-bold">Telemetry OK</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 6: Test, Analyse & Improve */}
                    {index === 5 && (
                      <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-300 font-bold">A/B Split Test Engine</span>
                          </div>
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            WINNER DECLARED
                          </span>
                        </div>

                        <div className="my-3 space-y-2">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-xs font-mono text-slate-300">Variant A (Baseline)</span>
                            <span className="text-xs font-mono text-slate-400">3.2% CVR</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/40 shadow-sm">
                            <span className="text-xs font-mono text-emerald-300 font-bold">Variant B (Interactive)</span>
                            <span className="text-xs font-mono text-emerald-400 font-bold">6.8% CVR (+112%)</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>Statistical Confidence</span>
                          <span className="text-emerald-400 font-bold">99.4% Validated</span>
                        </div>
                      </div>
                    )}

                    {/* STEP 7: Maximize Profitable Growth */}
                    {index === 6 && (
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#020617] text-white p-5 md:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div>
                            <div className="text-[10px] font-mono text-slate-400 uppercase">Live Pipeline & Revenue</div>
                            <div className="font-extrabold text-xl text-white">
                              $248,650 <span className="text-emerald-400 text-xs font-semibold">↑ +38.4%</span>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold border border-emerald-500/30">
                            4.8× ROAS
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 my-3 text-center">
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-[9px] text-slate-400 font-mono">Speed</div>
                            <div className="font-bold text-white text-xs">0.4s</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-[9px] text-slate-400 font-mono">LTV</div>
                            <div className="font-bold text-emerald-400 text-xs">+64%</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-2">
                            <div className="text-[9px] text-slate-400 font-mono">Scale</div>
                            <div className="font-bold text-sky-400 text-xs">Global</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400 font-mono">
                          <span>Compounding Growth Engine</span>
                          <span className="text-sky-400 font-bold">Scaling Continuously</span>
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
