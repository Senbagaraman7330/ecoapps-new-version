import React, { useState } from 'react';
import '../seo/SeoBentoSection.css';

interface EcommerceBentoSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

interface WhyChooseItem {
  id: string;
  name: string;
  d: string;
  icon: React.ReactNode;
}

const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'full-funnel',
    name: 'Full-Funnel Approach',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    id: 'performance-focused',
    name: 'Performance-Focused',
    d: 'M 500 0 C 500 36, 300 24, 300 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'data-driven',
    name: 'Data-Driven Decisions',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: 'customer-centric',
    name: 'Customer-Centric',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
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
    id: 'integrated-digital',
    name: 'Integrated Marketing',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
      </svg>
    ),
  },
];

export default function EcommerceBentoSection({ onHover, onLeave }: EcommerceBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section id="bento-architecture" className="bento" aria-label="Why Choose Eco Apps Solutions for Ecommerce Marketing">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Why Choose Eco Apps Solutions
          </div>
          <h2 className="bento-title">Why Choose Eco Apps Solutions for Ecommerce Marketing?</h2>
          <div className="bento-subtitle-group">
            <p className="bento-subtitle">
              We look at the complete customer journey — from discovering your product to purchasing and returning to your brand.
            </p>
            <p className="bento-subtitle bento-subtitle--second">
              Our strategies coordinate SEO, paid advertising, social media, content, and conversion optimisation into a unified revenue engine.
            </p>
          </div>
        </header>

        <div className="bento-grid">
          {/* Cell 1 (Wide): Connect Diagram with all 5 "Why Choose" items */}
          <article
            className="cell cell--wide"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="viz viz--solid viz--connect">
              <div className="connect-diagram" aria-hidden="true">
                <span className="connect-markwrap">
                  <svg className="connect-mark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>

                <svg className="connect-drop" viewBox="0 0 2 40" width="2" height="40">
                  <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
                  <line className="c-pulse c-pulse--drop" x1="1" y1="0" x2="1" y2="40" pathLength="100" />
                </svg>

                {/* Central Top Node */}
                <span className="connect-node">Ecommerce Growth Engine</span>

                {/* 5-Branch Laser Fan connecting into each item */}
                <svg className="connect-fan" viewBox="0 0 1000 60" style={{ height: '60px' }}>
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <path
                      key={`line-${i}`}
                      className="c-line"
                      d={item.d}
                      style={{
                        stroke: hoveredChip === i ? '#2563eb' : 'var(--m-border)',
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
                        stroke: hoveredChip === i ? '#38bdf8' : '#2563eb',
                        strokeWidth: hoveredChip === i ? '3.2px' : '2.2px',
                        animationDuration: hoveredChip === i ? '0.85s' : '2.2s',
                      }}
                    />
                  ))}
                </svg>

                {/* The 5 items in a single clean row */}
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
              </div>
            </div>

            {/* Item 1: Full-Funnel Approach */}
            <div className="cell-copy">
              <h3 className="cell-title">Full-Funnel Approach</h3>
              <p className="cell-body">
                We look at the complete customer journey — from discovering your product to purchasing and returning to your brand. Every stage is engineered to compound growth.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): Performance-Focused Strategy */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Performance-Focused Strategy</h3>
              <p className="cell-body">
                Our focus goes beyond traffic and impressions. We work towards meaningful outcomes such as leads, purchases, conversions, and revenue.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): Data-Driven Decisions */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Data-Driven Decisions</h3>
              <p className="cell-body">
                We use campaign and website performance data to identify opportunities, eliminate checkout leaks, and make informed optimisation decisions.
              </p>
            </div>
          </article>

          {/* Cell 4 (Bottom Left): Customer-Centric Marketing */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Customer-Centric Marketing</h3>
              <p className="cell-body">
                We create strategies based on what your customers search for, need, compare, and consider before making a purchase.
              </p>
            </div>
          </article>

          {/* Cell 5 (Bottom Right): Integrated Digital Marketing */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Integrated Digital Marketing</h3>
              <p className="cell-body">
                SEO, paid advertising, social media, content, and conversion optimisation work better when they support one another. We bring these activities together into a coordinated ecommerce strategy.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
