import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'Do I have to design the page?',
    a: "No. The layout is already done and you fill in fields, so there's no spread to build and nothing to export at the end. You write the rules down and the page is there."
  },
  {
    q: 'What do I get for €39?',
    a: "One brand: a live guideline at vessa.design/brand/yourbrand, with every section and the whole editor. It stays editable after you publish, so an edit is live the moment you save. And if it's not for you, email within 14 days and you get the money back.",
    links: [
      { text: 'How publishing works', href: 'https://vessa.design/docs/publishing' }
    ]
  },
  {
    q: 'Why is it a one-time price?',
    a: "Because a subscription on a brand guideline is a bill your client inherits, and the day it lapses the page dies. €39 buys one brand outright and that's the end of it."
  },
  {
    q: 'Can I put it on our own domain?',
    a: "No. Every guideline lives at vessa.design/brand/yourbrand and that URL never changes, so there's no DNS to set up and nothing to break a year later. If a custom domain is a hard requirement, this isn't the tool for you."
  },
  {
    q: 'What about our fonts?',
    a: "Upload the weights you licensed and we serve them as they are, or pick a family from Google Fonts and Fontshare and we load it for you. The licensing stays yours to sort out, which is where most people get caught.",
    links: [
      { text: 'Fonts and licensing', href: 'https://vessa.design/docs/fonts' }
    ]
  },
  {
    q: 'How is this different from Brandpad or Corebook?',
    a: "They're built around the download, so the guideline is still somewhere you go to fetch a zip. Vessa is built around the page itself, and the motion system is the part none of them have.",
    links: [
      { text: 'vs Brandpad', href: 'https://vessa.design/compare/vessa-vs-brandpad' },
      { text: 'vs Corebook', href: 'https://vessa.design/compare/vessa-vs-corebook' },
      { text: 'vs Standards', href: 'https://vessa.design/compare/vessa-vs-standards' }
    ]
  },
  {
    q: 'What do developers do with the motion?',
    a: "Easing and duration sit on the published page as real values and a developer copies them out as CSS or GSAP. The guideline shows the move and hands over the numbers that make it."
  },
  {
    q: 'Can my AI work on it?',
    a: "Yes, and not just read it. Vessa is an MCP server, so you can connect Claude, Claude Code or Cursor and have it build the guideline: create sections, fill them in, upload assets, publish. You keep the taste calls. Reading needs no setup at all, since every published guideline ships a brand.json an agent can pull without a login.",
    links: [
      { text: 'Connect Claude or Cursor', href: 'https://vessa.design/docs/connect-your-ai' }
    ]
  }
];

export default function FaqSection() {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="faq" aria-label="Questions">
      <header className="faq-head">
        <h2 className="faq-title">Everything you'd ask before paying.</h2>
      </header>

      <div className="faq-body">
        <dl className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={item.q}
                className={`faq-row ${isOpen ? 'is-open' : ''}`}
              >
                <dt className="faq-term">
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="faq-q">{item.q}</span>
                    <svg className="faq-mark" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M8 2.5 V13.5 M2.5 8 H13.5" />
                    </svg>
                  </button>
                </dt>
                <dd id={`faq-a-${index}`} className="faq-def">
                  <div className="faq-clip">
                    <div className="faq-answer">
                      <p>{item.a}</p>
                      {item.links && (
                        <p className="faq-links">
                          {item.links.map((link) => (
                            <a key={link.text} href={link.href}>
                              {link.text}
                            </a>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>

        <aside className="faq-aside">
          <p className="faq-aside-line">Write to me and I'll answer it myself.</p>
          <a className="faq-mail" href="mailto:hello@vessa.design">
            hello@vessa.design
          </a>
        </aside>
      </div>
    </section>
  );
}
