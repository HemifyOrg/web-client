import { useState, useEffect } from "react";
import Head from "next/head";
// import { useSelector } from 'react-redux';
// import { formatBalance } from '@/components/ConnectWallect'

// import { RootState } from '../app/store';
import {
  HeroComponent,
  LobbyComponent,
  TrendingComponent,
  EventsComponent,
  LeaderBoardComponent,
} from "@/components/home";

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

        <button
          type="button"
          className="text-white mx-auto text-sm md:text-base px-24 py-4 font-medium rounded-full bg-darkGold mt-10"
        >
          Create a Wager
        </button>

        <TrendingComponent />
        <LobbyComponent />
        <EventsComponent />
        <LeaderBoardComponent />
      </main>
    </>
  );
}
