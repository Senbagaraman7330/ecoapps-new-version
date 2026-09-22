import React, { useRef, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import '../seo/LightsparkSeoHero.css';
import {
  DESKTOP_MARKETING_TILES,
} from '../../data/marketingHeroServices';
import gsap from 'gsap';

interface SocialMediaHeroProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function SocialMediaHero({ onHover, onLeave }: SocialMediaHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);

  // Mouse Move Handler for spotlight on dots
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (dotsRef.current) {
      dotsRef.current.style.setProperty('--mx', `${x}px`);
      dotsRef.current.style.setProperty('--my', `${y}px`);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = centerTextRef.current;
      if (!el) return;

      const badge = el.querySelector('.ls-seo-pill-tag');
      const heading = el.querySelector('.ls-seo-heading');
      const subhead = el.querySelector('.ls-seo-subhead');
      const ctas = el.querySelectorAll('.ls-seo-ctas > *');

      gsap.set([badge, heading, subhead], { opacity: 0, y: 24, filter: 'blur(8px)' });
      gsap.set(ctas, { opacity: 0, y: 18, scale: 0.95 });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 });

      tl.to(badge, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85 }, 0.1)
        .to(heading, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1 }, 0.25)
        .to(subhead, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0 }, 0.42)
        .to(
          ctas,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: 'back.out(1.3)',
            clearProps: 'transform',
          },
          0.6
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const currentTile =
    DESKTOP_MARKETING_TILES.find((t) => t.id === 'social-media') || DESKTOP_MARKETING_TILES[2];

  return (
    <section
      ref={heroRef}
      className="ls-seo-hero"
      aria-label="Social Media Marketing Services Hero"
      onMouseMove={handleMouseMove}
    >
      {/* Background Bleed & Spotlight Dotted Matrix */}
      <div className="ls-seo-bleed">
        <div
          ref={dotsRef}
          className="ls-seo-dots"
          style={{ '--spot-r': '380px' } as React.CSSProperties}
        />

        {/* Subtle Bottom Section Fade */}
        <div className="ls-seo-bottom-fade" />
      </div>

      {/* Hero Center Typography & Dynamic Content */}
      <div ref={centerTextRef} className="ls-seo-center">
        {/* Dynamic Tagline Badge */}
        <div className="ls-seo-pill-tag">
          <span className="ls-seo-pill-dot" />
          <span>{currentTile.badge}</span>
        </div>

        {/* Dynamic Headline */}
        <h1 className="ls-seo-heading">
          {currentTile.headlinePrefix}{' '}
          <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            {currentTile.headlineGradient}
          </span>
          {currentTile.headlineSuffix ? ` ${currentTile.headlineSuffix}` : ''}
        </h1>

        {/* Dynamic Subhead */}
        <p className="ls-seo-subhead max-w-xl mx-auto">
          {currentTile.desc}
        </p>

        {/* Action Buttons */}
        <div className="ls-seo-ctas">
          <a
            href={currentTile.primaryCtaHref}
            className="ls-seo-btn-primary"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>{currentTile.primaryCtaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={currentTile.secondaryCtaHref}
            className="ls-seo-btn-secondary"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            <span>{currentTile.secondaryCtaText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
