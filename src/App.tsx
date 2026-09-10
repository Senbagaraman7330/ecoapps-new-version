import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import HomePage from './pages/HomePage';
import SeoServicePage from './pages/SeoServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqsPage from './pages/FaqsPage';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <Routes>
        {/* Main Home Section */}
        <Route path="/" element={<HomePage />} />

        {/* Dedicated SEO & AI SEO Service Page */}
        <Route path="/seo-service" element={<SeoServicePage />} />
        <Route path="/seo" element={<Navigate to="/seo-service" replace />} />
        <Route path="/services/seo" element={<Navigate to="/seo-service" replace />} />
        <Route path="/ai-seo" element={<Navigate to="/seo-service" replace />} />
        <Route path="/aiseo" element={<Navigate to="/seo-service" replace />} />
        <Route path="/ai-seo-service" element={<Navigate to="/seo-service" replace />} />
        <Route path="/seo-ai-seo" element={<Navigate to="/seo-service" replace />} />

        {/* Marketing Services Routes */}
        <Route path="/paid-ads-ppc" element={<SeoServicePage />} />
        <Route path="/services/paid-ads" element={<Navigate to="/paid-ads-ppc" replace />} />
        <Route path="/paid-ads" element={<Navigate to="/paid-ads-ppc" replace />} />
        <Route path="/social-media-marketing" element={<SeoServicePage />} />
        <Route path="/services/social-media" element={<Navigate to="/social-media-marketing" replace />} />
        <Route path="/ecommerce-marketing" element={<SeoServicePage />} />
        <Route path="/services/ecommerce" element={<Navigate to="/ecommerce-marketing" replace />} />
        <Route path="/b2b-marketing" element={<SeoServicePage />} />
        <Route path="/services/b2b" element={<Navigate to="/b2b-marketing" replace />} />
        <Route path="/content-production" element={<SeoServicePage />} />
        <Route path="/services/content-production" element={<Navigate to="/content-production" replace />} />
        <Route path="/conversion-cro" element={<SeoServicePage />} />

        {/* Technology & Software Services Routes */}
        <Route path="/website-development" element={<SeoServicePage />} />
        <Route path="/services/website-development" element={<Navigate to="/website-development" replace />} />
        <Route path="/mobile-app-development" element={<SeoServicePage />} />
        <Route path="/services/mobile-app-development" element={<Navigate to="/mobile-app-development" replace />} />
        <Route path="/custom-software-development" element={<SeoServicePage />} />
        <Route path="/services/custom-software" element={<Navigate to="/custom-software-development" replace />} />
        <Route path="/technology" element={<Navigate to="/website-development" replace />} />

        {/* AI & Automation Routes */}
        <Route path="/ai-automation" element={<SeoServicePage />} />
        <Route path="/services/ai-automation" element={<Navigate to="/ai-automation" replace />} />
        <Route path="/ai-agents" element={<SeoServicePage />} />
        <Route path="/services/ai-agents" element={<Navigate to="/ai-agents" replace />} />
        <Route path="/crm-automation" element={<SeoServicePage />} />
        <Route path="/services/crm-automation" element={<Navigate to="/crm-automation" replace />} />

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
    </BrowserRouter>
  );
}
