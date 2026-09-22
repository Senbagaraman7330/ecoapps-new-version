import { ArrowRight } from 'lucide-react';

interface CustomSoftwareCtaSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function CustomSoftwareCtaSection({
  onHover,
  onLeave,
}: CustomSoftwareCtaSectionProps) {
  return (
    <section className="seo-cta-section">
      <div className="seo-container">
        <div className="seo-cta-banner">
          <h2>Ready to Build Your Custom Software?</h2>
          <p>
            Have a business process that needs a better technology solution? Let's discuss your requirements and build software that works the way your business works. Get Started With Eco Apps Solutions Today.
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
              <span style={{ fontWeight: 800 }}>Talk to Our Software Experts</span>
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
              <span style={{ fontWeight: 700 }}>Get a Free Software Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
