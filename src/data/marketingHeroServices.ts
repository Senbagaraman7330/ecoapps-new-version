import React from 'react';
import { Search, Share2, ShoppingBag, Briefcase } from 'lucide-react';

export interface MarketingTileItem {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  headlinePrefix: string;
  headlineGradient: string;
  headlineSuffix?: string;
  desc: string;
  href: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
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

export const DESKTOP_MARKETING_TILES: MarketingTileItem[] = [
  {
    id: 'seo-aiseo',
    name: 'SEO & AI SEO Services',
    shortName: 'SEO & AI SEO',
    badge: 'SEO & AI SEO Services',
    headlinePrefix: 'Get Found on Search.',
    headlineGradient: 'Get Recommended by AI.',
    headlineSuffix: '',
    desc: 'Combine search engine optimization and generative engine optimization (GEO) to dominate Google rankings and AI-driven answer engines.',
    href: '/seo-service',
    primaryCtaText: 'Get a Free SEO Consultation',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore SEO Services',
    secondaryCtaHref: '/seo-service#seo-services',
    themeClass: 'tile-cyan-grad',
    icon: Search,
    iconColor: 'text-[#0284c7]',
    dx: -0.42,
    dy: -0.24,
    w: 0.18,
    tx: 5.0,
    ty: 0.2,
    ax: 7,
    ay: 7,
  },
  {
    id: 'social-media',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    badge: 'Social Media Marketing Services',
    headlinePrefix: 'Build Your Brand.',
    headlineGradient: 'Engage Your Audience.',
    headlineSuffix: 'Grow Your Business.',
    desc: 'Turn your social media presence into a powerful growth channel. We create strategic campaigns that build brand awareness, engage your audience, and drive real business results.',
    href: '/social-media-marketing',
    primaryCtaText: 'Get a Free Social Consultation',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore Social Services',
    secondaryCtaHref: '/social-media-marketing#social-services',
    themeClass: 'tile-pink-grad',
    icon: Share2,
    iconColor: 'text-[#db2777]',
    dx: 0.42,
    dy: -0.24,
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
    badge: 'Ecommerce Marketing Services',
    headlinePrefix: 'Grow Your Online Store.',
    headlineGradient: 'Reach More Customers.',
    headlineSuffix: 'Sell More.',
    desc: 'We help ecommerce brands attract qualified shoppers, increase visibility, boost conversions, and sustainably scale online store sales.',
    href: '/ecommerce-marketing',
    primaryCtaText: 'Get Your Growth Plan',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore Services',
    secondaryCtaHref: '/ecommerce-marketing#ecommerce-services',
    themeClass: 'tile-blue-grad',
    icon: ShoppingBag,
    iconColor: 'text-[#2563eb]',
    dx: -0.46,
    dy: 0.26,
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
    badge: 'B2B Marketing Services',
    headlinePrefix: 'Generate Qualified Leads.',
    headlineGradient: 'Reach Decision-Makers.',
    headlineSuffix: 'Grow Your Business.',
    desc: 'Connect with key decision-makers and high-value accounts through strategic SEO, paid advertising, LinkedIn, and account-based marketing pipelines.',
    href: '/b2b-marketing',
    primaryCtaText: 'Get a Free B2B Consultation',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore Services',
    secondaryCtaHref: '/b2b-marketing#b2b-services',
    themeClass: 'tile-cyan-grad',
    icon: Briefcase,
    iconColor: 'text-[#0284c7]',
    dx: 0.46,
    dy: 0.26,
    w: 0.18,
    tx: 5.2,
    ty: 0.8,
    ax: 8,
    ay: 8,
  },
];

export const MOBILE_MARKETING_TILES: MarketingTileItem[] = [
  { ...DESKTOP_MARKETING_TILES[0], dx: -0.32, dy: -0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[1], dx: 0.32, dy: -0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[2], dx: -0.32, dy: 0.32, w: 0.38 },
  { ...DESKTOP_MARKETING_TILES[3], dx: 0.32, dy: 0.32, w: 0.38 },
];
