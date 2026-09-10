interface FeaturesProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function Features(_props: FeaturesProps) {
  return (
    <section
      className="features px-6 sm:px-10 md:px-14 lg:px-20 py-20 md:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
      id="features"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-sky-50/60 to-transparent blur-3xl pointer-events-none" />

      {/* Section Header & Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0057ff] text-[11px] sm:text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-4 shadow-2xs">
          <span>Problem &amp; Opportunity</span>
        </div>

        <h2 className="features-title features-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(30px,3.8vw,48px)] leading-[1.15] tracking-[-0.035em] text-[#0b1528] max-w-[840px] mx-auto text-center mb-5">
          Your Customers Are Already Online. Is Your Business Ready?
        </h2>

        <p className="font-['Manrope'] text-[15.5px] sm:text-[16.5px] leading-[1.75] text-slate-600 max-w-3xl mx-auto text-center">
          Your digital presence should make it easy for people to find your business, understand what you offer and contact you. We improve the areas that are stopping this from happening.
        </p>
      </div>

      {/* 3 Cards Grid */}
      {/* <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch relative z-10">
        {cards.map((card, i) => (
          <div
            key={card.num}
            className={`feature-card ${card.colorClass} cursor-pointer p-8 sm:p-9 lg:p-10 flex flex-col`}
            data-fc-index={i}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Number + label — shown on both mobile and desktop
            <div className={`fc-num font-['JetBrains_Mono'] text-[11px] font-bold tracking-[0.14em] ${card.numColor} mb-5 uppercase`}>
              {card.num} — {card.label}
            </div>

            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] md:text-2xl lg:text-[26px] leading-[1.2] tracking-tight text-[#0b1528] mb-4">
              {card.title}
            </h3>
            <p className="font-['Manrope'] text-[15px] sm:text-[15.5px] leading-relaxed text-slate-600">
              {card.desc}
            </p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
