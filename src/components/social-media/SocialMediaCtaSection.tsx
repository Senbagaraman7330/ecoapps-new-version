import { ArrowRight } from 'lucide-react';

interface SocialMediaCtaSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SocialMediaCtaSection({ onHover, onLeave }: SocialMediaCtaSectionProps) {
  return (
    <section className="seo-cta-section">
      <div className="seo-container">
        <div className="seo-cta-banner">
          <h2>
            Get Started With Eco Apps Solutions Today.
          </h2>
          <p>
            Let us help you build a social media presence that connects with your audience, communicates your brand, and drives meaningful business results.
          </p>
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
              <span style={{ fontWeight: 800 }}>Talk to Our Experts</span>
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
