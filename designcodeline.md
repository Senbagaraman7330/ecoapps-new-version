<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<div class="ambient-1"></div>
<div class="ambient-2"></div>
<div class="cursor"></div>

<header class="site-header">
  <div class="logo">
    <span class="logo-cube">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <defs>
          <linearGradient id="cubeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3a3a3a" />
            <stop offset="100%" stop-color="#0a0a0a" />
          </linearGradient>
        </defs>
        <path d="M17 3 L29 9 L29 21 L17 27 L17 15 L5 9 Z" fill="url(#cubeGrad)" stroke="#000" stroke-width="0.5" />
        <path d="M5 9 L17 15 L17 27 L5 21 Z" fill="#2a2a2a" stroke="#000" stroke-width="0.5" />
        <path d="M17 3 L29 9 L17 15 L5 9 Z" fill="#444" stroke="#000" stroke-width="0.5" />
      </svg>
    </span>
    <span>DERMEXCEL</span>
  </div>
  <nav class="header-nav">
    <a href="#">Analytics</a>
    <a href="#">Features
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </a>
    <a href="#">Blog</a>
    <a href="#">Get in touch</a>
  </nav>
  <a href="#" class="header-btn">Start for free
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </a>
</header>

<main class="hero">
  <div class="hero-left">
    <h1 class="hero-title">
      <span class="title-line"><span class="title-inner">Convert traffic</span></span>
      <span class="title-line"><span class="title-inner">and get better</span></span>
      <span class="title-line"><span class="title-inner">conversions</span></span>
    </h1>
    <p class="hero-desc">No more lost data. From now you can get the best output of your traffic and maximize every conversion rate.</p>
    <a href="#" class="cta-btn">Start for free
      <span class="cta-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  </div>

  <div class="hero-right">
    <div class="constellation" id="constellation">
      <svg class="constellation-lines" viewBox="0 0 600 660" preserveAspectRatio="xMidYMid meet">
        <!-- top branch -->
        <path d="M 295 64 C 270 90, 220 110, 166 152" />
        <path d="M 305 64 C 330 90, 380 110, 434 152" />
        <!-- top to center -->
        <path d="M 166 200 C 175 230, 230 260, 280 285" />
        <path d="M 434 200 C 425 230, 370 260, 320 285" />
        <!-- horizontal mid lines -->
        <path d="M 76 305 C 130 305, 200 305, 248 302" />
        <path d="M 524 305 C 470 305, 400 305, 352 302" />
        <!-- center down -->
        <path d="M 285 372 C 270 405, 240 440, 214 452" />
        <path d="M 315 372 C 330 405, 360 440, 386 452" />
        <!-- pills to inner -->
        <path d="M 110 437 C 145 442, 175 448, 214 452" />
        <path d="M 490 437 C 455 442, 425 448, 386 452" />
        <!-- to hex -->
        <path d="M 214 502 C 235 540, 270 575, 300 603" />
        <path d="M 386 502 C 365 540, 330 575, 300 603" />
      </svg>

      <div class="constellation-inner" id="constellationInner">
        <!-- TOP LOCK -->
        <div class="tile size-pill black tile-lock">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
          </div>
        </div>

        <!-- MINT EXPAND -->
        <div class="tile size-main mint tile-expand">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="28" cy="28" r="22" stroke-opacity="0.15" />
                <path d="M14 14 L24 24 M14 14 L14 21 M14 14 L21 14" />
                <path d="M42 14 L32 24 M42 14 L42 21 M42 14 L35 14" />
                <path d="M14 42 L24 32 M14 42 L14 35 M14 42 L21 42" />
                <path d="M42 42 L32 32 M42 42 L42 35 M42 42 L35 42" />
              </svg>
            </div>
          </div>
        </div>

        <!-- YELLOW CHART -->
        <div class="tile size-main yellow tile-chart">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="8" y="12" width="40" height="28" rx="2" />
                <line x1="28" y1="40" x2="28" y2="48" />
                <line x1="22" y1="48" x2="34" y2="48" />
                <line x1="16" y1="32" x2="16" y2="36" />
                <line x1="22" y1="26" x2="22" y2="36" />
                <line x1="28" y1="22" x2="28" y2="36" />
                <line x1="34" y1="28" x2="34" y2="36" />
                <line x1="40" y1="18" x2="40" y2="36" />
              </svg>
            </div>
          </div>
        </div>

        <!-- PURPLE CLOUD -->
        <div class="tile size-main purple tile-cloud">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 30 a8 8 0 0 1 4-15 a10 10 0 0 1 19 4 a6 6 0 0 1 0 11 Z" />
                <circle cx="18" cy="42" r="1.4" fill="currentColor" />
                <circle cx="26" cy="44" r="1.4" fill="currentColor" />
                <circle cx="34" cy="42" r="1.4" fill="currentColor" />
                <circle cx="22" cy="48" r="1.2" fill="currentColor" />
                <circle cx="30" cy="48" r="1.2" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        <!-- BLACK DATABASE (CENTER) -->
        <div class="tile size-big black tile-db">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="28" cy="14" rx="14" ry="5" />
                <path d="M14 14 v14 a14 5 0 0 0 28 0 v-14" />
                <path d="M14 28 v14 a14 5 0 0 0 28 0 v-14" />
                <path d="M22 22 L34 34 M34 22 L22 34" stroke-opacity="0" />
              </svg>
            </div>
          </div>
        </div>

        <!-- MINT THUMB / HAND -->
        <div class="tile size-main mint tile-thumb">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 28 L14 46 L20 46 L20 28 Z" />
                <path d="M20 30 L26 18 a3 3 0 0 1 5.5 2.5 L29 28 L40 28 a4 4 0 0 1 4 4.5 L42 42 a4 4 0 0 1 -4 4 L24 46" />
                <path d="M30 12 L32 16 M36 14 L36 18 M40 18 L37 20" stroke-width="1.6" />
              </svg>
            </div>
          </div>
        </div>

        <!-- CURSOR PILL -->
        <div class="tile size-pill black tile-cursor">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linejoin="round">
                <path d="M7 4 L7 18 L11 14 L14 20 L17 19 L14 13 L18 13 Z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- YELLOW PERSON / RECYCLE -->
        <div class="tile size-main yellow tile-person">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="28" cy="28" r="20" stroke-dasharray="6 4" />
                <circle cx="28" cy="22" r="6" />
                <path d="M16 40 a12 10 0 0 1 24 0" />
                <path d="M44 18 L48 18 L48 14" />
                <path d="M12 38 L8 38 L8 42" />
              </svg>
            </div>
          </div>
        </div>

        <!-- PURPLE GLOBE -->
        <div class="tile size-main purple tile-globe">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="28" cy="28" r="18" />
                <ellipse cx="28" cy="28" rx="18" ry="7" />
                <ellipse cx="28" cy="28" rx="7" ry="18" />
                <path d="M10 28 L46 28" />
                <path d="M28 10 L28 46" />
              </svg>
            </div>
          </div>
        </div>

        <!-- THUMB UP PILL -->
        <div class="tile size-pill black tile-thumbpill">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M7 11v9a1 1 0 0 0 1 1h2v-10z" />
                <path d="M10 11l3-7a2 2 0 0 1 3.5 1.5L15.5 10H19a2 2 0 0 1 2 2.3l-1 6a2 2 0 0 1-2 1.7H10" />
              </svg>
            </div>
          </div>
        </div>

        <!-- MINT HEXAGON -->
        <div class="tile size-main mint tile-hex">
          <div class="tile-inner">
            <div class="tile-icon">
              <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M28 6 L46 16 L46 38 L28 48 L10 38 L10 16 Z" />
                <circle cx="28" cy="6" r="2.5" fill="currentColor" />
                <circle cx="46" cy="16" r="2.5" fill="currentColor" />
                <circle cx="46" cy="38" r="2.5" fill="currentColor" />
                <circle cx="28" cy="48" r="2.5" fill="currentColor" />
                <circle cx="10" cy="38" r="2.5" fill="currentColor" />
                <circle cx="10" cy="16" r="2.5" fill="currentColor" />
                <circle cx="28" cy="27" r="3.5" fill="currentColor" />
                <path d="M28 27 L28 6 M28 27 L46 16 M28 27 L46 38 M28 27 L28 48 M28 27 L10 38 M28 27 L10 16" stroke-width="1.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Sparkle decoration -->
      <div class="sparkle">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
      </div>
    </div>
  </div>
</main>

<section class="workspace">
  <h3 class="workspace-label">Workspace features</h3>
  <div class="feature-pills">
    <div class="fpill round">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f0f0f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </div>
    <div class="fpill wide-yellow">
      <svg width="64" height="40" viewBox="0 0 64 40" fill="none" stroke="#0f0f0f" stroke-width="2" stroke-linejoin="round">
        <circle cx="22" cy="20" r="10" fill="rgba(0,0,0,0.6)" stroke="none" />
        <path d="M38 30 L48 12 L58 30 Z" fill="#0f0f0f" />
      </svg>
    </div>
    <div class="fpill wide-purple">
      <svg width="64" height="40" viewBox="0 0 64 40" fill="none" stroke="#0f0f0f" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="6" y="10" width="22" height="22" />
        <line x1="6" y1="17" x2="28" y2="17" />
        <line x1="6" y1="24" x2="28" y2="24" />
        <line x1="13" y1="10" x2="13" y2="32" />
        <line x1="20" y1="10" x2="20" y2="32" />
        <g transform="translate(42 21)">
          <path d="M0 -8 L1.5 -1.5 L8 0 L1.5 1.5 L0 8 L-1.5 1.5 L-8 0 L-1.5 -1.5 Z" fill="#0f0f0f" stroke="none" />
        </g>
      </svg>
    </div>
  </div>
  <a href="#" class="learn-more">Learn more</a>
</section>

<section class="stats-bar">
  <div class="stats-grid">
    <div class="stat">
      <div class="stat-num" data-num="546">+0<span class="accent">k</span></div>
      <div class="stat-label">Active customers</div>
    </div>
    <div class="stat">
      <div class="stat-num" data-num="99">0<span class="accent">%</span></div>
      <div class="stat-label">Uptime guarantee</div>
    </div>
    <div class="stat">
      <div class="stat-num" data-num="2400">0<span class="accent">M</span></div>
      <div class="stat-label">Events tracked daily</div>
    </div>
    <div class="stat">
      <div class="stat-num" data-num="42">0<span class="accent">×</span></div>
      <div class="stat-label">Faster than the rest</div>
    </div>
  </div>
</section>

<section class="features">
  <div class="features-head">
    <div>
      <div class="section-eyebrow">02 / Built for teams</div>
      <h2 class="features-title">Three pillars. One platform. Zero busywork.</h2>
    </div>
    <div class="features-meta">
      VERSION 4.2<br>
      SHIPPED MAY 2026<br>
      24 INTEGRATIONS
    </div>
  </div>

  <div class="feature-cards">
    <div class="feature-card fc-mint">
      <div class="fc-num">01 — Capture</div>
      <h3>Every click. Every scroll. Every form.</h3>
      <p>Drop the snippet, walk away. We capture every meaningful event automatically — no manual tagging, no missed data.</p>
      <div class="fc-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M3 12a9 9 0 0 1 9-9M12 21a9 9 0 0 1-9-9M21 12a9 9 0 0 1-9 9M21 12a9 9 0 0 0-9-9" />
        </svg>
      </div>
    </div>

    <div class="feature-card fc-yellow">
      <div class="fc-num">02 — Understand</div>
      <h3>Funnels, cohorts, attribution — visual.</h3>
      <p>Drag-and-drop reports that don't require a PhD in SQL. See where users drop off, why, and what to fix first.</p>
      <div class="fc-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 4 4 6-6" />
        </svg>
      </div>
    </div>

    <div class="feature-card fc-purple">
      <div class="fc-num">03 — Convert</div>
      <h3>Ship experiments. Watch numbers move.</h3>
      <p>Native A/B testing with statistical confidence baked in. Stop guessing, start shipping changes that actually compound.</p>
      <div class="fc-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      </div>
    </div>
  </div>
</section>

<section class="quote-section">
  <span class="quote-mark">"</span>
  <blockquote class="quote-text">We replaced four tools with Makebelief and our conversion rate went up 38% in a quarter. The data finally tells a story we can act on.</blockquote>
  <div class="quote-author">— Trinette Eckard, Head of Growth at Makebelief</div>
</section>

<section class="final-cta">
  <div class="final-cta-card">
    <span class="orb orb-1"></span>
    <span class="orb orb-2"></span>
    <h2 class="final-cta-h2">Stop losing the <span class="accent">good ones.</span></h2>
    <p>Free for the first 10,000 events a month. No credit card. No sales call. Just better data, today.</p>
    <a href="#" class="cta-btn">Start for free
      <span class="cta-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  </div>
</section>

<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <h3>Traffo</h3>
      <p>The analytics platform for teams who'd rather ship than spreadsheet.</p>
    </div>
    <div class="footer-cols">
      <div class="footer-col">
        <h4>Product</h4>
        <a href="#">Analytics</a>
        <a href="#">Experiments</a>
        <a href="#">Sessions</a>
        <a href="#">Integrations</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Security</a>
        <a href="#">GDPR</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Dermal Health Science</span>
    <span>Made with attention</span>
  </div>
</footer>

:root {
  --bg: #f6f3eb;
  --bg-warm: #ecead4;
  --bg-deep: #e0ddc7;
  --ink: #0f0f0f;
  --ink-soft: #5a5a55;
  --mint: #c8ecc8;
  --mint-light: #dcf5dc;
  --mint-deep: #95c598;
  --yellow: #fbc536;
  --yellow-light: #ffd96a;
  --yellow-deep: #d99c10;
  --purple: #dcd0ee;
  --purple-light: #ece2f8;
  --purple-deep: #ab9bd0;
  --black: #1a1a1a;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  font-family: "Manrope", sans-serif;
  color: var(--ink);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  cursor: none;
  line-height: 1.5;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>");
  opacity: 0.1;
  pointer-events: none;
  z-index: 200;
  mix-blend-mode: multiply;
}

.ambient-1 {
  position: fixed;
  top: 10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(251, 197, 54, 0.1) 0%,
    transparent 60%
  );
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}
.ambient-2 {
  position: fixed;
  bottom: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(220, 208, 238, 0.18) 0%,
    transparent 60%
  );
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

/* Cursor */
.cursor {
  position: fixed;
  width: 12px;
  height: 12px;
  background: var(--ink);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s;
}

/* ============ HEADER ============ */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 56px;
  position: relative;
  z-index: 10;
}

.logo {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-cube {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.header-nav {
  display: flex;
  gap: 36px;
  align-items: center;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
}
.header-nav a {
  color: var(--ink-soft);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: none;
  transition: color 0.2s;
}
.header-nav a:hover {
  color: var(--ink);
}

.header-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  background: transparent;
  border: 1.5px solid var(--ink);
  border-radius: 12px;
  cursor: none;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 0 var(--ink);
}
.header-btn:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 0 var(--ink);
}
.header-btn:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 var(--ink);
}

/* ============ HERO ============ */
.hero {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 40px;
  padding: 40px 56px 40px;
  align-items: center;
  position: relative;
  z-index: 5;
  min-height: 720px;
}

.hero-left {
  padding-top: 20px;
}

.hero-title {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(48px, 5.8vw, 84px);
  line-height: 1;
  letter-spacing: -0.035em;
  margin-bottom: 32px;
}
.title-line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em;
}
.title-inner {
  display: inline-block;
  will-change: transform;
}

.hero-desc {
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink-soft);
  max-width: 380px;
  margin-bottom: 40px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 18px 32px;
  font-family: "Manrope", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background: linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 100%);
  border: none;
  border-radius: 14px;
  cursor: none;
  text-decoration: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -2px 0 rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.22),
    0 16px 32px rgba(0, 0, 0, 0.12);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.35s;
  position: relative;
  overflow: hidden;
}
.cta-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.18),
    transparent
  );
  transition: left 0.6s ease;
}
.cta-btn:hover::before {
  left: 100%;
}
.cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -2px 0 rgba(0, 0, 0, 0.4), 0 14px 28px rgba(0, 0, 0, 0.3),
    0 28px 56px rgba(0, 0, 0, 0.18);
}
.cta-btn:active {
  transform: translateY(0) scale(0.98);
}
.cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  transition: transform 0.4s;
}
.cta-btn:hover .cta-arrow {
  transform: translateX(4px);
}

/* ============ CONSTELLATION ============ */
.hero-right {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.constellation {
  position: relative;
  width: 600px;
  height: 660px;
  max-width: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.constellation-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  will-change: transform;
  z-index: 1;
}

.constellation-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  width: 100%;
  height: 100%;
}

.constellation-lines path {
  fill: none;
  stroke: rgba(15, 15, 15, 0.85);
  stroke-width: 1.6;
  stroke-linecap: round;
}

.tile {
  position: absolute;
  cursor: none;
  z-index: 2;
  transform-style: preserve-3d;
}

.tile-inner {
  width: 100%;
  height: 100%;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}
.tile:hover .tile-inner {
  transform: translateY(-10px) scale(1.06);
}

.tile-icon {
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.tile:hover .tile-icon {
  transform: scale(1.12) rotate(-4deg);
}
.tile-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Tile colors */
.tile.mint .tile-inner {
  background: linear-gradient(
    165deg,
    var(--mint-light) 0%,
    var(--mint) 50%,
    var(--mint-deep) 100%
  );
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.7),
    inset 0 -4px 0 rgba(0, 0, 0, 0.08), inset 0 0 30px rgba(255, 255, 255, 0.4),
    0 12px 24px rgba(149, 197, 152, 0.4), 0 24px 48px rgba(0, 0, 0, 0.08);
  color: var(--ink);
}

.tile.yellow .tile-inner {
  background: linear-gradient(
    165deg,
    var(--yellow-light) 0%,
    var(--yellow) 50%,
    var(--yellow-deep) 100%
  );
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.6),
    inset 0 -4px 0 rgba(0, 0, 0, 0.12), inset 0 0 30px rgba(255, 255, 255, 0.3),
    0 12px 24px rgba(217, 156, 16, 0.35), 0 24px 48px rgba(0, 0, 0, 0.1);
  color: var(--ink);
}

.tile.purple .tile-inner {
  background: linear-gradient(
    165deg,
    var(--purple-light) 0%,
    var(--purple) 50%,
    var(--purple-deep) 100%
  );
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.7),
    inset 0 -4px 0 rgba(0, 0, 0, 0.08), inset 0 0 30px rgba(255, 255, 255, 0.4),
    0 12px 24px rgba(171, 155, 208, 0.4), 0 24px 48px rgba(0, 0, 0, 0.08);
  color: var(--ink);
}

.tile.black .tile-inner {
  background: linear-gradient(165deg, #3a3a3a 0%, #1a1a1a 50%, #050505 100%);
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.2),
    inset 0 -3px 0 rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.05),
    0 12px 24px rgba(0, 0, 0, 0.3), 0 24px 48px rgba(0, 0, 0, 0.18);
  color: white;
}

/* Tile sizes */
.tile.size-main {
  width: 142px;
  height: 118px;
}
.tile.size-big {
  width: 156px;
  height: 132px;
}
.tile.size-pill {
  width: 64px;
  height: 64px;
}
.tile.size-pill .tile-inner {
  border-radius: 50%;
}

/* Tile positions */
.tile-lock {
  top: 0;
  left: calc(50% - 32px);
}
.tile-expand {
  top: 95px;
  left: 95px;
}
.tile-chart {
  top: 95px;
  left: 365px;
}
.tile-cloud {
  top: 245px;
  left: 5px;
}
.tile-db {
  top: 240px;
  left: 222px;
}
.tile-thumb {
  top: 245px;
  left: 455px;
}
.tile-cursor {
  top: 405px;
  left: 45px;
}
.tile-person {
  top: 395px;
  left: 145px;
}
.tile-globe {
  top: 395px;
  left: 315px;
}
.tile-thumbpill {
  top: 405px;
  left: 495px;
}
.tile-hex {
  top: 545px;
  left: 230px;
}

/* Floating animation per tile */
.tile {
  animation: tile-float var(--dur, 5s) ease-in-out infinite var(--delay, 0s);
}
@keyframes tile-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(var(--float, -8px));
  }
}
.tile-lock {
  --dur: 4s;
  --delay: 0s;
  --float: -6px;
}
.tile-expand {
  --dur: 5.5s;
  --delay: 0.4s;
  --float: -10px;
}
.tile-chart {
  --dur: 5s;
  --delay: 0.8s;
  --float: -8px;
}
.tile-cloud {
  --dur: 6s;
  --delay: 1.2s;
  --float: -12px;
}
.tile-db {
  --dur: 4.5s;
  --delay: 0.2s;
  --float: -7px;
}
.tile-thumb {
  --dur: 5.5s;
  --delay: 0.6s;
  --float: -10px;
}
.tile-cursor {
  --dur: 4s;
  --delay: 1s;
  --float: -8px;
}
.tile-person {
  --dur: 5s;
  --delay: 0.3s;
  --float: -9px;
}
.tile-globe {
  --dur: 5.5s;
  --delay: 0.7s;
  --float: -11px;
}
.tile-thumbpill {
  --dur: 4.5s;
  --delay: 0.5s;
  --float: -7px;
}
.tile-hex {
  --dur: 6s;
  --delay: 0.9s;
  --float: -10px;
}

/* Sparkle decoration */
.sparkle {
  position: absolute;
  width: 32px;
  height: 32px;
  bottom: 30px;
  right: 30px;
  color: var(--ink);
  animation: spin 8s linear infinite, sparkleFloat 4s ease-in-out infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes sparkleFloat {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -10px;
  }
}

/* ============ WORKSPACE FEATURES BAR ============ */
.workspace {
  padding: 20px 56px 80px;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  z-index: 5;
}
.workspace-label {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  flex-shrink: 0;
}

.feature-pills {
  display: flex;
  gap: 14px;
}

.fpill {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: none;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}
.fpill:hover {
  transform: translateY(-4px) rotate(-3deg);
}

.fpill.round {
  width: 64px;
  height: 64px;
  background: linear-gradient(165deg, var(--mint-light) 0%, var(--mint) 100%);
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.6),
    inset 0 -3px 0 rgba(0, 0, 0, 0.08), 0 10px 20px rgba(149, 197, 152, 0.4);
}
.fpill.wide-yellow {
  width: 130px;
  height: 64px;
  background: linear-gradient(
    165deg,
    var(--yellow-light) 0%,
    var(--yellow) 100%
  );
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5),
    inset 0 -3px 0 rgba(0, 0, 0, 0.12), 0 10px 20px rgba(217, 156, 16, 0.35);
}
.fpill.wide-purple {
  width: 130px;
  height: 64px;
  background: linear-gradient(
    165deg,
    var(--purple-light) 0%,
    var(--purple) 100%
  );
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.6),
    inset 0 -3px 0 rgba(0, 0, 0, 0.08), 0 10px 20px rgba(171, 155, 208, 0.4);
}

.fpill svg {
  display: block;
}

.learn-more {
  margin-left: auto;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: none;
  font-weight: 500;
}

/* ============ STATS BAR ============ */
.stats-bar {
  padding: 80px 56px;
  background: var(--bg-warm);
  border-radius: 48px 48px 0 0;
  margin-top: 40px;
  position: relative;
  z-index: 5;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
.stat {
  padding: 32px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
}
.stat:last-child {
  border-right: none;
}
.stat-num {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(40px, 4.5vw, 72px);
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 12px;
}
.stat-num .accent {
  color: var(--yellow-deep);
}
.stat-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
  font-weight: 500;
}

/* ============ FEATURES SECTION ============ */
.features {
  padding: 120px 56px;
  background: var(--bg-warm);
  position: relative;
}

.features-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 80px;
  gap: 60px;
}
.section-eyebrow {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-soft);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.section-eyebrow::before {
  content: "";
  width: 32px;
  height: 1.5px;
  background: var(--ink);
}
.features h2 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(40px, 5vw, 72px);
  line-height: 1;
  letter-spacing: -0.035em;
  max-width: 720px;
}
.features-meta {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
  line-height: 1.6;
  text-align: right;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature-card {
  padding: 32px;
  border-radius: 36px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  cursor: none;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}
.feature-card:hover {
  transform: translateY(-12px);
}
.feature-card.fc-mint {
  background: linear-gradient(165deg, var(--mint-light) 0%, var(--mint) 100%);
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.6),
    inset 0 -4px 0 rgba(0, 0, 0, 0.08), 0 20px 40px rgba(149, 197, 152, 0.3),
    0 40px 80px rgba(0, 0, 0, 0.06);
}
.feature-card.fc-yellow {
  background: linear-gradient(
    165deg,
    var(--yellow-light) 0%,
    var(--yellow) 100%
  );
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.5),
    inset 0 -4px 0 rgba(0, 0, 0, 0.12), 0 20px 40px rgba(217, 156, 16, 0.3),
    0 40px 80px rgba(0, 0, 0, 0.08);
}
.feature-card.fc-purple {
  background: linear-gradient(
    165deg,
    var(--purple-light) 0%,
    var(--purple) 100%
  );
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.6),
    inset 0 -4px 0 rgba(0, 0, 0, 0.08), 0 20px 40px rgba(171, 155, 208, 0.3),
    0 40px 80px rgba(0, 0, 0, 0.06);
}
.feature-card .fc-num {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  margin-bottom: 24px;
  color: var(--ink);
  opacity: 0.6;
}
.feature-card h3 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin-bottom: 16px;
}
.feature-card p {
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink);
  opacity: 0.75;
  flex: 1;
}
.feature-card .fc-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.4),
    inset 0 -2px 0 rgba(0, 0, 0, 0.1);
}

/* ============ QUOTE ============ */
.quote-section {
  padding: 140px 56px;
  background: var(--bg);
  text-align: center;
}
.quote-section blockquote {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  font-size: clamp(32px, 4.5vw, 64px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  max-width: 1000px;
  margin: 0 auto 32px;
}
.quote-mark {
  display: inline-block;
  font-size: 120px;
  line-height: 0.4;
  color: var(--yellow-deep);
  margin-bottom: 24px;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.quote-author {
  font-family: "JetBrains Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-soft);
}

/* ============ FINAL CTA ============ */
.final-cta {
  padding: 100px 56px 120px;
  text-align: center;
  background: var(--bg);
}
.final-cta-card {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 60px;
  border-radius: 48px;
  background: linear-gradient(165deg, #2a2a2a 0%, #0a0a0a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.15),
    inset 0 -5px 0 rgba(0, 0, 0, 0.5), 0 30px 60px rgba(0, 0, 0, 0.3),
    0 60px 120px rgba(0, 0, 0, 0.2);
}
.final-cta h2 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: clamp(40px, 5.5vw, 80px);
  line-height: 1;
  letter-spacing: -0.035em;
  margin-bottom: 32px;
  color: white;
}
.final-cta h2 .accent {
  color: var(--yellow);
}
.final-cta p {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 540px;
  margin: 0 auto 40px;
}
.final-cta .cta-btn {
  background: linear-gradient(
    180deg,
    var(--yellow-light) 0%,
    var(--yellow-deep) 100%
  );
  color: var(--ink);
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 10px 20px rgba(217, 156, 16, 0.5);
}
.final-cta .cta-btn .cta-arrow {
  background: rgba(0, 0, 0, 0.12);
}

/* Decorative orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.final-cta-card .orb-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(251, 197, 54, 0.3) 0%,
    transparent 70%
  );
  top: -50px;
  left: -50px;
  filter: blur(40px);
}
.final-cta-card .orb-2 {
  width: 250px;
  height: 250px;
  background: radial-gradient(
    circle,
    rgba(220, 208, 238, 0.2) 0%,
    transparent 70%
  );
  bottom: -80px;
  right: -80px;
  filter: blur(50px);
}

/* ============ FOOTER ============ */
.site-footer {
  background: var(--bg);
  padding: 60px 56px 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}
.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  gap: 60px;
}
.footer-brand h3 {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}
.footer-brand p {
  color: var(--ink-soft);
  font-size: 14px;
  max-width: 280px;
}
.footer-cols {
  display: flex;
  gap: 60px;
}
.footer-col h4 {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 18px;
  color: var(--ink-soft);
  font-weight: 600;
}
.footer-col a {
  display: block;
  font-size: 14px;
  color: var(--ink);
  text-decoration: none;
  margin-bottom: 10px;
  cursor: none;
}
.footer-col a:hover {
  text-decoration: underline;
}
.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  font-family: "JetBrains Mono", monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1100px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 20px 32px;
  }
  .site-header {
    padding: 20px 32px;
  }
  .workspace {
    padding: 20px 32px 60px;
    flex-wrap: wrap;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .feature-cards {
    grid-template-columns: 1fr;
  }
  .features,
  .stats-bar {
    padding: 60px 32px;
  }
  .final-cta,
  .quote-section {
    padding: 60px 32px;
  }
  .features-head {
    flex-direction: column;
    align-items: flex-start;
  }
  .features-meta {
    text-align: left;
  }
  .footer-top {
    flex-direction: column;
    gap: 40px;
  }
}
@media (max-width: 700px) {
  body {
    cursor: auto;
  }
  .cursor {
    display: none;
  }
  * {
    cursor: auto !important;
  }
  .header-nav {
    display: none;
  }
  .constellation {
    width: 100%;
    height: 580px;
  }
  .tile.size-main {
    width: 110px;
    height: 92px;
  }
  .tile.size-big {
    width: 120px;
    height: 102px;
  }
  .tile.size-pill {
    width: 52px;
    height: 52px;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .final-cta-card {
    padding: 48px 24px;
  }
}

/* Initial states for entrance animations */
.title-inner {
  transform: translateY(110%);
}
.hero-desc,
.cta-btn,
.site-header {
  opacity: 0;
}
.tile {
  opacity: 0;
}
.constellation-lines path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}
.workspace {
  opacity: 0;
}

gsap.registerPlugin(ScrollTrigger);

// ============ CURSOR ============
const cursor = document.querySelector(".cursor");
let mx = 0,
  my = 0,
  cx = 0,
  cy = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});
(function animateCursor() {
  cx += (mx - cx) * 0.2;
  cy += (my - cy) * 0.2;
  cursor.style.left = cx + "px";
  cursor.style.top = cy + "px";
  requestAnimationFrame(animateCursor);
})();
document
  .querySelectorAll("a, button, .tile, .fpill, .feature-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () =>
      gsap.to(cursor, { width: 36, height: 36, duration: 0.3 })
    );
    el.addEventListener("mouseleave", () =>
      gsap.to(cursor, { width: 12, height: 12, duration: 0.3 })
    );
  });

// ============ SVG LINE LENGTHS ============
document.querySelectorAll(".constellation-lines path").forEach((path) => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
});

// ============ PAGE LOAD ============
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.to(".site-header", { opacity: 1, duration: 0.8 }, 0)
  .to(
    ".title-inner",
    { y: 0, duration: 1.1, stagger: 0.08, ease: "power4.out" },
    0.2
  )
  .to(".hero-desc", { opacity: 1, duration: 0.8 }, 0.9)
  .from(".hero-desc", { y: 20, duration: 0.8 }, 0.9)
  .to(".cta-btn", { opacity: 1, duration: 0.7 }, 1.0)
  .from(".cta-btn", { y: 20, duration: 0.7 }, 1.0)
  .to(
    ".tile",
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: { each: 0.07, from: "center" },
      ease: "elastic.out(1, 0.6)"
    },
    0.5
  )
  .from(
    ".tile",
    {
      scale: 0,
      duration: 1.2,
      stagger: { each: 0.07, from: "center" },
      ease: "elastic.out(1, 0.6)"
    },
    0.5
  )
  .to(
    ".constellation-lines path",
    {
      strokeDashoffset: 0,
      duration: 1.4,
      stagger: 0.06,
      ease: "power2.inOut"
    },
    0.8
  )
  .to(".workspace", { opacity: 1, duration: 0.8 }, 1.6)
  .from(
    ".fpill",
    {
      y: 30,
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.6)"
    },
    1.6
  )
  .from(
    ".workspace-label, .learn-more",
    { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
    1.6
  );

// ============ CONSTELLATION 3D TILT ============
const constellation = document.getElementById("constellation");
const constellationInner = document.getElementById("constellationInner");
constellation.addEventListener("mousemove", (e) => {
  const rect = constellation.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  gsap.to(constellationInner, {
    rotationY: x * 12,
    rotationX: -y * 8,
    duration: 0.8,
    transformPerspective: 1500,
    ease: "power2.out"
  });
});
constellation.addEventListener("mouseleave", () => {
  gsap.to(constellationInner, {
    rotationY: 0,
    rotationX: 0,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
  });
});

// ============ SCROLL: CONSTELLATION PARALLAX ============
gsap.to(".constellation", {
  y: 100,
  scale: 0.92,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});
gsap.to(".hero-left", {
  y: 60,
  opacity: 0.4,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1
  }
});

// ============ STAT NUMBER COUNTER ============
document.querySelectorAll(".stat-num").forEach((el) => {
  const target = parseInt(el.dataset.num);
  const suffix = el.querySelector(".accent");
  const suffixText = suffix ? suffix.outerHTML : "";
  ScrollTrigger.create({
    trigger: el,
    start: "top 85%",
    once: true,
    onEnter: () => {
      let obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          let display = Math.floor(obj.val);
          if (target >= 1000)
            display = "+" + (display / 1000).toFixed(1).replace(".0", "") + "k";
          else if (
            target >= 100 &&
            target <= 999 &&
            suffix &&
            suffix.textContent === "k"
          )
            display = "+" + display;
          el.innerHTML = display + suffixText;
        }
      });
    }
  });
});

// ============ SECTION TITLE REVEALS ============
function splitWords(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    const words = el.innerText.split(" ");
    el.innerHTML = words
      .map(
        (w) =>
          `<span class="sword" style="display:inline-block;overflow:hidden;padding-bottom:0.12em;vertical-align:top;"><span class="sword-inner" style="display:inline-block;transform:translateY(110%);will-change:transform;">${w}</span></span>`
      )
      .join(" ");
  });
}
splitWords(".features-title");
splitWords(".quote-text");
splitWords(".final-cta-h2");

// Note: splitWords destroys spans like .accent. Re-color accent words for final-cta.
document.querySelectorAll(".final-cta-h2 .sword-inner").forEach((el) => {
  if (el.textContent.includes("good") || el.textContent.includes("ones")) {
    el.style.color = "var(--yellow)";
  }
});

gsap.to(".features-title .sword-inner", {
  y: 0,
  duration: 1,
  stagger: 0.04,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".features-title",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(".quote-text .sword-inner", {
  y: 0,
  duration: 0.9,
  stagger: 0.03,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".quote-text",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

gsap.to(".final-cta-h2 .sword-inner", {
  y: 0,
  duration: 1,
  stagger: 0.05,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".final-cta-h2",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// ============ FEATURE CARDS REVEAL ============
gsap.from(".feature-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.15,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".feature-cards",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});

// ============ QUOTE MARK ============
gsap.from(".quote-mark", {
  scale: 0,
  rotation: -45,
  duration: 1.2,
  ease: "elastic.out(1, 0.6)",
  scrollTrigger: {
    trigger: ".quote-mark",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// ============ FEATURE CARD 3D HOVER ============
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotationY: x * 8,
      rotationX: -y * 8,
      y: -12,
      duration: 0.5,
      transformPerspective: 1200,
      ease: "power2.out"
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  });
});

// ============ FINAL CTA PULSE ON ENTRY ============
gsap.from(".final-cta-card", {
  scale: 0.92,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".final-cta-card",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

// Refresh
window.addEventListener("load", () => ScrollTrigger.refresh());

