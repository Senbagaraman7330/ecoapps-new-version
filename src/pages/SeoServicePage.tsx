import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { seoServiceSchema } from '../data/schemas';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// SEO Service Subcomponents
import LightsparkSeoHero from '../components/seo/LightsparkSeoHero';
import SeoAiSearchSection from '../components/seo/SeoAiSearchSection';
import SeoBentoSection from '../components/seo/SeoBentoSection';
import SeoProcessSection from '../components/seo/SeoProcessSection';
import SeoStatsSection from '../components/seo/SeoStatsSection';
import SeoContactCtaSection from '../components/seo/SeoContactCtaSection';

// SEO Service CSS in EcoApps Rhythm
import '../styles/seo-service.css';

export default function SeoServicePage() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  // Section Headings Word-by-Word Scroll Reveals
  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealWords = (
        selector: string,
        duration = 0.9,
        stagger = 0.035,
        start = 'top 90%'
      ) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        elements.forEach((el) => {
          if (!el.dataset.originalText) {
            el.dataset.originalText = el.innerText.trim();
          }
          const text = el.dataset.originalText;
          if (!text || text.trim() === '') return;
          const words = text.split(/\s+/);
          el.innerHTML = words
            .map((w) => {
              return `<span class="sword inline-block overflow-hidden pb-[0.12em] align-top"><span class="sword-inner inline-block will-change-transform">${w}</span></span>`;
            })
            .join(' ');

          gsap.fromTo(
            el.querySelectorAll('.sword-inner'),
            {
              y: '105%',
              opacity: 0,
            },
            {
              y: '0%',
              opacity: 1,
              duration: duration,
              stagger: stagger,
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

      revealWords('.seo-section-title', 0.9, 0.035, 'top 88%');
      revealWords('.bento-title', 0.9, 0.035, 'top 88%');
      revealWords('.section-title-reveal', 0.9, 0.035, 'top 88%');
      revealWords('.seo-cta-banner h2', 0.9, 0.035, 'top 88%');
      revealWords('.cell-title', 0.8, 0.03, 'top 90%');

      // Refresh ScrollTrigger after DOM adjustments
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => {
      ctx.revert();
      const allRevealed = document.querySelectorAll<HTMLElement>('[data-original-text]');
      allRevealed.forEach((el) => {
        if (el.dataset.originalText) {
          el.innerText = el.dataset.originalText;
          delete el.dataset.originalText;
        }
      });
    };
  }, []);

  return (
    <div className="seo-page-root relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      {/* SEO Metadata & Canonical */}
      <SEO
        title="Improve Search Rankings with SEO, AISEO Service in Coimbatore"
        description="Grow organic visibility with AI SEO services in Coimbatore using AI-powered strategies for content, search rankings and qualified traffic."
        canonical="https://ecoappssolutions.com/seo-ai-seo-service"
        schema={seoServiceSchema}
      />

      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Same EcoApps Header */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        {/* 1. Interactive Lightspark-Inspired Hero with Draggable Cards & Dynamic Morphing */}
        <LightsparkSeoHero onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 6. Impact Metric Stats Bar */}
        <SeoStatsSection />

        {/* 5. Connected Bento Architecture & Live Animation Showcase */}
        <SeoBentoSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 4. AI Search & Future of Discovery Section */}
        <SeoAiSearchSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. 4-Step SEO Methodology Process */}
        <SeoProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 10. Final Call To Action Banner */}
        <SeoContactCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      {/* Same EcoApps Footer */}
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
