export interface FloatingTestimonial {
  id: string;
  quote: string;
  author: string;
  position: 'tl' | 'tr' | 'bl' | 'br';
}

export interface ClientLogo {
  name: string;
  tagline?: string;
}

export interface SeoProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  metric: string;
  coverImage: string;
}

export interface SeoCapability {
  id: string;
  icon: 'Layers' | 'Sparkles' | 'Code2' | 'Rocket';
  title: string;
  badge: string;
  description: string;
  details: string[];
  previewImage: string;
}

export interface SeoProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface SeoStat {
  value: string;
  label: string;
}

export interface SeoReview {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  metric?: string;
  avatar: string;
}

export interface SeoPricingPlan {
  id: string;
  name: string;
  badge?: string;
  featured?: boolean;
  isDarkCard?: boolean;
  description: string;
  basePrice: number;
  billingPeriod: string;
  buttonText: string;
  hasAddonToggle?: boolean;
  addonName?: string;
  addonPrice?: number;
  features: { text: string; tooltip?: string }[];
}

export interface SeoFaq {
  id: string;
  question: string;
  answer: string;
}

export const floatingSeoTestimonials: FloatingTestimonial[] = [
  {
    id: '1',
    quote: '+340% increase in high-intent inbound inquiries',
    author: 'Managing Director, Coimbatore Industrial Valves',
    position: 'tl',
  },
  {
    id: '2',
    quote: 'Ranked #1 in Google Local Map Pack across Tamil Nadu',
    author: 'Founder, Apex Healthcare Solutions',
    position: 'tr',
  },
  {
    id: '3',
    quote: 'Organic search replaced 50% of our paid ad dependency',
    author: 'Head of Growth, TexStyle Global B2B',
    position: 'bl',
  },
  {
    id: '4',
    quote: 'Compound organic traffic producing verified monthly leads',
    author: 'CEO, Precision Engineering Co.',
    position: 'br',
  },
];

export const seoClientLogos: ClientLogo[] = [
  { name: 'Kovai Tech Hub' },
  { name: 'Apex Industrial' },
  { name: 'TexStyle Global' },
  { name: 'Vanguard Medical' },
  { name: 'OmniRetail India' },
  { name: 'Prime Engineering' },
];

export const seoProjects: SeoProject[] = [
  {
    id: 'coimbatore-manufacturing-seo',
    slug: 'coimbatore-manufacturing-seo',
    title: 'Precision Engineering & Industrial B2B Search Scaling',
    client: 'Apex Industrial Engineering, Coimbatore',
    category: 'Technical & Commercial SEO',
    metric: '+380% Qualified Quote Requests • #1 for 45+ Commercial Terms',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'local-seo-gbp-domination',
    slug: 'local-seo-gbp-domination',
    title: 'Google Business Profile & Local Search Domination',
    client: 'Multi-Speciality Healthcare Network',
    category: 'Local SEO & Google Business Profile',
    metric: 'Top 3 Map Pack Across 12 Locations • +240% Patient Calls',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'ecommerce-organic-revenue',
    slug: 'ecommerce-organic-revenue',
    title: 'National Organic Visibility & Commercial Intent Optimization',
    client: 'TexStyle Direct B2B Portal',
    category: 'Content SEO & Keyword Architecture',
    metric: '1.2M Organic Impressions • 4.1x Compounding Organic Pipeline',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'saas-technical-audit-scaling',
    slug: 'saas-technical-audit-scaling',
    title: 'Technical SEO Infrastructure & Sub-Second Core Web Vitals',
    client: 'CloudWorks Enterprise Software',
    category: 'Technical SEO & Crawl Budget',
    metric: '100% Core Web Vitals Pass Rate • Zero Indexation Bottlenecks',
    coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
  },
  {
    id: 'link-building-authority-engine',
    slug: 'link-building-authority-engine',
    title: 'High-Authority White-Hat Link Acquisition Campaign',
    client: 'FinEdge Advisory Services',
    category: 'Link Building & Digital PR',
    metric: '+65 High-Authority Backlinks • Outranked Legacy Industry Portals',
    coverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80',
  },
];

export const seoCapabilities: SeoCapability[] = [
  {
    id: 'ai-seo-and-aeo',
    icon: 'Sparkles',
    title: 'AI SEO & Answer Engine Optimization (AEO)',
    badge: 'AI Search Engines',
    description: 'We position your brand to be cited and recommended directly in ChatGPT, Perplexity, Gemini, and Google AI Overviews through semantic knowledge graphs, entity optimization, and conversational authority citations.',
    details: [
      'AI Engine Visibility: Optimization for ChatGPT Search, Perplexity AI, Google AI Overviews & Gemini',
      'Entity & Knowledge Graph: Semantic markup, Wikidata entities & factual brand citations',
      'Direct-Answer Optimization: Structured FAQs, conversational query targeting & AI summaries',
      'Brand Authority Signals: High-trust digital mentions that AI models reference as definitive sources',
    ],
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'technical-and-onpage',
    icon: 'Layers',
    title: 'Technical SEO & Core Web Vitals',
    badge: 'Core Foundation',
    description: 'We eliminate technical crawl barriers and fine-tune page architecture, metadata, and Core Web Vitals so search engines can easily index, interpret, and reward your website.',
    details: [
      'Technical SEO: Crawl budget audits, robots.txt, XML sitemaps & canonical integrity',
      'On-Page SEO: Title tags, meta descriptions, header hierarchy & image optimization',
      'Sub-second Core Web Vitals performance tuning and JavaScript rendering fixes',
      'Schema markup deployment (Organization, LocalBusiness, Product, FAQ & Service)',
    ],
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'keyword-and-content',
    icon: 'Code2',
    title: 'Keyword Research & Content SEO',
    badge: 'Intent Driven',
    description: 'We discover exactly what your highest-value customers are typing when ready to buy, creating content silos that capture demand and build authoritative search footprint.',
    details: [
      'Keyword Research: High-intent commercial, transactional, and informational queries',
      'Content SEO: Semantic pillar pages, keyword clustering and topical hubs',
      'Conversion-optimized landing page copy engineered to convert visitors into inquiries',
      'Competitor search gap analysis to capture valuable search market share',
    ],
    previewImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'local-seo-gbp',
    icon: 'Rocket',
    title: 'Local SEO & Google Business Profile',
    badge: 'Local Dominance',
    description: 'Dominate local Coimbatore and regional search queries. We optimize your Google Business Profile and local citations to place your company directly in front of nearby buyers.',
    details: [
      'Local SEO: Geo-targeted landing pages and localized service silos',
      'Google Business Profile (GBP): Profile optimization, category alignment & review strategy',
      'NAP consistency across major Indian business directories and map databases',
      'Hyper-local map pack ranking to maximize local phone calls, store visits and inquiries',
    ],
    previewImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'linkbuilding-reporting',
    icon: 'Sparkles',
    title: 'Link Building & SEO/AI Reporting',
    badge: 'Compounding Growth',
    description: 'Build lasting domain authority with strictly white-hat link acquisition, accompanied by transparent, business-focused reporting that connects search visibility to revenue.',
    details: [
      'Link Building: High-authority editorial backlinks, niche outreach, and digital PR',
      'SEO & AI Reporting: Transparent 24/7 dashboards tracking rankings, AI citations, traffic, and leads',
      'Google Search Console & Google Analytics 4 (GA4) full integration',
      'Monthly strategic review meetings detailing campaign progress and next milestones',
    ],
    previewImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
  },
];

export const seoProcessSteps: SeoProcessStep[] = [
  {
    num: '01',
    title: 'Audit & Search Intent Discovery',
    description: 'We audit your technical architecture, indexation health, AI readiness, competitor gaps, and map the high-intent queries buyers use to find your solutions.',
  },
  {
    num: '02',
    title: 'Technical & Semantic Foundation',
    description: 'Fixing Core Web Vitals, structuring schema entity data, and optimizing on-page elements so search engine bots and AI answer engines can flawlessly interpret your domain.',
  },
  {
    num: '03',
    title: 'Content, Local SEO & AI Answer Hubs',
    description: 'Publishing conversion-focused content assets, building localized service pages, optimizing your Google Profile, and building direct-answer content for AI search engines.',
  },
  {
    num: '04',
    title: 'Authority Building & Compounding Growth',
    description: 'Acquiring high-tier white-hat backlinks and delivering transparent monthly reporting that measures organic pipeline and long-term business ROI.',
  },
];

export const seoStats: SeoStat[] = [
  { value: '3.8×', label: 'Average organic inquiry growth' },
  { value: '88%', label: 'Target keywords in top 10 positions' },
  { value: '60%+', label: 'Reduction in paid ad dependency' },
  { value: '100%', label: 'White-hat, sustainable growth strategies' },
];

export const seoReviews: SeoReview[] = [
  {
    id: 'rev-1',
    rating: 5,
    quote: 'Eco Apps Solutions transformed our B2B visibility in Coimbatore and across South India. Inbound RFQs grew by 380% within 5 months, and we are now cited in ChatGPT and Google AI Overviews.',
    author: 'Karthik Ramanathan',
    role: 'Managing Director, Apex Industrial Engineering',
    metric: '+380% Inbound RFQs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'rev-2',
    rating: 5,
    quote: 'Dominating local Google Map Pack across all our clinic branches has completely transformed our patient booking volume without burning money on paid ads.',
    author: 'Dr. Priya Sundaram',
    role: 'Chief Medical Director, Vanguard Healthcare Network',
    metric: '#1 Local Map Pack Rank',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 'rev-3',
    rating: 5,
    quote: 'Their combination of technical SEO and AI Search Engine Optimization helped us capture search market share from legacy portals. The ROI has been phenomenal.',
    author: 'Senthil Nathan',
    role: 'VP of Marketing, TexStyle Global B2B',
    metric: '4.1× Compounding Pipeline',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
];

export const seoPricingPlans: SeoPricingPlan[] = [
  {
    id: 'seo-audit-sprint',
    name: 'Technical & AI SEO Audit Sprint',
    description: 'A deep-dive technical, semantic, and competitive audit with a step-by-step roadmap to eliminate crawl barriers and prepare for AI search engines.',
    basePrice: 1450,
    billingPeriod: 'one-time',
    buttonText: 'Get an SEO Growth Strategy',
    features: [
      { text: 'Full technical crawl & indexation audit' },
      { text: 'Core Web Vitals performance benchmark' },
      { text: 'AI Search (AEO) readiness analysis' },
      { text: 'Competitor search gap & keyword mapping' },
      { text: 'Schema markup & structured data plan' },
      { text: 'Prioritized developer-ready action checklist' },
    ],
  },
  {
    id: 'seo-growth-partnership',
    name: 'Search & AI SEO Growth Engine',
    badge: 'Most Popular',
    featured: true,
    description: 'Comprehensive monthly partnership designed to build compounding search visibility across Google and AI search engines.',
    basePrice: 3200,
    billingPeriod: '/month',
    buttonText: 'Get an SEO Growth Strategy',
    hasAddonToggle: true,
    addonName: 'Advanced Local SEO & Multi-Location GBP Engine',
    addonPrice: 650,
    features: [
      { text: 'Ongoing technical SEO maintenance & monitoring' },
      { text: 'AI SEO & Answer Engine Optimization (ChatGPT & Perplexity)' },
      { text: 'High-intent on-page & content SEO optimization' },
      { text: 'Google Business Profile (GBP) active management' },
      { text: 'White-hat link building & local citation acquisition' },
      { text: 'Conversion rate optimization for search landing pages' },
      { text: 'Monthly transparent SEO & AI search reporting' },
    ],
  },
  {
    id: 'seo-enterprise-scale',
    name: 'Enterprise Market Dominance',
    isDarkCard: true,
    description: 'For companies aiming to outrank national incumbents and command high-volume search and AI answer market share.',
    basePrice: 5800,
    billingPeriod: '/month',
    buttonText: 'Get an SEO Growth Strategy',
    features: [
      { text: 'Dedicated senior SEO & AI search strategist pod' },
      { text: 'Multi-region & international search expansion' },
      { text: 'Programmatic SEO & high-scale content architecture' },
      { text: 'Knowledge Graph entity engineering & digital PR' },
      { text: 'High-tier digital PR & authoritative link acquisition' },
      { text: 'Custom 24/7 Looker Studio ROI reporting dashboard' },
      { text: 'Direct communication channel & bi-weekly executive reviews' },
    ],
  },
];

export const seoFaqs: SeoFaq[] = [
  {
    id: 'faq-1',
    question: 'What is AI SEO / AEO, and how does it integrate with traditional SEO?',
    answer: 'Traditional SEO focuses on ranking in Google search results pages, while AI SEO (or Answer Engine Optimization / AEO) optimizes your digital presence to be cited and recommended directly within AI tools like ChatGPT, Perplexity, Gemini, and Google AI Overviews. Eco Apps Solutions combines both approaches so your business captures high-intent traffic across traditional search and emerging conversational AI platforms.',
  },
  {
    id: 'faq-2',
    question: 'Why does SEO matter for business growth compared to paid ads?',
    answer: 'Paid ads stop delivering leads the moment you stop paying. A strong SEO and AI search foundation builds compounding visibility: once your pages rank for commercial queries and are referenced by AI models, they continuously generate qualified inquiries without per-click costs, significantly lowering your customer acquisition cost.',
  },
  {
    id: 'faq-3',
    question: 'How does Eco Apps Solutions approach SEO differently from typical agencies?',
    answer: 'Most agencies focus solely on vanity keyword rankings that fail to generate revenue. Eco Apps Solutions approaches SEO from a commercial growth perspective: we focus on buyer intent, technical health, on-page conversions, AI knowledge graph entities, and qualified leads that translate into business revenue.',
  },
  {
    id: 'faq-4',
    question: 'What deliverables are included across the campaign stages?',
    answer: 'Our deliverables include comprehensive technical audits, commercial keyword mapping matrices, AI entity & schema structured data, conversion-driven content assets, Google Business Profile optimization, ethical link building, and detailed monthly reporting with transparent analytics.',
  },
  {
    id: 'faq-5',
    question: 'How long does it take to see compounding search and AI visibility?',
    answer: 'Initial indexation fixes, technical improvements, and Google Business Profile updates frequently produce noticeable rank movement within 4 to 8 weeks. Compounding visibility—where multiple competitive keywords reach page 1 and AI engines cite your brand—typically ramps up strongly between months 3 and 6 as search engines recognize your authority.',
  },
  {
    id: 'faq-6',
    question: 'Do you provide local SEO services for Coimbatore and Tamil Nadu businesses?',
    answer: 'Yes! We specialize in local search optimization, including Google Business Profile management, local citation consistency (NAP), local map pack ranking, and geo-targeted service pages to ensure nearby customers discover your business first.',
  },
  {
    id: 'faq-7',
    question: 'How do you measure and report performance?',
    answer: 'We provide clear, jargon-free monthly reports tracking keyword rank progression, AI search appearances, organic impressions, click-through rates, and most importantly, conversion actions—such as form submissions, phone calls, and quote requests generated by organic search.',
  },
];
