import { ArrowUpRight } from 'lucide-react';
import { seoProjects } from '../../data/seoData';

interface SeoProjectsSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoProjectsSection({ onHover, onLeave }: SeoProjectsSectionProps) {
  const heroProject = seoProjects[0];
  const otherProjects = seoProjects.slice(1, 5);

  return (
    <section id="case-studies" className="seo-projects-section">
      <div className="seo-container">
        {/* Section Header */}
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Selected Case Studies</span>
          </div>
          <h2 className="seo-section-title">Rankings that convert. Revenue that scales.</h2>
          <p className="seo-section-subtitle">
            Explore how we engineered high-velocity organic growth engines across Coimbatore manufacturing, healthcare, regional retail, and digital enterprises.
          </p>
        </div>

        {/* Masterpiece Hero Case Study Card */}
        {heroProject && (
          <div className="seo-project-hero-card">
            <div className="seo-project-card-header">
              <div>
                <h3 className="seo-project-card-title">{heroProject.title}</h3>
                <p className="seo-project-card-meta">
                  {heroProject.client} • {heroProject.metric}
                </p>
              </div>
              <a
                href="#pricing"
                className="seo-btn seo-btn-secondary"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span>View Case Breakdown</span>
                <ArrowUpRight className="w-4 h-4 text-[#0284c7]" />
              </a>
            </div>
            <div className="seo-project-image-box">
              <img src={heroProject.coverImage} alt={heroProject.title} loading="lazy" />
            </div>
          </div>
        )}

        {/* 2-Column Projects Grid */}
        <div className="seo-project-grid">
          {otherProjects.map((project) => (
            <div key={project.id} className="seo-project-hero-card" style={{ marginBottom: 0 }}>
              <div className="seo-project-card-header">
                <div>
                  <h3 className="seo-project-card-title" style={{ fontSize: '1.35rem' }}>
                    {project.title}
                  </h3>
                  <p className="seo-project-card-meta">
                    {project.category} • {project.metric}
                  </p>
                </div>
                <a
                  href="#pricing"
                  className="seo-btn seo-btn-secondary"
                  style={{ padding: '8px 14px' }}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  aria-label={`View ${project.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#0284c7]" />
                </a>
              </div>
              <div className="seo-project-image-box" style={{ height: '320px' }}>
                <img src={project.coverImage} alt={project.title} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Action */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="#pricing"
            className="seo-btn seo-btn-dark"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Get an SEO Growth Strategy</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
