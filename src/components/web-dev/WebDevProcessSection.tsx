import React from 'react';

interface WebDevProcessSectionProps {
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
    title: '01. Understand',
    description:
      'We understand your business, target audience, requirements, goals, and website objectives.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    num: '02',
    label: '02. PLAN',
    title: '02. Plan',
    description:
      'We define the website structure, pages, features, content requirements, and user journey.',
    colorClass: 'fc-yellow',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: '03',
    label: '03. DESIGN',
    title: '03. Design',
    description:
      'We create a modern and responsive design that reflects your brand and provides a smooth user experience.',
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
    label: '04. DEVELOP',
    title: '04. Develop',
    description:
      'Our development team builds the website according to the approved design and required functionality.',
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
    label: '05. TEST',
    title: '05. Test',
    description:
      'We test the website across devices and screen sizes to ensure that the pages, forms, navigation, and features work correctly.',
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
    label: '06. LAUNCH',
    title: '06. Launch',
    description:
      'Once everything is reviewed and approved, we make your website ready for launch and help you move forward with your digital presence.',
    colorClass: 'fc-yellow',
    numColor: 'text-[#2563eb]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function WebDevProcessSection({
  onHover,
  onLeave,
}: WebDevProcessSectionProps) {
  return (
    <section className="seo-process-section" id="process">
      <div className="seo-container">
        {/* Section Header matching SeoProcessSection */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Our Website Development Process</span>
          </div>
          <h2 className="seo-section-title">Our Website Development Process</h2>
          <p className="seo-section-subtitle">
            A proven, transparent, 6-step development process engineered to build high-performance websites from concept to launch.
          </p>
        </div>

        {/* 6 Process Cards Grid matching SeoProcessSection */}
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
