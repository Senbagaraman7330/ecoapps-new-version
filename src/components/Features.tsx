interface FeaturesProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function Features({ onHover, onLeave }: FeaturesProps) {
  return (
    <section className="features px-6 md:px-14 py-28 bg-sky-50/50 border-b border-slate-200 relative" id="features">
      <div className="features-head flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
        <div>
          <div className="section-eyebrow font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-sky-600 font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-sky-600 inline-block"></span>
            <span>02 / Built for High Growth</span>
          </div>
          <h2 className="features-title features-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4.8vw,68px)] leading-[1.05] tracking-[-0.035em] text-[#0b1528] max-w-[760px]">
            Three pillars. One platform. Zero busywork.
          </h2>
        </div>

        <div className="features-meta font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 leading-relaxed text-left lg:text-right">
          ECOAPPS SUITE 4.2<br />
          TECH & DIGITAL MARKETING<br />
          24+ INTEGRATIONS
        </div>
      </div>

      <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-7">
        {/* Card 1: Cyan / Digital Marketing */}
        <div
          className="feature-card fc-mint p-9 rounded-[36px] min-h-[360px] flex flex-col bg-gradient-to-br from-white via-sky-50 to-sky-100/70 border border-sky-200 shadow-[0_15px_35px_rgba(14,165,233,0.12)] hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] text-sky-600 mb-6">
            01 — Capture & Attract
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight tracking-tight text-[#0b1528] mb-4">
            Every click. Every scroll. Every lead.
          </h3>
          <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 flex-1">
            Seamlessly unify paid traffic, SEO channels, and web interactions. Capture high-intent customers automatically with zero data leakage.
          </p>
          <div className="fc-icon w-14 h-14 rounded-2xl bg-white flex items-center justify-center mt-6 text-sky-600 border border-slate-200/80 shadow-sm transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M3 12a9 9 0 0 1 9-9M12 21a9 9 0 0 1-9-9M21 12a9 9 0 0 0-9-9" />
            </svg>
          </div>
        </div>

        {/* Card 2: Royal Blue / Tech & App Solutions */}
        <div
          className="feature-card fc-yellow p-9 rounded-[36px] min-h-[360px] flex flex-col bg-gradient-to-br from-white via-blue-50 to-blue-100/70 border border-blue-200 shadow-[0_15px_35px_rgba(37,99,235,0.12)] hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] text-blue-600 mb-6">
            02 — Understand & Optimize
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight tracking-tight text-[#0b1528] mb-4">
            Funnels, cohorts, attribution — visual.
          </h3>
          <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 flex-1">
            Real-time dashboards and intelligent audience segmentation. Understand customer journeys end-to-end to multiply marketing ROI.
          </p>
          <div className="fc-icon w-14 h-14 rounded-2xl bg-white flex items-center justify-center mt-6 text-blue-600 border border-slate-200/80 shadow-sm transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 4 6-6" />
            </svg>
          </div>
        </div>

        {/* Card 3: Indigo / Automated Scaling */}
        <div
          className="feature-card fc-purple p-9 rounded-[36px] min-h-[360px] flex flex-col bg-gradient-to-br from-white via-indigo-50 to-indigo-100/70 border border-indigo-200 shadow-[0_15px_35px_rgba(99,102,241,0.12)] hover:-translate-y-3 transition-transform duration-500 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] text-indigo-600 mb-6">
            03 — Convert & Compound
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight tracking-tight text-[#0b1528] mb-4">
            Ship campaigns. Watch numbers compound.
          </h3>
          <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 flex-1">
            Automated A/B experimentation, high-speed landing pages, and AI-driven re-engagement that turn visitors into loyal paying customers.
          </p>
          <div className="fc-icon w-14 h-14 rounded-2xl bg-white flex items-center justify-center mt-6 text-indigo-600 border border-slate-200/80 shadow-sm transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
