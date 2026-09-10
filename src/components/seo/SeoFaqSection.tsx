import { useState } from 'react';
import { Plus } from 'lucide-react';
import { seoFaqs } from '../../data/seoData';

interface SeoFaqSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SeoFaqSection({ onHover, onLeave }: SeoFaqSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>(seoFaqs[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="seo-faq-section">
      <div className="seo-container">
        <div className="seo-section-header">
          <div className="seo-pill-badge">
            <span className="seo-pill-dot" />
            <span>Search FAQs</span>
          </div>
          <h2 className="seo-section-title">We've got answers.</h2>
          <p className="seo-section-subtitle">
            Everything you need to know about our technical standards, AI search optimization, and white-hat methodologies.
          </p>
        </div>

        <div className="seo-faq-layout">
          {/* Side Prompt Card */}
          <div className="seo-faq-prompt-card">
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0b1528' }}>
              Have specific questions about your domain?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Every website is distinct. We run bespoke audits examining crawl efficiency, entity graphs, and competitor gaps. Reach out directly to discuss your search goals.
            </p>
            <div style={{ marginTop: '12px' }}>
              <a
                href="#pricing"
                className="seo-btn seo-btn-dark"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span>Get an SEO Growth Strategy</span>
              </a>
            </div>
          </div>

          {/* Accordion Questions List */}
          <div className="seo-faq-list">
            {seoFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`seo-faq-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="seo-faq-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <span>{faq.question}</span>
                    <span className="seo-faq-icon">
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="seo-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
