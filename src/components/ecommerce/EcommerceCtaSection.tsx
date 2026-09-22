import { ArrowRight } from 'lucide-react';

interface EcommerceCtaSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function EcommerceCtaSection({ onHover, onLeave }: EcommerceCtaSectionProps) {
  return (
    <section className="seo-cta-section">
      <div className="seo-container">
        <div className="seo-cta-banner">
          <h2>Grow Your Ecommerce Business With Eco Apps Solutions</h2>
          <p>
            Let us help you attract high-intent shoppers, increase your store's conversion rate, and build compounding online revenue through a coordinated full-funnel marketing strategy.
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
              <span style={{ fontWeight: 800 }}>Talk to Our Ecommerce Experts</span>
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
