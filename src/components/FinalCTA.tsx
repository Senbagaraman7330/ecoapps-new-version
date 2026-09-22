import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/seo-service.css';

interface FinalCTAProps {
  onHover?: () => void;
  onLeave?: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function FinalCTA({
  onHover,
  onLeave,
  title = 'Ready to Build Your Next Stage of Growth?',
  description = 'Whether you need more leads, stronger search visibility, better-performing advertising, a conversion-focused website, or AI-powered automation, we can help you build the right digital growth system for your business.',
  buttonText = 'Book Your Strategy Call',
  buttonLink = '/contact',
}: FinalCTAProps) {
  return (
    <section className="seo-cta-section" id="contact-cta">
      <div className="seo-container">
        <div 
          className="seo-cta-banner final-cta-card rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
          style={{ borderRadius: '36px' }}
        >
          <h2 className="final-cta-h2-reveal">{title}</h2>
          <p>{description}</p>
          <div className="seo-btn-wrap flex flex-wrap items-center justify-center gap-4">
            <Link
              to={buttonLink}
              className="seo-btn seo-btn-primary rounded-full"
              style={{
                background: '#ffffff',
                color: '#0b1528',
                borderRadius: '9999px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
              }}
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span style={{ fontWeight: 800 }}>{buttonText}</span>
              <div
                className="seo-btn-arrow-circle"
                style={{ background: '#0284c7', color: '#ffffff' }}
              >
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
