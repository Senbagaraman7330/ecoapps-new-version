import React from 'react';
import CtaButton from '../common/CtaButton';

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Animated brand guidelines your clients actually use">
      <div className="hero-copy">
        <span />
        <h1 className="hero-title">Animated brand guidelines your clients actually use.</h1>
        <p className="hero-sub">
          Vessa turns your brand into a live page you send as a link. Colors copy when you click them, the motion plays right in the page, and{' '}
          <strong className="hero-sub-strong">Claude or Cursor can build the whole thing with you</strong>.
        </p>
        <CtaButton
          text="Start building free"
          href="https://vessa.design/signup?next=create"
          variant="accent"
        />
        <p className="hero-note">Building is free, and your client never gets a bill.</p>
        <p className="hero-proof">
          <span className="hero-proof-pill">680+</span> designers signed up{' '}
        </p>
      </div>
    </section>
  );
}
