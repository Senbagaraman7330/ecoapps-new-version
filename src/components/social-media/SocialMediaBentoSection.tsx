import React, { useState } from 'react';
import '../seo/SeoBentoSection.css';


interface SocialMediaBentoSectionProps {
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
    id: 'strategy-led',
    name: 'Strategy-Led Marketing',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    id: 'creative-performance',
    name: 'Creative & Performance',
    d: 'M 500 0 C 500 36, 300 24, 300 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    id: 'platform-specific',
    name: 'Platform-Specific',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    )
  },
  {
    id: 'brand-communication',
    name: 'Brand Communication',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h.01M15 10h.01M12 10h.01" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 'data-driven',
    name: 'Data-Driven Optimisation',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
];

export default function SocialMediaBentoSection({ onHover, onLeave }: SocialMediaBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section id="bento-architecture" className="bento" aria-label="Why Choose Eco Apps Solutions">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            Why Choose Eco Apps Solutions
          </div>
          <h2 className="bento-title">Why Choose Eco Apps Solutions?</h2>
          <div className="bento-subtitle-group">
            <p className="bento-subtitle">
              We don't create content simply to fill a content calendar. Every content piece and campaign is aligned with a clear marketing objective.
            </p>
            <p className="bento-subtitle bento-subtitle--second">
              We combine creative visual communication with marketing strategy to create content that attracts attention and encourages action across every platform.
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
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                <svg className="connect-drop" viewBox="0 0 2 40" width="2" height="40">
                  <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
                  <line className="c-pulse c-pulse--drop" x1="1" y1="0" x2="1" y2="40" pathLength="100" />
                </svg>

                {/* Central Top Node */}
                <span className="connect-node">Our Approach</span>

                {/* 5-Branch Laser Fan connecting into each item */}
                <svg className="connect-fan" viewBox="0 0 1000 60" style={{ height: '60px' }}>
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <path
                      key={`line-${i}`}
                      className="c-line"
                      d={item.d}
                      style={{
                        stroke: hoveredChip === i ? 'var(--vessa-accent)' : 'var(--m-border)',
                        strokeWidth: hoveredChip === i ? '1.8px' : '1px',
                        transition: 'stroke 0.2s, stroke-width 0.2s'
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
                        animationDuration: hoveredChip === i ? '0.85s' : '2.2s'
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
                      {item.icon}
                      {' '}{item.name}
                    </li>
                  ))}
                </ul>

                <p className="connect-any">Creative, strategic, and performance-driven across every platform</p>
              </div>
            </div>

            {/* Item 1: Strategy-Led Marketing */}
            <div className="cell-copy">
              <h3 className="cell-title">Strategy-Led Marketing</h3>
              <p className="cell-body">
                We don't create content simply to fill a content calendar. Every content piece and campaign is aligned with a clear marketing objective.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): Creative & Performance Focused */}
          <article 
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Creative &amp; Performance Focused</h3>
              <p className="cell-body">
                We combine creative visual communication with marketing strategy to create content that attracts attention and encourages action.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): Platform-Specific Strategies */}
          <article 
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Platform-Specific Strategies</h3>
              <p className="cell-body">
                Instagram, Facebook, LinkedIn, and YouTube have different audiences and content behaviours. We adapt the strategy according to each platform.
              </p>
            </div>
          </article>

          {/* Cell 4 (Left): Consistent Brand Communication */}
          <article 
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Consistent Brand Communication</h3>
              <p className="cell-body">
                We maintain consistent visual identity, messaging, and tone to help create a recognisable and trustworthy brand.
              </p>
            </div>
          </article>

          {/* Cell 5 (Right): Data-Driven Optimisation */}
          <article 
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Data-Driven Optimisation</h3>
              <p className="cell-body">
                We analyse performance data to understand what is working, identify opportunities, and continuously improve your social media strategy.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
