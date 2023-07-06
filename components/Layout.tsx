import React from "react";
import NavBar from "./NavBar";
import { ConnectWalletPopup } from "./reusable";
import { AppProps } from "next/app";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Footer } from "./footer";

const Layout = ({ Component, pageProps }: AppProps) => {
  const showConnectPopup = useSelector(
    (state: RootState) => state.config.showConnectModal
  );
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-b from-[#d0d4d651] overflow-y-auto overflow-x-hidden">
      <NavBar />
      <div className="relative overflow-x-hidden">
        {showConnectPopup && <ConnectWalletPopup />}
        <Component {...pageProps} />
      <Footer />
      </div>
    </div>
  );
};

export default Layout;
