import type { AppProps } from 'next/app';
import SEOHead from '../src/components/SEOHead';
import StructuredData from '../src/components/StructuredData';
import '../src/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
    <>
      <SEOHead />
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <Component {...pageProps} />
    </>
}