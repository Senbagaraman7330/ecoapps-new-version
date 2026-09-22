import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface ServiceCategory {
  number: string;
  title: string;
  description: string;
  items: { name: string; href?: string }[];
  accent: string;
  bg: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    number: '01',
    title: 'Digital Marketing',
    description:
      'We create marketing strategies that increase visibility, generate qualified leads, and drive measurable growth.',
    items: [
      { name: 'SEO & AI SEO Services', href: '/seo-service' },
      { name: 'Social Media Marketing', href: '/social-media-marketing' },
      { name: 'Ecommerce Marketing', href: '/ecommerce-marketing' },
      { name: 'B2B Marketing', href: '/b2b-marketing' },
    ],
    accent: '#0284c7',
    bg: 'bg-sky-50/60',
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'We build digital solutions that simplify operations, improve experiences, and support scalable growth.',
    items: [
      { name: 'Website Development', href: '/website-development' },
      { name: 'Mobile App Development', href: '/mobile-app-development' },
      { name: 'Custom Software Development', href: '/custom-software-development' },
    ],
    accent: '#2563eb',
    bg: 'bg-blue-50/60',
  },
  {
    number: '04',
    title: 'Video Production',
    description:
      'We create high-impact videos that tell your story, capture attention, and strengthen your brand presence.',
    items: [
      { name: 'Brand Videos', href: '/brand-videos' },
      { name: 'Social Media Videos', href: '/social-media-videos' },
      { name: 'Product & Corporate  Videos', href: '/product-videos' },
      { name: 'Reels & Short-Form Content', href: '/reels-short-form-content' },
      { name: 'Promotional Videos', href: '/promotional-videos' },
    ],
    accent: '#7c3aed',
    bg: 'bg-violet-50/60',
  },
];

const industriesRow1 = [
  'Real Estate',
  'Education & EdTech',
  'Manufacturing',
  'Retail & D2C',
  'Construction & Interiors',
  'Healthcare & Clinics',
  'E-Commerce Brands',
  'Hospitality & Dining',
];

interface ServiceBandsStickyProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ServiceBandsSticky({ onHover, onLeave }: ServiceBandsStickyProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="services-section bg-white border-b border-slate-200" id="services">
      {/* ── Services Introduction Header ── */}
      <div className="px-6 md:px-14 pt-14 md:pt-20 pb-6 md:pb-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-wider mb-4 uppercase">
            <span>Services Introduction</span>
          </div>
          <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-[clamp(26px,3.5vw,46px)] leading-[1.12] tracking-tight text-[#0b1528] mb-3">
            Everything Your Business Needs to Grow Digitally
          </h2>
          <p className="font-['Manrope'] text-[14.5px] sm:text-[16.5px] leading-[1.7] text-slate-600 max-w-3xl">
            From visibility and traffic to leads, sales and automation, our services are designed to
            work together rather than operate as disconnected activities.
          </p>
        </div>
      </div>

      {/* ── Services List ── */}
      <div className="px-6 md:px-14 max-w-7xl mx-auto pb-14 md:pb-16">
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
          {serviceCategories.map((category, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={category.number}>
                {/* ── Desktop Row ── */}
                <div
                  className="hidden md:grid py-14 grid-cols-12 gap-8 items-start group hover:bg-slate-50/60 transition-colors duration-200 -mx-4 px-4 rounded-2xl"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  {/* Number + Title */}
                  <div className="col-span-4 flex items-baseline gap-3">
                    {/* <span className="font-['JetBrains_Mono'] text-sm font-bold text-sky-600 tracking-wider">
                      ({category.number})
                    </span> */}
                    <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl text-[#0b1528] tracking-tight group-hover:text-[#0057ff] transition-colors">
                      {category.title} <span className="text-slate-300 font-light">—</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-4">
                    <p className="font-['Manrope'] text-[15px] leading-relaxed text-slate-600 font-medium">
                      {category.description}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="col-span-4 flex flex-col gap-2">
                    {category.items.map((item, itemIdx) => {
                      const isLink = Boolean(item.href);
                      const content = (
                        <div className="flex items-center justify-between text-[14.5px] font-['Manrope'] font-semibold text-slate-700 group-hover/item:text-[#0057ff] transition-colors py-0.5">
                          <span>{item.name}</span>
                          {isLink && (
                            <ArrowUpRight className="w-3.5 h-3.5 text-sky-600 opacity-80 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform" />
                          )}
                        </div>
                      );
                      return isLink ? (
                        <Link key={itemIdx} to={item.href!} className="group/item cursor-pointer block">
                          {content}
                        </Link>
                      ) : (
                        <div key={itemIdx} className="group/item">
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ── Mobile Accordion Row ── */}
                <div className="md:hidden">
                  {/* Accordion Header */}
                  <button
                    className={`w-full text-left py-5 flex items-center gap-4 transition-colors duration-200 ${isOpen ? 'pb-3' : ''
                      }`}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    {/* Accent dot + number */}
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-['JetBrains_Mono'] text-[10px] font-bold tracking-wider"
                      style={{ background: category.accent }}
                    >
                      {category.number}
                    </span>

                    {/* Title */}
                    <h3 className="flex-1 font-['Plus_Jakarta_Sans'] font-extrabold text-[19px] text-[#0b1528] tracking-tight leading-snug">
                      {category.title}
                    </h3>

                    {/* Chevron */}
                    <span
                      className="shrink-0 w-7 h-7 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center transition-transform duration-300"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </span>
                  </button>

                  {/* Description — always visible */}
                  <p className="font-['Manrope'] text-[13.5px] leading-relaxed text-slate-500 mb-3 -mt-1 pr-2">
                    {category.description}
                  </p>

                  {/* Accordion Body — service items only */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className={`rounded-2xl mb-3 px-4 py-4 ${category.bg} border border-slate-200/80`}>

                      {/* Service items */}
                      <ul className="flex flex-col gap-2.5">
                        {category.items.map((item, itemIdx) => {
                          const isLink = Boolean(item.href);
                          const content = (
                            <div className="flex items-center justify-between text-[13.5px] font-['Manrope'] font-semibold text-slate-700 py-0.5">
                              <span className="flex items-center gap-2.5">
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ background: category.accent }}
                                />
                                {item.name}
                              </span>
                              {isLink && (
                                <ArrowUpRight
                                  className="w-3.5 h-3.5 opacity-70 shrink-0"
                                  style={{ color: category.accent }}
                                />
                              )}
                            </div>
                          );
                          return isLink ? (
                            <li key={itemIdx}>
                              <Link to={item.href!} className="block">
                                {content}
                              </Link>
                            </li>
                          ) : (
                            <li key={itemIdx}>{content}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Industries Ticker (2 Rows: Dual-Direction Infinite Loop with Edge Fade Mask) ── */}
      <div className="bg-slate-50 py-10 md:py-12 border-t border-slate-200 overflow-hidden relative select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-14 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-[0.2em] text-[#0b1528]">
              INDUSTRIES WE SERVE
            </span>
          </div>
          <span className="text-xs font-['Manrope'] font-medium text-slate-400 hidden sm:inline-block">
            Tailored growth frameworks across key sectors
          </span>
        </div>

        {/* Viewport with true alpha mask fade for disappearing cards at edges */}
        <div className="w-full flex flex-col gap-3 md:gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_93%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_7%,black_93%,transparent_100%)]">
          {/* Row 1: Right-to-Left */}
          <div className="flex gap-4 md:gap-6 overflow-hidden w-full py-1">
            <div className="flex gap-4 md:gap-6 shrink-0 items-center animate-marquee-reverse">
              {industriesRow1.concat(industriesRow1).map((industry, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex items-center px-4 md:px-6 py-2.5 md:py-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#0057ff] hover:shadow-xs transition-all duration-200 cursor-default"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] md:text-[15px] text-slate-800 whitespace-nowrap">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 shrink-0 items-center animate-marquee-reverse" aria-hidden="true">
              {industriesRow1.concat(industriesRow1).map((industry, i) => (
                <div
                  key={`r1-dup-${i}`}
                  className="flex items-center px-4 md:px-6 py-2.5 md:py-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#0057ff] hover:shadow-xs transition-all duration-200 cursor-default"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] md:text-[15px] text-slate-800 whitespace-nowrap">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
