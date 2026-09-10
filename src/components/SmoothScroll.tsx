import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global master Lenis reference
export let globalLenis: Lenis | null = null;

export default function SmoothScroll() {
  const { pathname, hash } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize master Lenis instance for the entire website
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    // Connect Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // RAF loop via GSAP ticker for synchronized 60/120fps performance
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Intercept in-page hash links for butter-smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.2,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
      globalLenis = null;
    };
  }, []);

  // 2. Route & Hash Change Handling
  useEffect(() => {
    if (!lenisRef.current) return;

    if (!hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(element, { offset: -80, duration: 1.2 });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}
