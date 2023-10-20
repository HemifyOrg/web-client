import Head from "next/head";
import {
  HeroComponent,
  LobbyComponent,
  TrendingComponent,
  EventsComponent,
  LeaderBoardComponent,
  WinningGamesComponent,
} from "@/components/home";
import Link from "next/link";

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

        <Link
          href={`/product/wager/create`}
          className="text-white mx-auto text-sm md:text-base px-24 py-4 font-semibold rounded-full bg-themeColor mt-1"
        >
          Create a Wager
        </Link>

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
