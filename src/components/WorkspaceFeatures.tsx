export default function WorkspaceFeatures() {
  return (
    <section className="workspace px-6 md:px-14 py-16 md:py-24 bg-slate-50/60 border-y border-slate-200/70 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-14">
        <div className="md:w-[40%] shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-wider mb-4 uppercase">
            <span>Introduction</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-4xl text-[#0b1528] leading-[1.15] tracking-tight">
            More than a digital marketing agency.
          </h2>
        </div>

        <div className="md:w-[60%] flex flex-col gap-5 text-slate-600 font-['Manrope'] text-[16px] md:text-[17px] leading-[1.7]">
          <p>
            We build digital growth systems—not isolated marketing campaigns. Eco Apps Solutions brings strategy, creative, technology, data and AI together to create a connected digital ecosystem around your business goals.
          </p>
          <p>
            From the first search to the final conversion, every part of the customer journey should work together. Our approach is built to improve visibility, generate qualified demand, increase conversion opportunities and create a stronger foundation for long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
}
