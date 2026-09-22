import React from 'react';
import { Code2, Smartphone, Cpu } from 'lucide-react';

export interface SoftwareTileItem {
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

export const DESKTOP_SOFTWARE_TILES: SoftwareTileItem[] = [
  {
    id: 'website-development',
    name: 'Website Development',
    shortName: 'WEBSITE DEV',
    badge: 'Website Development Services',
    headlinePrefix: 'Build a Website That',
    headlineGradient: 'Works as Hard as You Do.',
    headlineSuffix: '',
    desc: 'From high-converting landing pages to complex corporate platforms, we design and build fast, responsive, SEO-ready websites that turn visitors into customers.',
    href: '/website-development',
    primaryCtaText: 'Get a Free Consultation',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore Web Services',
    secondaryCtaHref: '/website-development#capabilities',
    themeClass: 'tile-blue-grad',
    icon: Code2,
    iconColor: 'text-[#2563eb]',
    dx: -0.42,
    dy: -0.15,
    w: 0.22,
    tx: 5.4,
    ty: 0.6,
    ax: 8,
    ay: 8,
  },
  {
    id: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'MOBILE APP DEV',
    badge: 'Mobile App Development Services',
    headlinePrefix: 'Build Powerful',
    headlineGradient: 'Mobile Apps for Your Business.',
    headlineSuffix: '',
    desc: 'At Eco Apps Solutions, we design and develop modern, user-friendly, and scalable mobile applications that help businesses connect with customers, streamline operations, improve engagement, and create new digital opportunities.',
    href: '/mobile-app-development',
    primaryCtaText: 'Get a Free Consultation',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore App Services',
    secondaryCtaHref: '/mobile-app-development#capabilities',
    themeClass: 'tile-pink-grad',
    icon: Smartphone,
    iconColor: 'text-[#db2777]',
    dx: 0.42,
    dy: -0.15,
    w: 0.22,
    tx: 6.0,
    ty: 1.0,
    ax: 8,
    ay: 8,
  },
  {
    id: 'custom-developments',
    name: 'Custom Developments',
    shortName: 'CUSTOM DEVELOPMENTS',
    badge: 'Custom Software Development Services',
    headlinePrefix: 'Software Built',
    headlineGradient: 'Around Your Business.',
    headlineSuffix: '',
    desc: 'At Eco Apps Solutions, we develop custom software solutions tailored to your business processes, operational requirements, users, and long-term goals. From business management systems to industry-specific applications, we build software that helps businesses automate processes, improve efficiency, manage operations, and scale with confidence.',
    href: '/custom-software-development',
    primaryCtaText: 'Get a Free Software Consultation',
    primaryCtaHref: '/contact',
    secondaryCtaText: 'Explore Software Solutions',
    secondaryCtaHref: '/custom-software-development#capabilities',
    themeClass: 'tile-indigo-grad',
    icon: Cpu,
    iconColor: 'text-[#4f46e5]',
    dx: 0,
    dy: 0.35,
    w: 0.22,
    tx: 5.2,
    ty: 0.8,
    ax: 8,
    ay: 8,
  },
];

export const MOBILE_SOFTWARE_TILES: SoftwareTileItem[] = [
  { ...DESKTOP_SOFTWARE_TILES[0], dx: -0.32, dy: -0.28, w: 0.38 },
  { ...DESKTOP_SOFTWARE_TILES[1], dx: 0.32, dy: -0.28, w: 0.38 },
  { ...DESKTOP_SOFTWARE_TILES[2], dx: 0, dy: 0.38, w: 0.42 },
];
