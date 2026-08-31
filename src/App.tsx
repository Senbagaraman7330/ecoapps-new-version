import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Modular Components
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkspaceFeatures from './components/WorkspaceFeatures';
import StatsBar from './components/StatsBar';
import Features from './components/Features';
import QuoteSection from './components/QuoteSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);
  const constellationInnerRef = useRef<HTMLDivElement>(null);
  const [isCursorHovered, setIsCursorHovered] = useState(false);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // 2. SVG Line Dash Arrays Setup & Page Load Animation
    const ctx = gsap.context(() => {
      const svgPaths = document.querySelectorAll<SVGPathElement>('.constellation-lines path');
      svgPaths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });

      // Initial State settings
      gsap.set('.site-header, .hero-badge, .hero-desc, .hero-cta-wrap, .workspace', { opacity: 0 });
      gsap.set('.title-inner', { y: '110%' });
      gsap.set('.tile', { opacity: 0, scale: 0 });

      // Page entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to('.site-header', { opacity: 1, duration: 0.8 }, 0)
        .to('.hero-badge', { opacity: 1, y: 0, duration: 0.6 }, 0.1)
        .to(
          '.title-inner',
          { y: 0, duration: 1.1, stagger: 0.08, ease: 'power4.out' },
          0.2
        )
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, 0.8)
        .fromTo(
          '.hero-desc',
          { y: 20 },
          { y: 0, duration: 0.8 },
          0.8
        )
        .to('.hero-cta-wrap', { opacity: 1, duration: 0.7 }, 0.95)
        .fromTo(
          '.hero-cta-wrap',
          { y: 20 },
          { y: 0, duration: 0.7 },
          0.95
        )
        .to(
          '.tile',
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: { each: 0.06, from: 'center' },
            ease: 'elastic.out(1, 0.6)'
          },
          0.5
        )
        .to(
          '.constellation-lines path',
          {
            strokeDashoffset: 0,
            duration: 1.4,
            stagger: 0.05,
            ease: 'power2.inOut'
          },
          0.8
        )
        .to('.workspace', { opacity: 1, duration: 0.8 }, 1.4)
        .from(
          '.fpill',
          {
            y: 30,
            scale: 0.5,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.6)'
          },
          1.4
        )
        .from(
          '.workspace-label, .learn-more',
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          1.4
        );

      // 3. Hero Parallax Scroll
      gsap.to('.constellation', {
        y: 100,
        scale: 0.92,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('.hero-left', {
        y: 60,
        opacity: 0.4,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

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

      // 5. Section Title Word-by-Word Scroll Reveals
      const revealWords = (selector: string, triggerSel: string, isAccentHighlight = false) => {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        elements.forEach((el) => {
          const text = el.innerText;
          const words = text.split(' ');
          el.innerHTML = words
            .map((w) => {
              const isAccent = isAccentHighlight && (w.toLowerCase().includes('good') || w.toLowerCase().includes('leads') || w.toLowerCase().includes('ones'));
              return `<span class="sword inline-block overflow-hidden pb-[0.12em] align-top"><span class="sword-inner inline-block will-change-transform ${isAccent ? 'text-sky-400' : ''}">${w}</span></span>`;
            })
            .join(' ');
        });

        gsap.to(`${selector} .sword-inner`, {
          y: 0,
          duration: 1,
          stagger: 0.035,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: triggerSel,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      };

      revealWords('.features-title-reveal', '.features-head');
      revealWords('.quote-text-reveal', '.quote-section');
      revealWords('.final-cta-h2-reveal', '.final-cta-card', true);

      // 6. Feature Cards Stagger In
      gsap.from('.feature-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.feature-cards',
          start: 'top 75%',
          toggleActions: 'play none none reverse'
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

    // 10. Constellation 3D Tilt
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
      gsap.ticker.remove(updateLenis);
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
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

      <WorkspaceFeatures onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <StatsBar />

      <Features onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <QuoteSection />

      <FinalCTA onHover={handleCursorHover} onLeave={handleCursorLeave} />

      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
