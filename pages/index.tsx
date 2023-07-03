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
        <title>Bidz & Bazaar</title>
      </Head>

      <main className="mt-2 flex flex-col">
        {/* hero section */}
        <HeroComponent />

        {/* Trending */}
        <TrandingComponent />

        {/* Verified Section */}
        <VerifiedComponent />

        {/* LeaderBoard Section*/}
        <LeaderBoardComponent />
      </main>
    </>
  );
}
