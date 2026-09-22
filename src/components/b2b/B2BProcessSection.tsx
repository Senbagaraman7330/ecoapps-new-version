import React from 'react';

interface B2BProcessSectionProps {
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

const B2B_PROCESS_STEPS: ProcessCardItem[] = [
  {
    num: '01',
    label: '01. AUDIT',
    title: '01. B2B Market & Account Audit',
    description:
      'We analyse your current lead sources, sales pipeline, target customer profiles (ICPs), competitors, and digital presence to uncover growth bottlenecks.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
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
    label: '02. TARGETING',
    title: '02. ICP & Account Targeting',
    description:
      'We identify your ideal customer profiles, key buying committee stakeholders, C-suite decision-makers, and high-intent enterprise account lists.',
    colorClass: 'fc-yellow',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: '03',
    label: '03. POSITIONING',
    title: '03. Content & Value Positioning',
    description:
      'We craft authoritative B2B content, whitepapers, executive guides, and messaging tailored to technical evaluators and commercial buyers.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
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
    label: '04. MULTI-CHANNEL',
    title: '04. Multi-Channel Execution',
    description:
      'We launch and manage coordinated campaigns across LinkedIn Ads, high-intent Google Search, ABM platforms, and targeted executive outreach.',
    colorClass: 'fc-teal',
    numColor: 'text-[#0d9488]',
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
    label: '05. LEAD CAPTURE',
    title: '05. Lead Capture & Pipeline Nurturing',
    description:
      'We build high-converting landing pages, interactive demo booking funnels, and automated CRM nurture flows to accelerate buyer evaluation.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    num: '06',
    label: '06. SCALE',
    title: '06. Pipeline Velocity & Scaling',
    description:
      'We continuously analyse sales metrics, shorten sales cycles, lower customer acquisition costs (CAC), and scale highest-performing revenue channels.',
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

export default function B2BProcessSection({ onHover, onLeave }: B2BProcessSectionProps) {
  return (
    <section className="seo-process-section" id="b2b-process">
      <div className="seo-container">
        {/* Section Header */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Our B2B Marketing Strategy</span>
          </div>
          <h2 className="seo-section-title">Our B2B Marketing Strategy</h2>
          <p className="seo-section-subtitle">
            A proven 6-stage framework designed to engage enterprise decision-makers, build institutional trust, and drive predictable pipeline growth.
          </p>
        </div>

        {/* 6 Process Cards Grid matching Features Module Design */}
        <div className="feature-cards seo-process-grid relative z-10">
          {B2B_PROCESS_STEPS.map((step, i) => (
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
