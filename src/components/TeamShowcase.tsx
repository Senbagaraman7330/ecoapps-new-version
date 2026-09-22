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
    linkedin?: string;
  };
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Faizankhan Z',
    role: 'Business Development Manager',
    image: faizanImg,
    social: { linkedin: 'https://linkedin.com' },
  },
  {
    id: '2',
    name: 'Muhammad Arshad K',
    role: 'Web Development Lead',
    image: arshadImg,
    social: { linkedin: 'https://linkedin.com' },
  },
  {
    id: '3',
    name: 'Vimalsiva A',
    role: 'Performance & Growth Marketer',
    image: vimalsivaImg,
    social: { linkedin: 'https://linkedin.com' },
  },
  {
    id: '4',
    name: 'Fazil',
    role: 'Creative Head',
    image: fazilImg,
    social: { linkedin: 'https://linkedin.com' },
  },
  {
    id: '5',
    name: 'Fajrulrahman',
    role: 'Senior Web Developer',
    image: fajrulrahmanImg,
    social: { linkedin: 'https://linkedin.com' },
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
  return (
    <section className="relative px-4 sm:px-6 md:px-14 py-20 sm:py-28 md:py-36 bg-gradient-to-b from-white via-sky-50/40 to-slate-50/60 border-b border-slate-200 overflow-hidden" id="team">

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
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/80 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-4 sm:mb-5 shadow-sm shadow-sky-500/5">
          <span>Our Team</span>
        </div>

        <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(30px,4.2vw,56px)] leading-[1.1] sm:leading-[1.08] tracking-[-0.035em] text-[#0b1528] mb-4 sm:mb-5">
          The People Behind the Growth
        </h2>

        <p className="font-['Manrope'] text-[15px] sm:text-[17px] md:text-[18px] leading-relaxed text-slate-600 max-w-3xl mx-auto">
          Our team brings together business development, performance marketing, web development, WordPress development, and video production expertise. Together, we work towards one goal - building better digital solutions that help businesses grow.
        </p>
      </div>

      {/* ── 3-Column Card Layout Matching Reference ── */}
      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7 md:gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-[26px] sm:rounded-[30px] md:rounded-[34px] bg-slate-900 aspect-[3.3/4] sm:aspect-[3.2/4] min-h-[380px] sm:min-h-[420px] md:min-h-[460px] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-[380px] border border-slate-200/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-end cursor-pointer"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {/* Member Photo Background */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Vignette for Bottom Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Bottom Content: Name, Role & LinkedIn */}
              <div className="relative z-10 p-6 sm:p-7 text-left flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-[22px] font-extrabold font-['Plus_Jakarta_Sans'] text-white leading-tight tracking-tight drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-['Manrope'] text-white/90 font-medium mt-1 drop-shadow-sm">
                    {member.role}
                  </p>
                </div>

                {member.social?.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-8 h-8 shrink-0 rounded-full bg-white/20 backdrop-blur-md hover:bg-[#0057ff] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm opacity-90 group-hover:opacity-100"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
