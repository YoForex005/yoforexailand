import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'course' | 'faq' | 'breadcrumb';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
  const baseUrl = 'https://yoforexai.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "YoForex AI",
          "description": "Advanced AI-powered forex trading analysis platform with 392+ AI models for professional currency trading",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "foundingDate": "2020",
          "founders": [
            {
              "@type": "Person",
              "name": "Rajesh Kumar"
            }
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+44-330-027-2265",
              "contactType": "customer service",
              "availableLanguage": ["English"],
              "contactOption": "TollFree",
              "areaServed": "Worldwide"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "28, Gopi Bose Lane",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700012",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://wa.me/443300272265"
          ],
          "knowsAbout": [
            "Forex Trading",
            "AI Trading Analysis",
            "Currency Trading",
            "Trading Algorithms",
            "Technical Analysis"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "YoForex AI - AI Forex Trading Platform",
          "url": baseUrl,
          "description": "World's most advanced AI forex trading platform with 392+ AI models for professional currency trading analysis",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "YoForex AI"
          }
        };

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "AI Forex Trading Course - Professional Currency Trading",
          "description": "Comprehensive forex trading course using AI analysis with 392+ AI models, professional strategies, and automated trading signals",
          "provider": {
            "@type": "Organization",
            "name": "YoForex AI",
            "sameAs": baseUrl
          },
          "educationalLevel": "Beginner to Advanced",
          "courseMode": "Online",
          "teaches": [
            "Forex Trading Fundamentals",
            "AI Trading Analysis",
            "Technical Analysis",
            "Risk Management",
            "Trading Psychology",
            "Automated Trading Strategies"
          ],
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "instructor": {
              "@type": "Organization",
              "name": "YoForex AI"
            },
            "courseWorkload": "Self-paced"
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-01-01"
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is YoForex AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "YoForex AI is an advanced AI-powered forex trading analysis platform that provides access to 392+ AI models for professional currency trading analysis, forex signals, and automated trading strategies."
              }
            },
            {
              "@type": "Question",
              "name": "How many AI models does YoForex AI offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "YoForex AI provides access to 392+ AI models including free options (Mistral, Claude Haiku, DeepSeek) and premium models (Grok, OpenAI O3, Gemini Ultra) for comprehensive forex trading analysis."
              }
            },
            {
              "@type": "Question",
              "name": "Is YoForex AI suitable for beginners?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, YoForex AI offers a comprehensive trading course suitable for beginners to advanced traders, with 10+ professional strategies and detailed AI explanations for every trade recommendation."
              }
            }
          ]
        };

      default:
        return data || {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
};

export default StructuredData;