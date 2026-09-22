export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ecoappssolutions.com/#organization",
      "name": "Eco Apps Solutions",
      "url": "https://ecoappssolutions.com/",
      "description": "Eco Apps Solutions is a leading digital marketing company in Coimbatore offering SEO, Google Ads, Meta Ads, branding and lead generation services."
    },
    {
      "@type": "WebSite",
      "@id": "https://ecoappssolutions.com/#website",
      "url": "https://ecoappssolutions.com/",
      "name": "Eco Apps Solutions",
      "publisher": {
        "@id": "https://ecoappssolutions.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/#webpage",
      "url": "https://ecoappssolutions.com/",
      "name": "Best Digital Marketing Company in Coimbatore",
      "description": "Eco Apps Solutions is a leading digital marketing company in Coimbatore offering SEO, Google Ads, Meta Ads, branding and lead generation services.",
      "isPartOf": {
        "@id": "https://ecoappssolutions.com/#website"
      },
      "about": {
        "@id": "https://ecoappssolutions.com/#organization"
      }
    }
  ]
};

export const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://ecoappssolutions.com/about#webpage",
      "url": "https://ecoappssolutions.com/about",
      "name": "About Eco Apps Solutions Digital Marketing Agency in Coimbatore",
      "description": "Learn about Eco Apps Solutions, a digital marketing agency in Coimbatore helping businesses grow through performance marketing and technology.",
      "isPartOf": {
        "@id": "https://ecoappssolutions.com/#website"
      },
      "about": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "publisher": {
        "@id": "https://ecoappssolutions.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://ecoappssolutions.com/#organization",
      "name": "Eco Apps Solutions",
      "url": "https://ecoappssolutions.com/"
    }
  ]
};

export const seoServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/seo-ai-seo-service#service",
      "name": "SEO & AI SEO Service",
      "serviceType": "SEO and AI SEO Services",
      "description": "Grow organic visibility with AI SEO services in Coimbatore using AI-powered strategies for content, search rankings and qualified traffic.",
      "url": "https://ecoappssolutions.com/seo-ai-seo-service",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/seo-ai-seo-service#webpage",
      "url": "https://ecoappssolutions.com/seo-ai-seo-service",
      "name": "Improve Search Rankings with SEO, AISEO Service in Coimbatore",
      "description": "Grow organic visibility with AI SEO services in Coimbatore using AI-powered strategies for content, search rankings and qualified traffic.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/seo-ai-seo-service#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ecoappssolutions.com/seo-ai-seo-service#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO & AI SEO Service",
          "item": "https://ecoappssolutions.com/seo-ai-seo-service"
        }
      ]
    }
  ]
};

export const socialMediaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/social-media-marketing#service",
      "name": "Social Media Marketing",
      "serviceType": "Social Media Marketing Services",
      "description": "Grow your brand with social media marketing services in Coimbatore focused on engaging content, audience growth, visibility and conversions.",
      "url": "https://ecoappssolutions.com/social-media-marketing",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/social-media-marketing#webpage",
      "url": "https://ecoappssolutions.com/social-media-marketing",
      "name": "Grow Your Brand with the Best Social Media Marketing Services",
      "description": "Grow your brand with social media marketing services in Coimbatore focused on engaging content, audience growth, visibility and conversions.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/social-media-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Social Media Marketing",
          "item": "https://ecoappssolutions.com/social-media-marketing"
        }
      ]
    }
  ]
};

export const ecommerceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/ecommerce-marketing#service",
      "name": "Ecommerce Marketing",
      "serviceType": "Ecommerce Marketing Services",
      "description": "Grow your online store with ecommerce marketing services in Coimbatore focused on traffic, customer acquisition, conversions and sales growth.",
      "url": "https://ecoappssolutions.com/ecommerce-marketing",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/ecommerce-marketing#webpage",
      "url": "https://ecoappssolutions.com/ecommerce-marketing",
      "name": "Increase your online sales with best Ecommerce Marketing Service",
      "description": "Grow your online store with ecommerce marketing services in Coimbatore focused on traffic, customer acquisition, conversions and sales growth.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/ecommerce-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ecommerce Marketing",
          "item": "https://ecoappssolutions.com/ecommerce-marketing"
        }
      ]
    }
  ]
};

export const b2bSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/b2b-marketing#service",
      "name": "B2B Marketing",
      "serviceType": "B2B Marketing Services",
      "description": "Generate quality business leads with B2B marketing services in Coimbatore using targeted strategies for lead generation, visibility and growth.",
      "url": "https://ecoappssolutions.com/b2b-marketing",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/b2b-marketing#webpage",
      "url": "https://ecoappssolutions.com/b2b-marketing",
      "name": "Generate Quality B2B Marketing Leads with Eco Apps Solutions",
      "description": "Generate quality business leads with B2B marketing services in Coimbatore using targeted strategies for lead generation, visibility and growth.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/b2b-marketing#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "B2B Marketing",
          "item": "https://ecoappssolutions.com/b2b-marketing"
        }
      ]
    }
  ]
};

export const customSoftwareSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/custom-software-development#service",
      "name": "Custom Software Development",
      "serviceType": "Custom Software Development Services",
      "description": "Build custom software solutions in Coimbatore that simplify business processes, improve efficiency and support your unique business needs.",
      "url": "https://ecoappssolutions.com/custom-software-development",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/custom-software-development#webpage",
      "url": "https://ecoappssolutions.com/custom-software-development",
      "name": "Build scalable software with custom software development services",
      "description": "Build custom software solutions in Coimbatore that simplify business processes, improve efficiency and support your unique business needs.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/custom-software-development#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Custom Software Development",
          "item": "https://ecoappssolutions.com/custom-software-development"
        }
      ]
    }
  ]
};

export const websiteDevelopmentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/website-development#service",
      "name": "Website Development",
      "serviceType": "Website Development Services",
      "description": "Build fast, responsive and SEO-friendly websites with a website development company in Coimbatore focused on performance, usability and conversions.",
      "url": "https://ecoappssolutions.com/website-development",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/website-development#webpage",
      "url": "https://ecoappssolutions.com/website-development",
      "name": "Build High-Performance Websites with the Eco Apps Solutions",
      "description": "Build fast, responsive and SEO-friendly websites with a website development company in Coimbatore focused on performance, usability and conversions.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/website-development#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Website Development",
          "item": "https://ecoappssolutions.com/website-development"
        }
      ]
    }
  ]
};

export const mobileAppSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://ecoappssolutions.com/mobile-app-development#service",
      "name": "Mobile App Development",
      "serviceType": "Mobile App Development Services",
      "description": "Develop scalable and user-friendly mobile apps with a mobile app development company in Coimbatore tailored to your business goals and users.",
      "url": "https://ecoappssolutions.com/mobile-app-development",
      "provider": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Coimbatore"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://ecoappssolutions.com/mobile-app-development#webpage",
      "url": "https://ecoappssolutions.com/mobile-app-development",
      "name": "Build Powerful Apps with best Mobile App Development Company",
      "description": "Develop scalable and user-friendly mobile apps with a mobile app development company in Coimbatore tailored to your business goals and users.",
      "mainEntity": {
        "@id": "https://ecoappssolutions.com/mobile-app-development#service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mobile App Development",
          "item": "https://ecoappssolutions.com/mobile-app-development"
        }
      ]
    }
  ]
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://ecoappssolutions.com/contact#webpage",
      "url": "https://ecoappssolutions.com/contact",
      "name": "Contact Eco Apps Solutions for Digital Marketing Services",
      "description": "Contact Eco Apps Solutions for Best SEO, Google Ads, Meta Ads, branding, website development and lead generation services in Coimbatore.",
      "isPartOf": {
        "@id": "https://ecoappssolutions.com/#website"
      },
      "about": {
        "@id": "https://ecoappssolutions.com/#organization"
      },
      "publisher": {
        "@id": "https://ecoappssolutions.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://ecoappssolutions.com/#organization",
      "name": "Eco Apps Solutions",
      "url": "https://ecoappssolutions.com/"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ecoappssolutions.com/contact#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ecoappssolutions.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://ecoappssolutions.com/contact"
        }
      ]
    }
  ]
};

export const faqsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://ecoappssolutions.com/faqs#faqpage",
  "url": "https://ecoappssolutions.com/faqs",
  "name": "Frequently Asked Questions about Eco Apps Solutions Agency",
  "description": "Find answers to frequently asked questions about SEO, digital marketing, website development, mobile app development and other services.",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What digital marketing services does Eco Apps Solutions provide in Coimbatore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eco Apps Solutions, a unit of Data Apps Technologies, is a digital marketing agency in Coimbatore providing SEO, AEO, AI SEO, performance marketing, Google Ads, Meta Ads, social media marketing, marketing automation, website development, ecommerce marketing and B2B marketing services. We create data-driven digital marketing strategies to improve search visibility, generate qualified leads, increase conversions and support long-term business growth."
      }
    },
    {
      "@type": "Question",
      "name": "How can a digital marketing agency in Coimbatore help my business grow online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professional digital marketing agency helps businesses increase online visibility, attract relevant customers and generate qualified leads through SEO, AEO, paid advertising, social media marketing, content marketing and conversion optimization. At Eco Apps Solutions, we combine marketing, technology and data to create customized strategies based on your business goals, target audience and customer journey."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between SEO and AEO, and why does my business need both?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) focuses on improving a website's visibility in traditional search results, while AEO (Answer Engine Optimization) focuses on making content clear, structured and relevant for direct-answer and conversational search experiences. Our SEO and AEO strategy combines search intent, topical relevance, structured content, FAQs, entities, semantic relationships and authoritative information to help your business become more discoverable across modern search and answer experiences."
      }
    },
    {
      "@type": "Question",
      "name": "Does Eco Apps Solutions provide Google Ads and performance marketing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Eco Apps Solutions provides performance marketing and paid advertising services, including Google Ads, Meta Ads, Facebook Ads, Instagram Ads, YouTube Ads, remarketing and conversion-focused campaigns. We use audience targeting, conversion tracking, landing page optimization, analytics and continuous campaign optimization to help businesses improve lead generation, conversions and return on advertising investment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Eco Apps Solutions improve my website's SEO, AEO and conversion performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can optimize your website for SEO, AEO and conversions by improving technical SEO, website structure, page speed, mobile experience, content quality, keyword and search-intent targeting, internal linking, schema markup, entity relevance, FAQs and conversion-focused page elements. The goal is to create a website that is easier for search engines, answer engines and potential customers to understand."
      }
    }
  ]
};
