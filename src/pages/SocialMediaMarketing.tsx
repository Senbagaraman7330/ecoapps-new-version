import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { socialMediaSchema } from '../data/schemas';
import Header from '../components/Header';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Social Media Marketing Subcomponents
import SocialMediaHero from '../components/social-media/SocialMediaHero';
import SocialMediaServicesSection from '../components/social-media/SocialMediaServicesSection';
import SocialMediaBentoSection from '../components/social-media/SocialMediaBentoSection';
import SocialMediaProcessSection from '../components/social-media/SocialMediaProcessSection';
import SocialMediaStatsSection from '../components/social-media/SocialMediaStatsSection';
import SocialMediaCtaSection from '../components/social-media/SocialMediaCtaSection';

// Reuse the same CSS (identical layout & animations)
import '../styles/seo-service.css';

export default function SocialMediaMarketing() {
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
        title="Grow Your Brand with the Best Social Media Marketing Services"
        description="Grow your brand with social media marketing services in Coimbatore focused on engaging content, audience growth, visibility and conversions."
        canonical="https://ecoappssolutions.com/social-media-marketing"
        schema={socialMediaSchema}
      />

      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Same EcoApps Header */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <main>
        {/* 1. Interactive Hero with Draggable Cards & Dynamic Morphing */}
        <SocialMediaHero onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 2. Why Choose Eco Apps Solutions - Stats Section */}
        <SocialMediaStatsSection />

        {/* 3. Why Choose - Bento Architecture with Animated Cells */}
        <SocialMediaBentoSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 4. Our Social Media Marketing Services - Dark Section with 6 Cards */}
        <SocialMediaServicesSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 5. 6-Step Social Media Marketing Process */}
        <SocialMediaProcessSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

        {/* 6. Final Call To Action Banner */}
        <SocialMediaCtaSection onHover={handleCursorHover} onLeave={handleCursorLeave} />
      </main>

      {/* Same EcoApps Footer */}
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
