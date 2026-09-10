import { seoClientLogos } from '../../data/seoData';

export default function SeoClientsTicker() {
  return (
    <section className="seo-clients-section">
      <div className="seo-container">
        <h3 className="seo-clients-title">Trusted by high-growth founders &amp; modern enterprises</h3>
        <div className="seo-clients-grid">
          {seoClientLogos.map((client, index) => (
            <div key={index} className="seo-client-item">
              <span className="text-[#0284c7] text-xl">✦</span>
              <span>{client.name}</span>
            </div>
          ))}
          <span className="seo-client-badge">and 60+ more brands</span>
        </div>
      </div>
    </section>
  );
}
