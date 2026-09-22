import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SocialMediaStatItem {
  num: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const SOCIAL_STATS: SocialMediaStatItem[] = [
  {
    num: 4.2,
    decimals: 1,
    suffix: '×',
    label: 'Average Engagement Growth',
  },
  {
    num: 92,
    decimals: 0,
    suffix: '%',
    label: 'Client Audience Retention Rate',
  },
  {
    num: 3.5,
    decimals: 1,
    suffix: '×',
    label: 'Increase in Brand Reach',
  },
  {
    num: 100,
    decimals: 0,
    suffix: '%',
    label: 'Strategy-Led, Goal-Aligned Campaigns',
  },
];

export default function SocialMediaStatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((el, idx) => {
        if (!el) return;
        const stat = SOCIAL_STATS[idx];
        const valObj = { val: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(valObj, {
              val: stat.num,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                const display = stat.decimals && stat.decimals > 0
                  ? valObj.val.toFixed(stat.decimals)
                  : Math.floor(valObj.val).toString();
                
                el.innerHTML = `${display}<span class="accent text-[#0284c7]">${stat.suffix}</span>`;
              },
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="stats-bar px-4 sm:px-8 md:px-12 lg:px-16 py-14 md:py-20 bg-white border-b border-slate-200 relative z-10 overflow-hidden"
      id="social-media-analytics"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-sky-50/70 to-transparent blur-3xl pointer-events-none" />

      {/* Performance & Measurable Outcomes Block */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0284c7] text-[11px] font-['JetBrains_Mono'] font-bold tracking-wider mb-3.5 uppercase shadow-2xs">
            <span>Why Choose Eco Apps Solutions?</span>
          </div>
          <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(28px,3.4vw,44px)] text-[#0b1528] leading-[1.12] tracking-tight mb-4">
            Strategy-Led Social Media Marketing That Delivers Results.
          </h2>
          <p className="font-['Manrope'] text-[15px] sm:text-[16.5px] leading-[1.68] text-slate-600 max-w-3xl mx-auto">
            We don't create content simply to fill a content calendar. Every content piece and campaign is aligned with a clear marketing objective, adapted for each platform, and driven by performance data.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {SOCIAL_STATS.map((stat, i) => (
            <div
              key={i}
              className="stat py-4 border-b sm:border-b-0 sm:border-r border-slate-200 last:border-r-0 text-center sm:text-left"
            >
              <div
                ref={(el) => {
                  statRefs.current[i] = el;
                }}
                className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(38px,4vw,56px)] tracking-[-0.04em] leading-none mb-2 text-[#0b1528]"
                data-num={stat.num}
                data-suffix={stat.suffix}
              >
                {stat.decimals && stat.decimals > 0 ? stat.num.toFixed(stat.decimals) : stat.num}
                <span className="accent text-[#0284c7]">{stat.suffix}</span>
              </div>
              <div className="stat-label font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
