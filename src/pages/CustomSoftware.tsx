import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { customSoftwareSchema } from '../data/schemas';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Custom Software Development Subcomponents
import CustomSoftwareHero from '../components/custom-software/CustomSoftwareHero';
import CustomSoftwareStatsSection from '../components/custom-software/CustomSoftwareStatsSection';
import CustomSoftwareBentoSection from '../components/custom-software/CustomSoftwareBentoSection';
import CustomSoftwareServicesSection from '../components/custom-software/CustomSoftwareServicesSection';
import CustomSoftwareProcessSection from '../components/custom-software/CustomSoftwareProcessSection';
import CustomSoftwareCtaSection from '../components/custom-software/CustomSoftwareCtaSection';

// SEO Service CSS in EcoApps Rhythm & Palette
import '../styles/seo-service.css';

export default function CustomSoftware() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  // Section Headings Word-by-Word Scroll Reveals matching SeoServicePage
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
        title="Build scalable software with custom software development services"
        description="Build custom software solutions in Coimbatore that simplify business processes, improve efficiency & support your unique business needs."
        canonical="https://ecoappssolutions.com/custom-software-development"
        schema={customSoftwareSchema}
      />

      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Same EcoApps Header */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        {/* 1. Interactive Hero with Draggable/Floating Cards & Dynamic Morphing */}
        <CustomSoftwareHero onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 2. Custom Software Strategy & Performance Metrics */}
        <CustomSoftwareStatsSection />

        {/* 3. Custom Software Architecture - Bento & Live Animation Showcase */}
        <CustomSoftwareBentoSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 4. Dark Canvas Services Section with Curved Transitions & 3D Tilt Cards */}
        <CustomSoftwareServicesSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. 6-Step Custom Software Engineering Process */}
        <CustomSoftwareProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 6. Final Call To Action Banner */}
        <CustomSoftwareCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      {/* Same EcoApps Footer */}
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
