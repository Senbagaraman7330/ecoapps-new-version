import React, { useState } from 'react';

export default function UpdatesSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="updates" className="upd" aria-label="Email updates">
      <div className="upd-grid">
        <div className="upd-cell upd-cell--empty" aria-hidden="true" />

        <div className="upd-cell upd-cell--main">
          {isSubmitted ? (
            <>
              <h3 className="upd-title">You're on the list!</h3>
              <p className="upd-done">
                Thanks for subscribing. We'll send you updates on new releases, features, and brand design best practices.
              </p>
            </>
          ) : (
            <>
              <h2 className="upd-title">Don't miss what ships next.</h2>
              <form className="upd-form" onSubmit={handleSubmit}>
                <input
                  value=""
                  className="upd-hp"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                  readOnly
                />
                <label className="sr-only" htmlFor="upd-email">
                  Email
                </label>
                <div className="upd-row">
                  <input
                    data-slot="input"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-[var(--vessa-well)] px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:shadow-[inset_0_0_0_1px_var(--ring)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                    id="upd-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@studio.com"
                    aria-invalid="false"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 gap-1.5 px-3 has-[>svg]:px-2.5 cursor-pointer"
                    type="submit"
                    disabled={!email.includes('@')}
                  >
                    Keep me posted
                  </button>
                </div>
              </form>
              <p className="upd-proof">Join 1,300+ designers on the list.</p>
              <p className="upd-consent">
                Email about Vessa now and then. New features, and the odd thing worth knowing.
              </p>
            </>
          )}
        </div>

        <div className="upd-cell upd-cell--empty" aria-hidden="true" />
      </div>
    </section>
  );
}
