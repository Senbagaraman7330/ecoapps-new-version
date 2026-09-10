import { useState, useEffect } from 'react';
import './StatsBar.css';

// Dynamically import all client logos from the cilent directory
const clientImageModules = import.meta.glob<{ default: string }>(
  '../assets/cilent/*.{png,jpeg,jpg,webp,svg,PNG,JPEG,JPG}',
  { eager: true }
);

interface ClientItem {
  id: string;
  name: string;
  logo: string;
}

const clientFriendlyNames: Record<string, string> = {
  '3knotz photography logo': '3knotz Photography',
  'Arivukoodam Logo': 'Arivukoodam',
  'Deccan Fibre Doors Logo': 'Deccan Fibre Doors',
  'Enow Logo': 'Enow Solutions',
  'GJ Global Logo': 'GJ Global',
  'Luxus Doors & Interiors Logo': 'Luxus Doors & Interiors',
  'Pico Technologies Logo': 'Pico Technologies',
  'Raynode Technologies Logo': 'Raynode Technologies',
  'Vanitha Builders Logo': 'Vanitha Builders',
  'Vijay Homes Logo': 'Vijay Homes',
};

// Build all client items
const allClients: ClientItem[] = Object.entries(clientImageModules).map(
  ([path, module], index) => {
    const fileName =
      path.split('/').pop()?.replace(/\.[^/.]+$/, '') || `Client ${index + 1}`;
    const name =
      clientFriendlyNames[fileName] ||
      fileName.replace(/^WhatsApp Image\s+/i, 'Partner ');

    return {
      id: `client-${index}-${fileName}`,
      name,
      logo: module.default,
    };
  }
);

// Split all clients into 2 distinct rows
const halfCount = Math.ceil(allClients.length / 2);
const row1Clients = allClients.slice(0, halfCount);
const row2Clients = allClients.slice(halfCount);

export default function ClientMarquee() {
  // Track flipped status for each client card by unique ID
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});

  // Auto-flip animation: periodic cascading wave across cards
  useEffect(() => {
    let isMounted = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const triggerCascadeWave = () => {
      if (!isMounted) return;

      // Select randomized or staggered cards to flip in waves
      allClients.forEach((client, idx) => {
        const t = setTimeout(() => {
          if (!isMounted) return;
          setFlippedMap((prev) => ({
            ...prev,
            [client.id]: !prev[client.id],
          }));
        }, (idx % 8) * 220 + Math.random() * 150);
        timeouts.push(t);
      });

      // Schedule next wave
      const nextTimer = setTimeout(() => {
        if (isMounted) triggerCascadeWave();
      }, 5500);
      timeouts.push(nextTimer);
    };

    const initialDelay = setTimeout(() => {
      triggerCascadeWave();
    }, 2000);
    timeouts.push(initialDelay);

    return () => {
      isMounted = false;
      timeouts.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const handleCardClick = (clientId: string) => {
    setFlippedMap((prev) => ({
      ...prev,
      [clientId]: !prev[clientId],
    }));
  };

  const renderClientCard = (
    client: ClientItem,
    uniqueKey: string
  ) => {
    const isFlipped = !!flippedMap[client.id];

    return (
      <div
        key={uniqueKey}
        className="partner-card-container cursor-pointer flex-shrink-0"
        onClick={() => handleCardClick(client.id)}
      >
        <div
          className={`partner-card-wrapper ${isFlipped ? 'is-flipped' : ''}`}
        >
          {/* Front Side: Clean Centered Logo */}
          <div className="partner-card-side partner-card-front group">
            <div className="w-full h-full flex items-center justify-center p-3">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 sm:max-h-14 max-w-[80%] object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Back Side (3D Flipped): Polished Highlight Centered Logo */}
          <div className="partner-card-side partner-card-back group">
            <div className="w-full h-full flex items-center justify-center p-3">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 sm:max-h-14 max-w-[80%] object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="client-marquee-section py-14 md:py-20 bg-white border-b border-slate-200 relative z-10 overflow-hidden select-none">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0057ff] text-[11px] font-['JetBrains_Mono'] font-bold tracking-wider mb-2.5 uppercase shadow-2xs">
            <span>Our Trusted Partners</span>
          </div>
          <p className="font-['JetBrains_Mono'] text-xs sm:text-[13px] md:text-[13.5px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
            Businesses That Trust Us
          </p>
        </div>

        {/* Marquee Viewport with Edge Fade Masking */}
        <div className="partner-marquee-viewport space-y-4 sm:space-y-5">
          {/* Row 1: Left to Right Loop */}
          <div className="partner-marquee-track marquee-row-ltr">
            <div className="marquee-content-group">
              {row1Clients.map((client, idx) =>
                renderClientCard(client, `row1-orig-${client.id}-${idx}`)
              )}
            </div>
            <div className="marquee-content-group" aria-hidden="true">
              {row1Clients.map((client, idx) =>
                renderClientCard(client, `row1-dup1-${client.id}-${idx}`)
              )}
            </div>
            <div className="marquee-content-group" aria-hidden="true">
              {row1Clients.map((client, idx) =>
                renderClientCard(client, `row1-dup2-${client.id}-${idx}`)
              )}
            </div>
          </div>

          {/* Row 2: Right to Left Loop */}
          <div className="partner-marquee-track marquee-row-rtl">
            <div className="marquee-content-group">
              {row2Clients.map((client, idx) =>
                renderClientCard(client, `row2-orig-${client.id}-${idx}`)
              )}
            </div>
            <div className="marquee-content-group" aria-hidden="true">
              {row2Clients.map((client, idx) =>
                renderClientCard(client, `row2-dup1-${client.id}-${idx}`)
              )}
            </div>
            <div className="marquee-content-group" aria-hidden="true">
              {row2Clients.map((client, idx) =>
                renderClientCard(client, `row2-dup2-${client.id}-${idx}`)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
