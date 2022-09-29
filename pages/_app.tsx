import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@root/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Kwan Sing&apos;s Portfolio </title>
        <meta name='description' content="KwanSing's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
