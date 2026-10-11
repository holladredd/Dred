import '../styles/globals.css';
import Head from 'next/head';
import { NavigationProvider } from '../context/NavigationContext';

export default function App({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <Head>
        {/* Primary identity */}
        <title>Folayan Olamide Mayokun | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Global SEO meta */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Folayan Olamide Mayokun" />
        <meta name="theme-color" content="#009b4d" />
        <link rel="canonical" href="https://folayanolamide.dev/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Mobile PWA meta */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Folayan Olamide" />
      </Head>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}
