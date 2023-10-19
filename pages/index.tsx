import Head from "next/head";
import {
  HeroComponent,
  LobbyComponent,
  TrendingComponent,
  EventsComponent,
  LeaderBoardComponent,
  WinningGamesComponent,
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
          className="text-white mx-auto text-sm md:text-base px-24 py-4 font-medium rounded-full bg-darkGold mt-1"
        >
          Create a Wager
        </button>

        <div className="md:px-4 px-2 flex flex-col">

        <TrendingComponent />
        <LobbyComponent />
        <EventsComponent />
        <LeaderBoardComponent />
        <WinningGamesComponent />

        </div>
      </main>
    </>
  );
}
