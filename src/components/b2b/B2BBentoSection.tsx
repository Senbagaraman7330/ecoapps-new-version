import React, { useState } from 'react';
import '../seo/SeoBentoSection.css';

interface B2BBentoSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

interface ServiceItem {
  id: string;
  name: string;
  d: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'abm',
    name: 'Account-Based Marketing',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    name: 'LinkedIn Outreach',
    d: 'M 500 0 C 500 36, 300 24, 300 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    id: 'b2b-seo',
    name: 'High-Intent SEO',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    )
  },
  {
    id: 'lead-gen',
    name: 'Qualified Lead Gen',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 'crm',
    name: 'CRM Alignment',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  }
];

export default function B2BBentoSection({ onHover, onLeave }: B2BBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper" id="b2b-growth-engine">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section className="bento" aria-label="B2B Marketing Services">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            The Enterprise Engine
          </div>
          <h2 className="bento-title">The B2B Growth Engine</h2>
          <div className="bento-subtitle-group">
            <p className="bento-subtitle">
              A synchronized architecture connecting account identification, decision-maker reach, and sales enablement into compounding contract revenue.
            </p>
          </div>
        </header>

        <div className="bento-grid">
          {/* Cell 1 (Wide): Connect Diagram */}
          <article 
            className="cell cell--wide"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="viz viz--solid viz--connect">
              <div className="connect-diagram" aria-hidden="true">
                <span className="connect-markwrap">
                  <svg className="connect-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>

                <svg className="connect-drop" viewBox="0 0 2 40" width="2" height="40">
                  <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
                  <line className="c-pulse c-pulse--drop" x1="1" y1="0" x2="1" y2="40" pathLength="100" />
                </svg>

                {/* Central Top Node */}
                <span className="connect-node">B2B Revenue Architecture</span>

                {/* 5-Branch Laser Fan connecting into each service */}
                <svg className="connect-fan" viewBox="0 0 1000 60" style={{ height: '60px' }}>
                  {SERVICES.map((service, i) => (
                    <path
                      key={`line-${i}`}
                      className="c-line"
                      d={service.d}
                      style={{
                        stroke: hoveredChip === i ? 'var(--vessa-accent)' : 'var(--m-border)',
                        strokeWidth: hoveredChip === i ? '1.8px' : '1px',
                        transition: 'stroke 0.2s, stroke-width 0.2s'
                      }}
                    />
                  ))}
                  {SERVICES.map((service, i) => (
                    <path
                      key={`pulse-${i}`}
                      className="c-pulse c-pulse--fan"
                      d={service.d}
                      pathLength="100"
                      style={{
                        stroke: hoveredChip === i ? '#0284c7' : 'var(--vessa-accent)',
                        strokeWidth: hoveredChip === i ? '3.2px' : '2.2px',
                        animationDuration: hoveredChip === i ? '0.85s' : '2.2s'
                      }}
                    />
                  ))}
                </svg>

                {/* The 5 Services in a single clean row with balanced padding */}
                <ul className="connect-clients">
                  {SERVICES.map((service, i) => (
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
                      {service.icon}
                      {' '}{service.name}
                    </li>
                  ))}
                </ul>

                <p className="connect-any">Synchronized pipeline from account identification to closed-won revenue</p>
              </div>
            </div>

            <div className="cell-copy">
              <h3 className="cell-title">Full-Funnel B2B Growth Engine</h3>
              <p className="cell-body">
                We design and execute integrated B2B campaigns that align your sales and marketing efforts, ensuring a continuous stream of qualified pipeline from your most valuable target accounts.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): High-Intent B2B SEO & PPC */}
          <article 
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">High-Intent B2B SEO &amp; PPC</h3>
              <p className="cell-body">
                Capture enterprise buyers exactly when they are actively searching for software, consultancies, or vendor RFP solutions through targeted search engine visibility.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): Account-Based Marketing (ABM) */}
          <article 
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Account-Based Marketing (ABM)</h3>
              <p className="cell-body">
                Target high-value enterprise accounts with bespoke content tailored to key stakeholders, eliminating budget waste and focusing strictly on accounts that matter.
              </p>
            </div>
          </article>

          {/* Cell 4 (Left): LinkedIn Marketing & Brand Authority */}
          <article 
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">LinkedIn Marketing &amp; Brand Authority</h3>
              <p className="cell-body">
                Position your leadership as industry authorities with high-engagement organic content and targeted executive InMail campaigns reaching the full buying committee.
              </p>
            </div>
          </article>

          {/* Cell 5 (Right): Sales & CRM Alignment */}
          <article 
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Sales &amp; CRM Alignment</h3>
              <p className="cell-body">
                Ensure zero lead leakage with perfect marketing-to-sales handoffs, CRM integrations, lead scoring, and automated nurture sequences that increase pipeline velocity.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
