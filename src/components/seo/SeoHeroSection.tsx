import { ArrowRight } from 'lucide-react';
import { floatingSeoTestimonials } from '../../data/seoData';

interface SeoHeroSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoHeroSection({ onHover, onLeave }: SeoHeroSectionProps) {
  return (
    <section className="seo-hero-section">
      {/* Ambient Blue Background Glow Atmosphere */}
      <div className="seo-ambient-glow-top" />

      {/* Floating Result Micro-Cards */}
      <div className="seo-floating-cards-container" aria-hidden="true">
        {floatingSeoTestimonials.map((item) => (
          <div
            key={item.id}
            className={`seo-floating-card seo-pos-${item.position}`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span className="seo-quote-icon">“</span>
            <p>"{item.quote}"</p>
            <span className="seo-floating-author">— {item.author}</span>
          </div>
        ))}
      </div>

      <div className="seo-container">
        <div className="seo-hero-content">
          {/* Status Badge - Hero Tagline */}
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Search Engine &amp; AI Answer Optimization</span>
          </div>

          {/* Master Headline (H1) */}
          <h1 className="seo-display-title">
            SEO &amp; AI SEO Company <br />
            <span className="text-[#0284c7]">in Coimbatore</span>
          </h1>

          {/* Subtitle & Core Message */}
          <div className="flex flex-col gap-3 max-w-[780px] mx-auto text-center items-center">
            <p className="seo-section-subtitle">
              Combine traditional Google search dominance with next-generation AI answer engines (ChatGPT, Perplexity, Gemini &amp; Google AI Overviews) for predictable, compounding business growth.
            </p>
            <p className="text-[0.95rem] md:text-[1.05rem] text-[#475569] leading-relaxed max-w-[700px]">
              We engineer search and AI visibility around user intent, technical architecture, semantic content hubs, entity authority, and high-conversion landing pages.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="seo-hero-actions">
            <a
              href="#pricing"
              className="seo-btn seo-btn-primary"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span>Get an SEO Growth Strategy</span>
              <div className="seo-btn-arrow-circle">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
            <a
              href="#capabilities"
              className="seo-btn seo-btn-secondary"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span>Explore Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
