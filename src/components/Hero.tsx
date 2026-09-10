import Constellation from './Constellation';
import {
  TrendingUp,
  Sparkles,
  Search,
  Code2,
  Workflow,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  constellationRef: React.RefObject<HTMLDivElement | null>;
  constellationInnerRef: React.RefObject<HTMLDivElement | null>;
  onHover: () => void;
  onLeave: () => void;
}

const specialisms = [
  {
    name: 'Performance Marketing',
    icon: TrendingUp,
    bg: 'bg-blue-50/90',
    border: 'border-blue-200/90',
    text: 'text-blue-700',
    hover: 'hover:border-blue-400 hover:shadow-[0_4px_14px_rgba(37,99,235,0.18)]',
    iconColor: 'text-blue-600',
  },
  {
    name: 'AI Digital Marketing',
    icon: Sparkles,
    bg: 'bg-sky-50/90',
    border: 'border-sky-200/90',
    text: 'text-sky-700',
    hover: 'hover:border-sky-400 hover:shadow-[0_4px_14px_rgba(2,132,199,0.18)]',
    iconColor: 'text-sky-600',
  },
  {
    name: 'SEO & AI SEO',
    icon: Search,
    bg: 'bg-cyan-50/90',
    border: 'border-cyan-200/90',
    text: 'text-cyan-800',
    hover: 'hover:border-cyan-400 hover:shadow-[0_4px_14px_rgba(6,182,212,0.18)]',
    iconColor: 'text-cyan-600',
  },
  {
    name: 'Web Development',
    icon: Code2,
    bg: 'bg-slate-50/90',
    border: 'border-slate-200/90',
    text: 'text-slate-800',
    hover: 'hover:border-slate-400 hover:shadow-[0_4px_14px_rgba(15,23,42,0.12)]',
    iconColor: 'text-[#0057ff]',
  },
  {
    name: 'Automation',
    icon: Workflow,
    bg: 'bg-purple-50/90',
    border: 'border-purple-200/90',
    text: 'text-purple-700',
    hover: 'hover:border-purple-400 hover:shadow-[0_4px_14px_rgba(147,51,234,0.18)]',
    iconColor: 'text-purple-600',
  },
];

export default function Hero({
  constellationRef,
  constellationInnerRef,
  onHover,
  onLeave,
}: HeroProps) {
  return (
    <main className="hero grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] gap-6 lg:gap-10 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-[88px] lg:pt-[96px] pb-4 lg:pb-6 items-center relative z-10 min-h-screen lg:h-screen max-w-[1520px] mx-auto box-border">
      {/* Hero Left Content — positioned to the left with balanced vertical rhythm */}
      <div className="hero-left pt-0 pl-0 max-w-[700px]">
        <div className="hero-badge inline-flex items-center px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-700 text-[12px] font-bold tracking-wider mb-4 lg:mb-5 shadow-2xs">
          <span>NEXT-GENERATION DIGITAL GROWTH AGENCY</span>
        </div>

        <h1 className="hero-title font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(32px,3.9vw,56px)] leading-[1.12] tracking-[-0.035em] mb-5 lg:mb-6 text-[#0b1528]">
          <span className="title-line block overflow-hidden pb-[0.08em]">
            <span className="title-inner inline-block whitespace-nowrap will-change-transform">We Make Businesses</span>
          </span>
          <span className="title-line block overflow-hidden pb-[0.08em]">
            <span className="title-inner inline-block whitespace-nowrap will-change-transform">Smarter, Stronger</span>
          </span>
          <span className="title-line block overflow-hidden pb-[0.08em]">
            <span className="title-inner inline-block whitespace-nowrap will-change-transform bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
              &amp; More Visible
            </span>
          </span>
        </h1>

        <p className="hero-desc font-['Manrope'] text-[16px] sm:text-[17.5px] lg:text-[18px] leading-[1.72] text-slate-600 max-w-[600px] mb-7 lg:mb-8">
          We help businesses get found online, generate leads, improve sales and simplify their digital work.
        </p>

        <div className="hero-cta-wrap flex items-center gap-4 flex-wrap">
          <a
            href="#analytics"
            className="cta-btn group inline-flex items-center gap-3 px-8 py-4 font-['Manrope'] text-[15px] font-bold text-white bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] hover:from-[#004cd6] hover:to-[#0284c7] rounded-xl shadow-[0_8px_22px_rgba(0,87,255,0.28)] hover:shadow-[0_12px_28px_rgba(0,87,255,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative overflow-hidden"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Book a Strategy Call
            <span className="cta-arrow inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>

          <a
            href="#services"
            className="secondary-btn inline-flex items-center justify-center px-7 py-4 font-['Manrope'] text-[15px] font-bold text-[#0b1528] bg-white border-[1.5px] border-slate-300 rounded-xl shadow-xs hover:border-[#0057ff] hover:text-[#0057ff] hover:bg-blue-50/40 transition-all duration-200"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Explore Our Services
          </a>
        </div>

        {/* Secondary Positioning — Services Specialism Strip with generous up and down padding */}
        <div className="mt-8 lg:mt-9 pt-6 lg:pt-7 border-t border-slate-200/90">
          <p className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3.5">
            Our specialisms
          </p>
          <div className="flex flex-wrap gap-2.5">
            {specialisms.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12.5px] font-semibold font-['Manrope'] ${item.text} ${item.bg} border ${item.border} ${item.hover} transition-all duration-200 cursor-pointer shadow-2xs backdrop-blur-sm`}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <IconComp className={`w-3.5 h-3.5 ${item.iconColor} shrink-0`} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3D Interactive Constellation Graphic */}
      <div className="hero-right hidden md:flex items-center justify-center relative scale-[0.78] sm:scale-[0.82] md:scale-[0.86] lg:scale-[0.86] xl:scale-[0.90] origin-center">
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

