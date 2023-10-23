import React from "react";
import "@/styles/globals.css";

const ongoingMatches = () => {
  return (
    <section className="mt-[6rem] bg-[#25282B] pt-[1rem] pb-[2rem]">
      {/*BETTING SCORE CARD*/}
      <div className="w-[80%] bg-[#FFF] flex justify-between m-auto rounded-lg p-[0.5rem]">
        <div className="ml-[.4rem]">
          <img src={"/images/assets/Chelsea.png"} alt="chelsea's Logo" />
          <p className="text-[0.975rem] text-[#353535] font-bold leading-5 mt-[0.5rem] mb-[1rem]">
            Chelsea
          </p>
          <div className="flex">
            <p className="flex h-[100%] mr-[0.38rem]">
              <img src={"/images/assets/yellowCard.png"} alt="yellow card" />
              <span className="text-[.9rem] font-semibold text-[#353535]">
                5
              </span>
            </p>

            <p className="flex h-[100%]">
              <img src={"/images/assets/redCard.png"} alt="yellow card" />
              <span className="text-[.9rem] font-semibold text-[#353535]">
                0
              </span>
            </p>
          </div>
        </div>
        <div className="rounded w-[30%]">
          <div className="flex w-[100%] justify-between">
            <p className="h-[1.5rem] px-[0.45rem] bg-[#FFDE59] text-[#000] font-bold">
              3
            </p>
            <p className="text-[#52575C] font-bold leading-4">45"</p>
            <p className="h-[1.5rem] px-[0.45rem] bg-[#FFDE59] text-[#000] font-bold">
              1
            </p>
          </div>

          <div className="flex justify-between mt-[1rem]">
            <p className="text-[#353535] leading-4 font-normal">54%</p>
            <p className="text-[#353535] leading-4 font-normal">46%</p>
          </div>
        </div>
        <div className="mr-[.4rem] ">
          <img src={"/images/assets/RMadrid.png"} alt="Real Madrid's Logo" />
          <p className="text-[0.975rem] text-[#353535] font-bold leading-5 mt-[0.5rem] mb-[1rem]">
            Real Madrid
          </p>
          <div className="flex">
            <p className="flex h-[100%] mr-[0.38rem]">
              <img src={"/images/assets/yellowCard.png"} alt="yellow card" />
              <span className="text-[.9rem] font-semibold text-[#353535]">
                5
              </span>
            </p>

            <p className="flex h-[100%]">
              <img src={"/images/assets/redCard.png"} alt="yellow card" />
              <span className="text-[.9rem] font-semibold text-[#353535]">
                0
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*  Category Tab */}
      <div className="overflow-x-auto w-[80%] hide-scrollbar bg-[#000] m-auto p-[0.2rem] mt-[2.28rem] rounded-[2rem]">
        <div className="flex flex-nowrap">
          <div className=" h-[50%] px-[1.65925rem] py-[0.5185rem] bg-themeColor rounded-[1.5rem] text-[#FFF] font-medium text-[0.925rem] m-2">
            Favourite
          </div>
          <div className=" h-[50%] px-[1.65925rem] py-[0.5185rem] bg-[#FFF] rounded-[1.5rem] font-medium text-[0.925rem] m-2 cursor-pointer hover:bg-themeColor hover:text-[#fff]">
            Winner
          </div>
          {/* i don;t know what's wrong with this div */}
          {/* <div className='h-[50%] px-[1.65925rem] text-center min-w-full py-[0.5185rem] bg-themeColor rounded-[1.5rem]'>Both teams to score</div> */}
          <div className="h-[50%] px-[1.65925rem] py-[0.5185rem] bg-[#FFF] rounded-[1.5rem] font-medium text-[0.925rem] m-2 cursor-pointer hover:bg-themeColor hover:text-[#fff]">
            Over/Under
          </div>
          <div className="h-[50%] px-[1.65925rem] py-[0.5185rem] bg-[#FFF] rounded-[1.5rem] font-medium text-[0.925rem] m-2 cursor-pointer hover:bg-themeColor hover:text-[#fff]">
            Home/Away
          </div>
          <div className="h-[50%] px-[1.65925rem] py-[0.5185rem] bg-[#FFF] rounded-[1.5rem] font-medium text-[0.925rem] m-2 cursor-pointer hover:bg-themeColor hover:text-[#fff]">
            saved_games
          </div>
          <div className="h-[50%] px-[1.65925rem] py-[0.5185rem] bg-[#FFF] rounded-[1.5rem] font-medium text-[0.925rem] m-2 cursor-pointer hover:bg-themeColor hover:text-[#fff]">
            Starred
          </div>
        </div>
      </div>

      {/*  PREDICTION TABSs */}
      <div className=" w-[80%] mt-[3rem] m-auto rounded-[0.5rem]">
        <div className="flex justify-end mb-[1rem]">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity="0.6">
              <path
                d="M7 13L12 18L17 13M7 6L12 11L17 6"
                stroke="#FAF7F0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* cards */}
        <div className="flex justify-between bg-[#000] p-[1rem] rounded-t-sm">
          {/* top div */}
          <div className="flex">
            <p className="flex text-[#CBCDCF]">
              <span>Winner</span>{" "}
              <svg
                className="cursor-pointer mt-[.2rem] ml-[0.28rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 10 10"
                fill="none"
              >
                <g clipPath="url(#clip0_9221_29760)">
                  <path
                    d="M5 6.6669V5.00024M5 3.33357H5.00417M1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.5929 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67993 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67993 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.94779 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917Z"
                    stroke="#FEEA98"
                    strokeWidth="1.26316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9221_29760">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
          <div className="flex">
            <svg
              className="mr-[1rem] mt-[.2rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.53698 2.13795C7.68864 1.87405 7.76446 1.7421 7.86358 1.69787C7.95002 1.6593 8.04878 1.6593 8.13523 1.69787C8.23434 1.7421 8.31016 1.87405 8.46182 2.13795L9.76526 4.40617C9.8214 4.50386 9.84947 4.55271 9.88883 4.58821C9.92366 4.61961 9.96472 4.64332 10.0093 4.65777C10.0597 4.67411 10.1161 4.674 10.2288 4.67377L12.8448 4.66848C13.1492 4.66786 13.3014 4.66755 13.3892 4.73128C13.4659 4.78685 13.5152 4.87238 13.5251 4.96653C13.5363 5.07448 13.46 5.20612 13.3072 5.46941L11.9946 7.73233C11.9381 7.8298 11.9098 7.87853 11.8988 7.93037C11.889 7.97623 11.889 8.02364 11.8988 8.0695C11.9098 8.12134 11.9381 8.17007 11.9946 8.26753L13.3072 10.5305C13.46 10.7937 13.5363 10.9254 13.5251 11.0333C13.5152 11.1275 13.4659 11.213 13.3892 11.2686C13.3014 11.3323 13.1492 11.332 12.8448 11.3314L10.2288 11.3261C10.1161 11.3259 10.0597 11.3258 10.0093 11.3421C9.96472 11.3565 9.92366 11.3803 9.88883 11.4117C9.84947 11.4472 9.8214 11.496 9.76526 11.5937L8.46182 13.8619C8.31016 14.1258 8.23434 14.2578 8.13523 14.302C8.04878 14.3406 7.95002 14.3406 7.86358 14.302C7.76446 14.2578 7.68864 14.1258 7.53698 13.8619L6.23354 11.5937C6.1774 11.496 6.14933 11.4472 6.10997 11.4117C6.07515 11.3803 6.03409 11.3565 5.98947 11.3421C5.93905 11.3258 5.88272 11.3259 5.77004 11.3261L3.15399 11.3314C2.84961 11.332 2.69742 11.3323 2.60957 11.2686C2.53294 11.213 2.48356 11.1275 2.47374 11.0333C2.46249 10.9254 2.53885 10.7937 2.69157 10.5305L4.00418 8.26753C4.06071 8.17007 4.08898 8.12134 4.10004 8.0695C4.10983 8.02364 4.10983 7.97623 4.10004 7.93037C4.08898 7.87853 4.06071 7.8298 4.00418 7.73233L2.69157 5.46941C2.53885 5.20612 2.46249 5.07448 2.47374 4.96653C2.48356 4.87238 2.53294 4.78685 2.60957 4.73128C2.69742 4.66755 2.84961 4.66786 3.15399 4.66848L5.77004 4.67377C5.88272 4.674 5.93905 4.67411 5.98947 4.65777C6.03409 4.64332 6.07515 4.61961 6.10997 4.58821C6.14933 4.55271 6.1774 4.50386 6.23354 4.40617L7.53698 2.13795Z"
                stroke="#CBCDCF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="mt-[.1rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12 10L8 6L4 10"
                stroke="#CBCDCF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* buttons - odds */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          <div className="block bg-[#CBCDCF] w-[32%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer">
            2
          </div>
          <div className="block bg-[#CBCDCF] w-[32%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer">
            2
          </div>
          <div className="block bg-[#CBCDCF] w-[32%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer">
            2
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------- */}
      <div className=" w-[80%] mt-[.8rem] m-auto rounded-[0.5rem]">
        {/* cards */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          {/* top div */}
          <div className="flex">
            <p className="flex text-[#CBCDCF]">
              <span>Both team scores</span>{" "}
              <svg
                className="cursor-pointer mt-[.2rem] ml-[0.28rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 10 10"
                fill="none"
              >
                <g clipPath="url(#clip0_9221_29760)">
                  <path
                    d="M5 6.6669V5.00024M5 3.33357H5.00417M1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.5929 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67993 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67993 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.94779 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917Z"
                    stroke="#FEEA98"
                    strokeWidth="1.26316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9221_29760">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
          <div className="flex">
            <svg
              className="mr-[1rem] mt-[.2rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.53698 2.13795C7.68864 1.87405 7.76446 1.7421 7.86358 1.69787C7.95002 1.6593 8.04878 1.6593 8.13523 1.69787C8.23434 1.7421 8.31016 1.87405 8.46182 2.13795L9.76526 4.40617C9.8214 4.50386 9.84947 4.55271 9.88883 4.58821C9.92366 4.61961 9.96472 4.64332 10.0093 4.65777C10.0597 4.67411 10.1161 4.674 10.2288 4.67377L12.8448 4.66848C13.1492 4.66786 13.3014 4.66755 13.3892 4.73128C13.4659 4.78685 13.5152 4.87238 13.5251 4.96653C13.5363 5.07448 13.46 5.20612 13.3072 5.46941L11.9946 7.73233C11.9381 7.8298 11.9098 7.87853 11.8988 7.93037C11.889 7.97623 11.889 8.02364 11.8988 8.0695C11.9098 8.12134 11.9381 8.17007 11.9946 8.26753L13.3072 10.5305C13.46 10.7937 13.5363 10.9254 13.5251 11.0333C13.5152 11.1275 13.4659 11.213 13.3892 11.2686C13.3014 11.3323 13.1492 11.332 12.8448 11.3314L10.2288 11.3261C10.1161 11.3259 10.0597 11.3258 10.0093 11.3421C9.96472 11.3565 9.92366 11.3803 9.88883 11.4117C9.84947 11.4472 9.8214 11.496 9.76526 11.5937L8.46182 13.8619C8.31016 14.1258 8.23434 14.2578 8.13523 14.302C8.04878 14.3406 7.95002 14.3406 7.86358 14.302C7.76446 14.2578 7.68864 14.1258 7.53698 13.8619L6.23354 11.5937C6.1774 11.496 6.14933 11.4472 6.10997 11.4117C6.07515 11.3803 6.03409 11.3565 5.98947 11.3421C5.93905 11.3258 5.88272 11.3259 5.77004 11.3261L3.15399 11.3314C2.84961 11.332 2.69742 11.3323 2.60957 11.2686C2.53294 11.213 2.48356 11.1275 2.47374 11.0333C2.46249 10.9254 2.53885 10.7937 2.69157 10.5305L4.00418 8.26753C4.06071 8.17007 4.08898 8.12134 4.10004 8.0695C4.10983 8.02364 4.10983 7.97623 4.10004 7.93037C4.08898 7.87853 4.06071 7.8298 4.00418 7.73233L2.69157 5.46941C2.53885 5.20612 2.46249 5.07448 2.47374 4.96653C2.48356 4.87238 2.53294 4.78685 2.60957 4.73128C2.69742 4.66755 2.84961 4.66786 3.15399 4.66848L5.77004 4.67377C5.88272 4.674 5.93905 4.67411 5.98947 4.65777C6.03409 4.64332 6.07515 4.61961 6.10997 4.58821C6.14933 4.55271 6.1774 4.50386 6.23354 4.40617L7.53698 2.13795Z"
                stroke="#CBCDCF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="mt-[.1rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12 10L8 6L4 10"
                stroke="#CBCDCF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* buttons - odds */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          <div className="block hover:bg-themeColor hover:text-[#fff] bg-[#CBCDCF] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            Yes
          </div>
          <div className="block hover:bg-themeColor hover:text-[#fff] bg-[#CBCDCF] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            No
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------- */}
      <div className=" w-[80%] mt-[.8rem] m-auto rounded-[0.5rem]">
        {/* cards */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          {/* top div */}
          <div className="flex">
            <p className="flex text-[#CBCDCF]">
              <span>Over 1.5 goals</span>{" "}
              <svg
                className="cursor-pointer mt-[.2rem] ml-[0.28rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 10 10"
                fill="none"
              >
                <g clipPath="url(#clip0_9221_29760)">
                  <path
                    d="M5 6.6669V5.00024M5 3.33357H5.00417M1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.5929 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67993 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67993 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.94779 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917Z"
                    stroke="#FEEA98"
                    strokeWidth="1.26316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9221_29760">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
          <div className="flex">
            <svg
              className="mr-[1rem] mt-[.2rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.53698 2.13795C7.68864 1.87405 7.76446 1.7421 7.86358 1.69787C7.95002 1.6593 8.04878 1.6593 8.13523 1.69787C8.23434 1.7421 8.31016 1.87405 8.46182 2.13795L9.76526 4.40617C9.8214 4.50386 9.84947 4.55271 9.88883 4.58821C9.92366 4.61961 9.96472 4.64332 10.0093 4.65777C10.0597 4.67411 10.1161 4.674 10.2288 4.67377L12.8448 4.66848C13.1492 4.66786 13.3014 4.66755 13.3892 4.73128C13.4659 4.78685 13.5152 4.87238 13.5251 4.96653C13.5363 5.07448 13.46 5.20612 13.3072 5.46941L11.9946 7.73233C11.9381 7.8298 11.9098 7.87853 11.8988 7.93037C11.889 7.97623 11.889 8.02364 11.8988 8.0695C11.9098 8.12134 11.9381 8.17007 11.9946 8.26753L13.3072 10.5305C13.46 10.7937 13.5363 10.9254 13.5251 11.0333C13.5152 11.1275 13.4659 11.213 13.3892 11.2686C13.3014 11.3323 13.1492 11.332 12.8448 11.3314L10.2288 11.3261C10.1161 11.3259 10.0597 11.3258 10.0093 11.3421C9.96472 11.3565 9.92366 11.3803 9.88883 11.4117C9.84947 11.4472 9.8214 11.496 9.76526 11.5937L8.46182 13.8619C8.31016 14.1258 8.23434 14.2578 8.13523 14.302C8.04878 14.3406 7.95002 14.3406 7.86358 14.302C7.76446 14.2578 7.68864 14.1258 7.53698 13.8619L6.23354 11.5937C6.1774 11.496 6.14933 11.4472 6.10997 11.4117C6.07515 11.3803 6.03409 11.3565 5.98947 11.3421C5.93905 11.3258 5.88272 11.3259 5.77004 11.3261L3.15399 11.3314C2.84961 11.332 2.69742 11.3323 2.60957 11.2686C2.53294 11.213 2.48356 11.1275 2.47374 11.0333C2.46249 10.9254 2.53885 10.7937 2.69157 10.5305L4.00418 8.26753C4.06071 8.17007 4.08898 8.12134 4.10004 8.0695C4.10983 8.02364 4.10983 7.97623 4.10004 7.93037C4.08898 7.87853 4.06071 7.8298 4.00418 7.73233L2.69157 5.46941C2.53885 5.20612 2.46249 5.07448 2.47374 4.96653C2.48356 4.87238 2.53294 4.78685 2.60957 4.73128C2.69742 4.66755 2.84961 4.66786 3.15399 4.66848L5.77004 4.67377C5.88272 4.674 5.93905 4.67411 5.98947 4.65777C6.03409 4.64332 6.07515 4.61961 6.10997 4.58821C6.14933 4.55271 6.1774 4.50386 6.23354 4.40617L7.53698 2.13795Z"
                stroke="#CBCDCF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="mt-[.1rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12 10L8 6L4 10"
                stroke="#CBCDCF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* buttons - odds */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          <div className="block hover:bg-themeColor bg-[#CBCDCF] hover:text-[#fff] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            Yes
          </div>
          <div className="block hover:bg-themeColor bg-[#CBCDCF] hover:text-[#fff] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            No
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------- */}
      <div className=" w-[80%] mt-[.8rem] m-auto rounded-[0.5rem]">
        {/* cards */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          {/* top div */}
          <div className="flex">
            <p className="flex text-[#CBCDCF]">
              <span>Over 2.5 goals</span>{" "}
              <svg
                className="cursor-pointer mt-[.2rem] ml-[0.28rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 10 10"
                fill="none"
              >
                <g clipPath="url(#clip0_9221_29760)">
                  <path
                    d="M5 6.6669V5.00024M5 3.33357H5.00417M1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.5929 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67993 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67993 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.94779 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917Z"
                    stroke="#FEEA98"
                    strokeWidth="1.26316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9221_29760">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
          <div className="flex">
            <svg
              className="mr-[1rem] mt-[.2rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.53698 2.13795C7.68864 1.87405 7.76446 1.7421 7.86358 1.69787C7.95002 1.6593 8.04878 1.6593 8.13523 1.69787C8.23434 1.7421 8.31016 1.87405 8.46182 2.13795L9.76526 4.40617C9.8214 4.50386 9.84947 4.55271 9.88883 4.58821C9.92366 4.61961 9.96472 4.64332 10.0093 4.65777C10.0597 4.67411 10.1161 4.674 10.2288 4.67377L12.8448 4.66848C13.1492 4.66786 13.3014 4.66755 13.3892 4.73128C13.4659 4.78685 13.5152 4.87238 13.5251 4.96653C13.5363 5.07448 13.46 5.20612 13.3072 5.46941L11.9946 7.73233C11.9381 7.8298 11.9098 7.87853 11.8988 7.93037C11.889 7.97623 11.889 8.02364 11.8988 8.0695C11.9098 8.12134 11.9381 8.17007 11.9946 8.26753L13.3072 10.5305C13.46 10.7937 13.5363 10.9254 13.5251 11.0333C13.5152 11.1275 13.4659 11.213 13.3892 11.2686C13.3014 11.3323 13.1492 11.332 12.8448 11.3314L10.2288 11.3261C10.1161 11.3259 10.0597 11.3258 10.0093 11.3421C9.96472 11.3565 9.92366 11.3803 9.88883 11.4117C9.84947 11.4472 9.8214 11.496 9.76526 11.5937L8.46182 13.8619C8.31016 14.1258 8.23434 14.2578 8.13523 14.302C8.04878 14.3406 7.95002 14.3406 7.86358 14.302C7.76446 14.2578 7.68864 14.1258 7.53698 13.8619L6.23354 11.5937C6.1774 11.496 6.14933 11.4472 6.10997 11.4117C6.07515 11.3803 6.03409 11.3565 5.98947 11.3421C5.93905 11.3258 5.88272 11.3259 5.77004 11.3261L3.15399 11.3314C2.84961 11.332 2.69742 11.3323 2.60957 11.2686C2.53294 11.213 2.48356 11.1275 2.47374 11.0333C2.46249 10.9254 2.53885 10.7937 2.69157 10.5305L4.00418 8.26753C4.06071 8.17007 4.08898 8.12134 4.10004 8.0695C4.10983 8.02364 4.10983 7.97623 4.10004 7.93037C4.08898 7.87853 4.06071 7.8298 4.00418 7.73233L2.69157 5.46941C2.53885 5.20612 2.46249 5.07448 2.47374 4.96653C2.48356 4.87238 2.53294 4.78685 2.60957 4.73128C2.69742 4.66755 2.84961 4.66786 3.15399 4.66848L5.77004 4.67377C5.88272 4.674 5.93905 4.67411 5.98947 4.65777C6.03409 4.64332 6.07515 4.61961 6.10997 4.58821C6.14933 4.55271 6.1774 4.50386 6.23354 4.40617L7.53698 2.13795Z"
                stroke="#CBCDCF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="mt-[.1rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12 10L8 6L4 10"
                stroke="#CBCDCF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* buttons - odds */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          <div className="block hover:bg-themeColor bg-[#CBCDCF] hover:text-[#fff] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            Yes
          </div>
          <div className="block hover:bg-themeColor bg-[#CBCDCF] hover:text-[#fff] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            No
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------------- */}
      <div className=" w-[80%] mt-[.8rem] m-auto rounded-[0.5rem]">
        {/* cards */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          {/* top div */}
          <div className="flex">
            <p className="flex text-[#CBCDCF]">
              <span>Over 5.5 corners</span>{" "}
              <svg
                className="cursor-pointer mt-[.2rem] ml-[0.28rem]"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 10 10"
                fill="none"
              >
                <g clipPath="url(#clip0_9221_29760)">
                  <path
                    d="M5 6.6669V5.00024M5 3.33357H5.00417M1.25 3.30917V6.6913C1.25 6.83407 1.25 6.90545 1.27104 6.96912C1.28964 7.02544 1.32007 7.07715 1.36026 7.12077C1.4057 7.17007 1.4681 7.20474 1.5929 7.27407L4.67624 8.98704C4.79441 9.05269 4.85349 9.08551 4.91606 9.09838C4.97144 9.10977 5.02856 9.10977 5.08394 9.09838C5.14651 9.08551 5.20559 9.05269 5.32376 8.98704L8.4071 7.27407C8.5319 7.20474 8.5943 7.17007 8.63974 7.12077C8.67993 7.07715 8.71036 7.02544 8.72897 6.96912C8.75 6.90545 8.75 6.83407 8.75 6.6913V3.30917C8.75 3.16641 8.75 3.09502 8.72897 3.03136C8.71036 2.97503 8.67993 2.92333 8.63974 2.87971C8.5943 2.8304 8.5319 2.79574 8.4071 2.7264L5.32376 1.01344C5.20559 0.94779 5.14651 0.914966 5.08394 0.902097C5.02856 0.890707 4.97144 0.890707 4.91606 0.902097C4.85349 0.914966 4.79441 0.94779 4.67624 1.01344L1.5929 2.7264C1.4681 2.79574 1.4057 2.8304 1.36026 2.87971C1.32007 2.92333 1.28964 2.97503 1.27104 3.03136C1.25 3.09502 1.25 3.16641 1.25 3.30917Z"
                    stroke="#FEEA98"
                    strokeWidth="1.26316"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9221_29760">
                    <rect width="10" height="10" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </div>
          <div className="flex">
            <svg
              className="mr-[1rem] mt-[.2rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.53698 2.13795C7.68864 1.87405 7.76446 1.7421 7.86358 1.69787C7.95002 1.6593 8.04878 1.6593 8.13523 1.69787C8.23434 1.7421 8.31016 1.87405 8.46182 2.13795L9.76526 4.40617C9.8214 4.50386 9.84947 4.55271 9.88883 4.58821C9.92366 4.61961 9.96472 4.64332 10.0093 4.65777C10.0597 4.67411 10.1161 4.674 10.2288 4.67377L12.8448 4.66848C13.1492 4.66786 13.3014 4.66755 13.3892 4.73128C13.4659 4.78685 13.5152 4.87238 13.5251 4.96653C13.5363 5.07448 13.46 5.20612 13.3072 5.46941L11.9946 7.73233C11.9381 7.8298 11.9098 7.87853 11.8988 7.93037C11.889 7.97623 11.889 8.02364 11.8988 8.0695C11.9098 8.12134 11.9381 8.17007 11.9946 8.26753L13.3072 10.5305C13.46 10.7937 13.5363 10.9254 13.5251 11.0333C13.5152 11.1275 13.4659 11.213 13.3892 11.2686C13.3014 11.3323 13.1492 11.332 12.8448 11.3314L10.2288 11.3261C10.1161 11.3259 10.0597 11.3258 10.0093 11.3421C9.96472 11.3565 9.92366 11.3803 9.88883 11.4117C9.84947 11.4472 9.8214 11.496 9.76526 11.5937L8.46182 13.8619C8.31016 14.1258 8.23434 14.2578 8.13523 14.302C8.04878 14.3406 7.95002 14.3406 7.86358 14.302C7.76446 14.2578 7.68864 14.1258 7.53698 13.8619L6.23354 11.5937C6.1774 11.496 6.14933 11.4472 6.10997 11.4117C6.07515 11.3803 6.03409 11.3565 5.98947 11.3421C5.93905 11.3258 5.88272 11.3259 5.77004 11.3261L3.15399 11.3314C2.84961 11.332 2.69742 11.3323 2.60957 11.2686C2.53294 11.213 2.48356 11.1275 2.47374 11.0333C2.46249 10.9254 2.53885 10.7937 2.69157 10.5305L4.00418 8.26753C4.06071 8.17007 4.08898 8.12134 4.10004 8.0695C4.10983 8.02364 4.10983 7.97623 4.10004 7.93037C4.08898 7.87853 4.06071 7.8298 4.00418 7.73233L2.69157 5.46941C2.53885 5.20612 2.46249 5.07448 2.47374 4.96653C2.48356 4.87238 2.53294 4.78685 2.60957 4.73128C2.69742 4.66755 2.84961 4.66786 3.15399 4.66848L5.77004 4.67377C5.88272 4.674 5.93905 4.67411 5.98947 4.65777C6.03409 4.64332 6.07515 4.61961 6.10997 4.58821C6.14933 4.55271 6.1774 4.50386 6.23354 4.40617L7.53698 2.13795Z"
                stroke="#CBCDCF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className="mt-[.1rem] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12 10L8 6L4 10"
                stroke="#CBCDCF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* buttons - odds */}
        <div className="flex justify-between bg-[#000] p-[1rem]">
          <div className="block hover:bg-themeColor bg-[#CBCDCF] hover:text-[#fff] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            Yes
          </div>
          <div className="block hover:bg-themeColor bg-[#CBCDCF] hover:text-[#fff] w-[48%] h-[2.75rem] pt-[.7rem] text-center rounded-[0.25rem] cursor-pointer font-medium">
            No
          </div>
        </div>
      </div>
    </section>
  );
};

export default ongoingMatches;