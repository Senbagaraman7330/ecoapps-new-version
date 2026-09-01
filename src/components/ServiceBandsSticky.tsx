import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Service Videos
import video01 from '../assets/services video/Digital_marketing_showcase_video_1080p_202609011048.mp4';
import video02 from '../assets/services video/Performance_advertising_showcase…_1080p_202609011050.mp4';
import video03 from '../assets/services video/SEO_and_AI_SEO_video_202609011053.mp4';
import video04 from '../assets/services video/Social_media_growth_showcase_video_202609011102.mp4';
import video05 from '../assets/services video/Responsive_website_technology_sh…_1080p_202609011048.mp4';
import video06 from '../assets/services video/Ecommerce_website_growth_showcas…_1080p_202609011106.mp4';
import video07 from '../assets/services video/Marketing_automation_showcase_video_1080p_202609011108.mp4';
import video08 from '../assets/services video/Custom_technology_solutions_vide…_1080p_202609011114.mp4';

gsap.registerPlugin(ScrollTrigger);

export interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  bg: string;
  text: string;
  video: string;
}

export const servicesList: ServiceItem[] = [
  {
    num: '01',
    title: 'Digital Marketing',
    subtitle: 'Explore Digital Marketing',
    bg: 'bg-[#6099c4]',
    text: 'text-white',
    video: video01,
  },
  {
    num: '02',
    title: 'Performance Advertising',
    subtitle: 'Explore Performance Ads',
    bg: 'bg-[#111111]',
    text: 'text-white',
    video: video02,
  },
  {
    num: '03',
    title: 'SEO & AI SEO',
    subtitle: 'Explore AI Search & SEO',
    bg: 'bg-[#eb5a28]',
    text: 'text-white',
    video: video03,
  },
  {
    num: '04',
    title: 'Social Media Growth',
    subtitle: 'Explore Social Media',
    bg: 'bg-[#5e2ae6]',
    text: 'text-white',
    video: video04,
  },
  {
    num: '05',
    title: 'Website Development',
    subtitle: 'Explore Web Development',
    bg: 'bg-[#0f1422]',
    text: 'text-white',
    video: video05,
  },
  {
    num: '06',
    title: 'Ecommerce Growth',
    subtitle: 'Explore Ecommerce',
    bg: 'bg-[#eb5a28]',
    text: 'text-white',
    video: video06,
  },
  {
    num: '07',
    title: 'Marketing Automation',
    subtitle: 'Explore Automation',
    bg: 'bg-[#147b74]',
    text: 'text-white',
    video: video07,
  },
  {
    num: '08',
    title: 'Custom Technology',
    subtitle: 'Explore Custom Tech',
    bg: 'bg-[#0c1a25]',
    text: 'text-white',
    video: video08,
  },
];

interface ServiceBandsStickyProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ServiceBandsSticky({ onHover, onLeave }: ServiceBandsStickyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || !cards.length) return;

    const ctx = gsap.context(() => {
      // Set initial positions: first card active at top, all subsequent cards below the screen
      gsap.set(cards[0], { yPercent: 0, scale: 1, filter: 'brightness(1)' });
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { yPercent: 100, scale: 1, filter: 'brightness(1)' });
      }

      // Master scrubbing timeline pinned across scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${cards.length * 1000}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, idx) => {
        if (idx === 0) return;

        const label = `card-${idx}`;

        // 1. Current card slides up from below to cover the stack
        tl.to(
          card,
          {
            yPercent: 0,
            ease: 'none',
            duration: 1,
          },
          label
        );

        // 2. All previous cards scale down and dim into the background stack
        for (let prevIdx = 0; prevIdx < idx; prevIdx++) {
          const depth = idx - prevIdx;
          const targetScale = Math.max(0.86, 1 - depth * 0.04);
          const targetBrightness = Math.max(0.45, 1 - depth * 0.15);
          const targetY = -depth * 18;

          tl.to(
            cards[prevIdx],
            {
              scale: targetScale,
              y: targetY,
              filter: `brightness(${targetBrightness})`,
              ease: 'none',
              duration: 1,
            },
            label
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Services Introduction */}
      <section className="px-6 md:px-14 py-24 md:py-32 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-wider mb-6 uppercase">
            <span>Services Introduction</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#0b1528] leading-[1.1] tracking-tight mb-6">
            Everything Your Business Needs to Grow Digitally
          </h2>
          <p className="font-['Manrope'] text-[16px] md:text-[18px] leading-[1.75] text-slate-600 max-w-3xl mx-auto">
            From visibility and traffic to leads, sales and automation, our services are designed to work together rather than operate as disconnected activities.
          </p>
          <p className="font-['Manrope'] text-[15px] md:text-[16px] leading-[1.7] text-slate-500 max-w-2xl mx-auto mt-4">
            Our capabilities cover digital marketing, performance advertising, SEO, AI SEO, social media, website development, ecommerce growth, automation and custom technology.
          </p>
        </div>
      </section>

      {/* Pinned Sticky Stacking Cards */}
      <section
        ref={containerRef}
        id="services"
        className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]"
      >
        {servicesList.map((svc, idx) => (
          <div
            key={idx}
            ref={(el) => {
              if (el) cardsRef.current[idx] = el;
            }}
            className={`absolute inset-0 w-full h-full flex flex-col justify-between py-8 md:py-12 px-6 md:px-14 ${svc.bg} ${svc.text} ${idx > 0
              ? 'rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-white/20 shadow-[0_-30px_70px_rgba(0,0,0,0.45)]'
              : ''
              } overflow-hidden group select-none origin-top will-change-transform`}
            style={{ zIndex: idx + 1 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            {/* Top meta navigation bar */}
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[13px] md:text-[14px] font-bold tracking-tight text-white/90 z-20 pt-2 pb-2">
              <span className="font-mono text-sm md:text-base font-semibold">
                ({svc.num})
              </span>
              <span className="cursor-pointer font-['Manrope'] tracking-normal hover:underline underline-offset-4 transition-all text-white/95 text-sm md:text-base font-medium">
                {svc.subtitle}
              </span>
            </div>

            {/* Top & Center Content: Title at Top + Video Showcase Below */}
            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col items-center justify-start pt-2 md:pt-4 lg:pt-5 z-10">
              {/* Title Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center w-full leading-[1.05] text-white mb-3 md:mb-5 transform transition-transform group-hover:scale-[1.02] duration-500 ease-out">
                {svc.title}
              </h2>

              {/* Video Showcase Frame matching exact 16:9 video ratio with zero cropping */}
              <div className="relative w-full max-w-[460px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.65)] border border-white/15 bg-black/50 aspect-video max-h-[52vh] flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.015] rounded-2xl">
                <video
                  src={svc.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Bottom indicator bar */}
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white/85 transition-colors z-20 pb-4 md:pb-6">
              <span>EcoApps &bull; Creative Suite</span>
              <span className="font-mono">
                {svc.num} / 0{servicesList.length}
              </span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
