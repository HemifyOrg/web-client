import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store, { reduxStoreMainPersistor } from "../app/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
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
        <Layout Component={Component} {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
