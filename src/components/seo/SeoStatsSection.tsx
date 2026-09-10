import { seoStats } from '../../data/seoData';

export default function SeoStatsSection() {
  return (
    <section className="seo-container">
      <div className="seo-stats-section">
        <div className="seo-stats-grid">
          {seoStats.map((stat, idx) => (
            <div key={idx} className="seo-stat-item">
              <span className="seo-stat-val">{stat.value}</span>
              <span className="seo-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
