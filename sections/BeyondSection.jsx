import React from 'react';
import StageDecorations from '../common/StageDecorations';

export default function BeyondSection() {
  return (
    <section className="beyond" aria-label="Share your brand beyond the company">
      <div className="beyond-proof">
        <StageDecorations />

        <div className="beyond-copy">
          <p className="beyond-body">
            Your brand doesn't stay inside the company. Agencies, partners, the developer who joined this week. Everyone works with it, and almost nobody has the file.
          </p>
          <p className="beyond-turn">
            The world's leading companies put their brand guidelines on the web. It's time you do too.
          </p>
        </div>

        <a
          className="proof-cell"
          href="https://design.cash.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/landing/beyond-cashapp.webp"
            alt="Cash App's public brand guidelines site"
            width="1600"
            height="1034"
            loading="lazy"
          />
          <span className="proof-caption">
            design.cash.app{' '}
            <svg className="proof-arrow" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M3 9 9 3M4.5 3H9v4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <a
          className="proof-cell"
          href="https://brand.dropbox.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/landing/beyond-dropbox.webp"
            alt="Dropbox's public brand guidelines site"
            width="1600"
            height="1005"
            loading="lazy"
          />
          <span className="proof-caption">
            brand.dropbox.com{' '}
            <svg className="proof-arrow" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M3 9 9 3M4.5 3H9v4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
