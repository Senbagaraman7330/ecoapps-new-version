import { useState } from 'react';
import Cursor from '../components/Cursor';
import Header from '../components/Header';
import Footer from '../components/Footer';

// SEO Service Subcomponents
import LightsparkSeoHero from '../components/seo/LightsparkSeoHero';
import SeoClientsTicker from '../components/seo/SeoClientsTicker';
import SeoProjectsSection from '../components/seo/SeoProjectsSection';
import SeoAiSearchSection from '../components/seo/SeoAiSearchSection';
import SeoCapabilitiesSection from '../components/seo/SeoCapabilitiesSection';
import SeoProcessSection from '../components/seo/SeoProcessSection';
import SeoStatsSection from '../components/seo/SeoStatsSection';
import SeoTestimonialsSection from '../components/seo/SeoTestimonialsSection';
import SeoPricingSection from '../components/seo/SeoPricingSection';
import SeoFaqSection from '../components/seo/SeoFaqSection';
import SeoContactCtaSection from '../components/seo/SeoContactCtaSection';

// SEO Service CSS in EcoApps Rhythm
import '../styles/seo-service.css';

export default function SeoServicePage() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  return (
    <div className="seo-page-root relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Same EcoApps Header */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        {/* 1. Interactive Lightspark-Inspired Hero with Draggable Cards & Dynamic Morphing */}
        <LightsparkSeoHero onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 2. Brand Authority & Search Engine Ticker */}
        <SeoClientsTicker />

        {/* 3. Selected SEO Case Studies & Results */}
        <SeoProjectsSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 4. AI Search & Future of Discovery Section */}
        <SeoAiSearchSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. SEO Capabilities Accordion & Sticky Showcase */}
        <SeoCapabilitiesSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. 4-Step SEO Methodology Process */}
        <SeoProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 6. Impact Metric Stats Bar */}
        <SeoStatsSection />

        {/* 7. Client Testimonials & Social Proof Grid */}
        <SeoTestimonialsSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 8. Transparent Engagement & Pricing Plans with Addon Switch */}
        <SeoPricingSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 9. Comprehensive Search FAQs */}
        <SeoFaqSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 10. Final Call To Action Banner */}
        <SeoContactCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      {/* Same EcoApps Footer */}
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
