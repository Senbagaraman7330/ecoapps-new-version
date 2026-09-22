import React, { useState } from 'react';
import '../seo/SeoBentoSection.css';

interface MobileAppBentoSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

interface FeatureItem {
  id: string;
  name: string;
  d: string;
  icon: React.ReactNode;
}

const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: 'user-focused',
    name: 'User-Focused Development',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
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
    id: 'custom-sol',
    name: 'Custom Tailored Solutions',
    d: 'M 500 0 C 500 36, 300 24, 300 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'scalable-tech',
    name: 'Scalable Architecture',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'perf-focus',
    name: 'Performance-Focused',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'business-growth',
    name: 'Business-Oriented',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function MobileAppBentoSection({ onHover, onLeave }: MobileAppBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section id="bento-architecture" className="bento" aria-label="Why Choose Eco Apps Solutions">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            Why Choose Us
          </div>
          <h2 className="bento-title">Why Choose Eco Apps Solutions?</h2>
          <div className="bento-subtitle-group">
            <p className="bento-subtitle">
              Our goal is not simply to build an app. We focus on how the application can support your customers, operations, engagement, and sustainable business growth.
            </p>
            <p className="bento-subtitle bento-subtitle--second">
              We design and develop modern, user-friendly, and scalable mobile applications tailored to your exact industry and operational workflows.
            </p>
          </div>
        </header>

        <div className="bento-grid">
          {/* Cell 1 (Wide): Connect Diagram with all 5 value propositions aligned */}
          <article
            className="cell cell--wide"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="viz viz--solid viz--connect">
              <div className="connect-diagram" aria-hidden="true">
                <span className="connect-markwrap">
                  <svg className="connect-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>

                <svg className="connect-drop" viewBox="0 0 2 40" width="2" height="40">
                  <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
                  <line className="c-pulse c-pulse--drop" x1="1" y1="0" x2="1" y2="40" pathLength="100" />
                </svg>

                <span className="connect-node">EcoApps Mobile Engineering Core</span>

                {/* 5-Branch Laser Fan connecting into each feature */}
                <svg className="connect-fan" viewBox="0 0 1000 60" style={{ height: '60px' }}>
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <path
                      key={`line-${i}`}
                      className="c-line"
                      d={item.d}
                      style={{
                        stroke: hoveredChip === i ? 'var(--vessa-accent)' : 'var(--m-border)',
                        strokeWidth: hoveredChip === i ? '1.8px' : '1px',
                        transition: 'stroke 0.2s, stroke-width 0.2s',
                      }}
                    />
                  ))}
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <path
                      key={`pulse-${i}`}
                      className="c-pulse c-pulse--fan"
                      d={item.d}
                      pathLength="100"
                      style={{
                        stroke: hoveredChip === i ? '#0284c7' : 'var(--vessa-accent)',
                        strokeWidth: hoveredChip === i ? '3.2px' : '2.2px',
                        animationDuration: hoveredChip === i ? '0.85s' : '2.2s',
                      }}
                    />
                  ))}
                </svg>

                {/* The 5 Pillars in a single clean row */}
                <ul className="connect-clients">
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <li
                      key={item.id}
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
                      {item.icon} {item.name}
                    </li>
                  ))}
                </ul>

                <p className="connect-any">
                  High-performance, intuitive UX, secure backend, and future-ready mobile apps
                </p>
              </div>
            </div>

            {/* Pillar 1: User-Focused Development */}
            <div className="cell-copy">
              <h3 className="cell-title">User-Focused Development</h3>
              <p className="cell-body">
                We design applications around real user needs, making the experience simple, intuitive, and easy to navigate for maximum user retention and engagement.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): Custom Solutions */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Custom Solutions</h3>
              <p className="cell-body">
                We don't believe every business needs the same application. We build solutions based on your specific requirements, brand personality, and technical ecosystem.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): Scalable Technology */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Scalable Technology</h3>
              <p className="cell-body">
                We develop applications with future growth in mind, allowing you to seamlessly add features, onboard users, and expand functionality as your business grows.
              </p>
            </div>
          </article>

          {/* Cell 4 (Left): Performance-Focused */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Performance-Focused</h3>
              <p className="cell-body">
                We focus on creating applications that are responsive, reliable, and provide a smooth, glitch-free user experience across diverse mobile hardware.
              </p>
            </div>
          </article>

          {/* Cell 5 (Right): Business-Oriented Approach */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Business-Oriented Approach</h3>
              <p className="cell-body">
                Our goal is not simply to build an app. We focus on how the application can support your customers, operations, engagement, and business growth.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
