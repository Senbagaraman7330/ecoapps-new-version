import React, { useState } from 'react';
import './SeoBentoSection.css';


interface SeoBentoSectionProps {
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
    id: 'ai-search',
    name: 'AI Search Optimisation',
    d: 'M 500 0 C 500 36, 100 24, 100 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    id: 'aeo',
    name: 'Answer Engine (AEO)',
    d: 'M 500 0 C 500 36, 300 24, 300 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9 10h.01M15 10h.01M12 10h.01" strokeWidth="3" />
      </svg>
    )
  },
  {
    id: 'geo',
    name: 'Generative Engine (GEO)',
    d: 'M 500 0 C 500 36, 500 24, 500 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    id: 'entity-brand',
    name: 'Entity & Brand',
    d: 'M 500 0 C 500 36, 700 24, 700 60',
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
    id: 'ai-content',
    name: 'AI-Friendly Content',
    d: 'M 500 0 C 500 36, 900 24, 900 60',
    icon: (
      <svg className="client-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    )
  }
];

export default function SeoBentoSection({ onHover, onLeave }: SeoBentoSectionProps) {
  const [hoveredChip, setHoveredChip] = useState<number | null>(null);

  return (
    <div className="bento-section-wrapper">
      <div className="bento-bg-glow" aria-hidden="true" />

      <section id="bento-architecture" className="bento" aria-label="AI SEO Services">
        {/* Main Section Header */}
        <header className="bento-header">
          <div className="bento-badge">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            AI SEO Services
          </div>
          <h2 className="bento-title">Optimise Your Business for the New Era of Search</h2>
        </header>

        <div className="bento-grid">
          {/* Cell 1 (Wide): Connect Diagram with all 5 services aligned in one clean top line */}
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
                <span className="connect-node">Our AI SEO Approach</span>

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

                <p className="connect-any">Structured, authoritative, and referenced across AI-driven search engines</p>
              </div>
            </div>

            {/* Service 1: AI Search Optimisation */}
            <div className="cell-copy">
              <h3 className="cell-title">AI Search Optimisation</h3>
              <p className="cell-body">
                Optimise your website content to make important information clear, structured, relevant, and easier for AI systems to understand.
              </p>
            </div>
          </article>

          {/* Cell 2 (Left): Answer Engine Optimisation (AEO) */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Answer Engine Optimisation (AEO)</h3>
              <p className="cell-body">
                Create content that directly answers the questions your target audience is asking across search engines and AI platforms.
              </p>
            </div>
          </article>

          {/* Cell 3 (Right): Generative Engine Optimisation (GEO) */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Generative Engine Optimisation (GEO)</h3>
              <p className="cell-body">
                Improve your brand's digital presence and content structure for visibility within generative AI search results and recommendations.
              </p>
            </div>
          </article>

          {/* Cell 4 (Left): Entity & Brand Optimisation */}
          <article
            className="cell cell--l"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">Entity &amp; Brand Optimisation</h3>
              <p className="cell-body">
                Build clear connections between your business, services, expertise, and relevant topics so search engines and AI systems can better understand your brand.
              </p>
            </div>
          </article>

          {/* Cell 5 (Right): AI-Friendly Content Strategy */}
          <article
            className="cell cell--r"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <div className="cell-copy">
              <h3 className="cell-title">AI-Friendly Content Strategy</h3>
              <p className="cell-body">
                Develop useful, authoritative, and well-structured content designed for both human readers and modern search experiences.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
