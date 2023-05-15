import { useState, useEffect } from "react";
import Head from 'next/head';
// import { useSelector } from 'react-redux';
// import { formatBalance } from '@/components/ConnectWallect'

// import { RootState } from '../app/store';
import { HeroComponent, HowItWorksComponent, VerifiedComponent } from "@/components/home";
import TrandingComponent from "@/components/home/trending";

export default function Home() {
  // const account = useSelector((state: RootState) => state.account);


  return (
    <div>
      <Head>
        <title>Bidz & Bazaar</title>
      </Head>

      <main className="mt-2 flex flex-col gap-20">
        {/* hero section */}
        <HeroComponent />

        {/* how it works */}
        <HowItWorksComponent />

        {/* Trending */}
        <TrandingComponent />

        {/* Verified Section */}
        <VerifiedComponent />
      </main>
    </div>
  );
}
