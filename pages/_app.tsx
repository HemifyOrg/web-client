import { useEffect, useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { reduxStoreMainPersistor } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { capitalizeAWord } from "@/utils";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql";
import Head from "next/head";

export const runtime = "experimental-edge";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname }: { pathname: string } = router;
  const [headTitle, setHeadTitle] = useState("Hemify");

  useEffect(() => {
    if (
      pathname &&
      typeof pathname === "string" &&
      pathname.includes("/") &&
      pathname.split("/").length >= 1 &&
      pathname !== "/"
    ) {
      let pathName: string =
        pathname.split("/")[pathname.split("/").length - 1];
      const title = `${pathName} | Hemify`;
      setHeadTitle(capitalizeAWord(title));
    }
  }, [pathname]);
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="main-loader h-screen w-screen m-auto flex justify-center items-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-themeColor border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        }
        persistor={reduxStoreMainPersistor}
      >
        <ApolloProvider client={client}>
          <Layout Component={Component} {...pageProps} />
        </ApolloProvider>
        <Head>
          <title>{headTitle}</title>
          <link
            rel="stylesheet"
            href="/fonts/Lato-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
      </PersistGate>
    </Provider>
  );
}
