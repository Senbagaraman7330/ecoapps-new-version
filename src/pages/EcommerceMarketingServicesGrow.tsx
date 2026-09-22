import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { ecommerceSchema } from '../data/schemas';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Ecommerce Marketing Subcomponents
import EcommerceHero from '../components/ecommerce/EcommerceHero';
import EcommerceStatsSection from '../components/ecommerce/EcommerceStatsSection';
import EcommerceBentoSection from '../components/ecommerce/EcommerceBentoSection';
import EcommerceServicesSection from '../components/ecommerce/EcommerceServicesSection';
import EcommerceProcessSection from '../components/ecommerce/EcommerceProcessSection';
import EcommerceCtaSection from '../components/ecommerce/EcommerceCtaSection';

// Reuse the same unified CSS (identical layout, typography & smooth animation rhythm)
import '../styles/seo-service.css';

export default function EcommerceMarketingServicesGrow() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  // Safe & performant section heading scroll reveals (Zero React DOM conflicts)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealElements = (selector: string, start = 'top 88%') => {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: start,
                once: true,
              },
            }
          );
        });
      };

      revealElements('.seo-section-title', 'top 88%');
      revealElements('.bento-title', 'top 88%');
      revealElements('.section-title-reveal', 'top 88%');
      revealElements('.seo-cta-banner h2', 'top 88%');
      revealElements('.cell-title', 'top 90%');

      // Refresh ScrollTrigger after DOM adjustments
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="seo-page-root relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-blue-600 selection:text-white font-['Manrope'] overflow-x-hidden">
      {/* SEO Metadata & Canonical */}
      <SEO
        title="Increase your online sales with best Ecommerce Marketing Service"
        description="Grow your online store with ecommerce marketing services in Coimbatore focused on traffic, customer acquisition, conversions and sales growth."
        canonical="https://ecoappssolutions.com/ecommerce-marketing"
        schema={ecommerceSchema}
      />

      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Same EcoApps Header */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        {/* 1. Interactive Hero with Draggable Cards & Dynamic Morphing */}
        <EcommerceHero onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 2. Why Choose Eco Apps Solutions - Stats Section */}
        <EcommerceStatsSection />

        {/* 3. Why Choose - Bento Architecture with Animated Cells */}
        <EcommerceBentoSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 4. Our Ecommerce Marketing Services - Dark Section with 6 Cards + Platforms Banner */}
        <EcommerceServicesSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. 6-Step Ecommerce Marketing Strategy Roadmap */}
        <EcommerceProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 6. Final Call To Action Banner */}
        <EcommerceCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      {/* Same EcoApps Footer */}
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
