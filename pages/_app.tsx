import "@/styles/globals.css";
import "swiper/css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
export const runtime = "experimental-edge";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        {/* metatags */}
        <title>Hemify</title>
        <meta
          name="description"
          content="Hemify is a sports betting platform that allows you to bet your favourite sports in crypto from anywhere in the world."
        />
        <meta
          name="keywords"
          content="Hemify, sports betting, crypto betting, crypto, bitcoin, ethereum, litecoin, dogecoin, sports, betting, bet, sports bet, crypto bet, crypto sports bet, crypto sports betting, crypto sports betting platform, crypto sports betting website, crypto sports betting site, crypto sports betting app, crypto sports betting application, crypto sports betting platform, crypto sports betting website, crypto sports betting site, crypto sports betting app, crypto sports betting application, crypto sports betting platform, crypto sports betting website, crypto sports betting site, crypto sports betting app, crypto sports betting application, crypto sports betting platform, crypto sports betting website, crypto sports betting site, crypto sports betting app, crypto sports betting application, crypto sports betting platform, crypto sports betting website, crypto sports betting site, crypto sports betting app, crypto sports betting application"
        />
        <meta name="author" content="Hemify" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#D2B37D" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hemify" />
        <meta name="twitter:creator" content="@hemify" />
        <meta name="twitter:title" content="Hemify" />
        <meta
          name="twitter:description"
          content="Hemify is a sports betting platform that allows you to bet your favourite sports in crypto from anywhere in the world."
        />
        <meta
          name="twitter:image"
          content="/images/logos/apple-touch-icon.png"
        />
        <meta property="og:title" content="Hemify" />
        <meta
          property="og:description"
          content="Hemify is a sports betting platform that allows you to bet your favourite sports in crypto from anywhere in the world."
        />
        <meta
          property="og:image"
          content="/images/logos/apple-touch-icon.png"
        />
        <meta property="og:url" content={router.pathname} />
        <meta property="og:site_name" content="Hemify" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
