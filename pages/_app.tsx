import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '@root/components/Layout';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CustomLoadingScreen = () => {
  return <h1>Loading...</h1>;
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  console.log(pageLoading);

  if (pageLoading) {
    return <CustomLoadingScreen />;
  }
  return (
    <Layout>
      <Head>
        <title>Kwan Sing&apos;s Portfolio </title>
        <meta name='description' content="KwanSing's Portfolio" />

        {/* favicon */}
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#101010' />

        <meta property='og:title' content='Kwan Sing Portfolio' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/favicon/mstile-150x150.png' />
        <meta property='og:description' content="Kwan Sing's Portfolio" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
