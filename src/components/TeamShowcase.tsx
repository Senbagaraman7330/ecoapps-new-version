import { useState } from 'react';
import faizanImg from '../assets/team-member/Faizan khan Z .jpg';
import arshadImg from '../assets/team-member/Muhammad Arshad K .jpg';
import vimalsivaImg from '../assets/team-member/Vimalsiva A .jpg';
import fazilImg from '../assets/team-member/Fazil.png';
import fajrulrahmanImg from '../assets/team-member/Fajrulrahman.png';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
    github?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Faizan khan Z',
    role: 'Business Development Manager',
    image: faizanImg,
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '2',
    name: 'Muhammad Arshad K',
    role: 'Website Developer',
    image: arshadImg,
    social: { linkedin: '#', github: '#' },
  },
  {
    id: '3',
    name: 'Vimalsiva A',
    role: 'Performance Marketer',
    image: vimalsivaImg,
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '4',
    name: 'Fazil',
    role: 'Video Editor',
    image: fazilImg,
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '5',
    name: 'Fajrulrahman',
    role: 'Wordpress Developer',
    image: fajrulrahmanImg,
    social: { linkedin: '#', github: '#' },
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
  onHover?: () => void;
  onLeave?: () => void;
}

export default function TeamShowcase({
  members = DEFAULT_MEMBERS,
  onHover,
  onLeave,
}: TeamShowcaseProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative px-6 md:px-14 py-28 md:py-36 bg-gradient-to-b from-white via-sky-50/40 to-slate-50/60 border-b border-slate-200 overflow-hidden" id="team">

      {/* ── Dynamic Ambient Mesh Gradients matching Website Rhythm ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-indigo-100/30 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-gradient-to-br from-cyan-100/40 via-sky-100/30 to-transparent blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[450px] bg-gradient-to-tl from-blue-100/40 via-indigo-100/30 to-sky-100/20 blur-[110px] pointer-events-none rounded-full" />

      {/* Subtle Micro-Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0284c7 0.75px, transparent 0.75px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* ── Section Header ── */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-5 shadow-sm shadow-sky-500/5">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
          <span>OUR TEAM</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(34px,4.2vw,56px)] leading-[1.08] tracking-[-0.035em] text-[#0b1528] mb-5">
          The Minds Behind the Growth Engine
        </h2>

        <p className="font-['Manrope'] text-[16px] sm:text-[18px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
          A multidisciplinary team of growth strategists, engineers, and creative architects collaborating to scale category-defining brands.
        </p>
      </div>

      {/* ── Showcase Card Pod with Glassmorphism & Ambient Lighting ── */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="bg-white/85 backdrop-blur-xl rounded-[36px] sm:rounded-[44px] border border-slate-200/90 shadow-[0_25px_70px_-15px_rgba(14,165,233,0.12)] p-6 sm:p-10 lg:p-14 relative overflow-hidden">

          {/* Inner Pod Decorative Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-indigo-50/40 via-sky-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />

          {/* Main Interactive Showcase Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 md:gap-14 lg:gap-16 w-full select-none">

            {/* ── Left: 3-Column Staggered Photo Grid with Generous Padding ── */}
            <div className="flex gap-4 sm:gap-5 md:gap-6 flex-shrink-0 justify-center p-2 sm:p-4">

              {/* Column 1 */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {col1.map((member) => (
                  <PhotoCard
                    key={member.id}
                    member={member}
                    className="w-[115px] h-[135px] sm:w-[138px] sm:h-[160px] md:w-[164px] md:h-[190px]"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    onCursorHover={onHover}
                    onCursorLeave={onLeave}
                  />
                ))}
              </div>

              {/* Column 2 (Offset Down) */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-[40px] sm:mt-[52px] md:mt-[64px]">
                {col2.map((member) => (
                  <PhotoCard
                    key={member.id}
                    member={member}
                    className="w-[122px] h-[145px] sm:w-[148px] sm:h-[172px] md:w-[175px] md:h-[202px]"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    onCursorHover={onHover}
                    onCursorLeave={onLeave}
                  />
                ))}
              </div>

              {/* Column 3 (Offset Medium) */}
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mt-[20px] sm:mt-[26px] md:mt-[32px]">
                {col3.map((member) => (
                  <PhotoCard
                    key={member.id}
                    member={member}
                    className="w-[118px] h-[140px] sm:w-[142px] sm:h-[165px] md:w-[168px] md:h-[195px]"
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    onCursorHover={onHover}
                    onCursorLeave={onLeave}
                  />
                ))}
              </div>
            </div>

            {/* ── Right: Interactive Member List ── */}
            <div className="flex flex-col gap-3.5 sm:gap-4 pt-2 lg:pt-4 flex-1 w-full max-w-xl">
              {members.map((member) => (
                <MemberRow
                  key={member.id}
                  member={member}
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  onCursorHover={onHover}
                  onCursorLeave={onLeave}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Photo card component
───────────────────────────────────────── */
function PhotoCard({
  member,
  className,
  selectedId,
  onSelect,
  onCursorHover,
  onCursorLeave,
}: {
  member: TeamMember;
  className: string;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onCursorHover?: () => void;
  onCursorLeave?: () => void;
}) {
  const isActive = selectedId === member.id;
  const isDimmed = selectedId !== null && !isActive;

  return (
    <div
      className={`overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 transition-all duration-400 relative border bg-gradient-to-br from-slate-100 to-slate-200/80 ${isActive
          ? 'border-sky-500 shadow-[0_15px_40px_rgba(2,132,199,0.30)] scale-[1.04] z-20 ring-4 ring-sky-200/90'
          : 'border-slate-200/90 shadow-md shadow-slate-200/60 hover:border-slate-300 hover:shadow-lg'
        } ${isDimmed ? 'opacity-40 grayscale' : 'opacity-100'} ${className}`}
      onMouseEnter={() => {
        onSelect(member.id);
        onCursorHover?.();
      }}
      onMouseLeave={() => {
        onSelect(null);
        onCursorLeave?.();
      }}
      onClick={() => onSelect(member.id)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-all duration-500"
        style={{
          filter: isActive
            ? 'grayscale(0) brightness(1.02)'
            : 'grayscale(0.9) brightness(0.85)',
          transform: isActive ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      {/* Subtle Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />

      {/* Member Name overlay on photo */}
      <div className={`absolute bottom-2.5 left-2.5 right-2.5 text-white transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
        <p className="text-[11px] sm:text-xs font-bold font-['Plus_Jakarta_Sans'] leading-tight truncate drop-shadow-md">
          {member.name}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name row component
───────────────────────────────────────── */
function MemberRow({
  member,
  selectedId,
  onSelect,
  onCursorHover,
  onCursorLeave,
}: {
  member: TeamMember;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onCursorHover?: () => void;
  onCursorLeave?: () => void;
}) {
  const isActive = selectedId === member.id;
  const isDimmed = selectedId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ||
    member.social?.linkedin ||
    member.social?.instagram ||
    member.social?.behance ||
    member.social?.github;

  return (
    <div
      className={`cursor-pointer transition-all duration-300 p-3.5 sm:p-4 rounded-2xl border ${isActive
          ? 'bg-gradient-to-r from-sky-50 via-white to-blue-50/70 border-sky-200 shadow-md shadow-sky-500/10 translate-x-2'
          : 'bg-white/40 border-transparent hover:bg-white/80 hover:border-slate-200/60'
        } ${isDimmed ? 'opacity-35' : 'opacity-100'}`}
      onMouseEnter={() => {
        onSelect(member.id);
        onCursorHover?.();
      }}
      onMouseLeave={() => {
        onSelect(null);
        onCursorLeave?.();
      }}
      onClick={() => onSelect(member.id)}
    >
      {/* Name + Indicator + Social Icons */}
      <div className="flex items-center gap-3">
        {/* Expanding Indicator Bar */}
        <span
          className={`h-4 rounded-full flex-shrink-0 transition-all duration-300 ${isActive
              ? 'bg-gradient-to-r from-sky-500 to-blue-600 w-6 shadow-sm shadow-sky-500/30'
              : 'bg-slate-300 w-2'
            }`}
        />

        {/* Member Name */}
        <span
          className={`text-lg sm:text-xl font-bold font-['Plus_Jakarta_Sans'] leading-none tracking-tight transition-colors duration-300 ${isActive ? 'text-[#0b1528]' : 'text-slate-700'
            }`}
        >
          {member.name}
        </span>

        {/* Animated Social Icon Tray */}
        {hasSocial && (
          <div
            className={`flex items-center gap-1.5 ml-auto sm:ml-2 transition-all duration-250 ${isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none'
              }`}
          >
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-blue-100/80 hover:bg-blue-600 text-blue-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="LinkedIn"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            )}

            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-sky-100/80 hover:bg-sky-500 text-sky-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="X / Twitter"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}

            {member.social?.github && (
              <a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-slate-200 hover:bg-slate-900 text-slate-800 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="GitHub"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}

            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-rose-100/80 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-600 text-rose-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="Instagram"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            )}

            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-indigo-100/80 hover:bg-indigo-600 text-indigo-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="Behance"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.075 0-5.625-3.045-5.625-6.059 0-3.329 1.83-6.059 5.625-6.059 3.96 0 5.375 2.87 5.375 5.75 0 .42-.047.88-.095 1.15h-8.084c.05 2.14 1.14 3.32 3.109 3.32 1.33 0 2.29-.63 2.79-1.5zm-5.07-5.08c-.04-1.42-.71-2.42-2.12-2.42-1.39 0-2.13.98-2.22 2.42h4.34zm-11.656 8.08h-7v-16h7.525c3.27 0 4.885 1.48 4.885 4.09 0 1.63-.79 2.83-2.19 3.46 1.87.58 2.78 2.05 2.78 3.97 0 2.78-1.99 4.48-6 4.48zm-4.32-6.79h3.76c1.61 0 2.56-.63 2.56-1.95 0-1.28-.9-1.85-2.45-1.85h-3.87v3.8zm0 5.09h4.09c1.78 0 2.78-.73 2.78-2.19 0-1.43-1.07-2.1-2.88-2.1h-3.99v4.29z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[36px] text-xs font-mono font-bold uppercase tracking-[0.16em] text-slate-500">
        {member.role}
      </p>
    </div>
  );
}
