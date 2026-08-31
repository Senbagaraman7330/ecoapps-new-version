interface WorkspaceFeaturesProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function WorkspaceFeatures({ onHover, onLeave }: WorkspaceFeaturesProps) {
  return (
    <section className="workspace flex flex-wrap items-center gap-8 md:gap-10 px-6 md:px-14 pt-6 pb-20 relative z-10">
      <h3 className="workspace-label font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#0b1528] shrink-0">
        Workspace features
      </h3>

      <div className="feature-pills flex items-center gap-4 flex-wrap">
        {/* Round Cyan Pill */}
        <div
          className="fpill w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-sky-200 border border-white/80 shadow-md hover:-translate-y-1 hover:rotate-[-3deg] hover:scale-105 transition-all duration-300 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>

        {/* Wide Royal Blue Pill */}
        <div
          className="fpill w-32 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-white via-blue-100 to-blue-200 border border-white/80 shadow-md hover:-translate-y-1 hover:rotate-[-3deg] hover:scale-105 transition-all duration-300 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <svg width="64" height="40" viewBox="0 0 64 40" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinejoin="round">
            <circle cx="22" cy="20" r="10" fill="rgba(37,99,235,0.2)" stroke="#1d4ed8" />
            <path d="M38 30 L48 12 L58 30 Z" fill="#1d4ed8" />
          </svg>
        </div>

        {/* Wide Purple Pill */}
        <div
          className="fpill w-32 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-white via-indigo-100 to-indigo-200 border border-white/80 shadow-md hover:-translate-y-1 hover:rotate-[-3deg] hover:scale-105 transition-all duration-300 cursor-pointer"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <svg width="64" height="40" viewBox="0 0 64 40" fill="none" stroke="#4338ca" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="10" width="22" height="22" stroke="#4338ca" />
            <line x1="6" y1="17" x2="28" y2="17" />
            <line x1="6" y1="24" x2="28" y2="24" />
            <line x1="13" y1="10" x2="13" y2="32" />
            <line x1="20" y1="10" x2="20" y2="32" />
            <g transform="translate(42 21)">
              <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#4338ca" stroke="none" />
            </g>
          </svg>
        </div>
      </div>

      <a
        href="#features-more"
        className="learn-more ml-auto font-['Manrope'] text-sm font-bold text-blue-700 underline underline-offset-4 hover:opacity-80 hover:translate-x-1 transition-all duration-200"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        Explore EcoApps Platform
      </a>
    </section>
  );
}
