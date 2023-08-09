import "@/styles/globals.css";
import type { AppProps } from "next/app";
export const runtime = "experimental-edge";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
