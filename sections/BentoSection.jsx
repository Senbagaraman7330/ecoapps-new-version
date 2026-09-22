import React, { useState, useRef } from 'react';
import VMark from '../common/VMark';

const CLIENTS = [
  {
    name: 'Claude',
    d: 'M 368 0 C 368 33.6, 74 22.4, 74 56',
    icon: 'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z'
  },
  {
    name: 'ChatGPT',
    d: 'M 368 0 C 368 33.6, 240 22.4, 240 56',
    icon: 'M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z'
  },
  {
    name: 'Codex',
    d: 'M 368 0 C 368 33.6, 388 22.4, 388 56',
    icon: 'M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z'
  },
  {
    name: 'Cursor',
    d: 'M 368 0 C 368 33.6, 528 22.4, 528 56',
    icon: 'M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23'
  },
  {
    name: 'Gemini',
    d: 'M 368 0 C 368 33.6, 662 22.4, 662 56',
    icon: 'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81'
  }
];

export default function BentoSection() {
  const [hoveredChip, setHoveredChip] = useState(null);
  const [copiedToken, setCopiedToken] = useState(null);
  const orbitRef = useRef(null);

  const handleMouseMoveOrbit = (e) => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    const rect = orbit.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    orbit.style.perspectiveOrigin = `${50 + x * 20}% ${45 + y * 20}%`;
  };

  const handleMouseLeaveOrbit = () => {
    if (orbitRef.current) {
      orbitRef.current.style.perspectiveOrigin = '50% 45%';
    }
  };

  const handleCopyHex = (hex, label) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedToken(label);
      setTimeout(() => {
        setCopiedToken(null);
      }, 1500);
    }).catch(() => {});
  };

  return (
    <section id="how" className="bento" aria-label="Everything the one link carries">
      <h2 className="bento-title">Everything lives on one link.</h2>

      <div className="bento-grid">
        {/* Cell 1 (Wide): Connect Diagram / MCP */}
        <article className="cell cell--wide">
          <div className="viz viz--solid viz--connect">
            <div className="connect-diagram" aria-hidden="true">
              <span className="connect-markwrap">
                <VMark className="connect-mark" />
              </span>

              <svg className="connect-drop" viewBox="0 0 2 40" width="2" height="40">
                <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
                <line className="c-pulse c-pulse--drop" x1="1" y1="0" x2="1" y2="40" pathLength="100" />
              </svg>

              <span className="connect-node">MCP</span>

              <svg className="connect-fan" viewBox="0 0 736 56" style={{ height: '56px' }}>
                {CLIENTS.map((client, i) => (
                  <path
                    key={`line-${i}`}
                    className="c-line"
                    d={client.d}
                    style={{
                      stroke: hoveredChip === i ? 'var(--vessa-accent)' : 'var(--m-border)',
                      strokeWidth: hoveredChip === i ? '1.5px' : '1px',
                      transition: 'stroke 0.2s, stroke-width 0.2s'
                    }}
                  />
                ))}
                {CLIENTS.map((client, i) => (
                  <path
                    key={`pulse-${i}`}
                    className="c-pulse c-pulse--fan"
                    d={client.d}
                    pathLength="100"
                    style={{
                      stroke: hoveredChip === i ? 'var(--vessa-ink)' : 'var(--vessa-accent)',
                      strokeWidth: hoveredChip === i ? '3px' : '2.2px',
                      animationDuration: hoveredChip === i ? '0.9s' : '2.4s'
                    }}
                  />
                ))}
              </svg>

              <svg className="connect-drop connect-drop--narrow" viewBox="0 0 2 40" width="2" height="40">
                <line className="c-line" x1="1" y1="0" x2="1" y2="40" />
              </svg>

              <ul className="connect-clients">
                {CLIENTS.map((client, i) => (
                  <li
                    key={client.name}
                    className="client-chip"
                    onMouseEnter={() => setHoveredChip(i)}
                    onMouseLeave={() => setHoveredChip(null)}
                  >
                    <svg className="client-icon" viewBox="0 0 24 24">
                      <path d={client.icon} fill="currentColor" />
                    </svg>
                    {' '}{client.name}
                  </li>
                ))}
              </ul>

              <p className="connect-any">or any other MCP client</p>
            </div>
          </div>

          <div className="cell-copy">
            <h3 className="cell-title">Your AI builds it with you</h3>
            <p className="cell-body">
              Vessa speaks MCP. Connect once, point your AI at your brand folder, and it fills the sections, uploads the assets and publishes. You keep the taste calls.
            </p>
          </div>
        </article>

        {/* Cell 2 (Left): Motion Orbit 3D */}
        <article className="cell cell--l">
          <div className="viz">
            <div className="orbit-stage">
              <div
                ref={orbitRef}
                className="orbit"
                aria-hidden="true"
                onMouseMove={handleMouseMoveOrbit}
                onMouseLeave={handleMouseLeaveOrbit}
              >
                <div className="orbit-ring">
                  <div className="is-accent orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(0deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(30deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(60deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(90deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(120deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(150deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(180deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(210deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(240deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(270deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(300deg) translateZ(100px)' }} />
                  <div className="orbit-tile" style={{ width: '40px', height: '40px', transform: 'translate(-50%, -50%) rotateY(330deg) translateZ(100px)' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="cell-copy">
            <h3 className="cell-title">Motion your developer can actually ship</h3>
            <p className="cell-body">
              Every ease and duration sits on the page as a value, so the move your guideline shows is the move that ends up in the build.
            </p>
          </div>
        </article>

        {/* Cell 3 (Right): Edit once, every link updates */}
        <article className="cell cell--r">
          <div className="viz">
            <div className="wire" aria-hidden="true">
              <div className="frag frag--field">
                <span className="field-label">Accent</span>
                <span className="field-input">
                  <span className="field-swatch" style={{ background: '#1F2DE6' }} /> #1F2DE6
                </span>
              </div>
              <svg className="wire-line" viewBox="0 0 120 40" preserveAspectRatio="none">
                <path d="M0 20 C 55 20, 65 20, 120 20" />
              </svg>
              <div className="ghost-page">
                <span className="link-chip">
                  <span className="link-dot" /> vessa.design/brand/vanta
                </span>
                <span className="ghost-bar" style={{ background: '#1F2DE6' }} />
                <span className="skel" style={{ width: '64%' }} />
                <span className="skel" style={{ width: '46%' }} />
              </div>
            </div>
          </div>

          <div className="cell-copy">
            <h3 className="cell-title">Edit once, every link updates</h3>
            <p className="cell-body">
              There's no v5 to re-send. You change the page and the link your client already has changes with it.
            </p>
          </div>
        </article>

        {/* Cell 4 (Left): Every value is one click away (Token Copy) */}
        <article className="cell cell--l">
          <div className="viz">
            <div className="frag frag--tokens">
              <div
                className="token-row cursor-pointer transition-colors hover:bg-black/5"
                onClick={() => handleCopyHex('#101216', 'ink')}
              >
                <span className="token-chip" style={{ background: '#101216' }} />
                <span className="token-name">Ink</span>
                <span className="token-hex">
                  {copiedToken === 'ink' ? 'Copied!' : '#101216'}
                </span>
              </div>

              <div
                className="token-row cursor-pointer transition-colors hover:bg-black/5"
                onClick={() => handleCopyHex('#EEF0F3', 'paper')}
              >
                <span className="token-chip" style={{ background: '#EEF0F3' }} />
                <span className="token-name">Paper</span>
                <span className="token-hex">
                  {copiedToken === 'paper' ? 'Copied!' : '#EEF0F3'}
                </span>
              </div>

              <div
                className="token-row cursor-pointer transition-colors hover:bg-black/5"
                onClick={() => handleCopyHex('#1F2DE6', 'accent')}
              >
                <span className="token-chip" style={{ background: '#1F2DE6' }} />
                <span className="token-name copied-note">
                  Copied{' '}
                  <svg className="copied-cursor" viewBox="0 0 28 28" aria-hidden="true">
                    <path
                      className="copied-burst copied-burst--halo"
                      d="M9.2 4.1V1.3M6.9 5 5 3.1M6 7.3H3.2M6.9 9.6 5 11.5M11.5 5l1.9-1.9M12.6 6.5l2.7-.7"
                    />
                    <path
                      className="copied-burst"
                      d="M9.2 4.1V1.3M6.9 5 5 3.1M6 7.3H3.2M6.9 9.6 5 11.5M11.5 5l1.9-1.9M12.6 6.5l2.7-.7"
                    />
                    <path
                      d="M9.2 7.3v13.6l3.4-3.2 2.4 5.1 2.3-1.1-2.4-5h4.7z"
                      fill="var(--vessa-ink)"
                      stroke="var(--vessa-paper)"
                      strokeWidth="1.25"
                    />
                  </svg>
                </span>
                <span className="token-hex">
                  {copiedToken === 'accent' ? 'Copied!' : '#1F2DE6'}
                </span>
              </div>

              <div className="token-row is-ghost">
                <span className="token-chip token-chip--ghost" />
                <span className="skel" style={{ width: '51%' }} />
              </div>
              <div className="token-row is-ghost">
                <span className="token-chip token-chip--ghost" />
                <span className="skel" style={{ width: '44%' }} />
              </div>
              <div className="token-row is-ghost">
                <span className="token-chip token-chip--ghost" />
                <span className="skel" style={{ width: '37%' }} />
              </div>
              <div className="token-row is-ghost">
                <span className="token-chip token-chip--ghost" />
                <span className="skel" style={{ width: '30%' }} />
              </div>
            </div>
          </div>

          <div className="cell-copy">
            <h3 className="cell-title">Every value is one click away</h3>
            <p className="cell-body">
              Nobody eyedrops a screenshot again. On the live page a click puts the hex on your clipboard.
            </p>
          </div>
        </article>

        {/* Cell 5 (Right): Private Gate */}
        <article className="cell cell--r">
          <div className="viz">
            <div className="gate-scene" aria-hidden="true">
              <div className="gate-behind">
                <span className="gate-behind-bar" style={{ background: '#1F2DE6' }} />
                <span className="skel" style={{ width: '58%' }} />
                <span className="skel" style={{ width: '41%' }} />
                <span className="skel" style={{ width: '47%' }} />
                <span className="skel" style={{ width: '33%' }} />
              </div>
              <div className="frag frag--gate">
                <img className="gate-logo" src="/fixtures/vanta/vanta-wordmark.svg" alt="" />
                <p className="gate-line">These brand guidelines are private.</p>
                <span className="gate-field">
                  <span className="gate-field-label">Password</span>
                  <span className="gate-dots">••••••••</span>
                </span>
                <span className="gate-open" style={{ background: '#1F2DE6' }}>
                  Open
                </span>
              </div>
            </div>
          </div>

          <div className="cell-copy">
            <h3 className="cell-title">Not every guideline should be public</h3>
            <p className="cell-body">
              Plenty of brands keep their rules off the open web for good, not just until launch. Add a password and the page asks for it before it shows anything, and search engines are told to stay out.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
