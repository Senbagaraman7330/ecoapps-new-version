import { ArrowRight } from 'lucide-react';

interface MobileAppCtaSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function MobileAppCtaSection({
  onHover,
  onLeave,
}: MobileAppCtaSectionProps) {
  return (
    <section className="seo-cta-section">
      <div className="seo-container">
        <div className="seo-cta-banner">
          <h2>Have an app idea?</h2>
          <p>
            Let's turn it into a powerful digital product designed around your users and business goals.
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
              <span style={{ fontWeight: 800 }}>Talk to Our Experts</span>
              <div
                className="seo-btn-arrow-circle"
                style={{ background: '#0284c7', color: '#ffffff', borderRadius: '50%' }}
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href="/contact"
              className="seo-btn seo-btn-secondary"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span style={{ fontWeight: 700 }}>Get Free Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
