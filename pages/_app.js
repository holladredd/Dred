import '../styles/globals.css';
import Head from 'next/head';
import { NavigationProvider } from '../context/NavigationContext';

export default function App({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <Head>
        <title>Dred | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </NavigationProvider>
  );
}
