import React from 'react';

interface SeoProcessSectionProps {
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
    title: '01. Website & SEO Audit',
    description: 'We analyse your website, technical health, content, rankings, competitors, and current search visibility.',
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
    label: '02. RESEARCH',
    title: '02. Keyword & Search Intent Research',
    description: 'We identify the keywords and questions that matter most to your customers and business.',
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
    label: '03. STRATEGY',
    title: '03. Strategy Development',
    description: 'We create a customised SEO roadmap based on your goals, competition, and growth opportunities.',
    colorClass: 'fc-purple',
    numColor: 'text-[#4f46e5]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    label: '04. OPTIMISATION',
    title: '04. Optimisation & Content',
    description: 'We improve your website structure, technical elements, content, and relevant off-page signals.',
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
    label: '05. AI SEARCH',
    title: '05. AI Search Optimisation',
    description: 'We structure content and brand information to improve its relevance and accessibility for AI-driven search experiences.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    num: '06',
    label: '06. MONITOR',
    title: '06. Monitor & Improve',
    description: 'We track performance, identify new opportunities, and continuously optimise the strategy.',
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

export default function SeoProcessSection({ onHover, onLeave }: SeoProcessSectionProps) {
  return (
    <section className="seo-process-section" id="process">
      <div className="seo-container">
        {/* Section Header */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Our SEO Process</span>
          </div>
          <h2 className="seo-section-title">Our SEO Process</h2>
          <p className="seo-section-subtitle">
            A customised strategy built around your goals, industry, competitors, and growth opportunities.
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

