
import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';

interface GoogleReview {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarText?: string;
}

const googleReviews: GoogleReview[] = [
  {
    id: '1',
    name: 'Shirley M.',
    role: 'Managing Director, Coimbatore',
    rating: 5,
    text: 'It came up so perfect! Our inbound leads doubled in 60 days. The strategy and execution from EcoApps was unmatched.',
    avatarText: 'SM',
  },
  {
    id: '2',
    name: 'Karthik Subramanian',
    role: 'Founder, TexStyle Direct',
    rating: 5,
    text: 'Ranked #1 for 40+ competitive keywords in our export niche. Outstanding SEO & AI optimization team.',
    avatarText: 'KS',
  },
  {
    id: '3',
    name: 'Ananya Sharma',
    role: 'E-commerce Brand Owner',
    rating: 5,
    text: 'Reduced our ad cost per acquisition by 48% while increasing overall monthly sales. Clean data analytics and great reporting.',
    avatarText: 'AS',
  },
  {
    id: '4',
    name: 'David R.',
    role: 'SaaS Founder, CloudScale',
    rating: 5,
    text: 'Conversion rate jumped 44% in just two months. Their technical precision and speed make them an essential partner.',
    avatarText: 'DR',
  },
  {
    id: '5',
    name: 'Praveen Kumar',
    role: 'Director, Apex Industrial',
    rating: 5,
    text: 'High-intent B2B inquiries started flowing steadily within 45 days. Truly modern digital growth experts in Tamil Nadu.',
    avatarText: 'PK',
  },
  {
    id: '6',
    name: 'Sneha Patel',
    role: 'VP Marketing, OmniRetail',
    rating: 5,
    text: 'Seamless website rebuild + automated CRM workflows. The whole customer onboarding journey is now 100% automated.',
    avatarText: 'SP',
  },
  {
    id: '7',
    name: 'Rajesh V.',
    role: 'Healthcare Enterprise Lead',
    rating: 5,
    text: 'Dominating local search map pack across 12 clinic branches. Patient consultation calls increased by over 240%.',
    avatarText: 'RV',
  },
  {
    id: '8',
    name: 'Marcus Vance',
    role: 'Growth Strategist, London',
    rating: 5,
    text: 'World-class clarity and transparency. No vanity metrics — every recommendation is tied directly to revenue growth.',
    avatarText: 'MV',
  },
  {
    id: '9',
    name: 'Meera Nambiar',
    role: 'EdTech Co-Founder',
    rating: 5,
    text: 'The AI search & AEO readiness strategy gave us a massive first-mover advantage against legacy players in our sector.',
    avatarText: 'MN',
  },
  {
    id: '10',
    name: 'Arun Balaji',
    role: 'CEO, Precision Valves Ltd',
    rating: 5,
    text: 'High quality industrial leads with 3.8x ROAS return. The best investment we made for our business this year.',
    avatarText: 'AB',
  },
  {
    id: '11',
    name: 'Divya Krishnan',
    role: 'COO, FreshMart Organics',
    rating: 5,
    text: 'Our paid social ROAS scaled from 1.8x to 4.6x within 90 days. Their creative testing velocity is phenomenal.',
    avatarText: 'DK',
  },
  {
    id: '12',
    name: 'Sanjay Menon',
    role: 'Founder, Nexus Logistics',
    rating: 5,
    text: 'EcoApps automated our lead qualification pipeline. We now convert 35% more enterprise deals with half the manual effort.',
    avatarText: 'SM',
  },
];

const row1Reviews = googleReviews.slice(0, 6);
const row2Reviews = googleReviews.slice(6, 12);

// --- Sub-Component for Auto-Scrolling Horizontal Rows ---
const TestimonialsRow = ({
  className = '',
  testimonials,
  duration = 32,
  reverse = false,
}: {
  className?: string;
  testimonials: GoogleReview[];
  duration?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={`overflow-hidden w-full select-none ${className}`}>
      <motion.ul
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{
          x: reverse ? '0%' : '-50%',
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex gap-5 sm:gap-6 w-max list-none m-0 p-0 py-2"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((review, i) => (
              <motion.li
                key={`${index}-${i}-${review.id}`}
                aria-hidden={index === 1 ? 'true' : 'false'}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow:
                    '0 20px 35px -10px rgba(0, 87, 255, 0.12), 0 8px 16px -6px rgba(11, 21, 40, 0.05), 0 0 0 1.5px rgba(14, 165, 233, 0.35)',
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm w-[330px] sm:w-[380px] shrink-0 bg-white transition-all duration-300 cursor-default select-none group focus:outline-none flex flex-col justify-between"
              >
                <blockquote className="m-0 p-0 flex flex-col justify-between h-full">
                  {/* Top: 5 Stars + Verified Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-1 text-[10.5px] font-['JetBrains_Mono'] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Verified</span>
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-slate-700 text-[14px] leading-relaxed font-normal m-0 mb-5 line-clamp-3">
                    "{review.text}"
                  </p>

                  {/* Author footer */}
                  <footer className="flex items-center gap-3 pt-3.5 border-t border-slate-100 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white font-['Plus_Jakarta_Sans'] font-bold text-xs flex items-center justify-center shrink-0 shadow-xs ring-2 ring-sky-100">
                      {review.avatarText}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <cite className="font-['Plus_Jakarta_Sans'] font-bold not-italic text-[13.5px] text-[#0b1528] truncate">
                        {review.name}
                      </cite>
                      <span className="text-[11.5px] font-['Manrope'] text-slate-500 truncate mt-0.5">
                        {review.role}
                      </span>
                    </div>
                    <div className="ml-auto flex items-center shrink-0 pl-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <title>Google Review</title>
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export default function GoogleReviewsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="google-reviews-section bg-white py-20 md:py-28 relative overflow-hidden border-b border-slate-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="max-w-[1520px] px-4 sm:px-6 md:px-8 z-10 mx-auto"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center max-w-[620px] mx-auto mb-12 md:mb-14 text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 border border-sky-200/90 py-1.5 px-4 rounded-full text-xs font-['JetBrains_Mono'] font-bold tracking-wider uppercase text-sky-700 bg-sky-50 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>Verified Google Reviews</span>
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="section-title-reveal text-3xl sm:text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-extrabold tracking-tight text-[#0b1528]"
          >
            What our clients say
          </h2>

          <p className="mt-4 text-slate-600 font-['Manrope'] text-base sm:text-lg leading-relaxed max-w-lg">
            Discover how ambitious founders and leading brands accelerate growth and revenue with EcoApps.
          </p>

          <div className="flex items-center justify-center gap-2 text-amber-500 mt-5 bg-slate-50 px-4 py-2 rounded-full border border-slate-200/80">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-sm text-slate-800 ml-1">
              4.9 / 5.0
            </span>
            <span className="text-xs font-['Manrope'] text-slate-500 font-medium">
              (100+ Verified Ratings)
            </span>
          </div>
        </div>

        {/* 2-Row Dual-Direction Horizontal Scrolling Marquee with Edge Fades */}
        <div
          className="relative flex flex-col gap-4 sm:gap-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          {/* Row 1: Right to Left */}
          <TestimonialsRow testimonials={row1Reviews} duration={36} reverse={false} />

          {/* Row 2: Left to Right (Opposite Direction) */}
          <TestimonialsRow testimonials={row2Reviews} duration={36} reverse={true} />
        </div>
      </motion.div>
    </section>
  );
}
