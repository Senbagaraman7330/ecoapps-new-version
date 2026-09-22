import { useState } from 'react';
import Header from '../components/Header';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import SEO from '../components/SEO';
import { faqsSchema } from '../data/schemas';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FAQItem {
  num: string;
  category: string;
  question: string;
  answer: string;
}

const allFaqsData: FAQItem[] = [
  {
    num: '01',
    category: 'General & Agency',
    question: 'What digital marketing services does Eco Apps Solutions provide in Coimbatore?',
    answer:
      'Eco Apps Solutions, a unit of Data Apps Technologies, is a digital marketing agency in Coimbatore providing SEO, AEO, AI SEO, performance marketing, Google Ads, Meta Ads, social media marketing, marketing automation, website development, ecommerce marketing and B2B marketing services. We create data-driven digital marketing strategies to improve search visibility, generate qualified leads, increase conversions and support long-term business growth.',
  },
  {
    num: '02',
    category: 'General & Agency',
    question: 'How can a digital marketing agency in Coimbatore help my business grow online?',
    answer:
      'A professional digital marketing agency helps businesses increase online visibility, attract relevant customers and generate qualified leads through SEO, AEO, paid advertising, social media marketing, content marketing and conversion optimization. At Eco Apps Solutions, we combine marketing, technology and data to create customized strategies based on your business goals, target audience and customer journey.',
  },
  {
    num: '03',
    category: 'SEO & AI Search',
    question: 'What is the difference between SEO and AEO, and why does my business need both?',
    answer:
      "SEO (Search Engine Optimization) focuses on improving a website's visibility in traditional search results, while AEO (Answer Engine Optimization) focuses on making content clear, structured and relevant for direct-answer and conversational search experiences. Our SEO and AEO strategy combines search intent, topical relevance, structured content, FAQs, entities, semantic relationships and authoritative information to help your business become more discoverable across modern search and answer experiences.",
  },
  {
    num: '04',
    category: 'Performance & Paid Ads',
    question: 'Does Eco Apps Solutions provide Google Ads and performance marketing services?',
    answer:
      'Yes. Eco Apps Solutions provides performance marketing and paid advertising services, including Google Ads, Meta Ads, Facebook Ads, Instagram Ads, YouTube Ads, remarketing and conversion-focused campaigns. We use audience targeting, conversion tracking, landing page optimization, analytics and continuous campaign optimization to help businesses improve lead generation, conversions and return on advertising investment.',
  },
  {
    num: '05',
    category: 'SEO & AI Search',
    question: "Can Eco Apps Solutions improve my website's SEO, AEO and conversion performance?",
    answer:
      "Yes. We can optimize your website for SEO, AEO and conversions by improving technical SEO, website structure, page speed, mobile experience, content quality, keyword and search-intent targeting, internal linking, schema markup, entity relevance, FAQs and conversion-focused page elements. The goal is to create a website that is easier for search engines, answer engines and potential customers to understand.",
  },
  {
    num: '06',
    category: 'Technology & Automation',
    question: 'What kind of web and software development services do you provide?',
    answer:
      'We design and develop fast, responsive websites, high-converting landing pages, custom web applications, SaaS MVPs, e-commerce stores, and automated CRM integrations tailored to your business operations.',
  },
  {
    num: '07',
    category: 'Technology & Automation',
    question: 'How does marketing automation and AI CRM streamline lead qualification?',
    answer:
      'By connecting incoming leads directly with automated WhatsApp, email nurturing workflows, AI conversational agents, and CRM sync, no lead is ever left unattended. Response times drop to seconds and lead conversion rates increase substantially.',
  },
];

export default function FaqsPage() {
  const [isCursorHovered, setIsCursorHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleCursorHover = () => setIsCursorHovered(true);
  const handleCursorLeave = () => setIsCursorHovered(false);

  const categories = ['All', 'General & Agency', 'SEO & AI Search', 'Performance & Paid Ads', 'Technology & Automation'];

  const filteredFaqs = allFaqsData.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-[#0b1528] selection:bg-[#0284c7] selection:text-white font-['Manrope'] overflow-x-hidden">
      {/* SEO Metadata & Canonical */}
      <SEO
        title="Frequently Asked Questions about Eco Apps Solutions Agency"
        description="Find answers to frequently asked questions about SEO, digital marketing, website development, mobile app development and other services."
        canonical="https://ecoappssolutions.com/faqs"
        schema={faqsSchema}
      />

      <Cursor isHovered={isCursorHovered} />
      <Header onHover={handleCursorHover} onLeave={handleCursorLeave} />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-14 bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-xs font-['JetBrains_Mono'] font-bold tracking-widest uppercase mb-4 shadow-2xs">
            <span>Help &amp; Knowledge Center</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#0b1528] leading-[1.1] tracking-tight mb-5">
            Frequently Asked Questions
          </h1>

          <p className="font-['Manrope'] text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Answers to common questions about our digital marketing, SEO, AEO, paid ads, and automation solutions.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 shadow-sm focus:border-[#0057ff] focus:ring-2 focus:ring-sky-100 outline-none transition text-sm font-medium"
            />
          </div>
        </div>
      </section>

      {/* FAQs List Section */}
      <section className="py-16 md:py-24 px-6 md:px-14 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-['Manrope'] font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0057ff] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion list */}
          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-sky-400 shadow-[0_10px_30px_rgba(14,165,233,0.1)]'
                        : 'bg-white/85 border-slate-200 hover:border-sky-300 hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-start sm:items-center justify-between gap-4 p-6 text-left cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-start sm:items-center gap-3.5 flex-1">
                        <span
                          className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-xl font-['JetBrains_Mono'] text-xs font-bold transition-colors ${
                            isOpen
                              ? 'bg-[#0057ff] text-white shadow-2xs'
                              : 'bg-sky-50 text-sky-700 border border-sky-100'
                          }`}
                        >
                          {item.num}
                        </span>
                        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-base sm:text-lg text-[#0b1528] leading-snug">
                          {item.question}
                        </h3>
                      </div>

                      <span
                        className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-full transition-all duration-300 ${
                          isOpen ? 'bg-sky-100 text-[#0057ff] rotate-180' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-slate-100 pt-4">
                          <p className="font-['Manrope'] text-sm sm:text-[15px] leading-relaxed text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
                <p className="text-slate-500 font-medium">No questions matched your search query.</p>
              </div>
            )}
          </div>

          {/* Custom Question Callout */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-slate-600 font-['Manrope'] text-sm">
              <HelpCircle className="w-5 h-5 text-[#0057ff] shrink-0" />
              <span>Have a specific inquiry about your project or industry?</span>
            </div>
            <a
              href="/contact"
              className="font-bold text-sm text-[#0057ff] hover:underline underline-offset-4"
            >
              Contact our strategy team &rarr;
            </a>
          </div>
        </div>
      </section>

      <FinalCTA onHover={handleCursorHover} onLeave={handleCursorLeave} />
      <Footer onHover={handleCursorHover} onLeave={handleCursorLeave} />
    </div>
  );
}
