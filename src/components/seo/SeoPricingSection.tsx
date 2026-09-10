import { useState } from 'react';
import { Check, Info, Zap, ArrowRight } from 'lucide-react';
import { seoPricingPlans } from '../../data/seoData';

interface SeoPricingSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoPricingSection({ onHover, onLeave }: SeoPricingSectionProps) {
  const [aiAddonActive, setAiAddonActive] = useState(false);

  return (
    <section id="pricing" className="seo-pricing-section">
      <div className="seo-container">
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Engagement Plans</span>
          </div>
          <h2 className="seo-section-title">Transparent SEO investments. Built for predictable ROI.</h2>
          <p className="seo-section-subtitle">
            Scalable search programs designed to accelerate growth, from single-sprint technical audits to dedicated enterprise search pods.
          </p>
        </div>

        <div className="seo-pricing-grid">
          {seoPricingPlans.map((plan) => {
            const isFeatured = plan.featured;
            const isDark = plan.isDarkCard;

            // Compute dynamic price if addon is enabled
            let displayPrice = plan.basePrice;
            if (plan.hasAddonToggle && aiAddonActive && plan.addonPrice) {
              displayPrice += plan.addonPrice;
            }

            return (
              <div
                key={plan.id}
                className={`seo-pricing-card ${isFeatured ? 'featured' : ''} ${isDark ? 'dark-card' : ''}`}
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: isDark ? 'rgba(56, 189, 248, 0.15)' : 'var(--seo-primary-light)',
                      color: isDark ? '#38bdf8' : 'var(--seo-primary)',
                    }}
                  >
                    <Zap className="w-5 h-5" />
                  </div>

                  {plan.badge && <span className="seo-pricing-badge">{plan.badge}</span>}

                  <h3 className="seo-plan-name">{plan.name}</h3>
                  <p className="seo-plan-desc">{plan.description}</p>

                  <div className="seo-plan-price-wrap">
                    <span className="seo-plan-price">
                      ${displayPrice.toLocaleString()}
                    </span>
                    <span className="seo-plan-period">{plan.billingPeriod}</span>
                  </div>

                  {/* Addon switch for AI GEO Optimization */}
                  {plan.hasAddonToggle && (
                    <div className="seo-addon-switch-box">
                      <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, display: 'block', color: '#0b1528' }}>
                          {plan.addonName}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 800 }}>
                          +${plan.addonPrice?.toLocaleString()} /mo
                        </span>
                      </div>
                      <label className="seo-switch" aria-label="Toggle AI Search Addon">
                        <input
                          type="checkbox"
                          checked={aiAddonActive}
                          onChange={(e) => setAiAddonActive(e.target.checked)}
                        />
                        <span className="seo-slider" />
                      </label>
                    </div>
                  )}

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href="#contact"
                      className={`seo-btn ${
                        isFeatured
                          ? 'seo-btn-primary'
                          : isDark
                          ? 'seo-btn-primary'
                          : 'seo-btn-dark'
                      }`}
                      style={{ width: '100%' }}
                      onMouseEnter={onHover}
                      onMouseLeave={onLeave}
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Feature checklist */}
                  <ul className="seo-plan-features">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="seo-plan-feature-item">
                        <Check
                          className="w-4 h-4 shrink-0"
                          style={{ color: isDark ? '#38bdf8' : 'var(--seo-primary)' }}
                        />
                        <span>{feat.text}</span>
                        {feat.tooltip && (
                          <span
                            title={feat.tooltip}
                            style={{
                              cursor: 'help',
                              color: isDark ? '#94a3b8' : '#94a3b8',
                              marginLeft: 'auto',
                            }}
                          >
                            <Info className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
