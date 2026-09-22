import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SmoothScroll from './components/SmoothScroll';

// Route-level Code Splitting for optimal Core Web Vitals (LCP, FID/INP, CLS)
const HomePage = lazy(() => import('./pages/HomePage'));
const SeoServicePage = lazy(() => import('./pages/SeoServicePage'));
const SocialMediaMarketing = lazy(() => import('./pages/SocialMediaMarketing'));
const EcommerceMarketingServicesGrow = lazy(() => import('./pages/EcommerceMarketingServicesGrow'));
const B2BMarketingServices = lazy(() => import('./pages/B2BMarketingServices'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqsPage = lazy(() => import('./pages/FaqsPage'));
const WebsiteDevelopmentServices = lazy(() => import('./pages/WebsiteDevelopmentServices'));
const MobileAppDevelopment = lazy(() => import('./pages/MobileAppDevelopment'));
const CustomSoftware = lazy(() => import('./pages/CustomSoftware'));
const PaidAdsPpc = lazy(() => import('./pages/PaidAdsPpc'));

// Lightweight page loader to prevent layout shift (CLS ≤ 0.1)
function PageLoader() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-white">
      <div className="w-8 h-8 rounded-full border-2 border-sky-200 border-t-sky-600 animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main Home Section */}
            <Route path="/" element={<HomePage />} />

            {/* Dedicated SEO & AI SEO Service Page */}
            <Route path="/seo-ai-seo-service" element={<SeoServicePage />} />
            <Route path="/seo-service" element={<SeoServicePage />} />
            <Route path="/seo" element={<Navigate to="/seo-ai-seo-service" replace />} />
            <Route path="/services/seo" element={<Navigate to="/seo-ai-seo-service" replace />} />
            <Route path="/ai-seo" element={<Navigate to="/seo-ai-seo-service" replace />} />
            <Route path="/aiseo" element={<Navigate to="/seo-ai-seo-service" replace />} />
            <Route path="/ai-seo-service" element={<Navigate to="/seo-ai-seo-service" replace />} />
            <Route path="/seo-ai-seo" element={<Navigate to="/seo-ai-seo-service" replace />} />

            {/* Marketing Services Routes */}
            <Route path="/paid-ads-ppc" element={<PaidAdsPpc />} />
            <Route path="/services/paid-ads" element={<Navigate to="/paid-ads-ppc" replace />} />
            <Route path="/paid-ads" element={<Navigate to="/paid-ads-ppc" replace />} />
            <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/social-media" element={<Navigate to="/social-media-marketing" replace />} />
            <Route path="/ecommerce-marketing" element={<EcommerceMarketingServicesGrow />} />
            <Route path="/ecommerce-marketing-services" element={<Navigate to="/ecommerce-marketing" replace />} />
            <Route path="/ecommerce" element={<Navigate to="/ecommerce-marketing" replace />} />
            <Route path="/services/ecommerce" element={<Navigate to="/ecommerce-marketing" replace />} />
            <Route path="/ecommerce-marketing-services-grow" element={<Navigate to="/ecommerce-marketing" replace />} />
            <Route path="/b2b-marketing" element={<B2BMarketingServices />} />
            <Route path="/b2b-marketing-services" element={<Navigate to="/b2b-marketing" replace />} />
            <Route path="/b2b" element={<Navigate to="/b2b-marketing" replace />} />
            <Route path="/services/b2b" element={<Navigate to="/b2b-marketing" replace />} />
            <Route path="/services/b2b-marketing" element={<Navigate to="/b2b-marketing" replace />} />
            <Route path="/content-production" element={<SeoServicePage />} />
            <Route path="/services/content-production" element={<Navigate to="/content-production" replace />} />
            <Route path="/conversion-cro" element={<SeoServicePage />} />

            {/* Technology & Software Services Routes */}
            <Route path="/ai-automation" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/services/ai-automation" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/ai-agents" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/crm-automation" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/services/crm-automation" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/website-development" element={<WebsiteDevelopmentServices />} />
            <Route path="/services/website-development" element={<Navigate to="/website-development" replace />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/mobile-app-development" element={<Navigate to="/mobile-app-development" replace />} />
            <Route path="/custom-software-development" element={<CustomSoftware />} />
            <Route path="/custom-software" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/services/custom-software" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/services/custom-software-development" element={<Navigate to="/custom-software-development" replace />} />
            <Route path="/technology" element={<Navigate to="/website-development" replace />} />

            {/* Video Production Routes */}
            <Route path="/video-production" element={<SeoServicePage />} />
            <Route path="/services/video-production" element={<Navigate to="/video-production" replace />} />
            <Route path="/brand-videos" element={<SeoServicePage />} />
            <Route path="/social-media-videos" element={<SeoServicePage />} />
            <Route path="/product-videos" element={<SeoServicePage />} />
            <Route path="/corporate-videos" element={<SeoServicePage />} />
            <Route path="/reels-short-form-content" element={<SeoServicePage />} />
            <Route path="/promotional-videos" element={<SeoServicePage />} />

            {/* Dedicated About Us Page (with Team Showcase) */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />

            {/* Dedicated Contact Us Page (with Form & Google Map) */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<Navigate to="/contact" replace />} />

            {/* Dedicated FAQs Page */}
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/faq" element={<Navigate to="/faqs" replace />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
