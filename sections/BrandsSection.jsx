import React, { useRef, useState } from 'react';

function BrandCard({ href, poster, videoSrc, alt, name, line }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <a
      href={href}
      className="brand"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <div className="brand-media">
        <img
          className="brand-poster"
          src={poster}
          alt={alt}
          width="1280"
          height="804"
          loading="lazy"
          decoding="async"
        />
        <video
          ref={videoRef}
          className={`brand-video ${isPlaying ? 'is-playing' : ''}`}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex="-1"
        />
      </div>
      <div className="brand-foot">
        <h3 className="brand-name">{name}</h3>
        <p className="brand-line">{line}</p>
      </div>
    </a>
  );
}

export default function BrandsSection() {
  return (
    <section className="brands" aria-label="Guidelines made with Vessa">
      <header className="brands-head">
        <h2 className="brands-title">Two live brands, and neither looks like Vessa.</h2>
      </header>

      <div className="brands-grid">
        <BrandCard
          href="https://vessa.design/brand/vanta"
          poster="/landing/brands/vanta-poster.webp"
          videoSrc="/landing/brands/vanta-scroll.mp4"
          alt="The VANTA brand guideline, published with Vessa"
          name="VANTA"
          line="Built for the distance nobody watches."
        />
        <BrandCard
          href="https://vessa.design/brand/pythia"
          poster="/landing/brands/pythia-poster.webp"
          videoSrc="/landing/brands/pythia-scroll.mp4"
          alt="The Pythia brand guideline, published with Vessa"
          name="Pythia"
          line="Pythia tells you what happens next."
        />
      </div>
    </section>
  );
}
