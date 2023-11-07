import React, { useEffect, useState } from "react";
import TopNav from "./navbar/Top";
import { ConnectWalletPopup } from "./reusable";
import { AppProps } from "next/app";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import BottomNav from "./navbar/Bottom";

const Layout = ({ Component, pageProps }: AppProps) => {
  // const showConnectPopup = useSelector(
  //   (state: RootState) => state.config.showConnectModal
  // );
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsAnimating(true);
    };

    const handleRouteChangeComplete = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex flex-col bg-gradient-to-b from-[#d0d4d651] !overflow-y-auto !overflow-x-hidden"
    >
      <TopNav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative h-full overflow-x-hidden"
      >
        {/* {showConnectPopup && !isConnected && <ConnectWalletPopup />} */}
        <Component {...pageProps} />
        <Footer />
      </motion.div>
      <BottomNav />
    </motion.div>
  );
};

export default Layout;
