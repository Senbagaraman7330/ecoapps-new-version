export default function QuoteSection() {
  return (
    <section className="quote-section px-6 md:px-14 py-32 bg-white text-center" id="blog">
      <span className="quote-mark select-none font-['Plus_Jakarta_Sans'] text-[110px] leading-[0.4] text-sky-500 mb-6 inline-block">
        "
      </span>
      <blockquote className="quote-text quote-text-reveal font-['Plus_Jakarta_Sans'] font-bold text-[clamp(28px,4vw,56px)] leading-[1.18] tracking-[-0.03em] text-[#0b1528] max-w-[1040px] mx-auto mb-8">
        We integrated EcoApps Solutions across our marketing channels and our conversion rate jumped 44% in 60 days. The clarity and execution speed are unmatched.
      </blockquote>
      <div className="quote-author font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
        — Marcus Vance, Director of Growth at CloudScale
      </div>
    </section>
  );
}
