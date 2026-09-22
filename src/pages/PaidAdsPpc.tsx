import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Subcomponents
import LightsparkSeoHero from '../components/seo/LightsparkSeoHero';
import SeoStatsSection from '../components/seo/SeoStatsSection';
import SeoBentoSection from '../components/seo/SeoBentoSection';
import SeoAiSearchSection from '../components/seo/SeoAiSearchSection';
import SeoProcessSection from '../components/seo/SeoProcessSection';
import SeoContactCtaSection from '../components/seo/SeoContactCtaSection';

// Reuse CSS
import '../styles/seo-service.css';

export default function PaidAdsPpc() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

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
        title="Paid Ads & PPC Marketing Company in Coimbatore | Eco Apps Solutions"
        description="Maximize ROI with performance-driven Google Ads, Meta Ads, and PPC lead generation services in Coimbatore from Eco Apps Solutions."
        canonical="https://ecoappssolutions.com/paid-ads-ppc"
      />

      <Cursor isHovered={isCursorHovered} />
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        <LightsparkSeoHero
          defaultServiceId="paid-ads-ppc"
          onHover={handleCursorHover}
          onLeave={handleCursorLeave}
        />
        <SeoStatsSection />
        <SeoBentoSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
        <SeoAiSearchSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
        <SeoProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
        <SeoContactCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
