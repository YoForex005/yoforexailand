import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: object;
  h1?: string; // Added H1 tag support
  h2?: string[]; // Added H2 tags support
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  noindex = false,
  schema,
  h1,
  h2
}) => {
  // Prefer explicit canonicalUrl prop, otherwise use client URL when available, else fallback to site root.
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://yoforexai.com/');
  const fullTitle = title.includes('YoForex AI') ? title : `${title} | YoForex AI`;
  
  return (
    <>
      {h1 && <h1>{h1}</h1>} {/* Render H1 tag outside Helmet */}
      {h2 && h2.map((heading, index) => <h2 key={index}>{heading}</h2>)} {/* Render H2 tags outside Helmet */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Robots */}
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
    {/* Ensure ogImage is an absolute URL for social previews */}
    <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://yoforexai.com${ogImage}`} />
        <meta property="og:site_name" content="YoForex AI" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://yoforexai.com${ogImage}`} />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="YoForex AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Favicon */}
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Schema.org JSON-LD */}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
        
        {/* Default Website JSON-LD using the correct domain */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "YoForex AI",
            "description": "AI Forex trading platform with multiple AI models, strategy backtesting and risk analytics.",
            "url": "https://yoforexai.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yoforexai.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "YoForex AI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yoforexai.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
    </>
  );
};

export default SEOHead;