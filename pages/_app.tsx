import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#d0d4d651] overflow-y-auto overflow-x-hidden">
        <NavBar />
        <div className="mt-20 relative overflow-x-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
