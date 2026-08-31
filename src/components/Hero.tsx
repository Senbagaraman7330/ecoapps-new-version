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
    <main className="hero relative z-10 min-h-[720px] w-full">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-14 py-12 md:py-14 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 items-center">
        <div className="hero-left pt-2 lg:pl-12">
          <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider mb-6 shadow-sm">
            <span className="hero-badge-pulse w-2 h-2 rounded-full bg-sky-600"></span>
            <span>NEXT-GENERATION DIGITAL GROWTH AGENCY</span>
          </div>

          <h1 className="hero-title font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(44px,5.4vw,80px)] leading-[1.04] tracking-[-0.035em] mb-7 text-[#0b1528]">
            <span className="title-line block overflow-hidden pb-[0.08em]">
              <span className="title-inner inline-block will-change-transform">Digital Marketing</span>
            </span>
            <span className="title-line block overflow-hidden pb-[0.08em]">
              <span className="title-inner inline-block will-change-transform">Agency in Coimbatore</span>
            </span>
            <span className="title-line block overflow-hidden pb-[0.08em]">
              <span className="title-inner inline-block will-change-transform bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                That Builds Growth
              </span>
            </span>
          </h1>

          <p className="hero-desc font-['Manrope'] text-[17px] leading-[1.65] text-slate-600 max-w-[520px] mb-9">
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
        </div>

        {/* 3D Interactive Constellation Graphic */}
        <div className="hero-right flex items-center justify-center relative">
          <Constellation
            ref={constellationRef}
            innerRef={constellationInnerRef}
            onHover={onHover}
            onLeave={onLeave}
          />
        </div>
      </div>
    </main>
  );
}
