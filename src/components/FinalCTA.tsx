interface FinalCTAProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function FinalCTA({ onHover, onLeave }: FinalCTAProps) {
  return (
    <section className="final-cta px-6 md:px-14 pt-20 pb-28 text-center bg-white" id="signup">
      <div className="final-cta-card max-w-[1100px] mx-auto px-8 md:px-16 py-20 rounded-[48px] bg-gradient-to-br from-[#0b1528] to-[#030712] text-white relative overflow-hidden border border-sky-400/25 shadow-2xl">
        {/* Glow blobs */}
        <span className="orb orb-1 absolute w-80 h-80 rounded-full bg-radial from-sky-400/35 to-transparent -top-20 -left-20 blur-3xl pointer-events-none" aria-hidden="true" />
        <span className="orb orb-2 absolute w-96 h-96 rounded-full bg-radial from-blue-600/30 to-transparent -bottom-24 -right-24 blur-3xl pointer-events-none" aria-hidden="true" />

        <h2 className="final-cta-h2 final-cta-h2-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(36px,5vw,72px)] leading-[1.08] tracking-[-0.035em] text-white mb-7 relative z-10">
          Stop losing the <span className="accent text-sky-400">good leads.</span>
        </h2>

        <p className="font-['Manrope'] text-[17px] leading-relaxed text-white/75 max-w-[560px] mx-auto mb-10 relative z-10">
          Free for the first 10,000 tracked events each month. No credit card required. Experience faster growth with EcoApps Solutions today.
        </p>

        <a
          href="#get-started-final"
          className="cta-btn inline-flex items-center gap-3.5 px-8 py-4 font-['Manrope'] text-[15px] font-extrabold text-[#030712] bg-gradient-to-b from-sky-300 to-sky-500 rounded-2xl shadow-[0_12px_24px_rgba(14,165,233,0.5)] hover:shadow-[0_16px_32px_rgba(14,165,233,0.6)] hover:-translate-y-1 transition-all duration-300 relative z-10"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          Start for free
          <span className="cta-arrow inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/15">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
