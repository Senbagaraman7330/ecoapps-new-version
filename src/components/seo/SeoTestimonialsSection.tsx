import { Star } from 'lucide-react';
import { seoReviews } from '../../data/seoData';

interface SeoTestimonialsSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoTestimonialsSection({ onHover, onLeave }: SeoTestimonialsSectionProps) {
  return (
    <section className="seo-testimonials-section">
      <div className="seo-container">
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Social Proof &amp; Results</span>
          </div>
          <h2 className="seo-section-title">Trusted by 500+ leaders. Generating millions through search.</h2>
          <p className="seo-section-subtitle">
            See how our enterprise SEO partnerships empower high-growth companies to unlock sustainable, high-margin customer acquisition.
          </p>
        </div>

        <div className="seo-testimonials-grid">
          {seoReviews.map((review) => (
            <div
              key={review.id}
              className="seo-testimonial-card"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <div>
                {/* 5-Star Rating */}
                <div className="seo-testimonial-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0284c7] text-[#0284c7]" />
                  ))}
                </div>

                <p className="seo-testimonial-quote">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="seo-testimonial-author">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="seo-testimonial-avatar"
                />
                <div>
                  <h4 style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0b1528' }}>{review.author}</h4>
                  <p style={{ color: '#475569', fontSize: '0.825rem' }}>{review.role}</p>
                </div>
                {review.metric && (
                  <span className="seo-metric-pill">
                    {review.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
