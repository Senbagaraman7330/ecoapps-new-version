import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { b2bSchema } from '../data/schemas';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// B2B Marketing Subcomponents
import B2BHero from '../components/b2b/B2BHero';
import B2BStatsSection from '../components/b2b/B2BStatsSection';
import B2BBentoSection from '../components/b2b/B2BBentoSection';
import B2BServicesSection from '../components/b2b/B2BServicesSection';
import B2BProcessSection from '../components/b2b/B2BProcessSection';
import B2BCtaSection from '../components/b2b/B2BCtaSection';

// Reuse the same unified CSS
import '../styles/seo-service.css';

export default function B2BMarketingServices() {
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

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="seo-page-root relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      {/* SEO Metadata & Canonical */}
      <SEO
        title="Generate Quality B2B Marketing Leads with Eco Apps Solutions"
        description="Generate quality business leads with B2B marketing services in Coimbatore using targeted strategies for lead generation, visibility and growth."
        canonical="https://ecoappssolutions.com/b2b-marketing"
        schema={b2bSchema}
      />

      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Header */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        {/* 1. Interactive Lightspark-Inspired Hero with Floating Cards & Dynamic Morphing */}
        <B2BHero onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 2. Why Choose Eco Apps Solutions - Stats Section */}
        <B2BStatsSection />

        {/* 3. The B2B Growth Engine - Bento Architecture with Live Telemetry */}
        <B2BBentoSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 4. Our B2B Marketing Services - Dark Section with 6 Cards + Buyer Journey Ribbon */}
        <B2BServicesSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. 5-Stage B2B Marketing Funnel Process */}
        <B2BProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 6. Final Call To Action Banner */}
        <B2BCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      {/* Footer */}
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
