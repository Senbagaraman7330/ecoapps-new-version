import './StatsBar.css';

export default function StatsBar() {
  return (
    <section
      className="stats-bar px-4 sm:px-8 md:px-12 lg:px-16 py-14 md:py-20 bg-white border-b border-slate-200 relative z-10 overflow-hidden"
      id="analytics"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-sky-50/70 to-transparent blur-3xl pointer-events-none" />

      {/* Performance & Measurable Outcomes Block */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0057ff] text-[11px] font-['JetBrains_Mono'] font-bold tracking-wider mb-3.5 uppercase shadow-2xs">
            <span>Measuring What Matters</span>
          </div>
          <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(28px,3.4vw,44px)] text-[#0b1528] leading-[1.12] tracking-tight mb-4">
            Marketing That Delivers Results
          </h2>
          <p className="font-['Manrope'] text-[15px] sm:text-[16.5px] leading-[1.68] text-slate-600 max-w-3xl mx-auto">
            We track traffic, leads, enquiries, sales and campaign performance so you can see what is working.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="stat py-4 border-b sm:border-b-0 sm:border-r border-slate-200 last:border-r-0 text-center sm:text-left">
            <div
              className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,3.6vw,52px)] tracking-[-0.04em] leading-none mb-2 text-[#0b1528]"
              data-num="100"
              data-suffix="%"
            >
              100<span className="accent text-[#0057ff]">%</span>
            </div>
            <div className="stat-label font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">
              Qualified Leads
            </div>
          </div>

          <div className="stat py-4 border-b sm:border-b-0 sm:border-r border-slate-200 last:border-r-0 text-center sm:text-left">
            <div
              className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,3.6vw,52px)] tracking-[-0.04em] leading-none mb-2 text-[#0b1528]"
              data-num="48"
              data-suffix="%"
            >
              48<span className="accent text-[#0057ff]">%</span>
            </div>
            <div className="stat-label font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">
              Lower Cost Per Lead
            </div>
          </div>

          <div className="stat py-4 border-b sm:border-b-0 sm:border-r border-slate-200 last:border-r-0 text-center sm:text-left">
            <div
              className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,3.6vw,52px)] tracking-[-0.04em] leading-none mb-2 text-[#0b1528]"
              data-num="3"
              data-suffix=".8x"
            >
              3.8<span className="accent text-[#0057ff]">x</span>
            </div>
            <div className="stat-label font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">
              Average Return On Ad Spend
            </div>
          </div>

          <div className="stat py-4 last:border-r-0 text-center sm:text-left">
            <div
              className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,3.6vw,52px)] tracking-[-0.04em] leading-none mb-2 text-[#0b1528]"
              data-num="64"
              data-suffix="%"
            >
              64<span className="accent text-[#0057ff]">%</span>
            </div>
            <div className="stat-label font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-slate-500 font-semibold">
              Revenue Growth
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


