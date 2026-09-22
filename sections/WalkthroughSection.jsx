import React from 'react';
import DitherCanvas from '../common/DitherCanvas';
import StageDecorations from '../common/StageDecorations';

export default function WalkthroughSection() {
  return (
    <section className="walk" aria-label="Watch a brand get built">
      <header className="walk-head">
        <h2 className="walk-title">Watch one get built, start to published</h2>
      </header>

      <div className="stage-frame walk-stage">
        <div className="dither-field stage-mat" aria-hidden="true">
          <DitherCanvas fieldIndex={3} />
          <div className="stage-content">
            <div className="walk-media">
              <button
                type="button"
                className="walk-play"
                aria-label="Play the Vessa walkthrough, 2 minutes 49 seconds"
              >
                <img
                  className="walk-poster"
                  src="/landing/walkthrough-poster-1920.webp"
                  srcSet="/landing/walkthrough-poster-960.webp 960w, /landing/walkthrough-poster-1280.webp 1280w, /landing/walkthrough-poster-1920.webp 1920w"
                  sizes="min(78rem, calc(100vw - 3rem))"
                  alt="The VANTA motion section in Vessa, showing the Glide and Push ease demos"
                  width="1920"
                  height="1080"
                  loading="lazy"
                  decoding="async"
                />
                <span className="walk-play-ui" aria-hidden="true">
                  <span className="walk-play-disc">
                    <svg viewBox="0 0 24 24" focusable="false">
                      <path d="M9 6.2 18.2 12 9 17.8Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="walk-play-label">Watch the walkthrough · 2:49</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <StageDecorations />
      </div>
    </section>
  );
}
