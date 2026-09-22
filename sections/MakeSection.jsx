import React, { useState } from 'react';
import DitherCanvas from '../common/DitherCanvas';

const STEPS = [
  {
    tab: 'Scan your site',
    title: 'Point it at a URL.',
    body: 'It reads your live site for the real colors, the fonts and your logo, and drafts a brief from the page in your own words. A few sentences about the brand work just as well.'
  },
  {
    tab: 'Generate',
    title: 'A complete draft in 30 seconds.',
    body: 'It creates every section, writes the rules, and lays out real tokens for your colors, typography, logo variations and animation ease curves.'
  },
  {
    tab: 'Refine',
    title: 'Refine and publish in one click.',
    body: 'Fine-tune any value with live controls, connect custom animations, and publish directly to a permanent, interactive guideline link.'
  }
];

export default function MakeSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % STEPS.length);
  };

  return (
    <section id="make" className="make" aria-label="The AI writes your first draft">
      <header className="make-head">
        <h2 className="make-title">The AI writes your first draft.</h2>
        <p className="make-lead">
          Give it your website, or a few sentences about the brand. It fills every section with your real colors, type, logo and motion, then hands you a full guideline to shape.
        </p>
      </header>

      <div className="make-cols">
        <div className="make-stage">
          <div className="dither-field is-fill make-field" aria-hidden="true">
            <DitherCanvas fieldIndex={2} />
          </div>

          <div className="make-card">
            {/* Step 0 Graphic */}
            <div className={`gfx ${currentStep === 0 ? 'on' : ''}`} aria-hidden="true">
              <div className="mini mini--site">
                <span className="site-chrome">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="site-url">yourbrand.com</span>
                <span className="site-bar" style={{ background: '#1F2DE6' }} />
                <span className="site-skel" style={{ width: '68%' }} />
                <span className="site-skel" style={{ width: '44%' }} />
              </div>

              <svg className="wire" viewBox="0 0 120 60" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 12 C 70 12, 56 30, 116 30" />
                <path d="M4 30 C 70 30, 56 30, 116 30" />
                <path d="M4 48 C 70 48, 56 30, 116 30" />
                <path className="wire-pulse" pathLength="100" d="M4 12 C 70 12, 56 30, 116 30" />
                <path className="wire-pulse" pathLength="100" d="M4 30 C 70 30, 56 30, 116 30" />
                <path className="wire-pulse" pathLength="100" d="M4 48 C 70 48, 56 30, 116 30" />
              </svg>

              <div className="mini mini--pull">
                <span className="pull-row">
                  <i className="pull-swatch" style={{ background: '#101216' }} />
                  <i className="pull-swatch" style={{ background: '#EEF0F3' }} />
                  <i className="pull-swatch" style={{ background: '#1F2DE6' }} />
                  <i className="pull-swatch" style={{ background: '#3F434B' }} />
                  <i className="pull-swatch" style={{ background: '#D3D7DE' }} />
                </span>
                <span className="pull-line">
                  <b>Aa</b> Switzer
                </span>
                <span className="pull-line pull-line--mark">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16" fill="currentColor">
                    <g>
                      <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z" />
                    </g>
                  </svg>{' '}
                  Logo found
                </span>
              </div>
            </div>

            {/* Step 1 Graphic */}
            <div className={`gfx gfx--run ${currentStep === 1 ? 'on' : ''}`} aria-hidden="true">
              <p className="run-head">Writing the guideline</p>
              <ul className="run-list">
                <li className="run-row" data-state="done">
                  <span className="run-mark">
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.5l3.5 3.5L13 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="run-name">Intro</span>
                  <span className="run-state">written</span>
                </li>
                <li className="run-row" data-state="done">
                  <span className="run-mark">
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.5l3.5 3.5L13 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="run-name">Color</span>
                  <span className="run-state">written</span>
                </li>
                <li className="run-row" data-state="done">
                  <span className="run-mark">
                    <svg viewBox="0 0 16 16">
                      <path d="M3 8.5l3.5 3.5L13 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="run-name">Typography</span>
                  <span className="run-state">written</span>
                </li>
                <li className="run-row" data-state="writing">
                  <span className="run-mark">
                    <span className="run-pulse" />
                  </span>
                  <span className="run-name">Motion</span>
                  <span className="run-state">writing…</span>
                </li>
                <li className="run-row" data-state="queued">
                  <span className="run-mark">
                    <span className="run-wait" />
                  </span>
                  <span className="run-name">Voice</span>
                  <span className="run-state" />
                </li>
                <li className="run-row" data-state="queued">
                  <span className="run-mark">
                    <span className="run-wait" />
                  </span>
                  <span className="run-name">Applications</span>
                  <span className="run-state" />
                </li>
              </ul>
            </div>

            {/* Step 2 Graphic */}
            <div className={`gfx ${currentStep === 2 ? 'on' : ''}`} aria-hidden="true">
              <div className="mini mini--field">
                <span className="field-label">Accent</span>
                <span className="field-input">
                  <span className="field-swatch" style={{ background: '#1F2DE6' }} /> #1F2DE6
                </span>
              </div>
              <svg className="wire wire--single" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 20 C 64 20, 56 20, 116 20" />
                <path className="wire-pulse" pathLength="100" d="M4 20 C 64 20, 56 20, 116 20" />
              </svg>
              <div className="mini mini--page">
                <span className="page-chip">
                  <i className="page-dot" />vessa.design/brand/vanta
                </span>
                <span className="page-bar" style={{ background: '#1F2DE6' }} />
                <span className="page-skel" style={{ width: '62%' }} />
                <span className="page-skel" style={{ width: '40%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="make-copy">
          <div className="make-timeline">
            <div className="m-tabbar" role="group" aria-label="How it works">
              {STEPS.map((step, idx) => (
                <button
                  key={step.tab}
                  type="button"
                  className="m-tabbar-btn"
                  data-active={idx === currentStep ? 'true' : 'false'}
                  aria-pressed={idx === currentStep}
                  onClick={() => setCurrentStep(idx)}
                >
                  {step.tab}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="make-next"
              aria-label="Next step"
              onClick={handleNext}
            >
              <svg className="make-ring" viewBox="0 0 40 40" aria-hidden="true">
                <circle
                  className="make-ring-fill"
                  cx="20"
                  cy="20"
                  r="19"
                  style={{ strokeDasharray: '119.38', strokeDashoffset: '119.38' }}
                />
              </svg>
              <svg className="make-arrow" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8 H12 M8.5 4.5 L12 8 L8.5 11.5" />
              </svg>
            </button>
          </div>

          <div className="make-copy-text">
            <h3 className="copy-title">{STEPS[currentStep].title}</h3>
            <p className="copy-body">{STEPS[currentStep].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
