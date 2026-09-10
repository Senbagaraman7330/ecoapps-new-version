import { seoProcessSteps } from '../../data/seoData';

interface SeoProcessSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoProcessSection({ onHover, onLeave }: SeoProcessSectionProps) {
  return (
    <section className="seo-process-section">
      <div className="seo-container">
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>SEO Methodology</span>
          </div>
          <h2 className="seo-section-title">Data-driven &amp; predictable process. That yields top-tier rankings.</h2>
          <p className="seo-section-subtitle">
            Our battle-tested workflow eliminates guesswork and delivers durable organic growth on clear, transparent timelines.
          </p>
        </div>

        <div className="seo-process-grid">
          {seoProcessSteps.map((step) => (
            <div
              key={step.num}
              className="seo-process-card"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span className="seo-process-num">{step.num}</span>
              <h3 className="seo-process-card-title">{step.title}</h3>
              <p className="seo-process-card-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
