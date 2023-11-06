import { FilterMenuComponent, OutsideAlerter } from "@/components/reusable";
import {
  WagerAmountComponent,
  WagerReviewComponent,
  WagerTermsComponent,
} from "@/components/wager";
import { MatchLeagueIcon } from "@/utils";
import { SelectedTermType } from "@/utils/types";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const tabsList = [
  {
    name: "summary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 13 14"
        fill="none"
      >
        <path
          d="M6.68424 9.07426V7.00019M6.68424 4.92611H6.68943M2.01758 4.89575V9.10462C2.01758 9.28229 2.01758 9.37112 2.04376 9.45035C2.06691 9.52044 2.10477 9.58478 2.1548 9.63907C2.21134 9.70043 2.289 9.74357 2.4443 9.82985L6.28134 11.9615C6.42839 12.0432 6.50192 12.0841 6.57979 12.1001C6.6487 12.1143 6.71978 12.1143 6.7887 12.1001C6.86657 12.0841 6.94009 12.0432 7.08715 11.9615L10.9242 9.82985C11.0795 9.74357 11.1571 9.70043 11.2137 9.63907C11.2637 9.58478 11.3016 9.52044 11.3247 9.45035C11.3509 9.37112 11.3509 9.28229 11.3509 9.10462V4.89575C11.3509 4.71809 11.3509 4.62925 11.3247 4.55002C11.3016 4.47993 11.2637 4.41559 11.2137 4.36131C11.1571 4.29995 11.0795 4.25681 10.9242 4.17053L7.08715 2.03884C6.94009 1.95714 6.86657 1.91629 6.7887 1.90028C6.71978 1.8861 6.6487 1.8861 6.57979 1.90028C6.50192 1.91629 6.42839 1.95714 6.28134 2.03884L2.4443 4.17053C2.289 4.25681 2.21134 4.29995 2.1548 4.36131C2.10477 4.41559 2.06691 4.47993 2.04376 4.55002C2.01758 4.62925 2.01758 4.71809 2.01758 4.89575Z"
          stroke="currentColor"
          strokeWidth="1.03704"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "stats",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 13 14"
        fill="none"
      >
        <path
          d="M8.35258 3.0542V10.832C8.35258 11.6979 8.94369 12.1853 9.59183 12.1853C10.1829 12.1853 10.8311 11.7757 10.8311 10.832V3.11124C10.8311 2.31272 10.24 1.81494 9.59183 1.81494C8.94369 1.81494 8.35258 2.36457 8.35258 3.0542ZM5.11183 7.00013V10.832C5.11183 11.7031 5.71332 12.1853 6.35109 12.1853C6.9422 12.1853 7.59035 11.7757 7.59035 10.832V7.05716C7.59035 6.25864 6.99924 5.76087 6.35109 5.76087C5.70295 5.76087 5.11183 6.3105 5.11183 7.00013ZM3.11035 9.71198C3.7948 9.71198 4.34961 10.2668 4.34961 10.9461C4.34961 11.2747 4.21905 11.5899 3.98664 11.8223C3.75424 12.0547 3.43903 12.1853 3.11035 12.1853C2.78168 12.1853 2.46647 12.0547 2.23406 11.8223C2.00166 11.5899 1.87109 11.2747 1.87109 10.9461C1.87109 10.2668 2.42591 9.71198 3.11035 9.71198Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "chat",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 13 14"
        fill="none"
      >
        <path
          d="M3.92564 5.18535H6.51823M3.92564 7.00016H8.07378M3.92564 10.1113V11.3223C3.92564 11.5986 3.92564 11.7367 3.98227 11.8077C4.03153 11.8694 4.10622 11.9053 4.18518 11.9052C4.27596 11.9051 4.38384 11.8188 4.59958 11.6462L5.83649 10.6567C6.08916 10.4545 6.2155 10.3535 6.35619 10.2816C6.481 10.2178 6.61386 10.1712 6.75116 10.143C6.90591 10.1113 7.0677 10.1113 7.39128 10.1113H8.69601C9.5672 10.1113 10.0028 10.1113 10.3355 9.94173C10.6282 9.79259 10.8662 9.55462 11.0154 9.26193C11.1849 8.92917 11.1849 8.49358 11.1849 7.62238V4.82239C11.1849 3.95119 11.1849 3.5156 11.0154 3.18284C10.8662 2.89015 10.6282 2.65218 10.3355 2.50304C10.0028 2.3335 9.5672 2.3335 8.69601 2.3335H4.34045C3.46926 2.3335 3.03366 2.3335 2.70091 2.50304C2.40821 2.65218 2.17024 2.89015 2.02111 3.18284C1.85156 3.5156 1.85156 3.95119 1.85156 4.82238V8.0372C1.85156 8.51941 1.85156 8.76051 1.90457 8.95833C2.0484 9.49514 2.4677 9.91443 3.00451 10.0583C3.20233 10.1113 3.44343 10.1113 3.92564 10.1113Z"
          stroke="currentColor"
          strokeWidth="1.03704"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const CreateWagerMainPage = () => {
  const [selectedTab, setSelectedTab] = React.useState("summary");
  const [selectedWagerTerm, setSelectedWagerTerm] =
    React.useState<SelectedTermType | null>(null);
  const [showTermsScreen, setShowTermsScreen] = React.useState(false);
  const [showAmountScreen, setShowAmountScreen] = React.useState(false);
  const [showReviewScreen, setShowReviewScreen] = React.useState(false);
  const [wagerAmount, setWagerAmount] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    titleRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [showTermsScreen, showAmountScreen, showReviewScreen]);

  const titleRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={titleRef}
      className="mt-20 mb-6 overflow-hidden flex flex-col w-full xs:px-3 md:px-5 px-2 justify-center items-center"
    >
      <Head>
        <title>Create Wager</title>
        <meta name="description" content="Create Wager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full flex justify-between items-center p-1">
        <svg
          onClick={() =>
            showReviewScreen
              ? setShowReviewScreen(false)
              : showAmountScreen
              ? setShowAmountScreen(false)
              : showTermsScreen
              ? setShowTermsScreen(false)
              : router.back()
          }
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="transition-all active:scale-90"
          fill="none"
        >
          <path
            d="M20 12H4M4 12L10 18M4 12L10 6"
            stroke="#25282B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className={`text-xl font-semibold w-full capitalize transition-opacity flex ${
            !showTermsScreen ? "opacity-0 pointer-events-none" : "opacity-100"
          } justify-center`}
        >
          {showReviewScreen
            ? "Review your Wager"
            : showAmountScreen
            ? "Wager amount"
            : "Chose your term"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          className={`transition-all active:scale-90 ${
            showTermsScreen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          fill="none"
        >
          <path
            d="M15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 9.86927 4.24643 11.816 3.56675 12.9204C3.30747 13.3418 3.65668 14.1666 4.15139 14.1666H15.8486C16.3433 14.1666 16.6925 13.3418 16.4333 12.9204C15.7536 11.816 15 9.86927 15 6.66663Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {selectedWagerTerm && !showAmountScreen && (
        <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-[#00000071] z-10 px-2">
          <OutsideAlerter
            setState={() => setSelectedWagerTerm(null)}
            visible={selectedWagerTerm !== null}
            motion={{
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
              exit: { opacity: 0, scale: 0.5 },
            }}
            className="flex flex-col justify-center items-center w-full xs:w-[343px] px-2 gap-5 py-4 bg-white rounded-2xl"
          >
            <div className="flex w-full justify-center items-center">
              <figure
                className="w-[50px] h-[50px] bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url(/images/assets/think-emoji.svg)`,
                }}
              />
            </div>
            <span className="font-semibold text-sm xs:text-left text-center">
              Are you sure you want to continue with this term?
            </span>
            <div className="flex gap-2 px-2 justify-center items-center">
              <button
                type="button"
                onClick={() => setSelectedWagerTerm(null)}
                className="px-14 xs:px-16 text-sm border-themeColor border text-themeColor font-medium py-3 rounded-full"
              >
                No
              </button>
              <button
                onClick={() => setShowAmountScreen(true)}
                type="button"
                className="px-14 xs:px-16 text-sm bg-themeColor text-gray-200 font-medium py-3 rounded-full"
              >
                Yes
              </button>
            </div>
          </OutsideAlerter>
        </div>
      )}

      {/* wager terms */}
      {!showAmountScreen && (
        <div
          className={`${
            !showTermsScreen
              ? "opacity-0 pointer-events-none w-0 h-0"
              : "opacity-100 flex"
          } mt-1 xs:px-2 flex flex-col transition-all duration-300 md:max-w-xl max-w-lg w-full gap-2 justify-center items-center`}
        >
          <WagerTermsComponent
            selectedWagerTerm={selectedWagerTerm}
            setSelectedWagerTerm={setSelectedWagerTerm}
          />
        </div>
      )}

      {/* wager amount */}
      <div
        className={`${
          !showAmountScreen || showReviewScreen
            ? "opacity-0 pointer-events-none w-0 h-0"
            : "opacity-100 flex"
        } mt-1 xs:px-2 flex flex-col transition-all duration-300 md:max-w-xl max-w-lg w-full gap-2 justify-center items-center`}
      >
        <WagerAmountComponent
          setShowReviewScreen={setShowReviewScreen}
          setWagerAmount={setWagerAmount}
          wagerAmount={wagerAmount}
        />
      </div>

      {/* wager review */}
      <div
        className={`${
          !showReviewScreen
            ? "opacity-0 pointer-events-none w-0 h-0"
            : "opacity-100 flex"
        } mt-1 xs:px-2 flex flex-col transition-all duration-300 md:max-w-xl max-w-lg w-full gap-2 justify-center items-center`}
      >
        <WagerReviewComponent
          selectedWagerTerm={selectedWagerTerm}
          wagerAmount={wagerAmount}
        />
      </div>

      <div
        className={`${
          showTermsScreen
            ? "opacity-0 pointer-events-none w-0 h-0"
            : "opacity-100 flex"
        } mt-1 xs:px-2 flex flex-col transition-all md:max-w-xl max-w-lg w-full gap-2 justify-center items-center`}
      >
        {/* event home & away info */}
        <div className="flex flex-col gap-2 w-full mx-auto">
          {/* top */}
          <div className="flex flex-col justify-center items-center">
            <figure className="w-12 h-12 rounded-full">
              <MatchLeagueIcon type="bundesliga" className="w-full h-full" />
            </figure>
            <h2 className="text-base font-medium text-gray-400">
              UEFA Champions League
            </h2>
          </div>

          {/* bottom */}
          <div className="bg-gray-50 rounded-2xl gap-10 w-full px-8 py-4 flex justify-between items-center shadow-sm">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                width={80}
                height={80}
                src={`/images/sports/team/man-utd.png`}
                className="object-contain"
                alt=""
              />
              <span className="font-medium capitalize">Man UTD</span>
            </div>
            <div className="flex flex-col justify-center text-gray-400 items-center gap-2 text-sm">
              <span className="font-medium capitalize">22/10/23</span>
              <span className="font-semibold capitalize">16:10 UTC</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                width={80}
                height={80}
                src={`/images/sports/team/lake.png`}
                className="object-contain"
                alt=""
              />
              <span className="font-medium capitalize">Lake</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowTermsScreen(true)}
          className="text-white mx-auto text-sm md:text-base xs:px-24 px-12 py-4 font-medium rounded-full bg-themeColor my-3"
        >
          Select wager terms
        </button>
        {/* prediction */}
        <div className="bg-gray-50 rounded-2xl w-full gap-2 xs:px-8 px-2 py-4 flex flex-col justify-between items-center shadow-sm">
          <h4 className="font-medium w-full text-center">
            What's your prediction on this event? 🤔
          </h4>
          <div className="flex flex-wrap w-full gap-3 justify-center items-center">
            <figure className="w-11 h-11 flex items-center justify-center rounded-full p-1 bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  d="M5.525 19.6605H18.3687V7.173L19.3062 6.2355H22.1562L23.0187 2.80425L16.6437 0.666748C16.583 0.805657 16.5076 0.93766 16.4187 1.0605C16.2125 1.36237 15.9819 1.6455 15.725 1.90425C15.2387 2.39607 14.6585 2.78504 14.0187 3.048C13.3602 3.32647 12.6525 3.46995 11.9375 3.46995C11.2225 3.46995 10.5148 3.32647 9.85625 3.048C9.24713 2.76972 8.69422 2.38205 8.225 1.90425C7.96479 1.66004 7.73785 1.38266 7.55 1.07925L7.30625 0.666748L0.875 2.80425L1.7375 6.2355H4.5875L5.525 7.173V19.6605Z"
                  fill="#0D47A1"
                />
              </svg>
            </figure>
            <div className="w-11 h-11 flex items-center justify-center overflow-hidden text-center rounded-full bg-gray-300">
              <span className="text-sm">Draw</span>
            </div>
            <figure className="w-11 h-11 flex items-center justify-center rounded-full p-1 bg-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 20"
                fill="none"
              >
                <path
                  d="M5.525 19.6605H18.3687V7.173L19.3062 6.2355H22.1562L23.0187 2.80425L16.6437 0.666748C16.583 0.805657 16.5076 0.93766 16.4187 1.0605C16.2125 1.36237 15.9819 1.6455 15.725 1.90425C15.2387 2.39607 14.6585 2.78504 14.0187 3.048C13.3602 3.32647 12.6525 3.46995 11.9375 3.46995C11.2225 3.46995 10.5148 3.32647 9.85625 3.048C9.24713 2.76972 8.69422 2.38205 8.225 1.90425C7.96479 1.66004 7.73785 1.38266 7.55 1.07925L7.30625 0.666748L0.875 2.80425L1.7375 6.2355H4.5875L5.525 7.173V19.6605Z"
                  fill="#FFD900"
                />
              </svg>
            </figure>
          </div>
        </div>

        {/* tabs */}
        <div className="w-full my-6">
          <FilterMenuComponent
            tabs={tabsList}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>

        {/* tabs content */}
        <div className="flex flex-col gap-4 w-full">
          {/* head-to-head meetings card */}
          <div className="flex flex-col divide-y-2 bg-gray-50 overflow-hidden rounded-2xl w-full">
            {/* head-to-head title */}
            <div className="flex justify-start items-center gap-1 px-3 py-1">
              <span className="font-medium text-lg">Head-to-Head Meetings</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 8.00004V6.00004M6 4.00004H6.005M1.5 3.97076V8.02932C1.5 8.20064 1.5 8.2863 1.52524 8.3627C1.54757 8.43029 1.58408 8.49233 1.63232 8.54467C1.68684 8.60384 1.76172 8.64544 1.91149 8.72865L5.61149 10.7842C5.75329 10.863 5.82419 10.9024 5.89927 10.9178C5.96573 10.9315 6.03427 10.9315 6.10073 10.9178C6.17581 10.9024 6.24671 10.863 6.38851 10.7842L10.0885 8.72865C10.2383 8.64544 10.3132 8.60384 10.3677 8.54467C10.4159 8.49233 10.4524 8.43029 10.4748 8.3627C10.5 8.2863 10.5 8.20064 10.5 8.02932V3.97076C10.5 3.79944 10.5 3.71378 10.4748 3.63738C10.4524 3.56979 10.4159 3.50775 10.3677 3.45541C10.3132 3.39624 10.2383 3.35464 10.0885 3.27144L6.38851 1.21588C6.24671 1.1371 6.17581 1.09771 6.10073 1.08227C6.03427 1.0686 5.96573 1.0686 5.89927 1.08227C5.82419 1.09771 5.75329 1.1371 5.61149 1.21588L1.91149 3.27144C1.76172 3.35464 1.68684 3.39624 1.63232 3.45541C1.58408 3.50775 1.54757 3.56979 1.52524 3.63738C1.5 3.71378 1.5 3.79944 1.5 3.97076Z"
                  stroke="#A0A4A8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col pt-3 pb-2 px-3 justify-center items-center w-full">
              <div className="justify-between flex items-center w-full">
                <div className="flex gap-1 items-end">
                  <figure className="w-6 h-6 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      src={`/images/sports/team/man-utd.png`}
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </figure>
                  <span className="text-gray-400 text-sm">15 wins</span>
                </div>
                <span className="text-gray-400 text-sm">2 Draws</span>

                <div className="flex gap-1 items-end">
                  <span className="text-gray-400 text-sm">10 wins</span>
                  <figure className="w-6 h-6 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      src={`/images/sports/team/lake.png`}
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              {/* wins indicator */}
              <div className="flex flex-col gap-1 w-full mt-1">
                <div className="w-full h-[10px] flex -space-x-1 rounded-full overflow-hidden">
                  <div className="w-[64%] h-full bg-emerald-500 rounded-r-lg z-[2]"></div>
                  <div className="w-[11%] h-full bg-yellow-500 rounded-r-lg z-[1]"></div>
                  <div className="w-[25%] h-full bg-red-500 rounded-r-lg"></div>
                </div>
                <div className="w-full flex justify-between text-base font-semibold">
                  <span className="text-emerald-400">64%</span>
                  <span className="text-yellow-400">6%</span>
                  <span className="text-red-400">30%</span>
                </div>
              </div>
            </div>
          </div>

          {/* team form */}
          <div className="flex flex-col divide-y-2 bg-gray-50 overflow-hidden rounded-2xl w-full">
            {/* head */}
            <div className="flex justify-start items-center gap-1 px-3 py-1">
              <span className="font-medium text-lg">Team Form</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 8.00004V6.00004M6 4.00004H6.005M1.5 3.97076V8.02932C1.5 8.20064 1.5 8.2863 1.52524 8.3627C1.54757 8.43029 1.58408 8.49233 1.63232 8.54467C1.68684 8.60384 1.76172 8.64544 1.91149 8.72865L5.61149 10.7842C5.75329 10.863 5.82419 10.9024 5.89927 10.9178C5.96573 10.9315 6.03427 10.9315 6.10073 10.9178C6.17581 10.9024 6.24671 10.863 6.38851 10.7842L10.0885 8.72865C10.2383 8.64544 10.3132 8.60384 10.3677 8.54467C10.4159 8.49233 10.4524 8.43029 10.4748 8.3627C10.5 8.2863 10.5 8.20064 10.5 8.02932V3.97076C10.5 3.79944 10.5 3.71378 10.4748 3.63738C10.4524 3.56979 10.4159 3.50775 10.3677 3.45541C10.3132 3.39624 10.2383 3.35464 10.0885 3.27144L6.38851 1.21588C6.24671 1.1371 6.17581 1.09771 6.10073 1.08227C6.03427 1.0686 5.96573 1.0686 5.89927 1.08227C5.82419 1.09771 5.75329 1.1371 5.61149 1.21588L1.91149 3.27144C1.76172 3.35464 1.68684 3.39624 1.63232 3.45541C1.58408 3.50775 1.54757 3.56979 1.52524 3.63738C1.5 3.71378 1.5 3.79944 1.5 3.97076Z"
                  stroke="#A0A4A8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* home & away info */}
            <div className="flex flex-col pt-3 pb-2 px-3 gap-2 justify-center items-center w-full">
              <div className="justify-between flex items-center w-full">
                <div className="flex gap-1 items-end">
                  <figure className="w-6 h-6 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      src={`/images/sports/team/man-utd.png`}
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </figure>
                  <span className="text-base font-semibold">Man UTD</span>
                </div>
                <span className="text-gray-400 mx-1 xs:text-base text-sm font-medium">
                  Last 5 matches
                </span>

                <div className="flex gap-1 items-end justify-end">
                  <span className="text-base font-semibold">Lake</span>
                  <figure className="w-6 h-6 rounded-full">
                    <Image
                      width={40}
                      height={40}
                      src={`/images/sports/team/lake.png`}
                      className="object-contain w-full h-full"
                      alt=""
                    />
                  </figure>
                </div>
              </div>

              {/* home & away matches */}
              <div className="flex flex-col gap-2 justify-center items-center w-full">
                {/* match itm */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div className="flex flex-col gap-1 justify-center items-center w-full">
                    <div className="flex justify-between w-full">
                      <div className="flex items-start justify-start text-gray-400 w-full">
                        <div className="flex justify-start items-center w-full">
                          <span className="text-xs">EFL</span>
                        </div>
                        <div className="w-full justify-start flex">
                          <span className="max-w-[5rem] text-sm truncate">
                            Man UTD
                          </span>
                        </div>
                      </div>
                      <span className="px-[5px] rounded text-sm flex mx-2 justify-center items-center font-semibold bg-red-300">
                        0
                      </span>
                      <div className="flex items-start justify-start text-gray-400 w-full">
                        <div className="flex justify-start items-center w-full">
                          <span className="text-xs">Bundesliga</span>
                        </div>
                        <div className="w-full justify-start flex">
                          <span className="max-w-[5rem] text-sm truncate">
                            Leverkusen
                          </span>
                        </div>
                      </div>
                      <span className="px-[5px] ml-2 rounded text-sm flex justify-center items-center font-semibold bg-red-300">
                        2
                      </span>
                    </div>
                    <div className="flex justify-between w-full">
                      <div className="flex items-start justify-start text-gray-400 w-full">
                        <div className="flex justify-start items-center w-full">
                          <span className="text-xs">Week 8</span>
                        </div>
                        <div className="w-full justify-start flex">
                          <span className="max-w-[5rem] text-sm truncate text-slate-900">
                            Chelsa
                          </span>
                        </div>
                      </div>
                      <span className="px-[5px] rounded text-sm flex mx-2 justify-center items-center font-semibold bg-emerald-300">
                        2
                      </span>
                      <div className="flex items-start justify-start text-gray-400 w-full">
                        <div className="flex justify-start items-center w-full">
                          <span className="text-xs">Week 9</span>
                        </div>
                        <div className="w-full justify-start flex">
                          <span className="max-w-[5rem] text-sm truncate text-slate-900">
                            Dortmund
                          </span>
                        </div>
                      </div>
                      <span className="px-[5px] ml-2 rounded text-sm flex justify-center items-center font-semibold bg-emerald-300">
                        3
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* match info */}
          <div className="flex flex-col divide-y-2 bg-gray-50 overflow-hidden rounded-2xl w-full">
            {/* head */}
            <div className="flex justify-start items-center gap-1 px-3 py-1">
              <span className="font-medium text-lg">Info</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 8.00004V6.00004M6 4.00004H6.005M1.5 3.97076V8.02932C1.5 8.20064 1.5 8.2863 1.52524 8.3627C1.54757 8.43029 1.58408 8.49233 1.63232 8.54467C1.68684 8.60384 1.76172 8.64544 1.91149 8.72865L5.61149 10.7842C5.75329 10.863 5.82419 10.9024 5.89927 10.9178C5.96573 10.9315 6.03427 10.9315 6.10073 10.9178C6.17581 10.9024 6.24671 10.863 6.38851 10.7842L10.0885 8.72865C10.2383 8.64544 10.3132 8.60384 10.3677 8.54467C10.4159 8.49233 10.4524 8.43029 10.4748 8.3627C10.5 8.2863 10.5 8.20064 10.5 8.02932V3.97076C10.5 3.79944 10.5 3.71378 10.4748 3.63738C10.4524 3.56979 10.4159 3.50775 10.3677 3.45541C10.3132 3.39624 10.2383 3.35464 10.0885 3.27144L6.38851 1.21588C6.24671 1.1371 6.17581 1.09771 6.10073 1.08227C6.03427 1.0686 5.96573 1.0686 5.89927 1.08227C5.82419 1.09771 5.75329 1.1371 5.61149 1.21588L1.91149 3.27144C1.76172 3.35464 1.68684 3.39624 1.63232 3.45541C1.58408 3.50775 1.54757 3.56979 1.52524 3.63738C1.5 3.71378 1.5 3.79944 1.5 3.97076Z"
                  stroke="#A0A4A8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col pt-3 xs:text-base text-sm pb-2 xs:px-3 px-2 gap-2 justify-center items-center w-full">
              <div className="flex gap-2 w-full">
                <div className="bg-gray-200 rounded-lg flex justify-center items-center xs:px-5 px-2 py-2 flex-col w-full h-full">
                  <div className="flex gap-1 items-center justify-start mr-auto">
                    <span>Date</span>
                    <span className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4.64065 1.33325C4.91932 1.33325 5.14465 1.53992 5.14465 1.79459V2.72659C5.59132 2.71859 6.09265 2.71859 6.65665 2.71859H9.34465C9.90865 2.71859 10.4093 2.71859 10.8567 2.72659V1.79459C10.8567 1.53992 11.082 1.33325 11.3607 1.33325C11.6393 1.33325 11.8646 1.53992 11.8646 1.79459V2.76659C12.8313 2.83725 13.4667 3.01192 13.9333 3.43859C14.4 3.86592 14.59 4.44725 14.6673 5.33325V5.99992H1.33398V5.33325C1.41132 4.44725 1.60132 3.86659 2.06798 3.43859C2.53465 3.01192 3.16932 2.83725 4.13665 2.76659V1.79459C4.13665 1.53992 4.36265 1.33325 4.64065 1.33325Z"
                          fill="#D97706"
                        />
                        <path
                          opacity="0.5"
                          d="M14.6672 9.33333V8C14.6672 7.44067 14.6585 6.44333 14.6498 6H1.33784C1.32917 6.44333 1.33784 7.44067 1.33784 8V9.33333C1.33784 11.8473 1.33784 13.1047 2.11784 13.8853C2.89984 14.6667 4.1565 14.6667 6.66984 14.6667H9.3365C11.8498 14.6667 13.1058 14.6667 13.8872 13.8853C14.6672 13.1047 14.6672 11.8473 14.6672 9.33333Z"
                          fill="#D97706"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.33464 8.1665C9.02522 8.1665 8.72847 8.28942 8.50968 8.50821C8.29088 8.727 8.16797 9.02375 8.16797 9.33317V10.6665C8.16797 10.9759 8.29088 11.2727 8.50968 11.4915C8.72847 11.7103 9.02522 11.8332 9.33464 11.8332C9.64405 11.8332 9.9408 11.7103 10.1596 11.4915C10.3784 11.2727 10.5013 10.9759 10.5013 10.6665V9.33317C10.5013 9.02375 10.3784 8.727 10.1596 8.50821C9.9408 8.28942 9.64405 8.1665 9.33464 8.1665ZM9.33464 9.1665C9.29043 9.1665 9.24804 9.18406 9.21678 9.21532C9.18553 9.24658 9.16797 9.28897 9.16797 9.33317V10.6665C9.16797 10.7107 9.18553 10.7531 9.21678 10.7844C9.24804 10.8156 9.29043 10.8332 9.33464 10.8332C9.37884 10.8332 9.42123 10.8156 9.45249 10.7844C9.48374 10.7531 9.5013 10.7107 9.5013 10.6665V9.33317C9.5013 9.28897 9.48374 9.24658 9.45249 9.21532C9.42123 9.18406 9.37884 9.1665 9.33464 9.1665Z"
                          fill="#D97706"
                        />
                        <path
                          d="M7.5012 8.66655C7.50111 8.56773 7.47174 8.47114 7.41679 8.389C7.36185 8.30685 7.28379 8.24284 7.19248 8.20503C7.10117 8.16722 7.00071 8.15732 6.90378 8.17658C6.80684 8.19583 6.71779 8.24338 6.64787 8.31322L5.64787 9.31322C5.55955 9.408 5.51146 9.53337 5.51375 9.6629C5.51604 9.79243 5.56851 9.91602 5.66012 10.0076C5.75173 10.0992 5.87532 10.1517 6.00485 10.154C6.13439 10.1563 6.25975 10.1082 6.35453 10.0199L6.5012 9.87322V11.3332C6.5012 11.4658 6.55388 11.593 6.64765 11.6868C6.74142 11.7805 6.86859 11.8332 7.0012 11.8332C7.13381 11.8332 7.26098 11.7805 7.35475 11.6868C7.44852 11.593 7.5012 11.4658 7.5012 11.3332V8.66655Z"
                          fill="#D97706"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="xs:text-lg text-base text-gray-900 font-medium mr-auto">
                    22/10/23
                  </span>
                </div>
                <div className="bg-gray-200 rounded-lg flex justify-center items-center xs:px-5 px-2 py-2 flex-col w-full h-full">
                  <div className="flex gap-1 items-center justify-start mr-auto">
                    <span>Time</span>
                    <span className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M16 9.525C16 14.375 12.65 15.25 8.5 15.25C4.35 15.25 1 14.375 1 9.525C1 4.675 4.35 0.75 8.5 0.75C12.65 0.75 16 4.675 16 9.525Z"
                          fill="#13618D"
                        />
                        <path
                          d="M15.25 11.5251C15.25 12.6751 13.95 14.9001 8.5 14.9001C3.05 14.9001 1.75 12.6501 1.75 11.5251C1.75 11.0001 3.725 13.4501 8.5 13.4501C13.275 13.4501 15.25 10.9751 15.25 11.5251Z"
                          fill="#055672"
                        />
                        <path
                          d="M8.5 12.525C11.6066 12.525 14.125 9.97302 14.125 6.825C14.125 3.67698 11.6066 1.125 8.5 1.125C5.3934 1.125 2.875 3.67698 2.875 6.825C2.875 9.97302 5.3934 12.525 8.5 12.525Z"
                          fill="#428BC1"
                        />
                        <path
                          d="M6.39142 11.1578C6.48121 11.0024 6.42802 10.8036 6.2726 10.7138C6.11718 10.624 5.9184 10.6772 5.8286 10.8326C5.73881 10.988 5.79201 11.1868 5.94742 11.2766C6.10284 11.3664 6.30162 11.3132 6.39142 11.1578Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M11.1785 2.83863C11.2683 2.6832 11.2151 2.48442 11.0597 2.39464C10.9042 2.30486 10.7055 2.35808 10.6157 2.5135C10.5259 2.66893 10.5791 2.8677 10.7345 2.95749C10.89 3.04727 11.0888 2.99405 11.1785 2.83863Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M4.50685 9.50491C4.66229 9.41516 4.71555 9.2164 4.62581 9.06095C4.53606 8.90551 4.33729 8.85225 4.18185 8.94199C4.0264 9.03174 3.97314 9.23051 4.06289 9.38595C4.15264 9.5414 4.3514 9.59466 4.50685 9.50491Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M12.8078 4.71074C12.9632 4.62094 13.0164 4.42215 12.9266 4.26674C12.8368 4.11133 12.638 4.05814 12.4826 4.14794C12.3272 4.23775 12.274 4.43653 12.3638 4.59195C12.4536 4.74736 12.6524 4.80054 12.8078 4.71074Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M3.7 7.15C3.87949 7.15 4.025 7.00449 4.025 6.825C4.025 6.64551 3.87949 6.5 3.7 6.5C3.52051 6.5 3.375 6.64551 3.375 6.825C3.375 7.00449 3.52051 7.15 3.7 7.15Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M13.2996 7.15C13.4791 7.15 13.6246 7.00449 13.6246 6.825C13.6246 6.64551 13.4791 6.5 13.2996 6.5C13.1201 6.5 12.9746 6.64551 12.9746 6.825C12.9746 7.00449 13.1201 7.15 13.2996 7.15Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M4.61994 4.58838C4.70972 4.43296 4.65651 4.23418 4.50108 4.1444C4.34566 4.05462 4.14688 4.10783 4.05709 4.26326C3.96731 4.41868 4.02053 4.61746 4.17595 4.70724C4.33138 4.79702 4.53016 4.74381 4.61994 4.58838Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M12.9266 9.3961C13.0164 9.24069 12.9632 9.0419 12.8078 8.9521C12.6524 8.8623 12.4536 8.91548 12.3638 9.0709C12.274 9.22631 12.3272 9.4251 12.4826 9.5149C12.638 9.6047 12.8368 9.55152 12.9266 9.3961Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M6.2608 2.95748C6.41623 2.86772 6.46947 2.66895 6.37971 2.51351C6.28995 2.35808 6.09117 2.30484 5.93574 2.3946C5.7803 2.48436 5.72706 2.68313 5.81683 2.83857C5.90659 2.99401 6.10536 3.04724 6.2608 2.95748Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M11.1748 10.825C11.2748 10.975 11.2248 11.175 11.0498 11.275C10.8998 11.375 10.6998 11.3 10.5998 11.15C10.4998 11 10.5498 10.8 10.7248 10.7C10.8998 10.625 11.0998 10.675 11.1748 10.825Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M8.50078 2.34995C8.68027 2.34995 8.82578 2.20444 8.82578 2.02495C8.82578 1.84546 8.68027 1.69995 8.50078 1.69995C8.32129 1.69995 8.17578 1.84546 8.17578 2.02495C8.17578 2.20444 8.32129 2.34995 8.50078 2.34995Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M8.50078 11.95C8.68027 11.95 8.82578 11.8045 8.82578 11.625C8.82578 11.4456 8.68027 11.3 8.50078 11.3C8.32129 11.3 8.17578 11.4456 8.17578 11.625C8.17578 11.8045 8.32129 11.95 8.50078 11.95Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M8.5 10.825C10.7091 10.825 12.5 9.03409 12.5 6.82495C12.5 4.61581 10.7091 2.82495 8.5 2.82495C6.29086 2.82495 4.5 4.61581 4.5 6.82495C4.5 9.03409 6.29086 10.825 8.5 10.825Z"
                          fill="#B0BCC1"
                        />
                        <path
                          d="M8.5 10.1001C10.502 10.1001 12.125 8.47713 12.125 6.4751C12.125 4.47307 10.502 2.8501 8.5 2.8501C6.49797 2.8501 4.875 4.47307 4.875 6.4751C4.875 8.47713 6.49797 10.1001 8.5 10.1001Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M9.92531 8.325C9.92531 10.15 7.10031 10.15 7.10031 8.325C7.07531 6.5 7.72531 3 8.50031 3C9.27531 3 9.92531 6.5 9.92531 8.325Z"
                          fill="#B0BCC1"
                        />
                        <path
                          d="M9.725 7.94995C9.725 9.69995 7.25 9.69995 7.25 7.94995C7.25 6.19995 7.8 2.82495 8.475 2.82495C9.175 2.82495 9.725 6.19995 9.725 7.94995Z"
                          fill="#E4E7EA"
                        />
                        <path
                          d="M9.52422 7.2751C9.52422 8.8001 7.44922 8.8001 7.44922 7.2751C7.44922 5.7501 7.92422 2.8501 8.47422 2.8501C9.07422 2.8501 9.52422 5.7501 9.52422 7.2751Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="xs:text-lg text-base text-gray-900 font-medium mr-auto">
                    16:10 UTC
                  </span>
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <div className="bg-gray-200 rounded-lg flex justify-center items-center xs:px-5 px-2 py-2 flex-col w-full h-full">
                  <div className="flex gap-1 items-center justify-start mr-auto">
                    <span>Stadium</span>
                    <span className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_10134_129029)">
                          <path
                            d="M0.767028 6.94189C0.767028 6.94189 0.232528 7.36414 0.0562782 8.14964C0.00825063 8.36496 -0.00917094 8.58597 0.00452822 8.80614C0.02612 9.16242 0.11165 9.51191 0.257028 9.83789C0.326778 9.99714 0.409528 10.1511 0.502028 10.2994C0.913528 10.9394 1.44203 11.4894 2.04353 11.9436C2.19399 12.0571 2.3486 12.1649 2.50703 12.2669C3.30028 12.7531 4.14328 13.1809 5.02453 13.4824C5.20078 13.5424 5.37753 13.5976 5.55503 13.6469C7.29428 14.1004 9.13978 14.0389 10.865 13.6384C11.0185 13.6016 11.1915 13.5559 11.379 13.4991C12.502 13.1596 14.161 12.4381 15.4363 10.9499C15.4363 10.9499 16.7453 9.12389 15.142 7.67239L9.58453 7.44989L0.769528 6.94189"
                            fill="#858985"
                          />
                          <path
                            d="M15.3746 7.73438L15.0351 9.25713L8.0786 13.1029C8.0786 13.1029 0.719602 12.2761 1.0311 7.73413L4.6616 9.65738L6.46485 10.4604L9.6516 9.96938L13.3876 7.89438L15.3736 7.73438"
                            fill="#3B4743"
                          />
                          <path
                            d="M7.90041 11.0874C7.87897 10.8071 7.86239 10.5265 7.85066 10.2457L6.46491 10.4592L4.66166 9.65615L1.03116 7.73315C0.718661 12.2757 8.07866 13.1019 8.07866 13.1019L8.12791 13.0744C8.07616 12.4112 7.95216 11.7509 7.90091 11.0874"
                            fill="#2C3834"
                          />
                          <path
                            d="M3.24238 6.323L1.70312 7.1715L2.97938 9.27L7.61937 10.951L12.2701 8.637L13.6001 7.835L12.0751 5.87L9.49438 4.3855L7.65088 4.698L3.24238 6.323Z"
                            fill="#627D5E"
                          />
                          <path
                            d="M2.97989 6.68848C2.97989 6.68848 2.97539 6.71048 2.96914 6.75098C2.92189 7.03348 2.74264 8.21273 2.97989 8.63198L2.37464 8.32873L1.21289 6.32373H1.59464"
                            fill="#2C3834"
                          />
                          <path
                            d="M1.51934 6.53492L2.92984 7.17042C2.92984 7.17042 8.11109 5.03267 8.52634 5.06217L9.07559 4.23092L8.87784 3.28467L5.55584 4.12567L2.25509 5.34442L1.30859 5.82867L1.51934 6.53492Z"
                            fill="#384440"
                          />
                          <path
                            d="M8.94605 3.51489L8.4668 5.05614C8.4668 5.05614 12.2193 6.27764 12.6553 7.83364L14.6035 7.10689L14.2545 5.92864L12.626 4.32939L9.3103 3.36914L8.94605 3.51489Z"
                            fill="#2C3834"
                          />
                          <path
                            d="M4.59601 7.36163L7.73376 6.13238C7.73376 6.13238 9.53101 5.46213 10.8455 6.33363C10.8455 6.33363 12.374 7.00388 11.3548 8.45288L6.58226 10.7461L3.57726 9.02988C3.57776 9.02963 3.38551 7.83613 4.59601 7.36163Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M13.9772 4.84553C11.1997 2.97553 8.34866 3.01128 8.34866 3.01128C5.07366 3.37003 1.20641 5.32703 1.20641 5.32703C-0.022585 6.78753 1.04591 8.49728 1.04591 8.49728C3.11241 11.4893 7.97467 11.7925 7.97467 11.7925C11.0382 10.9908 15.9009 7.83828 15.9009 7.83828C15.6874 5.82578 13.9772 4.84553 13.9772 4.84553ZM6.87042 10.1715C6.87042 10.1715 1.59792 8.76453 2.31067 6.09278C2.31067 6.09278 6.40666 3.84853 9.27491 3.68803C9.27491 3.68803 13.3894 3.65203 14.1549 6.78703C14.1549 6.78703 9.39991 8.97803 6.86992 10.1715"
                            fill="#9FA09F"
                          />
                          <path
                            d="M8.37692 3.01247C8.33692 3.01147 8.31542 3.01147 8.31542 3.01147C5.27392 3.34497 1.72567 5.05372 1.23242 5.29747C1.60242 5.59022 2.00767 5.81772 2.43367 6.00947C3.14867 5.63297 6.19867 4.08722 8.66017 3.74697C8.56171 3.5038 8.46728 3.25877 8.37692 3.01247Z"
                            fill="#C6CACC"
                          />
                          <path
                            d="M14.0574 6.83328C13.3762 7.14778 9.31567 9.02028 6.98242 10.12C7.13842 10.4568 7.24917 10.8123 7.43767 11.1378C7.57792 11.381 7.74867 11.5915 7.93417 11.7885C7.96117 11.7915 7.97842 11.7925 7.97842 11.7925C11.0244 10.9953 15.8447 7.87703 15.9017 7.83978C15.3062 7.47153 14.6942 7.13103 14.0584 6.83228"
                            fill="#D1D2D3"
                          />
                          <path
                            d="M14.8224 8.51001C15.4722 8.11776 15.8854 7.85101 15.9022 7.84026C15.3057 7.47201 14.6944 7.13151 14.0587 6.83276C13.9522 6.88151 13.7579 6.97101 13.5064 7.08726C14.0272 7.46901 14.4712 7.97026 14.8224 8.50901M12.4804 7.56251C12.1752 7.70376 11.8452 7.85626 11.4939 8.01926C11.9989 8.50851 12.6617 8.87101 13.1204 9.49751C13.6902 9.18901 13.7119 9.16651 14.1784 8.89276C13.7284 8.31376 13.1504 7.80951 12.4804 7.56251ZM10.6437 8.41251C10.2787 8.58176 9.90467 8.75476 9.53267 8.92801C9.74492 9.14076 10.9272 10.188 11.0584 10.5768C11.5082 10.365 11.6184 10.2993 12.0544 10.071C11.7924 9.38101 11.2502 8.83626 10.6437 8.41251ZM8.70092 9.31501C8.08217 9.60451 7.49017 9.88126 6.98242 10.1203C7.13792 10.457 7.24867 10.8125 7.43717 11.138C7.57742 11.3813 7.74817 11.5918 7.93417 11.7888C7.96117 11.7918 7.97842 11.7928 7.97842 11.7928C8.62817 11.6225 9.36017 11.3435 10.1084 11.0143C9.79917 10.3358 9.31992 9.76551 8.70092 9.31501Z"
                            fill="#A5B6C4"
                          />
                          <path
                            d="M4.56055 7.92733L8.9453 6.15308L11.3078 7.92733L6.86305 9.96583L4.56055 7.92733Z"
                            fill="#39784E"
                          />
                          <path
                            d="M15.3985 10.95L15.414 10.9263L13.6882 9.83276L9.7207 11.9983L11.0672 13.5768C12.18 13.2768 14.0145 12.5643 15.3985 10.95Z"
                            fill="#44514D"
                          />
                          <path
                            d="M12.7457 11.345C13.38 10.975 13.551 10.6523 13.917 9.97876L13.6882 9.83301L9.7207 11.9985L10.0155 12.344C10.7935 12.211 12.1417 11.6963 12.7457 11.345Z"
                            fill="#5F6865"
                          />
                          <path
                            d="M6.99414 6.94189L9.16689 8.90864M7.54439 7.90164C7.55614 7.63164 7.80564 7.42414 8.10164 7.43739C8.39789 7.45014 8.62739 7.67839 8.61639 7.94864C8.60464 8.21789 8.35464 8.42539 8.05939 8.41214C7.76239 8.39989 7.53189 8.17139 7.54439 7.90164Z"
                            stroke="white"
                            strokeWidth="0.195312"
                            strokeMiterlimit="10"
                          />
                          <path
                            d="M9.06208 2.49222L9.01758 2.80872C9.01758 2.80872 9.15108 2.89147 9.15608 2.89097C9.16108 2.88947 9.45133 2.89197 9.45133 2.89197C9.45133 2.89197 9.78983 2.71497 9.79783 2.70597C9.80658 2.69697 9.87183 2.60022 9.87183 2.60022L9.60983 2.60847L9.32283 2.50997L9.22483 2.42172L9.10133 2.35522L9.06208 2.49222Z"
                            fill="white"
                          />
                          <path
                            d="M8.75586 2.14319L8.78186 2.56569C8.78186 2.56569 8.87986 2.52394 8.89336 2.51944C8.90736 2.51444 9.05486 2.48394 9.05486 2.48394C9.05486 2.48394 9.17736 2.52919 9.18186 2.52819C9.18611 2.52769 9.20836 2.49044 9.20836 2.49044L9.26461 2.24869L9.25786 2.13269L9.13286 2.05444L8.97011 2.05794C8.97011 2.05794 8.84361 2.08644 8.83411 2.09469C8.80868 2.1119 8.78258 2.12808 8.75586 2.14319Z"
                            fill="#E6E7E8"
                          />
                          <path
                            d="M9.72006 2.56408C9.52806 2.56208 9.37256 2.50308 9.25406 2.38933L9.28306 2.28358C9.29034 2.25813 9.29553 2.23213 9.29856 2.20583C9.30192 2.1785 9.29831 2.15077 9.28809 2.1252C9.27786 2.09963 9.26134 2.07706 9.24006 2.05958C9.19581 2.02083 9.13681 2.00108 9.06406 2.00008C8.95856 1.99808 8.85681 2.03258 8.75781 2.10358C8.76031 2.13008 8.76231 2.15658 8.76406 2.18333C8.87731 2.11583 8.97131 2.08308 9.04606 2.08408C9.11056 2.08508 9.16231 2.10083 9.20056 2.13233C9.21871 2.1457 9.233 2.16364 9.24195 2.18432C9.25091 2.20501 9.25423 2.2277 9.25156 2.25008C9.24779 2.27927 9.24169 2.30812 9.23331 2.33633L9.19156 2.48533C9.15956 2.45383 9.11456 2.43808 9.05656 2.43658C8.97106 2.43558 8.88406 2.46658 8.79581 2.52858C8.79781 2.55658 8.79981 2.58383 8.80081 2.61233C8.88356 2.54833 8.96581 2.51683 9.04931 2.51783L8.98381 2.81408C8.97556 2.84708 8.99256 2.87458 9.03506 2.89733C9.07681 2.92033 9.13256 2.93133 9.20331 2.93233C9.36186 2.93499 9.51824 2.89529 9.65631 2.81733C9.79881 2.73858 9.92881 2.62133 10.0468 2.46683C9.94931 2.53358 9.84056 2.56608 9.72006 2.56408ZM9.08456 2.52283C9.14031 2.53658 9.16631 2.56008 9.16281 2.59458C9.15981 2.62308 9.12981 2.65208 9.07231 2.68233C9.06435 2.6865 9.05643 2.69075 9.04856 2.69508L9.08456 2.52283ZM9.19831 2.84858C9.14306 2.84758 9.10181 2.84058 9.07531 2.82633C9.04931 2.81208 9.03706 2.79133 9.03981 2.76433C9.04124 2.75376 9.04607 2.74393 9.05356 2.73633L9.08656 2.71858C9.14456 2.68908 9.17756 2.66158 9.18531 2.63683L9.23206 2.47633C9.34831 2.58758 9.50381 2.64558 9.69856 2.64808C9.71431 2.64808 9.74081 2.64758 9.77731 2.64458C9.61584 2.78125 9.40979 2.85385 9.19831 2.84858Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M8.91773 3.58368C8.91973 3.60618 8.89023 3.62993 8.85273 3.63668C8.81598 3.64368 8.78498 3.63093 8.78298 3.60768L8.68948 2.10018C8.68848 2.07743 8.71748 2.05343 8.75448 2.04693C8.79173 2.04018 8.82323 2.05343 8.82473 2.07593L8.91773 3.58343"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M8.85098 3.59545L8.75748 2.08795C8.75648 2.0727 8.76923 2.05745 8.78948 2.0457C8.77784 2.04406 8.76601 2.0444 8.75448 2.0467C8.71773 2.0532 8.68848 2.0772 8.68948 2.09995L8.78298 3.60745C8.78498 3.6307 8.81598 3.64345 8.85273 3.63645C8.86445 3.63436 8.87577 3.63039 8.88623 3.6247C8.86623 3.62095 8.85148 3.6102 8.85098 3.59495"
                            fill="#939292"
                          />
                          <path
                            d="M2.6223 4.09945L2.5918 4.37195C2.5918 4.37195 2.7083 4.43995 2.7128 4.43895C2.7173 4.43795 2.9658 4.43295 2.9658 4.43295C2.9658 4.43295 3.2523 4.27145 3.25905 4.2642C3.26605 4.25695 3.31805 4.1717 3.31805 4.1717L3.09505 4.18495L2.84605 4.1082L2.7598 4.03545L2.65205 3.9812L2.6223 4.09945Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M2.35156 3.80791L2.38456 4.17016L2.47906 4.12691C2.49031 4.12291 2.61631 4.09341 2.61631 4.09341C2.61631 4.09341 2.72206 4.12841 2.72656 4.12791C2.72956 4.12691 2.74881 4.09441 2.74881 4.09441L2.79056 3.88616L2.78181 3.78641L2.67256 3.72241L2.53281 3.73016C2.53281 3.73016 2.42456 3.75766 2.41706 3.76466C2.39555 3.77957 2.37372 3.79399 2.35156 3.80791Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M3.19027 4.14529C3.02527 4.14779 2.89102 4.10154 2.78577 4.00654L2.80827 3.91554C2.81427 3.88804 2.81827 3.86529 2.81952 3.84804C2.82168 3.82467 2.81796 3.80113 2.80871 3.77956C2.79945 3.75799 2.78495 3.73907 2.76652 3.72454C2.72652 3.69204 2.67602 3.67629 2.61352 3.67729C2.52302 3.67879 2.43677 3.71129 2.35352 3.77379C2.35602 3.79629 2.35852 3.81904 2.36052 3.84204C2.45602 3.78154 2.53627 3.75104 2.59977 3.75004C2.65552 3.74804 2.70077 3.76079 2.73427 3.78704C2.75 3.79832 2.76253 3.81348 2.77064 3.83106C2.77874 3.84863 2.78215 3.86801 2.78052 3.88729C2.77807 3.91235 2.77364 3.93718 2.76727 3.96154L2.73527 4.09054C2.70677 4.06404 2.66777 4.05179 2.61802 4.05229C2.54477 4.05379 2.47102 4.08179 2.39702 4.13779L2.40277 4.20929C2.47177 4.15254 2.54152 4.12304 2.61352 4.12204L2.56427 4.37754C2.55877 4.40604 2.57402 4.42929 2.61052 4.44779C2.64702 4.46604 2.69602 4.47479 2.75627 4.47429C2.89219 4.47196 3.02505 4.43357 3.14127 4.36304C3.26227 4.29204 3.37152 4.18879 3.46802 4.05304C3.38747 4.11229 3.29026 4.14457 3.19027 4.14529ZM2.64452 4.12504C2.69227 4.13579 2.71477 4.15554 2.71277 4.18454C2.71177 4.20879 2.68627 4.23529 2.63802 4.26279C2.63091 4.266 2.62398 4.26958 2.61727 4.27354L2.64452 4.12504ZM2.74927 4.40154C2.70252 4.40254 2.66702 4.39704 2.64402 4.38579C2.62077 4.37404 2.61052 4.35729 2.61152 4.33279C2.61281 4.32403 2.61654 4.3158 2.62227 4.30904C2.63502 4.30229 2.64452 4.29679 2.65027 4.29329C2.70002 4.26679 2.72652 4.24204 2.73302 4.22054L2.76902 4.08129C2.87177 4.17479 3.00677 4.21954 3.17352 4.21754C3.18727 4.21704 3.21002 4.21554 3.24127 4.21254C3.10597 4.33371 2.93089 4.40097 2.74927 4.40154Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M2.52795 5.04004C2.52995 5.05979 2.50645 5.08104 2.47445 5.08729C2.44195 5.09429 2.41495 5.08329 2.41295 5.06379L2.29495 3.77429C2.29395 3.75354 2.31795 3.73279 2.34995 3.72654C2.38145 3.71954 2.40845 3.73004 2.41045 3.74954L2.52795 5.04004Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M2.47122 5.05005L2.35247 3.75955C2.35197 3.7468 2.36247 3.73305 2.37897 3.7228C2.36927 3.72151 2.3594 3.72219 2.34997 3.7248C2.31797 3.73105 2.29372 3.7518 2.29497 3.77255L2.41297 5.06205C2.41497 5.0818 2.44197 5.09255 2.47447 5.08555C2.48435 5.0836 2.49382 5.07996 2.50247 5.0748C2.48497 5.07255 2.47222 5.0633 2.47122 5.05005Z"
                            fill="#939292"
                          />
                          <path
                            d="M5.50206 3.04147L5.47656 3.27621C5.47656 3.27621 5.57631 3.33472 5.58031 3.33372C5.58431 3.33272 5.79831 3.32821 5.79831 3.32821C5.79831 3.32821 6.04531 3.18997 6.05131 3.18347C6.05731 3.17672 6.10306 3.10321 6.10306 3.10321L5.91006 3.11447L5.69506 3.04797L5.62131 2.98547L5.52831 2.93896L5.50206 3.04147Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M5.26758 2.79008L5.29608 3.10208C5.29608 3.10208 5.36733 3.06908 5.37733 3.06508C5.38783 3.06108 5.49658 3.03608 5.49658 3.03608C5.49658 3.03608 5.58758 3.06658 5.59108 3.06608C5.59408 3.06508 5.61033 3.03658 5.61033 3.03658L5.64683 2.85733L5.63858 2.77133L5.54458 2.71558L5.42458 2.72258C5.42458 2.72258 5.33108 2.74608 5.32483 2.75258C5.31733 2.75908 5.26758 2.79008 5.26758 2.79008Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M5.99273 3.08077C5.85098 3.08277 5.73448 3.04277 5.64423 2.96077L5.66298 2.88252C5.66898 2.85877 5.67198 2.83977 5.67298 2.82402C5.67499 2.804 5.6719 2.7838 5.66399 2.76531C5.65607 2.74682 5.6436 2.73063 5.62773 2.71827C5.58996 2.68922 5.54307 2.67459 5.49548 2.67702C5.41723 2.67852 5.34298 2.70602 5.27148 2.76027L5.27748 2.81927C5.35973 2.76702 5.42898 2.74052 5.48423 2.73952C5.53148 2.73852 5.57073 2.74927 5.59923 2.77202C5.61295 2.78165 5.6239 2.7947 5.63101 2.80987C5.63811 2.82505 5.64112 2.84182 5.63973 2.85852C5.63823 2.87427 5.63473 2.89602 5.62848 2.92252L5.60048 3.03377C5.57265 3.01011 5.53668 2.99827 5.50023 3.00077C5.43673 3.00177 5.37323 3.02652 5.30923 3.07402C5.31073 3.09477 5.31323 3.11552 5.31448 3.13602C5.37348 3.08677 5.43423 3.06177 5.49573 3.06127L5.45398 3.28077C5.44898 3.30552 5.46173 3.32602 5.49323 3.34177C5.52473 3.35752 5.56698 3.36502 5.61873 3.36452C5.73601 3.36282 5.85071 3.32985 5.95098 3.26902C6.05523 3.20802 6.14873 3.11827 6.23298 3.00127C6.16198 3.05277 6.08173 3.07877 5.99273 3.08077ZM5.52223 3.06352C5.56323 3.07202 5.58273 3.08952 5.58073 3.11427C5.57973 3.13577 5.55823 3.15802 5.51623 3.18127C5.51173 3.18427 5.50573 3.18702 5.49848 3.19177L5.52223 3.06352ZM5.61273 3.30227C5.58161 3.30411 5.55044 3.29943 5.52123 3.28852C5.50148 3.27802 5.49273 3.26277 5.49373 3.24277C5.49373 3.23602 5.49773 3.22902 5.50323 3.22202C5.51448 3.21552 5.52248 3.21077 5.52748 3.20827C5.56973 3.18502 5.59348 3.16452 5.59823 3.14577L5.62973 3.02577C5.71823 3.10602 5.83448 3.14502 5.97823 3.14302C5.98998 3.14252 6.01023 3.14152 6.03723 3.13902C5.92025 3.24317 5.76936 3.3012 5.61273 3.30227Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M5.42003 3.85156C5.42153 3.86831 5.40128 3.88706 5.37328 3.89306C5.34578 3.89831 5.32203 3.88906 5.32128 3.87281L5.21878 2.76006C5.21778 2.74281 5.23853 2.72456 5.26603 2.71856C5.29303 2.71331 5.31728 2.72206 5.31903 2.73931L5.42003 3.85156Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M5.37053 3.86221L5.26903 2.74896C5.26803 2.73771 5.27703 2.72646 5.29178 2.71746C5.28321 2.71632 5.2745 2.71666 5.26603 2.71846C5.23853 2.72446 5.21778 2.74271 5.21878 2.75996L5.32128 3.87271C5.32228 3.88896 5.34578 3.89846 5.37328 3.89296C5.38194 3.89098 5.39022 3.8876 5.39778 3.88296C5.38328 3.88096 5.37203 3.87346 5.37053 3.86221Z"
                            fill="#939292"
                          />
                          <path
                            d="M8.02275 2.57722L8 2.77847C8 2.77847 8.08575 2.82772 8.089 2.82722C8.09225 2.82672 8.2755 2.82272 8.2755 2.82272C8.2755 2.82272 8.48625 2.70397 8.492 2.69872C8.49725 2.69347 8.5355 2.63047 8.5355 2.63047L8.371 2.64072L8.18775 2.58322L8.12425 2.52997L8.0445 2.49072L8.02275 2.57722Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M7.82227 2.36331L7.84677 2.62956C7.84677 2.62956 7.90777 2.60106 7.91627 2.59756C7.92502 2.59456 8.01802 2.57281 8.01802 2.57281C8.01802 2.57281 8.09577 2.59881 8.09877 2.59856C8.10177 2.59756 8.11552 2.57381 8.11552 2.57381L8.14602 2.42031L8.13977 2.34706L8.05852 2.29956L7.95602 2.30531C7.95602 2.30531 7.87627 2.32506 7.87052 2.33106C7.86452 2.33631 7.82227 2.36331 7.82227 2.36331Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M8.44047 2.6108C8.31947 2.6133 8.21997 2.5788 8.14272 2.50905L8.15897 2.44155C8.16397 2.4213 8.16672 2.40455 8.16772 2.3918C8.16925 2.37464 8.16646 2.35737 8.1596 2.34156C8.15275 2.32576 8.14204 2.31191 8.12847 2.3013C8.09646 2.27582 8.05603 2.26332 8.01522 2.2663C7.94552 2.26852 7.87845 2.29346 7.82422 2.3373C7.82572 2.35455 7.82722 2.3708 7.82922 2.38805C7.89972 2.3428 7.95872 2.32105 8.00597 2.3198C8.04098 2.3174 8.07576 2.32711 8.10447 2.3473C8.1162 2.35556 8.12554 2.36678 8.13151 2.37983C8.13749 2.39288 8.13989 2.40727 8.13847 2.42155C8.13673 2.43988 8.13347 2.45802 8.12872 2.4758L8.10597 2.5713C8.08186 2.55092 8.05069 2.54086 8.01922 2.5433C7.96522 2.5438 7.91047 2.5648 7.85597 2.6058L7.86097 2.6583C7.91172 2.61655 7.96347 2.5953 8.01597 2.5938L7.97997 2.7828C7.97547 2.80355 7.98672 2.8213 8.01397 2.83505C8.04097 2.8478 8.07647 2.8548 8.12122 2.8538C8.22122 2.8518 8.31622 2.8253 8.40522 2.77205C8.49372 2.7198 8.57397 2.64355 8.64522 2.54355C8.58582 2.5871 8.51412 2.61065 8.44047 2.6108ZM8.03822 2.59655C8.07372 2.60455 8.09022 2.6188 8.08897 2.6398C8.08747 2.65805 8.06922 2.6773 8.03322 2.6978C8.02795 2.70009 8.02285 2.70277 8.01797 2.7058L8.03822 2.59655ZM8.11597 2.8003C8.08933 2.80236 8.06258 2.79834 8.03772 2.78855C8.02097 2.78005 8.01297 2.7668 8.01397 2.75005C8.01397 2.7438 8.01747 2.7378 8.02247 2.7318L8.04272 2.72005C8.07922 2.7003 8.09947 2.6833 8.10372 2.66655L8.12972 2.56405C8.20597 2.63305 8.30472 2.66605 8.42822 2.66455C8.43822 2.66455 8.45472 2.66305 8.47797 2.66105C8.3783 2.75003 8.24957 2.79955 8.11597 2.8003Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M7.95259 3.26988C7.95409 3.28463 7.93684 3.30038 7.91334 3.30488C7.88959 3.31013 7.86909 3.30238 7.86809 3.28813L7.78134 2.33688C7.77984 2.32263 7.79809 2.30688 7.82134 2.30238C7.84434 2.29738 7.86509 2.30438 7.86609 2.31913L7.95259 3.26988Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M7.91084 3.27989L7.82359 2.32864C7.82259 2.31939 7.83034 2.30889 7.84234 2.30164C7.83532 2.30047 7.82812 2.30098 7.82134 2.30314C7.79809 2.30764 7.77984 2.32339 7.78134 2.33764L7.86809 3.28889C7.86909 3.30314 7.88959 3.31089 7.91334 3.30564C7.92051 3.30393 7.92748 3.30141 7.93409 3.29814C7.92109 3.29564 7.91134 3.28939 7.91084 3.27989Z"
                            fill="#939292"
                          />
                          <path
                            d="M1.69036 4.62212L1.63086 5.04037C1.63086 5.04037 1.80711 5.14862 1.81386 5.14762C1.82061 5.14662 2.20311 5.14962 2.20311 5.14962C2.20311 5.14962 2.64936 4.91537 2.66036 4.90462C2.67161 4.89287 2.75736 4.76487 2.75736 4.76487L2.41186 4.77537L2.03386 4.64587L1.90436 4.52962L1.74161 4.44312L1.69036 4.62212Z"
                            fill="white"
                          />
                          <path
                            d="M1.28711 4.1624L1.32161 4.7204C1.32161 4.7204 1.45061 4.66465 1.46811 4.6584C1.48636 4.6519 1.68086 4.61265 1.68086 4.61265C1.68086 4.61265 1.84236 4.67115 1.84861 4.67015C1.85361 4.66965 1.88411 4.6199 1.88411 4.6199L1.95786 4.30215L1.94786 4.14865L1.78411 4.04565L1.56861 4.05065C1.56861 4.05065 1.40211 4.0884 1.38936 4.0989C1.37711 4.10965 1.28711 4.1624 1.28711 4.1624Z"
                            fill="#E6E7E8"
                          />
                          <path
                            d="M2.55877 4.71745C2.30527 4.71445 2.10052 4.6372 1.94427 4.4867L1.98277 4.34745C1.99352 4.30595 2.00052 4.2727 2.00352 4.24495C2.00787 4.20892 2.00307 4.17237 1.98957 4.13869C1.97607 4.105 1.9543 4.07525 1.92627 4.0522C1.86777 4.00095 1.79052 3.97445 1.69402 3.97345C1.55577 3.97145 1.42077 4.0167 1.29102 4.1097C1.29352 4.1452 1.29552 4.17995 1.29902 4.21445C1.44752 4.12645 1.57252 4.0827 1.67052 4.0842C1.75577 4.0847 1.82352 4.1062 1.87477 4.1477C1.92502 4.1887 1.94727 4.2402 1.94127 4.3032C1.93877 4.3317 1.93002 4.3702 1.91752 4.41695L1.86202 4.61345C1.81977 4.57195 1.76052 4.55095 1.68427 4.54945C1.57152 4.54845 1.45702 4.5887 1.34027 4.67045C1.34327 4.7072 1.34527 4.7442 1.34727 4.7817C1.45602 4.69695 1.56477 4.6557 1.67402 4.6567L1.58777 5.04745C1.57652 5.0907 1.60002 5.1272 1.65527 5.1567C1.71102 5.1867 1.78427 5.20195 1.87777 5.20345C2.08654 5.20643 2.29237 5.15398 2.47427 5.05145C2.66327 4.94745 2.83452 4.79345 2.99002 4.5892C2.86359 4.67679 2.71251 4.72173 2.55877 4.71745ZM1.72077 4.66345C1.79452 4.6807 1.82802 4.7117 1.82402 4.75695C1.82052 4.7942 1.78027 4.8337 1.70502 4.87295C1.69652 4.87695 1.68627 4.88295 1.67302 4.8902L1.72077 4.66345ZM1.87027 5.09245C1.79752 5.09145 1.74377 5.0817 1.70877 5.06295C1.67327 5.0442 1.65802 5.0172 1.66152 4.9812C1.66329 4.96714 1.66992 4.95414 1.68027 4.94445C1.69902 4.93395 1.71377 4.9262 1.72252 4.92145C1.79977 4.88245 1.84252 4.8467 1.85252 4.8132L1.91402 4.60145C2.06752 4.74895 2.27277 4.82495 2.52952 4.82845C2.55027 4.82845 2.58477 4.82695 2.63377 4.82445C2.42062 5.00418 2.14898 5.09953 1.87027 5.09245Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M1.50203 6.06251C1.50403 6.09301 1.46553 6.12451 1.41628 6.13326C1.36703 6.14226 1.32578 6.12551 1.32378 6.09501L1.20128 4.10776C1.19878 4.07726 1.23828 4.04576 1.28653 4.03701C1.33578 4.02801 1.37703 4.04576 1.37903 4.07576L1.50203 6.06251Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M1.41328 6.07807L1.29028 4.09082C1.28828 4.07057 1.30553 4.04957 1.33178 4.03582C1.31681 4.03331 1.30151 4.03331 1.28653 4.03582C1.23828 4.04457 1.19878 4.07607 1.20128 4.10657L1.32378 6.09382C1.32578 6.12432 1.36703 6.14107 1.41628 6.13207C1.43175 6.12935 1.44668 6.1242 1.46053 6.11682C1.43328 6.11182 1.41428 6.09757 1.41328 6.07807Z"
                            fill="#939292"
                          />
                          <path
                            d="M3.7875 3.62406L3.75 3.89381C3.75 3.89381 3.86325 3.96406 3.8675 3.96356C3.872 3.96256 4.12 3.96456 4.12 3.96456C4.12 3.96456 4.4085 3.81356 4.41575 3.80606C4.42275 3.79931 4.47775 3.71656 4.47775 3.71656L4.25425 3.72306L4.01 3.63881L3.9265 3.56406L3.82125 3.50806L3.788 3.62406"
                            fill="white"
                          />
                          <path
                            d="M3.52734 3.32721L3.54959 3.68696C3.54959 3.68696 3.63284 3.65146 3.64459 3.64771C3.65634 3.64321 3.78234 3.61821 3.78234 3.61821C3.78234 3.61821 3.88659 3.65596 3.89059 3.65546C3.89359 3.65446 3.91309 3.62296 3.91309 3.62296L3.96084 3.41721L3.95459 3.31797L3.84834 3.25146L3.70959 3.25497C3.70959 3.25497 3.60234 3.27897 3.59359 3.28547C3.58559 3.29272 3.52734 3.32721 3.52734 3.32721Z"
                            fill="#E6E7E8"
                          />
                          <path
                            d="M4.3493 3.68611C4.18605 3.68411 4.05305 3.63411 3.9528 3.53711L3.9763 3.44711C3.9838 3.42011 3.98855 3.39786 3.99005 3.38011C3.99293 3.35692 3.98988 3.33338 3.98118 3.31169C3.97248 3.29 3.95841 3.27087 3.9403 3.25611C3.9023 3.22261 3.85205 3.20586 3.79005 3.20486C3.70055 3.20386 3.6138 3.23286 3.5293 3.29286C3.5308 3.31611 3.5333 3.33861 3.53455 3.36086C3.63055 3.30361 3.7113 3.27511 3.77455 3.27611C3.8303 3.27661 3.87355 3.29036 3.90655 3.31711C3.92173 3.32881 3.93365 3.34423 3.94113 3.36188C3.94862 3.37953 3.95143 3.39881 3.9493 3.41786C3.94604 3.44258 3.94111 3.46705 3.93455 3.49111L3.89805 3.61861C3.87105 3.59161 3.83255 3.57761 3.7838 3.57711C3.71055 3.57561 3.6363 3.60236 3.5608 3.65536C3.5628 3.67911 3.5643 3.70261 3.5653 3.72686C3.63505 3.67236 3.70555 3.64561 3.7768 3.64611L3.7208 3.89861C3.7138 3.92661 3.72855 3.94986 3.76505 3.96936C3.80055 3.98911 3.8478 3.99886 3.9078 3.99936C4.04278 4.00131 4.17587 3.9675 4.29355 3.90136C4.41555 3.83386 4.5263 3.73461 4.62705 3.60261C4.54563 3.65914 4.44838 3.68837 4.3493 3.68611ZM3.8078 3.65086C3.85505 3.66211 3.8768 3.68236 3.8748 3.71186C3.8718 3.73611 3.8458 3.76061 3.79705 3.78661C3.79205 3.78861 3.7853 3.79236 3.7763 3.79736L3.8078 3.65086ZM3.90455 3.92836C3.8573 3.92736 3.8228 3.92161 3.8003 3.90961C3.77755 3.89736 3.7678 3.87911 3.7698 3.85586C3.77153 3.84711 3.77558 3.83899 3.78155 3.83236C3.7938 3.82586 3.80305 3.82061 3.80905 3.81711C3.8593 3.79236 3.88705 3.76886 3.8933 3.74761L3.93255 3.61086C4.03205 3.70586 4.1643 3.75511 4.3308 3.75686C4.34355 3.75686 4.3663 3.75636 4.3983 3.75486C4.26043 3.87107 4.0848 3.93278 3.90455 3.92836Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M3.66644 4.55418C3.66844 4.57393 3.64394 4.59418 3.61144 4.59993C3.57994 4.60518 3.55344 4.59468 3.55244 4.57468L3.47269 3.29018C3.47169 3.27093 3.49619 3.25068 3.52769 3.24493C3.56019 3.23918 3.58619 3.25018 3.58769 3.27018L3.66644 4.55418Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M3.60944 4.56441L3.53069 3.28041C3.52919 3.26766 3.54044 3.25391 3.55719 3.24491C3.54746 3.24291 3.53742 3.24291 3.52769 3.24491C3.49619 3.25066 3.47169 3.27091 3.47269 3.29016L3.55244 4.57466C3.55344 4.59441 3.57994 4.60516 3.61144 4.59991C3.62168 4.59829 3.63152 4.59472 3.64044 4.58941C3.62244 4.58666 3.61044 4.57741 3.60944 4.56441Z"
                            fill="#939292"
                          />
                          <path
                            d="M6.98172 2.59857L6.94922 2.83382C6.94922 2.83382 7.04822 2.89582 7.05197 2.89482C7.05597 2.89432 7.27197 2.89632 7.27197 2.89632C7.27197 2.89632 7.52447 2.76382 7.52947 2.75757C7.53647 2.75157 7.58397 2.67932 7.58397 2.67932L7.38922 2.68507L7.17572 2.61132L7.10347 2.54632L7.01147 2.49707L6.98172 2.59857Z"
                            fill="white"
                          />
                          <path
                            d="M6.75586 2.33946L6.77461 2.65346C6.77461 2.65346 6.84761 2.62246 6.85836 2.61896C6.86861 2.61496 6.97811 2.59321 6.97811 2.59321C6.97811 2.59321 7.06911 2.62571 7.07261 2.62571C7.07511 2.62471 7.09286 2.59721 7.09286 2.59721L7.13461 2.41746L7.12911 2.33146L7.03611 2.27246L6.91436 2.27571C6.91436 2.27571 6.82036 2.29721 6.81336 2.30321C6.80611 2.30896 6.75586 2.33946 6.75586 2.33946Z"
                            fill="#E6E7E8"
                          />
                          <path
                            d="M7.47186 2.65249C7.32911 2.65049 7.21361 2.60674 7.12486 2.52224L7.14636 2.44399C7.15236 2.42024 7.15686 2.40124 7.15811 2.38549C7.16037 2.36521 7.1576 2.34468 7.15006 2.32572C7.14252 2.30675 7.13043 2.28993 7.11486 2.27674C7.07791 2.24694 7.03156 2.23126 6.98411 2.23249C6.90536 2.23149 6.82961 2.25724 6.75586 2.30924C6.75786 2.32999 6.75936 2.34974 6.76086 2.36874C6.84436 2.31899 6.91536 2.29449 6.97036 2.29499C7.01861 2.29549 7.05711 2.30724 7.08561 2.33099C7.0991 2.34089 7.10967 2.35424 7.11623 2.36963C7.12278 2.38503 7.12507 2.4019 7.12286 2.41849C7.12136 2.43524 7.11711 2.45599 7.10961 2.48249L7.07861 2.59374C7.05511 2.57024 7.02136 2.55824 6.97836 2.55774C6.91486 2.55674 6.84986 2.57974 6.78436 2.62549C6.78536 2.64674 6.78686 2.66724 6.78836 2.68799C6.84936 2.64074 6.91036 2.61724 6.97236 2.61824L6.92361 2.83774C6.91736 2.86299 6.93061 2.88299 6.96211 2.89974C6.99311 2.91699 7.03536 2.92549 7.08761 2.92624C7.20511 2.92824 7.31736 2.89924 7.42361 2.84049C7.53036 2.78149 7.62686 2.69474 7.71511 2.57974C7.64357 2.6287 7.55854 2.65413 7.47186 2.65249ZM6.99911 2.62099C7.04061 2.63174 7.06011 2.64849 7.05711 2.67474C7.05561 2.69574 7.03286 2.71749 6.99011 2.74024C6.98511 2.74224 6.97986 2.74549 6.97236 2.74999L6.99911 2.62099ZM7.08361 2.86424C7.04236 2.86324 7.01186 2.85824 6.99211 2.84699C6.97236 2.83649 6.96361 2.82124 6.96611 2.80124C6.96695 2.79313 6.97067 2.78558 6.97661 2.77999C6.98686 2.77474 6.99486 2.76974 7.00061 2.76674C7.04336 2.74524 7.06811 2.72499 7.07386 2.70674L7.10836 2.58674C7.19511 2.67024 7.31061 2.71274 7.45586 2.71474C7.46761 2.71474 7.48686 2.71424 7.51486 2.71274C7.39409 2.8136 7.24093 2.86741 7.08361 2.86424Z"
                            fill="#D0D2D3"
                          />
                          <path
                            d="M6.8744 3.41041C6.8759 3.42716 6.85415 3.44491 6.82615 3.45016C6.79865 3.45516 6.7749 3.44516 6.77415 3.42816L6.70515 2.30716C6.70365 2.29041 6.7259 2.27266 6.7534 2.26716C6.7809 2.26216 6.80465 2.27216 6.80515 2.28941L6.8744 3.41041Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M6.8249 3.41924L6.75565 2.29824C6.75465 2.28749 6.7639 2.27574 6.77865 2.26724C6.7703 2.26574 6.76175 2.26574 6.7534 2.26724C6.7259 2.27274 6.70365 2.29049 6.70515 2.30724L6.77415 3.42824C6.77515 3.44549 6.79865 3.45524 6.82615 3.45024C6.83475 3.44867 6.84308 3.44589 6.8509 3.44199C6.83615 3.43899 6.8254 3.43074 6.8249 3.41924Z"
                            fill="#939292"
                          />
                          <path
                            d="M7.50242 9.64183L7.59242 10.1506C7.59242 10.1506 7.38192 10.2923 7.37392 10.2913C7.36517 10.2903 6.89642 10.3111 6.89642 10.3111C6.89642 10.3111 6.33842 10.0433 6.32417 10.0301C6.30992 10.0166 6.20117 9.86358 6.20117 9.86358L6.62292 9.86058L7.08142 9.68483L7.23492 9.53833L7.43092 9.42358L7.50242 9.64183Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M7.97836 9.06005L7.96111 9.74555C7.96111 9.74555 7.80011 9.68305 7.77811 9.6763C7.75511 9.66955 7.51486 9.63005 7.51486 9.63005C7.51486 9.63005 7.32011 9.70855 7.31311 9.70805C7.30636 9.70705 7.26686 9.6478 7.26686 9.6478L7.16211 9.2613L7.16736 9.0728L7.36461 8.9383L7.62786 8.9353C7.62786 8.9353 7.83411 8.9738 7.85036 8.98655C7.86611 9.00005 7.97836 9.06005 7.97836 9.06005Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M5.9082 9.65884C6.10795 9.90209 6.32545 10.0828 6.5612 10.2026C6.79695 10.3223 7.04295 10.3763 7.29945 10.3631C7.4127 10.3578 7.5037 10.3351 7.5702 10.2966C7.6367 10.2568 7.6627 10.2108 7.64795 10.1578L7.52445 9.68384C7.6592 9.67659 7.7947 9.72284 7.93095 9.82184C7.93145 9.77609 7.93345 9.73084 7.93445 9.68584C7.78795 9.59109 7.64595 9.54559 7.50745 9.55309C7.41495 9.55759 7.34295 9.58584 7.29245 9.63934L7.21595 9.40009C7.20127 9.35495 7.18974 9.30884 7.18145 9.26209C7.1758 9.22587 7.17982 9.1888 7.19313 9.15464C7.20643 9.12048 7.22854 9.09045 7.2572 9.06759C7.3167 9.01509 7.39995 8.98609 7.5042 8.98109C7.6242 8.97584 7.77945 9.02334 7.96595 9.12509C7.96745 9.08234 7.96895 9.03909 7.97095 8.99559C7.8072 8.88784 7.6407 8.83784 7.47095 8.84609C7.35295 8.85234 7.25895 8.88784 7.18895 8.95434C7.1202 9.01884 7.09145 9.09909 7.10345 9.19284C7.10845 9.22609 7.1187 9.26784 7.13345 9.31809L7.18645 9.48734C7.00095 9.67834 6.75295 9.78284 6.4427 9.79734C6.25453 9.8089 6.06754 9.7604 5.9087 9.65884M7.5372 9.96984C7.52385 9.96296 7.51035 9.95638 7.4967 9.95009C7.4022 9.90484 7.35095 9.85909 7.3452 9.81309C7.33845 9.75859 7.3792 9.71884 7.4672 9.69334L7.5372 9.96984ZM6.3547 9.93134C6.4142 9.93234 6.45745 9.93234 6.4837 9.93134C6.7977 9.91584 7.0462 9.81359 7.22745 9.62609L7.31295 9.88309C7.3267 9.92334 7.38095 9.96584 7.47645 10.0101C7.4882 10.0153 7.50695 10.0251 7.53095 10.0366C7.54314 10.0485 7.55158 10.0637 7.5552 10.0803C7.56045 10.1246 7.54245 10.1591 7.50045 10.1831C7.4582 10.2078 7.3927 10.2226 7.30395 10.2266C6.9517 10.2443 6.6357 10.1458 6.3547 9.93134Z"
                            fill="#E5851C"
                          />
                          <path
                            d="M7.79689 11.3988C7.79589 11.4353 7.84314 11.4728 7.90414 11.4816C7.96514 11.4898 8.01539 11.4668 8.01639 11.4293L8.08039 8.98783C8.07939 8.95058 8.03164 8.91308 7.97114 8.90483C7.91114 8.89633 7.86039 8.91958 7.85989 8.95683L7.79689 11.3988Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M7.90731 11.4139L7.97081 8.9719C7.97081 8.94665 7.94981 8.92265 7.91731 8.9054C7.93555 8.90202 7.95422 8.90169 7.97256 8.9044C8.03306 8.91265 8.08081 8.95015 8.08181 8.9874L8.01781 11.4289C8.01681 11.4664 7.96656 11.4894 7.90556 11.4811C7.88669 11.4785 7.86842 11.4726 7.85156 11.4636C7.88381 11.4566 7.90731 11.4391 7.90731 11.4139Z"
                            fill="#939292"
                          />
                          <path
                            d="M14.3492 6.37218L14.4289 6.82143C14.4289 6.82143 14.2434 6.94643 14.2359 6.94543C14.2282 6.94443 13.8152 6.96268 13.8152 6.96268C13.8152 6.96268 13.3224 6.72693 13.3102 6.71468C13.2972 6.70343 13.2012 6.56818 13.2012 6.56818L13.5737 6.56568L13.9782 6.41118L14.1127 6.28118L14.2862 6.18018L14.3492 6.37218Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M14.7659 5.85951L14.7504 6.46426C14.7504 6.46426 14.6082 6.40926 14.5889 6.40326C14.5687 6.39701 14.3564 6.36251 14.3564 6.36251C14.3564 6.36251 14.1847 6.43176 14.1784 6.43126C14.1722 6.43026 14.1374 6.37826 14.1374 6.37826L14.0449 6.03726L14.0502 5.87076L14.2242 5.75226L14.4567 5.74976C14.4567 5.74976 14.6384 5.78376 14.6524 5.79451C14.6669 5.80626 14.7659 5.85951 14.7659 5.85951Z"
                            fill="#F7941E"
                          />
                          <path
                            d="M12.9414 6.38698C13.1177 6.60198 13.3097 6.76198 13.5174 6.86723C13.7254 6.97248 13.9424 7.01973 14.1684 7.00848C14.2689 7.00348 14.3487 6.98348 14.4067 6.94998C14.4662 6.91448 14.4894 6.87423 14.4764 6.82798L14.3672 6.40973C14.4864 6.40323 14.6052 6.44423 14.7259 6.53073C14.7264 6.49073 14.7274 6.45098 14.7284 6.41098C14.5994 6.32698 14.4739 6.28748 14.3519 6.29398C14.2699 6.29748 14.2069 6.32248 14.1619 6.37023L14.0944 6.15923C14.0816 6.11948 14.0716 6.07888 14.0644 6.03773C14.0597 6.0058 14.0633 5.97317 14.0749 5.94306C14.0866 5.91295 14.1059 5.88639 14.1309 5.86598C14.1842 5.81973 14.2569 5.79423 14.3489 5.78973C14.4554 5.78473 14.5917 5.82723 14.7559 5.91723C14.7579 5.87948 14.7589 5.84098 14.7609 5.80273C14.6164 5.70773 14.4697 5.66348 14.3189 5.67098C14.2152 5.67673 14.1319 5.70823 14.0704 5.76648C14.0413 5.79249 14.0191 5.82538 14.006 5.86215C13.9928 5.89892 13.9891 5.9384 13.9952 5.97698C13.9992 6.00598 14.0084 6.04298 14.0212 6.08723L14.0682 6.23648C13.9049 6.40523 13.6859 6.49673 13.4122 6.51048C13.2461 6.52021 13.0813 6.47696 12.9414 6.38698ZM14.3774 6.66148C14.3627 6.65373 14.3504 6.64823 14.3424 6.64423C14.2587 6.60448 14.2134 6.56398 14.2087 6.52373C14.2022 6.47548 14.2382 6.44023 14.3164 6.41748L14.3774 6.66148ZM13.3347 6.62798C13.3872 6.62848 13.4249 6.62848 13.4482 6.62798C13.7252 6.61423 13.9442 6.52373 14.1047 6.35823L14.1802 6.58548C14.1919 6.62048 14.2397 6.65798 14.3237 6.69723C14.3347 6.70173 14.3507 6.70948 14.3724 6.72048C14.3829 6.73101 14.3903 6.74425 14.3937 6.75873C14.3982 6.79823 14.3817 6.82873 14.3454 6.84973C14.3082 6.87098 14.2499 6.88423 14.1722 6.88773C13.8706 6.90667 13.5726 6.81424 13.3347 6.62798Z"
                            fill="#E5851C"
                          />
                          <path
                            d="M14.6094 7.92192C14.6079 7.95442 14.6499 7.98742 14.7037 7.99517C14.7577 8.00242 14.8017 7.98192 14.8027 7.94942L14.8587 5.79542C14.8587 5.76242 14.8164 5.72942 14.7632 5.72242C14.7102 5.71442 14.6652 5.73517 14.6647 5.76767L14.6094 7.92192Z"
                            fill="#A6A8AB"
                          />
                          <path
                            d="M14.706 7.93548L14.762 5.78148C14.762 5.75973 14.743 5.73823 14.7145 5.72298C14.7307 5.7198 14.7473 5.71963 14.7635 5.72248C14.8167 5.72923 14.859 5.76248 14.859 5.79548L14.803 7.94948C14.802 7.98198 14.758 8.00248 14.704 7.99523C14.6874 7.99265 14.6712 7.98742 14.6562 7.97973C14.6848 7.97373 14.7055 7.95773 14.706 7.93548Z"
                            fill="#939292"
                          />
                          <path
                            d="M11.5896 10.978L11.5371 10.52L12.3371 10.1448L12.3171 10.5775L11.5896 10.978Z"
                            fill="#D3E6ED"
                          />
                          <path
                            d="M11.5898 10.9779L13.0091 12.3132C13.3191 12.1433 13.6167 11.9516 13.8996 11.7397L12.3168 10.5769L11.5898 10.9779Z"
                            fill="#858985"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_10134_129029">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <span className="xs:text-lg text-base text-gray-900 font-medium mr-auto">
                    Stamford Bridge
                  </span>
                </div>
                <div className="bg-gray-200 rounded-lg flex justify-center items-center xs:px-5 px-2 py-2 flex-col w-full h-full">
                  <div className="flex gap-1 items-center justify-start mr-auto">
                    <span>Location</span>
                    <span className="w-5 h-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        viewBox="0 0 17 16"
                        fill="none"
                      >
                        <path
                          d="M12.1835 6.46887C12.1835 4.39887 10.5983 2.71509 8.64946 2.71509C6.70057 2.71509 5.11523 4.39887 5.11523 6.46975C5.1159 6.57309 5.16501 9.04953 7.99568 13.4131C8.05395 13.5327 8.14226 13.6352 8.25198 13.7106C8.3617 13.7859 8.48908 13.8315 8.62168 13.8429C9.03057 13.8429 9.30923 13.3926 9.33635 13.3469C12.185 8.98064 12.185 6.56731 12.1835 6.46887ZM8.64946 7.98064C8.33814 7.98064 8.03381 7.88832 7.77497 7.71536C7.51612 7.5424 7.31437 7.29656 7.19525 7.00894C7.07612 6.72131 7.04497 6.40482 7.10572 6.09949C7.16647 5.79416 7.3164 5.5137 7.53655 5.29358C7.7567 5.07346 8.03718 4.92357 8.34252 4.86286C8.64786 4.80215 8.96435 4.83335 9.25195 4.95252C9.53956 5.07169 9.78537 5.27347 9.9583 5.53234C10.1312 5.79121 10.2235 6.09555 10.2235 6.40687C10.223 6.82415 10.057 7.22421 9.76191 7.51925C9.46682 7.8143 9.06674 7.98023 8.64946 7.98064Z"
                          fill="#D22F27"
                        />
                        <path
                          d="M12.182 6.46887C12.182 4.39887 10.5968 2.71509 8.64795 2.71509C8.35779 2.71633 8.06904 2.75555 7.78906 2.83175C9.65462 2.93175 11.1446 4.5702 11.1446 6.5762C11.146 6.67464 11.146 9.08798 8.29728 13.454C8.25895 13.5166 8.21539 13.5758 8.16706 13.6311C8.2243 13.6953 8.29401 13.7472 8.37194 13.7837C8.44987 13.8201 8.53441 13.8403 8.6204 13.8431C9.02906 13.8431 9.30773 13.3926 9.33484 13.3469C12.1835 8.98064 12.1835 6.56731 12.182 6.46887Z"
                          fill="#EA5A47"
                        />
                        <path
                          d="M8.62168 13.8431C8.48906 13.8317 8.36166 13.7861 8.25194 13.7107C8.14222 13.6353 8.05392 13.5328 7.99568 13.4131C5.16501 9.04953 5.1159 6.57331 5.11523 6.46975C5.11523 4.39864 6.70057 2.71509 8.64946 2.71509C10.5983 2.71509 12.1835 4.39887 12.1835 6.46887C12.185 6.56753 12.185 8.98087 9.33635 13.3466C9.30923 13.3926 9.03034 13.8431 8.62168 13.8431Z"
                          stroke="black"
                          stroke-width="0.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.65017 7.98076C8.33885 7.98076 8.03453 7.88845 7.77568 7.71548C7.51683 7.54252 7.31509 7.29668 7.19597 7.00906C7.07684 6.72143 7.04568 6.40494 7.10643 6.09961C7.16718 5.79428 7.31712 5.51382 7.53727 5.2937C7.75742 5.07358 8.0379 4.92369 8.34324 4.86298C8.64858 4.80227 8.96506 4.83348 9.25267 4.95264C9.54028 5.07181 9.78609 5.27359 9.95901 5.53246C10.1319 5.79133 10.2242 6.09567 10.2242 6.40699C10.2237 6.82427 10.0577 7.22433 9.76263 7.51937C9.46754 7.81442 9.06746 7.98035 8.65017 7.98076Z"
                          stroke="black"
                          stroke-width="0.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <span className="xs:text-lg text-base text-gray-900 font-medium mr-auto">
                    London, England
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWagerMainPage;
