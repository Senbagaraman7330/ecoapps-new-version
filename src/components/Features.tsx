interface FeaturesProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function Features({ onHover, onLeave }: FeaturesProps) {
  return (
    <section className="features px-6 md:px-14 py-28 bg-white border-b border-slate-200 relative" id="features">
      <div className="features-head flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20 max-w-7xl mx-auto">
        <div>
          <div className="section-eyebrow font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-sky-600 font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-sky-600 inline-block"></span>
            <span>Problem & Opportunity</span>
          </div>
          <h2 className="features-title features-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(32px,4.5vw,60px)] leading-[1.08] tracking-[-0.035em] text-[#0b1528] max-w-[820px]">
            Your Customers Are Already Online. Is Your Business Ready?
          </h2>
        </div>

        <div className="features-meta font-['Manrope'] text-[15px] text-slate-600 leading-relaxed text-left lg:text-right max-w-md">
          Your customers are searching, comparing, watching, clicking and increasingly asking AI before they ever contact a business.
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-14">
        <p className="font-['Manrope'] text-[17px] leading-[1.75] text-slate-600 max-w-4xl">
          Simply having a website or running occasional campaigns is no longer enough. We help businesses identify where digital growth is being lost—whether it is low search visibility, expensive advertising, weak conversion journeys, inconsistent content or disconnected marketing systems—and turn those gaps into measurable opportunities.
        </p>
      </div>

      <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-7 max-w-7xl mx-auto">
        {/* Gap 1 */}
        <div
          className="feature-card fc-mint cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] text-sky-600 mb-6 uppercase">
            01 — Visibility & Reach
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight tracking-tight text-[#0b1528] mb-4">
            Low Search Visibility & Expensive Advertising
          </h3>
          <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 flex-1">
            Turn paid ad waste and invisible search rankings into high-intent discovery across organic, AI answers, and precision targeting.
          </p>
        </div>

        {/* Gap 2 */}
        <div
          className="feature-card fc-yellow cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] text-blue-600 mb-6 uppercase">
            02 — Conversion Architecture
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight tracking-tight text-[#0b1528] mb-4">
            Weak Conversion Journeys & High Bounce
          </h3>
          <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 flex-1">
            Transform high-friction landing pages and abandoned carts into frictionless, automated conversion pipelines.
          </p>
        </div>

        {/* Gap 3 */}
        <div
          className="feature-card fc-purple cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] text-indigo-600 mb-6 uppercase">
            03 — Unified Systems
          </div>
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-2xl leading-tight tracking-tight text-[#0b1528] mb-4">
            Inconsistent Content & Disconnected Systems
          </h3>
          <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 flex-1">
            Replace siloed tools and sporadic marketing with connected technology, live analytics, and scalable growth systems.
          </p>
        </div>
      </div>
    </section>
  );
}
