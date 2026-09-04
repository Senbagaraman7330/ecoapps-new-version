import Constellation from './Constellation';

interface HeroProps {
  constellationRef: React.RefObject<HTMLDivElement | null>;
  constellationInnerRef: React.RefObject<HTMLDivElement | null>;
  onHover: () => void;
  onLeave: () => void;
}

export default function Hero({
  constellationRef,
  constellationInnerRef,
  onHover,
  onLeave,
}: HeroProps) {
  return (
    <main className="hero grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-6 md:gap-10 px-6 md:px-14 pt-28 md:pt-36 pb-12 md:pb-16 items-center relative z-10 min-h-[720px]">
      <div className="hero-left pt-2 pl-0">
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider mb-6 shadow-sm">
          <span className="hero-badge-pulse w-2 h-2 rounded-full bg-sky-600"></span>
          <span>NEXT-GENERATION DIGITAL GROWTH AGENCY</span>
        </div>

        <h1 className="hero-title font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(32px,3.8vw,56px)] leading-[1.1] tracking-[-0.035em] mb-7 text-[#0b1528]">
          <span className="title-line block overflow-hidden pb-[0.06em]">
            <span className="title-inner inline-block whitespace-nowrap will-change-transform">Digital Marketing</span>
          </span>
          <span className="title-line block overflow-hidden pb-[0.06em]">
            <span className="title-inner inline-block whitespace-nowrap will-change-transform">Agency in Coimbatore</span>
          </span>
          <span className="title-line block overflow-hidden pb-[0.06em]">
            <span className="title-inner inline-block whitespace-nowrap will-change-transform bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              That Builds Growth
            </span>
          </span>
        </h1>

        <p className="hero-desc font-['Manrope'] text-[16px] md:text-[17px] leading-[1.65] text-slate-600 max-w-[500px] mb-9">
          We combine AI, performance marketing, SEO, creative strategy and technology to help ambitious businesses attract better customers, generate qualified leads and grow revenue.
        </p>

        <div className="hero-cta-wrap flex items-center gap-4 flex-wrap">
          <a
            href="#growth-strategy"
            className="cta-btn group inline-flex items-center gap-3.5 px-8 py-4 font-['Manrope'] text-[15px] font-bold text-white bg-gradient-to-b from-blue-700 to-[#0f172a] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Get Your Growth Strategy
            <span className="cta-arrow inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>

          <a
            href="#services"
            className="secondary-btn inline-flex items-center justify-center px-7 py-4 font-['Manrope'] text-[15px] font-bold text-[#0b1528] bg-white border-[1.5px] border-slate-300 rounded-2xl shadow-sm hover:border-sky-600 hover:text-sky-600 hover:bg-slate-50 transition-all duration-300"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Explore Our Services
          </a>
        </div>

        {/* Secondary Positioning — Services Specialism Strip */}
        <div className="mt-8 pt-7 border-t border-slate-200/80">
          <p className="font-['Manrope'] text-[10.5px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-3">
            Our specialisms
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Performance Marketing',
              'AI Digital Marketing',
              'SEO',
              'AI SEO',
              'Web Development',
              'Automation',
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[12px] font-semibold font-['Manrope'] text-slate-700 bg-slate-100 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Interactive Constellation Graphic (Reduced size & centered) */}
      <div className="hero-right flex items-center justify-center relative scale-[0.80] sm:scale-[0.84] md:scale-[0.86] lg:scale-[0.82] xl:scale-[0.85] origin-center">
        <Constellation
          ref={constellationRef}
          innerRef={constellationInnerRef}
          onHover={onHover}
          onLeave={onLeave}
        />
      </div>
    </main>
  );
}
