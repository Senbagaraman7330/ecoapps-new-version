import React from 'react';
import CtaButton from '../common/CtaButton';

export default function PricingSection() {
  return (
    <section id="pricing" className="pricing" aria-label="Pricing">
      <header className="pricing-head">
        <h2 className="pricing-title">You pay once. Your client never does.</h2>
        <p className="pricing-lead">
          Build the whole guideline free. You pay once, when you publish, and the link stays live after that. No seats to add, and no renewal notice landing on your client's desk next year.
        </p>
      </header>

      <div className="plans">
        {/* Card 1: One brand */}
        <article className="is-featured plan">
          <p className="plan-name">
            <span className="plan-dot" aria-hidden="true" /> One brand
          </p>
          <p className="plan-price">€39</p>
          <p className="plan-unit">once, per brand, plus VAT</p>
          <p className="plan-line">
            Build free for as long as you like. One payment when you publish, and the brand is yours.
          </p>
          <ul className="plan-list" role="list">
            <li>
              <svg className="plan-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
              </svg>
              The whole editor before you pay a cent
            </li>
            <li>
              <svg className="plan-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
              </svg>
              Live at vessa.design/brand/your-brand
            </li>
            <li>
              <svg className="plan-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
              </svg>
              Stays editable after you publish
            </li>
            <li className="is-limit">
              <svg className="plan-cross" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4.5 4.5 L11.5 11.5 M11.5 4.5 L4.5 11.5" />
              </svg>
              One brand. The next one is its own €39.
            </li>
          </ul>
        </article>

        {/* Card 2: Five brands */}
        <article className="plan">
          <p className="plan-name">Five brands</p>
          <p className="plan-price">€195</p>
          <p className="plan-unit">once, plus VAT</p>
          <p className="plan-line">
            For studios handing off often. Use them on any client, whenever.
          </p>
          <ul className="plan-list" role="list">
            <li>
              <svg className="plan-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
              </svg>
              Everything in one brand, five times
            </li>
            <li>
              <svg className="plan-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
              </svg>
              Spread across any client work
            </li>
            <li>
              <svg className="plan-tick" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" />
              </svg>
              They never expire
            </li>
          </ul>
        </article>
      </div>

      <footer className="pricing-foot">
        <div className="pricing-notes">
          <p className="pricing-note">€39, once per brand. There's no subscription and nothing renews.</p>
          <p className="pricing-note">Not for you? Email within 14 days and it's refunded in full.</p>
        </div>
        <div className="pricing-act">
          <CtaButton
            text="Start building free"
            href="https://vessa.design/signup?next=create"
            variant="accent"
          />
          <p className="pricing-proof">
            <span className="pricing-proof-pill">680+</span> designers signed up
          </p>
        </div>
      </footer>
    </section>
  );
}
