import { useState } from 'react';
import { ChevronDown, MapPin, Navigation, ExternalLink, HelpCircle } from 'lucide-react';

interface FAQItem {
  num: string;
  question: string;
  answer: string;
}

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Eco+Apps+Solutions/@10.9675734,76.9764262,17z/data=!4m6!3m5!1s0x3ba85b9c03939a49:0xeccdd74bb2b11d79!8m2!3d10.9677379!4d76.9789687!16s%2Fg%2F11z732wxqb?entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D';

const faqsData: FAQItem[] = [
  {
    num: '01',
    question: 'What digital marketing services does Eco Apps Solutions provide in Coimbatore?',
    answer:
      'Eco Apps Solutions, a unit of Data Apps Technologies, is a digital marketing agency in Coimbatore providing SEO, AEO, AI SEO, performance marketing, Google Ads, Meta Ads, social media marketing, marketing automation, website development, ecommerce marketing and B2B marketing services. We create data-driven digital marketing strategies to improve search visibility, generate qualified leads, increase conversions and support long-term business growth.',
  },
  {
    num: '02',
    question: 'How can a digital marketing agency in Coimbatore help my business grow online?',
    answer:
      'A professional digital marketing agency helps businesses increase online visibility, attract relevant customers and generate qualified leads through SEO, AEO, paid advertising, social media marketing, content marketing and conversion optimization. At Eco Apps Solutions, we combine marketing, technology and data to create customized strategies based on your business goals, target audience and customer journey.',
  },
  {
    num: '03',
    question: 'What is the difference between SEO and AEO, and why does my business need both?',
    answer:
      "SEO (Search Engine Optimization) focuses on improving a website's visibility in traditional search results, while AEO (Answer Engine Optimization) focuses on making content clear, structured and relevant for direct-answer and conversational search experiences. Our SEO and AEO strategy combines search intent, topical relevance, structured content, FAQs, entities, semantic relationships and authoritative information to help your business become more discoverable across modern search and answer experiences.",
  },
  {
    num: '04',
    question: 'Does Eco Apps Solutions provide Google Ads and performance marketing services?',
    answer:
      'Yes. Eco Apps Solutions provides performance marketing and paid advertising services, including Google Ads, Meta Ads, Facebook Ads, Instagram Ads, YouTube Ads, remarketing and conversion-focused campaigns. We use audience targeting, conversion tracking, landing page optimization, analytics and continuous campaign optimization to help businesses improve lead generation, conversions and return on advertising investment.',
  },
  {
    num: '05',
    question: 'Can Eco Apps Solutions improve my website\'s SEO, AEO and conversion performance?',
    answer:
      "Yes. We can optimize your website for SEO, AEO and conversions by improving technical SEO, website structure, page speed, mobile experience, content quality, keyword and search-intent targeting, internal linking, schema markup, entity relevance, FAQs and conversion-focused page elements. The goal is to create a website that is easier for search engines, answer engines and potential customers to understand.",
  },
];

interface FAQSectionProps {
  onHover?: () => void;
  onLeave?: () => void;
}

export default function FAQSection({ onHover, onLeave }: FAQSectionProps) {
  // First question open by default for immediate engagement
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section px-6 md:px-14 py-24 md:py-32 bg-slate-50/60 border-b border-slate-200 relative" id="faqs">
      <div className="max-w-[1520px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="section-title-reveal font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0b1528] leading-[1.12] tracking-tight mb-5">
            Frequently Asked Questions About Digital Marketing, SEO &amp; AEO
          </h2>

          <p className="font-['Manrope'] text-[16px] md:text-[17px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our data-driven growth strategies, AI search optimization, and performance execution in Coimbatore.
          </p>
        </div>

        {/* 2-Column Grid: Left (Questions) | Right (Location Map) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── Left Column: Questions Accordion (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
            {faqsData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-sky-400 shadow-[0_12px_35px_rgba(14,165,233,0.1)]'
                      : 'bg-white/80 border-slate-200/90 hover:border-sky-300 hover:bg-white hover:shadow-[0_8px_25px_rgba(14,165,233,0.06)]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start sm:items-center justify-between gap-4 p-6 sm:p-7 md:p-8 text-left cursor-pointer focus:outline-none select-none"
                    aria-expanded={isOpen}
                    onMouseEnter={onHover}
                    onMouseLeave={onLeave}
                  >
                    <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1">
                      <span
                        className={`inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-xl font-['JetBrains_Mono'] text-xs font-bold transition-colors ${
                          isOpen
                            ? 'bg-[#0057ff] text-white shadow-xs'
                            : 'bg-sky-50 text-sky-700 border border-sky-100 group-hover:bg-sky-100'
                        }`}
                      >
                        {item.num}
                      </span>
                      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[17px] sm:text-[18px] md:text-[19px] text-[#0b1528] group-hover:text-[#0057ff] transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <span
                      className={`inline-flex items-center justify-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 mt-0.5 sm:mt-0 ${
                        isOpen
                          ? 'bg-sky-100 text-[#0057ff] rotate-180'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 stroke-[2.5]" />
                    </span>
                  </button>

                  {/* Smooth Expandable Answer Body */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-7 md:px-8 pb-6 sm:pb-7 md:pb-8 pt-0">
                        <div className="border-t border-slate-100 pt-5">
                          <p className="font-['Manrope'] text-[15px] sm:text-[15.5px] leading-[1.78] text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Support Callout */}
            <div className="mt-4 p-5 rounded-2xl bg-white/70 border border-slate-200 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2.5 text-slate-600 font-['Manrope'] text-sm">
                <HelpCircle className="w-4 h-4 text-[#0057ff] shrink-0" />
                <span>Have a custom question about your marketing?</span>
              </div>
              <a
                href="#contact"
                className="font-bold text-sm text-[#0057ff] hover:underline underline-offset-4"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                Talk directly with our strategists &rarr;
              </a>
            </div>
          </div>

          {/* ── Right Column: Company Location Map Card (5 cols, sticky) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_18px_45px_rgba(14,165,233,0.08)] flex flex-col gap-6 relative overflow-hidden group hover:border-sky-300 transition-all duration-300">
              
              {/* Top Card Info */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0057ff] font-['JetBrains_Mono'] text-[11px] font-bold uppercase tracking-wider mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0057ff]" />
                    <span>Company Location</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl text-[#0b1528] leading-tight mb-1">
                    Eco Apps Solutions
                  </h3>
                  <p className="font-['Manrope'] text-[13.5px] font-medium text-slate-500">
                    A Unit of Data Apps Technologies
                  </p>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                  className="w-10 h-10 rounded-2xl bg-sky-50 hover:bg-[#0057ff] text-[#0057ff] hover:text-white flex items-center justify-center transition-colors shrink-0 shadow-xs cursor-pointer"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Address details */}
              <div className="flex flex-col gap-1.5 font-['Manrope'] text-[14px] text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <MapPin className="w-4 h-4 text-[#0057ff] shrink-0" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="font-['JetBrains_Mono'] text-xs text-slate-400 pl-6">
                  10.9677° N, 76.9790° E
                </div>
              </div>

              {/* Interactive Google Map Embed Frame */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 aspect-[16/11] min-h-[220px]">
                <iframe
                  title="Eco Apps Solutions Location Map"
                  src="https://maps.google.com/maps?q=10.9677379,76.9789687&hl=en&z=16&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Clickable redirect overlay */}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-transparent hover:bg-sky-500/10 transition-colors z-10 flex items-end justify-end p-3 pointer-events-auto cursor-pointer"
                  title="Click to view Eco Apps Solutions on Google Maps"
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#0b1528] font-['Manrope'] text-xs font-bold shadow-md border border-slate-200">
                    <Navigation className="w-3.5 h-3.5 text-[#0057ff]" />
                    <span>Open in Maps</span>
                  </span>
                </a>
              </div>

              {/* Action Button: Redirect to Google Maps */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-['Manrope'] font-bold text-sm text-white bg-gradient-to-r from-[#0057ff] to-sky-500 hover:from-[#004cd6] hover:to-sky-600 rounded-xl shadow-[0_8px_20px_rgba(0,87,255,0.28)] hover:shadow-[0_12px_28px_rgba(0,87,255,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
