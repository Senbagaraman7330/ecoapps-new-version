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
            Ready to build search visibility that compounds?
          </h2>
          <p>
            Partner with Eco Apps Solutions to rank for the searches that matter most, strengthen your technical foundations, and turn organic search into a predictable growth engine.
          </p>
          <div className="seo-btn-wrap">
            <a
              href="#pricing"
              className="seo-btn seo-btn-primary"
              style={{
                background: '#ffffff',
                color: '#0b1528',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span style={{ fontWeight: 800 }}>Get an SEO Growth Strategy</span>
              <div
                className="seo-btn-arrow-circle"
                style={{ background: '#0284c7', color: '#ffffff' }}
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
