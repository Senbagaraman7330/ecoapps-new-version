import React from 'react';

interface EcommerceProcessSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

interface ProcessCardItem {
  num: string;
  label: string;
  title: string;
  description: string;
  colorClass: string;
  numColor: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessCardItem[] = [
  {
    num: '01',
    label: '01. AUDIT',
    title: '01. Ecommerce Audit',
    description:
      'We analyse your website, products, competitors, traffic sources, customer journey, existing campaigns, and current marketing performance.',
    colorClass: 'fc-blue',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    num: '02',
    label: '02. RESEARCH',
    title: '02. Customer & Market Research',
    description:
      'We identify your target customers, search behaviour, buying intent, competitors, and opportunities within your market.',
    colorClass: 'fc-yellow',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: '03',
    label: '03. ROADMAP',
    title: '03. Growth Strategy',
    description:
      'We create a customised marketing roadmap covering the right combination of SEO, paid ads, social media, content, and conversion optimisation.',
    colorClass: 'fc-purple',
    numColor: 'text-[#4f46e5]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    num: '04',
    label: '04. EXECUTE',
    title: '04. Campaign & Content Execution',
    description:
      'We implement the strategy through campaigns, content, product promotions, audience targeting, and website optimisation.',
    colorClass: 'fc-cyan',
    numColor: 'text-[#0284c7]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    num: '05',
    label: '05. OPTIMISE',
    title: '05. Track & Optimise',
    description:
      'We monitor important metrics such as traffic, conversions, cost per acquisition, conversion rate, revenue, and campaign performance.',
    colorClass: 'fc-blue',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    num: '06',
    label: '06. SCALE',
    title: '06. Scale Your Growth',
    description:
      'Once we identify what works, we focus on improving performance and scaling the channels and campaigns that create meaningful business results.',
    colorClass: 'fc-yellow',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function EcommerceProcessSection({ onHover, onLeave }: EcommerceProcessSectionProps) {
  return (
    <section className="seo-process-section" id="ecommerce-process">
      <div className="seo-container">
        {/* Section Header */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Our Ecommerce Marketing Strategy</span>
          </div>
          <h2 className="seo-section-title">Our Ecommerce Marketing Strategy</h2>
          <p className="seo-section-subtitle">
            A tested 6-stage framework designed to take your online store from discovery and conversion to predictable scaling.
          </p>
        </div>

        {/* 6 Process Cards Grid matching Features Module Design */}
        <div className="feature-cards seo-process-grid relative z-10">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`feature-card ${step.colorClass} cursor-pointer flex flex-col`}
              data-fc-index={i}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[15.5px] sm:text-[17px] leading-[1.25] tracking-tight text-[#0b1528] mb-1.5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-['Manrope'] text-[12.5px] sm:text-[13.5px] leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
