import React from 'react';

interface CustomSoftwareProcessSectionProps {
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
    title: '01. Understand Your Business',
    description:
      'We start by understanding your business model, workflows, challenges, users, and software requirements.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    num: '02',
    label: '02. ANALYSE & PLAN',
    title: '02. Analyse & Plan',
    description:
      'We identify the key processes, features, integrations, user roles, and technical requirements needed for your solution.',
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
    title: '03. Design the Solution',
    description:
      'We create the software structure and user experience with a focus on usability, efficiency, and scalability.',
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
    title: '04. Develop the Software',
    description:
      'Our development team builds the solution according to the approved requirements, architecture, and functionality.',
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
    title: '05. Test & Optimise',
    description:
      'We test the software for functionality, usability, security, performance, and different user scenarios.',
    colorClass: 'fc-mint',
    numColor: 'text-[#0284c7]',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: '06',
    label: '06. DEPLOY',
    title: '06. Deploy & Support',
    description:
      'Once the solution is ready, we help deploy it and provide ongoing support, maintenance, and improvements as required.',
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

export default function CustomSoftwareProcessSection({
  onHover,
  onLeave,
}: CustomSoftwareProcessSectionProps) {
  return (
    <section className="seo-process-section" id="process">
      <div className="seo-container">
        {/* Section Header */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Our Development Lifecycle</span>
          </div>
          <h2 className="seo-section-title">Our Custom Software Development Process</h2>
          <p className="seo-section-subtitle">
            A structured, reliable 6-phase engineering lifecycle to deliver robust, scalable software tailored to your workflows.
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
