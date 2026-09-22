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

// Filter to exactly 24 clients and split into 4 balanced rows of 6 clients each
const activeClients = allClients.slice(0, 24);
const row1Clients = activeClients.slice(0, 6);
const row2Clients = activeClients.slice(6, 12);
const row3Clients = activeClients.slice(12, 18);
const row4Clients = activeClients.slice(18, 24);

const metricsList = [
  '50+ Brands Worked With',
  '10K+ Leads Generated',
  '100s of Videos Delivered',
  'High-Volume Ad Campaigns Managed',
  'Millions in Reach Generated',
];

export default function ClientMarquee() {
  // Track flipped status for each client card by unique ID
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});

  // Sequential, single-flip wave animation:
  // 1. Flips each card ONCE to the back in order (Row 1 -> Row 2 -> Row 3 -> Row 4)
  // 2. Once all 24 cards are on the back side, pauses briefly
  // 3. Flips each card ONCE back to the front in the same order (Row 1 -> Row 2 -> Row 3 -> Row 4)
  // 4. Once all 24 cards are on the front side, pauses briefly and repeats
  useEffect(() => {
    let isMounted = true;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let isFlippingToBack = true;
    let index = 0;

    const stepFlip = () => {
      if (!isMounted) return;

      if (index >= activeClients.length) {
        index = 0;
        isFlippingToBack = !isFlippingToBack;
        // Pause with ample time after the final card flips before starting the next wave
        timer = setTimeout(stepFlip, 2000);
        return;
      }

      const currentClientId = activeClients[index].id;

      // Flip current card to back (true) or to front (false)
      setFlippedMap((prev) => ({
        ...prev,
        [currentClientId]: isFlippingToBack,
      }));

      index += 1;

      if (index >= activeClients.length) {
        // Just flipped the very last card! Give it time to finish its 3D flip animation before switching direction
        timer = setTimeout(stepFlip, 1800);
      } else {
        // Step to next card
        timer = setTimeout(stepFlip, 300);
      }
    };

    const initialDelay = setTimeout(stepFlip, 1000);

    return () => {
      isMounted = false;
      if (timer) clearTimeout(timer);
      clearTimeout(initialDelay);
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
                className="max-h-12 sm:max-h-14 md:max-h-16 max-w-[85%] object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
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
                className="max-h-12 sm:max-h-14 md:max-h-16 max-w-[85%] object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
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
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#0057ff] text-[11px] font-['JetBrains_Mono'] font-bold tracking-wider mb-2.5 uppercase shadow-2xs">
            <span>Our Trusted Partners</span>
          </div>
          <p className="font-['JetBrains_Mono'] text-xs sm:text-[13px] md:text-[13.5px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
            Businesses That Trust Us
          </p>
        </div>

        {/* 4 Static Lines of 6 Partner Client Cards Each */}
        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 items-center justify-center mb-10 md:mb-14 w-full">
          {/* Row 1 (6 logos) */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-3.5 w-full">
            {row1Clients.map((client, idx) =>
              renderClientCard(client, `row1-${client.id}-${idx}`)
            )}
          </div>

          {/* Row 2 (6 logos) */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-3.5 w-full">
            {row2Clients.map((client, idx) =>
              renderClientCard(client, `row2-${client.id}-${idx}`)
            )}
          </div>

          {/* Row 3 (6 logos) */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-3.5 w-full">
            {row3Clients.map((client, idx) =>
              renderClientCard(client, `row3-${client.id}-${idx}`)
            )}
          </div>

          {/* Row 4 (6 logos) */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 md:gap-3.5 w-full">
            {row4Clients.map((client, idx) =>
              renderClientCard(client, `row4-${client.id}-${idx}`)
            )}
          </div>
        </div>

        {/* Slow-Scrolling Light-Themed Metrics Marquee */}
        <div
          className="relative w-full overflow-hidden py-2"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, transparent 100%)',
          }}
        >
          <div className="flex gap-4 md:gap-6 overflow-hidden w-full py-1">
            <div className="flex gap-4 md:gap-6 shrink-0 items-center animate-marquee-slow">
              {metricsList.concat(metricsList, metricsList, metricsList).map((metric, i) => (
                <div
                  key={`metric-${i}`}
                  className="flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-2xl bg-white text-slate-800 border border-slate-200 shadow-2xs hover:border-[#0057ff] hover:text-[#0057ff] hover:shadow-xs transition-all duration-200 cursor-default"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] md:text-[14.5px] tracking-tight whitespace-nowrap">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 shrink-0 items-center animate-marquee-slow" aria-hidden="true">
              {metricsList.concat(metricsList, metricsList, metricsList).map((metric, i) => (
                <div
                  key={`metric-dup-${i}`}
                  className="flex items-center px-5 md:px-6 py-2.5 md:py-3 rounded-2xl bg-white text-slate-800 border border-slate-200 shadow-2xs hover:border-[#0057ff] hover:text-[#0057ff] hover:shadow-xs transition-all duration-200 cursor-default"
                >
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] md:text-[14.5px] tracking-tight whitespace-nowrap">
                    {metric}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
