import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogType?: string;
  ogSiteName?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType = 'website',
  ogSiteName = 'Eco Apps Solutions',
  ogImage = 'https://ecoappssolutions.com/logo.webp',
  schema,
}: SEOProps) {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const finalOgUrl = ogUrl || canonical;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Social Meta Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={ogSiteName} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:url" content={finalOgUrl} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
