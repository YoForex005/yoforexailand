import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  noindex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "YoForex AI | World's Most Advanced AI Forex Trading Platform",
  description = "Access 392+ AI models for forex trading analysis. Get precise SL/TP levels, multi-AI consensus signals, and professional trading strategies. Start with 5 free daily analyses.",
  keywords = "forex trading, AI forex, trading course, YoForex AI, AI trading chart, forex signals, automated trading, currency trading, forex education, trading algorithms",
  image = "/og-image.jpg",
  article = false,
  noindex = false,
  canonical
}) => {
  const router = useRouter();
  const siteUrl = 'https://yoforex.co.in';
  const fullUrl = `${siteUrl}${router.asPath}`;
  const canonicalUrl = canonical || fullUrl;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content="YoForex AI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${image}`} />
      <meta property="twitter:creator" content="@YoForexAI" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="YoForex AI" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Kolkata" />
      <meta name="geo.position" content="22.5726;88.3639" />
      <meta name="ICBM" content="22.5726, 88.3639" />
      
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "YoForex AI",
            "description": "Advanced AI-powered forex trading analysis platform with 392+ AI models",
            "url": siteUrl,
            "logo": `${siteUrl}/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44-330-027-2265",
              "contactType": "customer service",
              "availableLanguage": ["English"],
              "contactOption": "TollFree"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "London Office, Business Bay Operations",
              "addressLocality": "London",
              "addressRegion": "England",
              "postalCode": "SW1A 1AA",
              "addressCountry": "GB"
            },
            "sameAs": [
              "https://wa.me/443300272265"
            ]
          })
        }}
      />
      
      {/* Structured Data for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "YoForex AI",
            "url": siteUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Structured Data for Course/Educational Content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AI Forex Trading Analysis Course",
            "description": "Learn forex trading with AI-powered analysis using 392+ AI models and professional strategies",
            "provider": {
              "@type": "Organization",
              "name": "YoForex AI",
              "sameAs": siteUrl
            },
            "educationalLevel": "Beginner to Advanced",
            "courseMode": "Online",
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "Online",
              "instructor": {
                "@type": "Organization",
                "name": "YoForex AI"
              }
            }
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;