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
    id: 'on-page-seo',
    icon: 'Layers',
    title: 'On-Page SEO',
    badge: 'Content & Structure',
    description: 'Optimise website content, headings, meta tags, URLs, internal links, and page structure to make your website easier for search engines and users to understand.',
    details: [
      'Website content, heading hierarchy, and meta tag optimization',
      'URL structure and search engine friendly architecture',
      'Strategic internal linking and navigational structure',
      'Semantic page structure for maximum user readability and search clarity',
    ],
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'technical-seo',
    icon: 'Code2',
    title: 'Technical SEO',
    badge: 'Performance & Indexing',
    description: 'Improve website performance, crawlability, indexing, mobile experience, site structure, and other technical factors that influence search visibility.',
    details: [
      'Website performance, Core Web Vitals, and page speed optimization',
      'Crawlability, robots.txt, and XML sitemap architecture',
      'Indexation health and canonical tag management',
      'Mobile-first experience and technical structural factors',
    ],
    previewImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'keyword-research',
    icon: 'Sparkles',
    title: 'Keyword Research',
    badge: 'Search Intent',
    description: 'Identify relevant and high-intent keywords your customers use to find products, services, and solutions like yours.',
    details: [
      'High-intent commercial and transactional keyword discovery',
      'Customer search queries and question-based intent mapping',
      'Competitor search gap analysis and opportunity finding',
      'Targeted keyword mapping tailored to your business offerings',
    ],
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'content-seo',
    icon: 'Layers',
    title: 'Content SEO',
    badge: 'Topical Authority',
    description: 'Create useful, search-focused content that answers customer questions, builds topical authority, and supports long-term organic growth.',
    details: [
      'Useful, search-focused content creation tailored to customer questions',
      'Topical authority building through structured topic clusters',
      'Search-intent optimized landing pages and authoritative resources',
      'Sustainable content framework for long-term organic traffic growth',
    ],
    previewImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'local-seo',
    icon: 'Rocket',
    title: 'Local SEO',
    badge: 'Google Maps & Local',
    description: 'Improve your visibility in local searches and Google Maps so customers can find your business when they search for services in your area.',
    details: [
      'Google Maps & Google Business Profile optimization',
      'Local search visibility and regional query targeting',
      'Geo-targeted service pages for nearby customer reach',
      'Local citations, NAP consistency, and map pack rankings',
    ],
    previewImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'off-page-seo',
    icon: 'Sparkles',
    title: 'Off-Page SEO',
    badge: 'Authority & Trust',
    description: "Strengthen your website's authority through relevant backlinks, digital presence, citations, and other trusted off-page signals.",
    details: [
      'Relevant and authoritative backlink acquisition',
      'Digital presence, brand mentions, and industry citations',
      'Trusted off-page signals that strengthen domain authority',
      'Ethical, white-hat link acquisition strategies',
    ],
    previewImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
  },
];

export const seoProcessSteps: SeoProcessStep[] = [
  {
    num: '01',
    title: 'Website & SEO Audit',
    description: 'We analyse your website, technical health, content, rankings, competitors, and current search visibility.',
  },
  {
    num: '02',
    title: 'Keyword & Search Intent Research',
    description: 'We identify the keywords and questions that matter most to your customers and business.',
  },
  {
    num: '03',
    title: 'Strategy Development',
    description: 'We create a customised SEO roadmap based on your goals, competition, and growth opportunities.',
  },
  {
    num: '04',
    title: 'Optimisation & Content',
    description: 'We improve your website structure, technical elements, content, and relevant off-page signals.',
  },
  {
    num: '05',
    title: 'AI Search Optimisation',
    description: 'We structure content and brand information to improve its relevance and accessibility for AI-driven search experiences.',
  },
  {
    num: '06',
    title: 'Monitor & Improve',
    description: 'We track performance, identify new opportunities, and continuously optimise the strategy.',
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
