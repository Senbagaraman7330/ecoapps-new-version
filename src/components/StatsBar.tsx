export default function StatsBar() {
  return (
    <section className="stats-bar px-6 md:px-14 py-20 bg-gradient-to-b from-sky-50 to-slate-50 border-t border-slate-200 rounded-t-[48px] relative z-10" id="analytics">
      <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        <div className="stat py-8 border-b sm:border-b-0 sm:border-r border-slate-300/80 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(42px,4.5vw,72px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="546" data-prefix="+" data-suffix="k">
            +0<span className="accent text-sky-600">k</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Active client campaigns
          </div>
        </div>

        <div className="stat py-8 border-b sm:border-b-0 sm:border-r border-slate-300/80 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(42px,4.5vw,72px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="99" data-suffix="%">
            0<span className="accent text-sky-600">%</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Uptime & Delivery Rate
          </div>
        </div>

        <div className="stat py-8 border-b sm:border-b-0 sm:border-r border-slate-300/80 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(42px,4.5vw,72px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="2400" data-suffix="M">
            0<span className="accent text-sky-600">M</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Events & interactions daily
          </div>
        </div>

        <div className="stat py-8 last:border-r-0">
          <div className="stat-num font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(42px,4.5vw,72px)] tracking-[-0.04em] leading-none mb-3 text-[#0b1528]" data-num="42" data-suffix="×">
            0<span className="accent text-sky-600">×</span>
          </div>
          <div className="stat-label font-['JetBrains_Mono'] text-xs uppercase tracking-[0.14em] text-slate-500 font-semibold">
            Faster conversion growth
          </div>
        </div>
      </div>
    </section>
  );
}
