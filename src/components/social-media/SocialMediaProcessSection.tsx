import React from 'react';

interface SocialMediaProcessSectionProps {
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
    label: '01. UNDERSTAND',
    title: '01. Understand Your Brand',
    description: 'We learn about your business, products or services, target customers, competitors, and unique value proposition.',
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
    label: '02. AUDIENCE',
    title: '02. Define Your Audience',
    description: 'We identify the audience segments most relevant to your business and understand their interests, needs, behaviour, and buying journey.',
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
    title: '03. Build Your Strategy',
    description: 'We develop your content pillars, platform strategy, creative direction, messaging, posting themes, and campaign ideas.',
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
    label: '04. CREATE',
    title: '04. Create & Publish',
    description: 'We create engaging content and maintain a consistent publishing schedule across the platforms relevant to your business.',
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
    label: '05. ENGAGE',
    title: '05. Engage & Optimise',
    description: 'We monitor audience engagement and content performance to understand what resonates with your target audience.',
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
    label: '06. MEASURE',
    title: '06. Measure & Improve',
    description: 'We track important performance metrics and continuously refine the strategy to improve reach, engagement, traffic, leads, and conversions.',
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

export default function SocialMediaProcessSection({ onHover, onLeave }: SocialMediaProcessSectionProps) {
  return (
    <section className="seo-process-section" id="process">
      <div className="seo-container">
        {/* Section Header */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Our Social Media Marketing Process</span>
          </div>
          <h2 className="seo-section-title">Our Social Media Marketing Process</h2>
          <p className="seo-section-subtitle">
            A structured approach to building and managing your social media presence for consistent growth and engagement.
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
