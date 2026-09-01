export default function StatsBar() {
  return (
    <section className="stats-bar px-6 md:px-14 py-20 md:py-28 bg-gradient-to-b from-sky-50 to-slate-50 border-t border-slate-200 rounded-t-[48px] relative z-10" id="analytics">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-wider mb-4 uppercase">
          <span>Performance</span>
        </div>
        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-5xl text-[#0b1528] leading-[1.12] tracking-tight mb-6">
          See Where Your Marketing Is Actually Working
        </h2>
        <p className="font-['Manrope'] text-[16px] md:text-[17px] leading-[1.7] text-slate-600 max-w-3xl mx-auto">
          No guessing. No vanity metrics. We connect campaigns, landing pages, analytics and conversion data so marketing decisions can be based on measurable business outcomes. Our focus is on meaningful indicators such as qualified leads, cost per lead, conversion rate, revenue contribution and return on advertising spend.
        </p>
      </div>

      <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
        <div className="stat py-6 border-b sm:border-b-0 sm:border-r border-slate-300/80 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4vw,60px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="100" data-suffix="%">
            100<span className="accent text-sky-600">%</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Qualified Leads Focus
          </div>
        </div>

        <div className="stat py-6 border-b sm:border-b-0 sm:border-r border-slate-300/80 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4vw,60px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="48" data-suffix="%">
            48<span className="accent text-sky-600">%</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Lower Cost Per Lead
          </div>
        </div>

        <div className="stat py-6 border-b sm:border-b-0 sm:border-r border-slate-300/80 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4vw,60px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="3" data-suffix=".8x">
            3.8<span className="accent text-sky-600">x</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Average ROAS Multiplier
          </div>
        </div>

        <div className="stat py-6 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,4vw,60px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="64" data-suffix="%">
            64<span className="accent text-sky-600">%</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Revenue Contribution Growth
          </div>
        </div>
      </div>
    </section>
  );
}
