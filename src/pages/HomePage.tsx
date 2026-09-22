import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Modular Components
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { homeSchema } from '../data/schemas';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Features from '../components/Features';
import ServiceBandsSticky from '../components/ServiceBandsSticky';
import ClientMarquee from '../components/ClientMarquee';
import AwardsCurvedSection from '../components/AwardsCurvedSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);
  const constellationInnerRef = useRef<HTMLDivElement>(null);
  const [isCursorHovered, setIsCursorHovered] = useState(false);

  useEffect(() => {
    // 1. SVG Line Dash Arrays Setup & Page Load Animation
    const ctx = gsap.context(() => {
      const svgPaths = document.querySelectorAll<SVGPathElement>('.constellation-lines path');
      svgPaths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      // Initial State settings
      gsap.set('.title-inner', { y: '105%', opacity: 0 });
      gsap.set('.hero-badge, .hero-desc, .cta-btn, .secondary-btn, .workspace', { opacity: 0, y: 16 });
      gsap.set('.tile', { opacity: 0, scale: 0.7 });

      // Page entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
      }, 0.05)
        .to('.title-inner', {
          y: '0%',
          opacity: 1,
          duration: 0.95,
          stagger: 0.1,
          ease: 'power3.out',
        }, 0.15)
        .to('.hero-desc', {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
        }, 0.45)
        .to('.cta-btn, .secondary-btn', {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: 'power3.out',
        }, 0.55)
        .to('.tile', {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          stagger: { each: 0.04, from: 'center' },
          ease: 'back.out(1.5)',
        }, 0.3)
        .to('.constellation-lines path', {
          strokeDashoffset: 0,
          duration: 0.85,
          stagger: 0.03,
          ease: 'power2.inOut',
        }, 0.4)
        .to('.workspace', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        }, 0.75)
        .fromTo(
          '.fpill',
          { y: 16, scale: 0.8, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'back.out(1.4)',
          },
          0.75
        )
        .fromTo(
          '.workspace-label, .learn-more',
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' },
          0.8
        );

      // 4. Stat Counter Animations
      document.querySelectorAll<HTMLElement>('.stat-num').forEach((el) => {
        const target = parseInt(el.dataset.num || '0', 10);
        const suffix = el.dataset.suffix || '';

        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                const current = Math.floor(obj.val);
                let display = `${current}`;
                if (target >= 1000) {
                  display = current.toLocaleString();
                } else if (el.dataset.prefix) {
                  display = `${el.dataset.prefix}${current}`;
                }
                el.innerHTML = `${display}<span class="accent text-sky-600">${suffix}</span>`;
              }
            });
          }
        });
      });

      // 5. Section Title Scroll Reveals
      const revealElements = (selector: string, start = 'top 88%') => {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        elements.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 28 },
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

      revealElements('.features-title-reveal', 'top 88%');
      revealElements('.final-cta-h2-reveal', 'top 88%');
      revealElements('.section-title-reveal', 'top 88%');
      revealElements('.quote-text-reveal', 'top 88%');

      // 6. Feature Cards Stagger In (all screen sizes via GSAP)
      gsap.from('.feature-card', {
        x: -24,
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.feature-cards',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        }
      });

      // 6b. Service rows stagger in (all screen sizes via GSAP)
      gsap.from('.services-section .divide-y > div', {
        y: 20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.services-section .divide-y',
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true
        }
      });

      // 7. Quote Mark Elastic Pop
      gsap.from('.quote-mark', {
        scale: 0,
        rotation: -45,
        duration: 1.2,
        ease: 'elastic.out(1, 0.6)',
        scrollTrigger: {
          trigger: '.quote-mark',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // 8. Final CTA Card Entrance
      gsap.from('.final-cta-card', {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.final-cta-card',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // 9. 3D Tilt on Feature Cards
      document.querySelectorAll<HTMLElement>('.feature-card').forEach((card) => {
        const handleCardMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, {
            rotationY: x * 8,
            rotationX: -y * 8,
            y: -12,
            duration: 0.5,
            transformPerspective: 1200,
            ease: 'power2.out'
          });
        };

        const handleCardMouseLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            y: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)'
          });
        };

        card.addEventListener('mousemove', handleCardMouseMove);
        card.addEventListener('mouseleave', handleCardMouseLeave);
      });

      ScrollTrigger.refresh();
    }, containerRef);


    const handleConstellationMouseMove = (e: MouseEvent) => {
      if (!constellationRef.current || !constellationInnerRef.current) return;
      const rect = constellationRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(constellationInnerRef.current, {
        rotationY: x * 14,
        rotationX: -y * 10,
        duration: 0.8,
        transformPerspective: 1500,
        ease: 'power2.out'
      });
    };

    const handleConstellationMouseLeave = () => {
      if (!constellationInnerRef.current) return;
      gsap.to(constellationInnerRef.current, {
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    const constEl = constellationRef.current;
    if (constEl) {
      constEl.addEventListener('mousemove', handleConstellationMouseMove);
      constEl.addEventListener('mouseleave', handleConstellationMouseLeave);
    }

    return () => {
      if (constEl) {
        constEl.removeEventListener('mousemove', handleConstellationMouseMove);
        constEl.removeEventListener('mouseleave', handleConstellationMouseLeave);
      }
      ctx.revert();
    };
  }, []);

  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      {/* SEO Metadata & Canonical */}
      <SEO
        title="Best Digital Marketing Company in Coimbatore"
        description="Eco Apps Solutions is a leading digital marketing company in Coimbatore offering SEO, Google Ads, Meta Ads, branding and lead generation services."
        canonical="https://ecoappssolutions.com/"
        schema={homeSchema}
      />

      {/* Interactive Cursor Component */}
      <Cursor isHovered={isCursorHovered} />

      {/* Ambient background glows */}
      <div className="ambient-1 pointer-events-none" />
      <div className="ambient-2 pointer-events-none" />

      {/* Modular Components Hierarchy */}
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <Hero
        constellationRef={constellationRef}
        constellationInnerRef={constellationInnerRef}
        onHover={handleCursorHover}
        onLeave={handleCursorLeave}
      />

      <StatsBar />

      <Features onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <ServiceBandsSticky onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <ClientMarquee />

      <AwardsCurvedSection onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <GoogleReviewsSection />

      <FinalCTA onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
