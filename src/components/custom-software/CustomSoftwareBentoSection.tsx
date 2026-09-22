import React, { useState } from 'react';
import '../seo/SeoBentoSection.css';

interface CustomSoftwareBentoSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

interface ServiceItem {
  id: string;
  name: string;
  d: string;
  icon: React.ReactNode;
}

const SOFTWARE_SERVICES: ServiceItem[] = [
  {
    id: 'business-software',
    name: 'Business Software',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'custom-crm',
    name: 'Custom CRM Solutions',
    d: 'M 500 0 C 500 36, 300 24, 300 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'erp-software',
    name: 'ERP & Management',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'industry-software',
    name: 'Industry-Specific Tech',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'workflow-auto',
    name: 'Workflow Automation',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function CustomSoftwareBentoSection({
  onHover,
  onLeave,
}: CustomSoftwareBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section id="bento-architecture" className="bento" aria-label="Custom Software Development Architecture">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            Custom Software Architecture
          </div>
          <h2 className="bento-title">Software Built Around Your Business</h2>
          <div className="bento-subtitle-group">
            <p className="bento-subtitle">
              At Eco Apps Solutions, we develop custom software solutions tailored to your business processes, operational requirements, users, and long-term goals.
            </p>
            <p className="bento-subtitle bento-subtitle--second">
              From business management systems to industry-specific applications, we build software that helps businesses automate processes, improve efficiency, manage operations, and scale with confidence.
            </p>
          </div>
        </header>

        <div className="bento-grid">
          {/* Cell 1 (Wide): Connect Diagram with all 5 software modules aligned */}
          <article
            className="cell cell--wide"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="viz viz--solid viz--connect">
              <div className="connect-diagram" aria-hidden="true">
                <span className="connect-markwrap">
                  <svg className="connect-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>

                <svg className="connect-drop" viewBox="0 0 2 40" width="2" height="40">
                  <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
                  <line className="c-pulse c-pulse--drop" x1="1" y1="0" x2="1" y2="40" pathLength="100" />
                </svg>

                <span className="connect-node">EcoApps Custom Software Platform</span>

                {/* 5-Branch Laser Fan connecting into each service */}
                <svg className="connect-fan" viewBox="0 0 1000 60" style={{ height: '60px' }}>
                  {SOFTWARE_SERVICES.map((service, i) => (
                    <path
                      key={`line-${i}`}
                      className="c-line"
                      d={service.d}
                      style={{
                        stroke: hoveredChip === i ? 'var(--vessa-accent)' : 'var(--m-border)',
                        strokeWidth: hoveredChip === i ? '1.8px' : '1px',
                        transition: 'stroke 0.2s, stroke-width 0.2s',
                      }}
                    />
                  ))}
                  {SOFTWARE_SERVICES.map((service, i) => (
                    <path
                      key={`pulse-${i}`}
                      className="c-pulse c-pulse--fan"
                      d={service.d}
                      pathLength="100"
                      style={{
                        stroke: hoveredChip === i ? '#0284c7' : 'var(--vessa-accent)',
                        strokeWidth: hoveredChip === i ? '3.2px' : '2.2px',
                        animationDuration: hoveredChip === i ? '0.85s' : '2.2s',
                      }}
                    />
                  ))}
                </svg>

                {/* The 5 Software Areas in a single clean row */}
                <ul className="connect-clients">
                  {SOFTWARE_SERVICES.map((service, i) => (
                    <li
                      key={service.id}
                      className={`client-chip ${hoveredChip === i ? 'is-hovered' : ''}`}
                      onMouseEnter={() => {
                        setHoveredChip(i);
                        onHover?.();
                      }}
                      onMouseLeave={() => {
                        setHoveredChip(null);
                        onLeave?.();
                      }}
                    >
                      {service.icon} {service.name}
                    </li>
                  ))}
                </ul>

                <p className="connect-any">
                  Process management, employee management, CRM, ERP, and industry-specific workflows
                </p>
              </div>
            </div>

            {/* Service 1: Business Software Development */}
            <div className="cell-copy">
              <h3 className="cell-title">Business Software Development</h3>
              <p className="cell-body">
                Streamline your day-to-day business operations with software designed specifically for your organisation. We develop solutions for process management, employee management, customer management, reporting, workflow automation, and internal operations.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): Custom CRM Software */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Custom CRM Software</h3>
              <p className="cell-body">
                Manage your customer relationships and sales activities from one centralised system. Custom CRM solutions help you manage customer information, leads, follow-ups, sales pipelines, communication, and reporting.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): ERP & Business Management Software */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">ERP &amp; Business Management Software</h3>
              <p className="cell-body">
                Bring important business operations together through a customised management system connecting sales, inventory, finance, employees, customers, operations, and real-time reporting.
              </p>
            </div>
          </article>

          {/* Cell 4 (Left): Industry-Specific Software */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Industry-Specific Software</h3>
              <p className="cell-body">
                We develop software based on your specific workflows, users, compliance requirements, and business processes across education, healthcare, retail, logistics, finance, manufacturing, and services.
              </p>
            </div>
          </article>

          {/* Cell 5 (Right): Workflow Automation & Security Scanner */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Workflow Automation &amp; Centralized Control</h3>
              <p className="cell-body">
                Eliminate manual data entry, automate repetitive multi-step processes, and gain clear reporting with software engineered to scale with your team.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
