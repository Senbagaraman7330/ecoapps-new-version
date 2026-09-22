import React, { useState, useEffect, useRef } from 'react';
import DitherCanvas from '../common/DitherCanvas';
import StageDecorations from '../common/StageDecorations';

const TABS = [
  { id: 'intro', label: 'Introduction', src: '/landing/showcase/intro.jpg', alt: "VANTA's introduction section on the live guideline" },
  { id: 'logo', label: 'Logo', src: '/landing/showcase/logo.png', alt: "VANTA's logo section on the live guideline" },
  { id: 'color', label: 'Color', src: '/landing/showcase/color.png', alt: "VANTA's color section on the live guideline" },
  { id: 'typography', label: 'Typography', src: '/landing/showcase/typography.png', alt: "VANTA's typography section on the live guideline" },
  { id: 'motion', label: 'Motion', src: '/landing/showcase/motion.png', alt: "VANTA's motion section on the live guideline" },
  { id: 'moodboard', label: 'Moodboard', src: '/landing/showcase/moodboard.jpg', alt: "VANTA's moodboard section on the live guideline" },
  { id: 'applications', label: 'Applications', src: '/landing/showcase/applications.jpg', alt: "VANTA's applications section on the live guideline" },
  { id: 'assets', label: 'Assets', src: '/landing/showcase/assets.png', alt: "VANTA's assets section on the live guideline" }
];

const DURATION = 5000;
const CIRCUMFERENCE = 119.38;

export default function HowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fieldStyle, setFieldStyle] = useState({});
  const [isFitted, setIsFitted] = useState(false);

  const tabbarRef = useRef(null);
  const buttonRefs = useRef([]);
  const ringRef = useRef(null);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  // Update tab indicator pill position
  useEffect(() => {
    function updateField() {
      const tabbar = tabbarRef.current;
      const activeBtn = buttonRefs.current[activeIndex];
      if (!tabbar || !activeBtn) return;

      const tabRect = tabbar.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();

      setFieldStyle({
        width: `${btnRect.width}px`,
        height: `${btnRect.height}px`,
        transform: `translate(${btnRect.left - tabRect.left}px, ${btnRect.top - tabRect.top}px)`,
        visibility: 'visible'
      });
      setIsFitted(true);
    }

    updateField();
    window.addEventListener('resize', updateField);
    return () => window.removeEventListener('resize', updateField);
  }, [activeIndex]);

  // Auto-timer ring animation
  useEffect(() => {
    if (isPaused) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    startTimeRef.current = null;

    function step(timestamp) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);

      if (ringRef.current) {
        ringRef.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - progress)}`;
      }

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setActiveIndex((prev) => (prev + 1) % TABS.length);
      }
    }

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeIndex, isPaused]);

  const handleTabClick = (idx) => {
    setActiveIndex(idx);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TABS.length);
  };

  return (
    <section id="examples" className="how" aria-label="Every section of the guideline">
      <div
        className="how-stage-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="how-stage">
          <div className="dither-field is-fill how-field" aria-hidden="true">
            <DitherCanvas fieldIndex={1} />
          </div>

          <div className="how-bar">
            <div
              className="m-tabbar"
              role="group"
              aria-label="Guideline sections"
              ref={tabbarRef}
              data-fitted={isFitted ? 'true' : undefined}
            >
              <span
                className="m-tabbar-field"
                aria-hidden="true"
                style={fieldStyle}
              />
              {TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  ref={(el) => (buttonRefs.current[idx] = el)}
                  type="button"
                  className="m-tabbar-btn"
                  data-active={idx === activeIndex ? 'true' : 'false'}
                  aria-pressed={idx === activeIndex}
                  onClick={() => handleTabClick(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="how-next"
              aria-label="Next section"
              onClick={handleNext}
            >
              <svg className="how-ring" viewBox="0 0 40 40" aria-hidden="true">
                <circle
                  ref={ringRef}
                  className="how-ring-fill"
                  cx="20"
                  cy="20"
                  r="19"
                  style={{
                    strokeDasharray: CIRCUMFERENCE,
                    strokeDashoffset: CIRCUMFERENCE
                  }}
                />
              </svg>
              <svg className="how-arrow" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8 H12 M8.5 4.5 L12 8 L8.5 11.5" />
              </svg>
            </button>
          </div>

          <div className="how-shots">
            {TABS.map((tab, idx) => (
              <img
                key={tab.id}
                className={`how-shot ${idx === activeIndex ? 'is-active' : ''}`}
                src={tab.src}
                alt={tab.alt}
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'auto'}
                decoding="async"
              />
            ))}
          </div>
        </div>

        <StageDecorations />
      </div>
    </section>
  );
}
