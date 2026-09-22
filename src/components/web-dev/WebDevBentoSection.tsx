import React, { useState } from 'react';
import '../seo/SeoBentoSection.css';

interface WebDevBentoSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

interface ServiceItem {
  id: string;
  name: string;
  d: string;
  icon: React.ReactNode;
}

const WEB_SERVICES: ServiceItem[] = [
  {
    id: 'static-dev',
    name: 'Static Web Development',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'dynamic-dev',
    name: 'Dynamic Web Development',
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
    id: 'ecommerce-dev',
    name: 'Ecommerce Storefronts',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'cms-admin',
    name: 'CMS & Admin Portals',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    id: 'integrations',
    name: 'Integrations & Checkout',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export default function WebDevBentoSection({ onHover, onLeave }: WebDevBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section id="bento-architecture" className="bento" aria-label="Website Development Architecture">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            Modern Web Architecture
          </div>
          <h2 className="bento-title">High-Performance Websites Tailored to Your Business</h2>
          <div className="bento-subtitle-group">
            <p className="bento-subtitle">
              At Eco Apps Solutions, we develop modern, responsive, and user-friendly websites based on your business requirements — from simple static websites to feature-rich dynamic websites and complete ecommerce stores.
            </p>
            <p className="bento-subtitle bento-subtitle--second">
              Every website is engineered for speed, mobile responsiveness, seamless user interaction, secure workflows, and long-term search engine visibility.
            </p>
          </div>
        </header>

        <div className="bento-grid">
          {/* Cell 1 (Wide): Connect Diagram with all 5 web services aligned */}
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
                <span className="connect-node">EcoApps Web Development Core</span>

                {/* 5-Branch Laser Fan connecting into each service */}
                <svg className="connect-fan" viewBox="0 0 1000 60" style={{ height: '60px' }}>
                  {WEB_SERVICES.map((service, i) => (
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
                  {WEB_SERVICES.map((service, i) => (
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

                {/* The 5 Services in a single clean row */}
                <ul className="connect-clients">
                  {WEB_SERVICES.map((service, i) => (
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
                  Mobile-friendly, fast-loading, user-friendly, and SEO-ready engineering
                </p>
              </div>
            </div>

            {/* Service 1: Static Website Development */}
            <div className="cell-copy">
              <h3 className="cell-title">Static Website Development</h3>
              <p className="cell-body">
                Simple. Professional. Fast. Clean and responsive static websites that clearly showcase your business, services, products, company information, contact details, and brand identity.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): Dynamic Website Development */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Dynamic Website Development</h3>
              <p className="cell-body">
                Flexible. Scalable. Feature-Rich. Ideal for businesses needing regularly updated content, user registration, contact &amp; lead forms, database integration, and custom administrative features.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): Ecommerce Storefront Engine */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Ecommerce Website Development</h3>
              <p className="cell-body">
                Turn Your Products Into Online Sales. Provide smooth shopping experiences with shopping cart, secure payments, order management, filter search, offers, and WhatsApp order triggers.
              </p>
            </div>
          </article>

          {/* Cell 4 (Left): Brand & Digital Presence */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Responsive &amp; Mobile-First Design</h3>
              <p className="cell-body">
                We craft clean, pixel-perfect interfaces designed for high engagement, effortless navigation, and optimal display on every smartphone, tablet, and desktop display.
              </p>
            </div>
          </article>

          {/* Cell 5 (Right): Code Structure & Performance Scanner */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">SEO-Ready &amp; Scalable Architecture</h3>
              <p className="cell-body">
                Every line of code and content structure is optimized for search indexing, Core Web Vitals, third-party integrations, and future feature expansion.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
