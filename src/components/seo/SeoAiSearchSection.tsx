import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SeoAiSearchSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoAiSearchSection({}: SeoAiSearchSectionProps) {
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
      {/* 2. MAIN AI SECTION (Dark Canvas)                           */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="bg-black text-white pt-14 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="section-title-reveal text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-center max-w-4xl leading-[1.1]">
            Your Customers Are Asking AI Before They Ask Google
          </h2>

          <p className="text-slate-400 text-[15px] md:text-[16.5px] max-w-3xl text-center mb-4 font-medium leading-relaxed">
            Search behaviour is changing. Customers are discovering brands through AI-powered answers, conversational search and recommendation experiences alongside traditional search engines. Eco Apps Solutions helps businesses prepare for this shift through AI SEO, structured content, authority building, AI-ready digital experiences and intelligent automation.
          </p>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* 3. BOTTOM DYNAMIC SCROLL CURVE (Morphs from Arch into Flat)*/}
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
    </div>
  );
}
