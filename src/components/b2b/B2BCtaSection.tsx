import { ArrowRight } from 'lucide-react';

interface B2BCtaSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function B2BCtaSection({ onHover, onLeave }: B2BCtaSectionProps) {
  return (
    <section className="seo-cta-section">
      <div className="seo-container">
        <div className="seo-cta-banner">
          <h2>Ready to Grow Your B2B Business?</h2>
          <p>
            Let's create a B2B marketing strategy that reaches the right decision-makers, generates qualified leads, and builds a stronger sales pipeline.
          </p>
          <div className="seo-btn-wrap flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="seo-btn seo-btn-primary"
              style={{
                background: '#ffffff',
                color: '#0b1528',
                borderRadius: '9999px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span style={{ fontWeight: 800 }}>Talk to Our B2B Experts</span>
              <div
                className="seo-btn-arrow-circle"
                style={{ background: '#0284c7', color: '#ffffff', borderRadius: '50%' }}
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
