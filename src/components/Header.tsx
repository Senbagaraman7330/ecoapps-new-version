import logoImg from '../assets/EcoApps-Logo.webp';

interface HeaderProps {
  onHover: () => void;
  onLeave: () => void;
}

export default function Header({ onHover, onLeave }: HeaderProps) {
  return (
    <header className="site-header flex justify-between items-center px-6 md:px-14 py-6 relative z-30 bg-white/85 backdrop-blur-md border-b border-slate-200/60">
      <a
        href="#"
        className="flex items-center gap-3 select-none cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <img
          src={logoImg}
          alt="EcoApps Solutions - Tech & Digital Marketing"
          className="h-10 md:h-12 w-auto object-contain drop-shadow-sm"
        />
      </a>

      <nav className="hidden lg:flex items-center gap-9 font-['Manrope'] text-sm font-semibold text-slate-600">
        <a
          href="#analytics"
          className="transition-all duration-200 hover:text-blue-700 hover:-translate-y-0.5"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          Digital Marketing
        </a>
        <a
          href="#features"
          className="flex items-center gap-1 transition-all duration-200 hover:text-blue-700 hover:-translate-y-0.5"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          App Solutions
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
        <a
          href="#blog"
          className="transition-all duration-200 hover:text-blue-700 hover:-translate-y-0.5"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          Case Studies
        </a>
        <a
          href="#contact"
          className="transition-all duration-200 hover:text-blue-700 hover:-translate-y-0.5"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          Get in touch
        </a>
      </nav>

      <a
        href="#signup"
        className="inline-flex items-center gap-2.5 px-5 py-2.5 font-['Manrope'] text-[13px] font-bold text-[#0b1528] bg-white border-[1.5px] border-[#0b1528] rounded-xl shadow-[0_4px_0_#0b1528] hover:translate-y-0.5 hover:shadow-[0_2px_0_#0b1528] hover:bg-slate-50 active:translate-y-1 active:shadow-none transition-all duration-200"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        Start for free
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
    </header>
  );
}
