import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Search,
  TrendingUp,
  Share2,
  ShoppingBag,
  Briefcase,
} from 'lucide-react';
import './LightsparkSeoHero.css';

export interface MarketingTileItem {
  id: string;
  name: string;
  shortName: string;
  noun: string;
  desc: string;
  href: string;
  themeClass: string;
  icon: React.ElementType;
  iconColor: string;
  dx: number;
  dy: number;
  w: number;
  tx: number;
  ty: number;
  ax: number;
  ay: number;
}

// Exact 5 Marketing Services matching EcoApps website pages
const DESKTOP_MARKETING_TILES: MarketingTileItem[] = [
  {
    id: 'seo-aiseo',
    name: 'SEO & AI SEO Services',
    shortName: 'SEO & AI SEO',
    noun: 'SEO & AI Search Dominance',
    desc: 'Combine traditional Google search rankings with direct AI citations across ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    href: '/seo-service',
    themeClass: 'tile-cyan-grad',
    icon: Search,
    iconColor: 'text-[#0284c7]',
    dx: -0.34,
    dy: -0.26,
    w: 0.18,
    tx: 5.0,
    ty: 0.2,
    ax: 7,
    ay: 7,
  },
  {
    id: 'paid-ads-ppc',
    name: 'Paid Ads and PPC',
    shortName: 'Paid Ads & PPC',
    noun: 'High-ROAS Paid Advertising',
    desc: 'Performance Google Ads, Meta Ad campaigns, and YouTube media buying engineered for maximum return on ad spend.',
    href: '/paid-ads-ppc',
    themeClass: 'tile-blue-grad',
    icon: TrendingUp,
    iconColor: 'text-[#2563eb]',
    dx: 0.34,
    dy: -0.26,
    w: 0.18,
    tx: 5.4,
    ty: 0.6,
    ax: 8,
    ay: 8,
  },
  {
    id: 'social-media',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    noun: 'Viral Social Reach & Authority',
    desc: 'Structured reel production, executive brand authority, community management, and compounding audience engagement.',
    href: '/social-media-marketing',
    themeClass: 'tile-pink-grad',
    icon: Share2,
    iconColor: 'text-[#db2777]',
    dx: -0.62,
    dy: 0.12,
    w: 0.18,
    tx: 6.0,
    ty: 1.0,
    ax: 8,
    ay: 8,
  },
  {
    id: 'ecommerce-marketing',
    name: 'Ecommerce Marketing',
    shortName: 'Ecommerce',
    noun: 'Compounding Ecommerce Sales',
    desc: 'Shopify & D2C growth funnels, retention email automation, Google Shopping campaigns, and lifetime value optimization.',
    href: '/ecommerce-marketing',
    themeClass: 'tile-emerald-grad',
    icon: ShoppingBag,
    iconColor: 'text-[#059669]',
    dx: 0.62,
    dy: 0.12,
    w: 0.18,
    tx: 4.8,
    ty: 0.4,
    ax: 7,
    ay: 7,
  },
  {
    id: 'b2b-marketing',
    name: 'B2B Marketing',
    shortName: 'B2B Marketing',
    noun: 'Enterprise Pipeline Generation',
    desc: 'Targeted LinkedIn campaigns, account-based marketing funnels, and automated lead qualification for high-ticket sales.',
    href: '/b2b-marketing',
    themeClass: 'tile-indigo-grad',
    icon: Briefcase,
    iconColor: 'text-[#4f46e5]',
    dx: 0,
    dy: 0.35,
    w: 0.18,
    tx: 5.2,
    ty: 0.8,
    ax: 8,
    ay: 8,
  },
];

const MOBILE_MARKETING_TILES: MarketingTileItem[] = [
  { ...DESKTOP_MARKETING_TILES[0], dx: -0.32, dy: -0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[1], dx: 0.32, dy: -0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[2], dx: -0.34, dy: 0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[3], dx: 0.34, dy: 0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[4], dx: 0, dy: 0.48, w: 0.40 },
];

interface LightsparkSeoHeroProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function LightsparkSeoHero({ onHover, onLeave }: LightsparkSeoHeroProps) {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  // Dragging & Panning
  const [isDragging, setIsDragging] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });
  const currentPanRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  // Interactive Hover State
  const [hoveredTile, setHoveredTile] = useState<MarketingTileItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const [dimensions, setDimensions] = useState({ width: 1440, height: 800 });
  const [isMobile, setIsMobile] = useState(false);

  // Measure hero dimensions on mount & window resize
  useEffect(() => {
    const updateSize = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setDimensions({
          width: Math.max(320, rect.width || window.innerWidth),
          height: Math.max(500, rect.height || window.innerHeight),
        });
      }
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Mouse Move Handler for spotlight on dots & hover pill tracker
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });

      if (dotsRef.current) {
        dotsRef.current.style.setProperty('--mx', `${x}px`);
        dotsRef.current.style.setProperty('--my', `${y}px`);
      }

      if (isDragging) {
        const deltaX = e.clientX - dragStartRef.current.x;
        const deltaY = e.clientY - dragStartRef.current.y;
        if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
          hasMovedRef.current = true;
        }
        setPanOffset({
          x: currentPanRef.current.x + deltaX,
          y: currentPanRef.current.y + deltaY,
        });
      }
    },
    [isDragging]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    currentPanRef.current = { ...panOffset };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const activeTiles = isMobile ? MOBILE_MARKETING_TILES : DESKTOP_MARKETING_TILES;

  const handleTileClick = (tile: MarketingTileItem, e: React.MouseEvent) => {
    e.preventDefault();
    if (hasMovedRef.current) return;
    navigate(tile.href);
  };

  return (
    <section
      ref={heroRef}
      className={`ls-seo-hero ${isDragging ? 'ls-seo-hero-grabbing' : ''}`}
      aria-label="Marketing Services Interactive Hero"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background Bleed & Spotlight Dotted Matrix */}
      <div className="ls-seo-bleed">
        <div
          ref={dotsRef}
          className="ls-seo-dots"
          style={{ '--spot-r': '380px' } as React.CSSProperties}
        />

        {/* Interactive Pannable World of Marketing 3D Tiles */}
        <div
          className="ls-seo-world"
          style={{
            transform: `translate3d(${panOffset.x}px, ${panOffset.y}px, 0)`,
            transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {activeTiles.map((tile) => {
            let tileWidth: number;
            let left: number;
            let top: number;

            if (!isMobile) {
              const h = dimensions.height;
              const w = dimensions.width;
              tileWidth = Math.round(tile.w * h);
              left = w / 2 + tile.dx * h - tileWidth / 2;
              top = h / 2 + tile.dy * h - tileWidth / 2;
            } else {
              const w = dimensions.width;
              const h = dimensions.height;
              tileWidth = Math.round(tile.w * w);
              left = w / 2 + tile.dx * w - tileWidth / 2;
              top = h / 2 + tile.dy * h * 0.6 - tileWidth / 2;
            }

            const isThisHovered = hoveredTile?.id === tile.id;
            const IconComp = tile.icon;

            return (
              <div
                key={tile.id}
                className={`ls-seo-card ${isThisHovered ? 'ls-seo-card-hover' : ''}`}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  width: `${tileWidth}px`,
                  height: `${tileWidth * 0.82}px`,
                  zIndex: isThisHovered ? 25 : 2,
                  pointerEvents: 'auto',
                  ['--dur' as any]: `${tile.tx}s`,
                  ['--delay' as any]: `${tile.ty}s`,
                  ['--float' as any]: `-${tile.ax}px`,
                }}
                onMouseEnter={() => {
                  setHoveredTile(tile);
                  if (onHover) onHover();
                }}
                onMouseLeave={() => {
                  setHoveredTile(null);
                  if (onLeave) onLeave();
                }}
                onClick={(e) => handleTileClick(tile, e)}
              >
                <div className={`ls-tile-inner ${tile.themeClass} group cursor-pointer shadow-md`}>
                  {/* Center Clean Icon */}
                  <div className="w-11 h-11 flex items-center justify-center transition-transform duration-400 group-hover:scale-110 mb-1">
                    <IconComp className={`w-8 h-8 ${tile.iconColor} drop-shadow-xs`} />
                  </div>
                  {/* Clean Card Name */}
                  <span className="text-[11px] font-extrabold tracking-wider font-mono uppercase text-center leading-tight">
                    {tile.shortName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Bottom Section Fade */}
        <div className="ls-seo-bottom-fade" />
      </div>

      {/* Floating Hover Mouse Pill Tracker */}
      <div
        className="ls-seo-hover-label"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          opacity: hoveredTile ? 1 : 0,
        }}
        aria-hidden="true"
      >
        <span className="ls-seo-hover-label-pill">
          <span>{hoveredTile ? hoveredTile.name : ''}</span>
          <span className="ls-seo-pill-arrow">→</span>
        </span>
      </div>

      {/* Hero Center Typography & Dynamic Morphing Content with Generous Safe Margins */}
      <div className="ls-seo-center">
        {/* Dynamic Tagline Badge */}
        <div className="ls-seo-pill-tag">
          <span className="ls-seo-pill-dot" />
          <span>
            {hoveredTile ? (
              <span className="flex items-center gap-1.5 text-sky-700">
                <Sparkles className="w-3 h-3 text-sky-600" />
                Featured Marketing Service
              </span>
            ) : (
              'Search Engine & AI Answer Optimization'
            )}
          </span>
        </div>

        {/* Dynamic Morphing Headline */}
        <h1
          key={hoveredTile ? hoveredTile.noun : 'default-head'}
          className="ls-seo-heading ls-seo-fade"
        >
          {hoveredTile ? (
            <>
              The Engine for{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                {hoveredTile.noun}
              </span>
            </>
          ) : (
            <>
              SEO &amp; AI SEO Company{' '}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                in Coimbatore
              </span>
            </>
          )}
        </h1>

        {/* Dynamic Morphing Subhead */}
        <p
          key={hoveredTile ? hoveredTile.desc : 'default-desc'}
          className="ls-seo-subhead ls-seo-fade"
        >
          {hoveredTile
            ? hoveredTile.desc
            : 'Combine traditional Google search dominance with next-generation AI answer engines (ChatGPT, Perplexity, Gemini & Google AI Overviews) for predictable, compounding business growth.'}
        </p>

        {/* Dynamic Morphing Action Buttons */}
        <div className="ls-seo-ctas">
          {hoveredTile ? (
            <a
              href={hoveredTile.href}
              onClick={(e) => {
                e.preventDefault();
                navigate(hoveredTile.href);
              }}
              className="ls-seo-btn-primary ls-seo-fade"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              <span>Explore {hoveredTile.name}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <>
              <a
                href="#pricing"
                className="ls-seo-btn-primary"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span>Get an SEO Growth Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#capabilities"
                className="ls-seo-btn-secondary"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <span>Explore Services</span>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
