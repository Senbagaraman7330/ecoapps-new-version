import { Link } from 'react-router-dom';

interface FinalCTAProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function FinalCTA({ onHover, onLeave }: FinalCTAProps) {
  return (
    <section className="final-cta px-6 md:px-14 py-10 md:py-14 text-center bg-white" id="contact-cta">
      <div className="final-cta-card max-w-[1000px] mx-auto px-6 sm:px-10 md:px-12 py-10 md:py-12 rounded-[32px] bg-gradient-to-br from-[#0b1528] to-[#030712] text-white relative overflow-hidden border border-sky-400/25 shadow-xl">
        {/* Glow blobs */}
        <span className="orb orb-1 absolute w-60 h-60 rounded-full bg-radial from-sky-400/30 to-transparent -top-16 -left-16 blur-2xl pointer-events-none" aria-hidden="true" />
        <span className="orb orb-2 absolute w-72 h-72 rounded-full bg-radial from-blue-600/25 to-transparent -bottom-16 -right-16 blur-2xl pointer-events-none" aria-hidden="true" />

        <h2 className="final-cta-h2 final-cta-h2-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(26px,3.8vw,44px)] leading-[1.12] tracking-[-0.03em] text-white mb-4 relative z-10 max-w-3xl mx-auto">
          Ready to Build Your Next Stage of Growth?
        </h2>

        <p className="font-['Manrope'] text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/80 max-w-[620px] mx-auto mb-6 relative z-10">
          Whether you need more leads, stronger search visibility, better-performing advertising, a conversion-focused website or AI-powered automation, let's build the right digital growth system for your business.
        </p>

        <Link
          to="/contact"
          className="cta-btn inline-flex items-center gap-2.5 px-7 py-3.5 font-['Manrope'] text-[14px] font-bold text-white bg-gradient-to-r from-[#0057ff] to-[#0ea5e9] hover:from-[#004cd6] hover:to-[#0284c7] rounded-xl shadow-[0_8px_20px_rgba(0,87,255,0.35)] hover:shadow-[0_12px_28px_rgba(0,87,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 relative z-10 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          Book a Growth Strategy Call
          <span className="cta-arrow inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
