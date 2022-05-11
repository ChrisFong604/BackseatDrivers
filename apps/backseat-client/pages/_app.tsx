import { AppProps } from 'next/app';
import Head from 'next/head';
import { CookiesProvider } from 'react-cookie';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to backseat-client!</title>
      </Head>
      <main className="app">
        <CookiesProvider>
          <Component {...pageProps} />
        </CookiesProvider>
      </main>
    </>
  );
}

export default CustomApp;
