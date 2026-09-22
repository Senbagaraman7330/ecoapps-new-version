import { ArrowRight } from 'lucide-react';

interface SeoContactCtaSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoContactCtaSection({ onHover, onLeave }: SeoContactCtaSectionProps) {
  return (
    <section className="seo-cta-section">
      <div className="seo-container">
        <div className="seo-cta-banner">
          <h2>
            Let's build a search strategy that works for your business today
          </h2>
          <div className="seo-btn-wrap">
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
              <span style={{ fontWeight: 800 }}>Talk to Our SEO Experts</span>
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
