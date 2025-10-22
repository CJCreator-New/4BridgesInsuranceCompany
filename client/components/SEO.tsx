import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = 'insurance, life insurance, health insurance, retirement planning, medicare, estate planning',
  ogImage = 'https://images.pexels.com/photos/5849553/pexels-photo-5849553.jpeg',
  ogType = 'website'
}: SEOProps) {
  const fullTitle = `${title} | 4 Bridges Insurance Company`;
  const siteUrl = typeof window !== 'undefined' ? window.location.href : 'https://4bridges.com';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
}
