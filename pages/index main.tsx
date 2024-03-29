import { useState, useEffect } from "react";
import Head from 'next/head';
// import { useSelector } from 'react-redux';
// import { formatBalance } from '@/components/ConnectWallect'

// import { RootState } from '../app/store';
import { HeroComponent, VerifiedComponent, LeaderBoardComponent } from "@/components/home";
import TrandingComponent from "@/components/home/trending";

export default function Home() {
  // const account = useSelector((state: RootState) => state.account);


  return (
    <>
      <Head>
        <title>{process.env.PUBLIC_APP_NAME}</title>
      </Head>

      <main className="mt-20 flex flex-col">
        {/* hero section */}
        <HeroComponent />

        {/* Trending */}
        <TrandingComponent />
      </main>
    </>
  );
}
