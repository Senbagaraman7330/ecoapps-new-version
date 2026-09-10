import { useState } from 'react';
import { ChevronDown, Check, Layers, Code2, Rocket, Sparkles, ArrowRight } from 'lucide-react';
import { seoCapabilities } from '../../data/seoData';

const iconMap = {
  Layers: Layers,
  Code2: Code2,
  Rocket: Rocket,
  Sparkles: Sparkles,
};

interface SeoCapabilitiesSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoCapabilitiesSection({ onHover, onLeave }: SeoCapabilitiesSectionProps) {
  const [activeId, setActiveId] = useState(seoCapabilities[0].id);

  const activeCapability = seoCapabilities.find((c) => c.id === activeId) || seoCapabilities[0];

  return (
    <section id="capabilities" className="seo-services-section">
      <div className="seo-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="seo-section-header text-left !mb-0 !max-w-2xl">
            <div className="seo-pill-badge">
              <span className="seo-pill-dot" />
              <span>Full-Stack Search &amp; AI Capabilities</span>
            </div>
            <h2 className="seo-section-title">Search &amp; AI Visibility That Compounds</h2>
            <p className="seo-section-subtitle">
              A comprehensive search architecture engineered to capture high-intent demand across Google and conversational AI platforms.
            </p>
          </div>

          <a
            href="#pricing"
            className="seo-btn seo-btn-primary shrink-0"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>Get an SEO Growth Strategy</span>
            <div className="seo-btn-arrow-circle">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </div>

        <div className="seo-services-layout">
          {/* Accordion Tabs */}
          <div className="seo-services-accordion-list">
            {seoCapabilities.map((capability) => {
              const Icon = iconMap[capability.icon] || Layers;
              const isActive = activeId === capability.id;

              return (
                <div
                  key={capability.id}
                  className={`seo-service-accordion-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveId(capability.id)}
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <div className="seo-service-header">
                    <div className="seo-service-icon-wrap">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="seo-service-title-text">{capability.title}</span>
                    <ChevronDown
                      className="w-5 h-5 transition-transform duration-200"
                      style={{
                        transform: isActive ? 'rotate(180deg)' : 'none',
                        color: isActive ? '#0284c7' : '#94a3b8',
                      }}
                    />
                  </div>

                  {isActive && (
                    <div className="seo-service-content-body">
                      <p>{capability.description}</p>
                      <ul className="seo-service-feature-list">
                        {capability.details.map((item, idx) => (
                          <li key={idx} className="seo-service-feature-item">
                            <Check className="w-4 h-4 text-[#0284c7] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Visual Showcase Card */}
          <div className="seo-service-preview-card">
            <img
              src={activeCapability.previewImage}
              alt={activeCapability.title}
              key={activeCapability.id}
            />
            <div style={{ padding: '28px' }}>
              <div className="seo-pill-badge" style={{ marginBottom: '12px' }}>
                <span>Verified Deliverable</span>
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0b1528', marginBottom: '8px' }}>
                {activeCapability.title}
              </h4>
              <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: '1.6' }}>
                {activeCapability.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
