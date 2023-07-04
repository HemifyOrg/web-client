import { SwapType } from "@/utils/types";
import Link from "next/link";
import React from "react";

const SwapComponent = ({ swap }: { swap: SwapType }) => {
  return (
    <div className="px-5 py-3 flex gap-10 lg:bg-[#f7efdf] bg-white lg:shadow shadow-md rounded-lg items-center justify-between">
      {/* left */}
      <div className="flex gap-2 px-4 py-6 relative items-center justify-center">
        <figure
          style={{ backgroundImage: `url(${swap.user?.image})` }}
          className="bg-center bg-no-repeat w-6 h-6 rounded-sm bg-cover"
        />
        <span className="font-semibold">@{swap.user?.username}</span>
        <svg
          viewBox="0 0 16 16"
          className="absolute top-5 -right-1 w-4 h-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.34265 1.94378C5.93348 2.29247 5.42474 2.5032 4.88885 2.54596C3.6383 2.64575 2.64527 3.63879 2.54547 4.88934C2.50271 5.42523 2.29198 5.93397 1.94329 6.34314C1.12958 7.29798 1.12958 8.70235 1.94329 9.65718C2.29198 10.0664 2.50271 10.5751 2.54547 11.111C2.64527 12.3615 3.6383 13.3546 4.88885 13.4544C5.42474 13.4971 5.93348 13.7079 6.34265 14.0566C7.29749 14.8703 8.70186 14.8703 9.6567 14.0566C10.0659 13.7079 10.5746 13.4971 11.1105 13.4544C12.361 13.3546 13.3541 12.3615 13.4539 11.111C13.4966 10.5751 13.7074 10.0664 14.0561 9.65718C14.8698 8.70235 14.8698 7.29798 14.0561 6.34314C13.7074 5.93397 13.4966 5.42523 13.4539 4.88934C13.3541 3.63879 12.361 2.64575 11.1105 2.54596C10.5746 2.5032 10.0659 2.29247 9.6567 1.94378C8.70186 1.13007 7.29749 1.13007 6.34265 1.94378Z"
            fill="#D2B37D"
          />
          <path
            d="M5.99967 8.00016L7.33301 9.3335L10.333 6.3335M4.88885 2.54596C5.42474 2.5032 5.93348 2.29247 6.34265 1.94378C7.29749 1.13007 8.70186 1.13007 9.6567 1.94378C10.0659 2.29247 10.5746 2.5032 11.1105 2.54596C12.361 2.64575 13.3541 3.63879 13.4539 4.88934C13.4966 5.42523 13.7074 5.93397 14.0561 6.34314C14.8698 7.29798 14.8698 8.70235 14.0561 9.65718C13.7074 10.0664 13.4966 10.5751 13.4539 11.111C13.3541 12.3615 12.361 13.3546 11.1105 13.4544C10.5746 13.4971 10.0659 13.7079 9.6567 14.0566C8.70186 14.8703 7.29749 14.8703 6.34265 14.0566C5.93348 13.7079 5.42474 13.4971 4.88885 13.4544C3.6383 13.3546 2.64527 12.3615 2.54547 11.111C2.50271 10.5751 2.29198 10.0664 1.94329 9.65718C1.12958 8.70235 1.12958 7.29798 1.94329 6.34314C2.29198 5.93397 2.50271 5.42523 2.54547 4.88934C2.64527 3.63879 3.6383 2.64575 4.88885 2.54596Z"
            stroke="#2D4C82"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* center */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span>Trade</span> <strong>{swap?.trade}</strong>
          </div>
          <div className="flex gap-2 items-center">
            <span>Completion rate</span>{" "}
            <strong>{swap?.completionRate}%</strong>{" "}
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.6666V7.99989M7 5.33323H7.00667M1 5.29419V10.7056C1 10.934 1 11.0482 1.03366 11.1501C1.06343 11.2402 1.11211 11.3229 1.17642 11.3927C1.24912 11.4716 1.34897 11.5271 1.54865 11.638L6.48198 14.3788C6.67105 14.4838 6.76558 14.5363 6.8657 14.5569C6.95431 14.5751 7.04569 14.5751 7.1343 14.5569C7.23441 14.5363 7.32895 14.4838 7.51802 14.3788L12.4514 11.638C12.651 11.5271 12.7509 11.4716 12.8236 11.3927C12.8879 11.3229 12.9366 11.2402 12.9663 11.1501C13 11.0482 13 10.934 13 10.7056V5.29419C13 5.06576 13 4.95155 12.9663 4.84968C12.9366 4.75956 12.8879 4.67684 12.8236 4.60705C12.7509 4.52816 12.651 4.47269 12.4514 4.36176L7.51802 1.62101C7.32895 1.51598 7.23441 1.46346 7.1343 1.44287C7.04569 1.42464 6.95431 1.42464 6.8657 1.44287C6.76558 1.46346 6.67105 1.51598 6.48198 1.62101L1.54865 4.36176C1.34896 4.47269 1.24912 4.52816 1.17642 4.60705C1.11211 4.67684 1.06343 4.75956 1.03366 4.84968C1 4.95155 1 5.06576 1 5.29419Z"
                stroke="#D2B37D"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span>Offer</span>{" "}
            <Link href="#" className="text-gray-800 capitalize">
              {swap?.offer}
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <span>Available</span> <strong>{swap?.available}</strong>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <span>Preference</span>{" "}
            <Link href="#" className="text-gray-800 capitalize">
              {swap?.preference?.username}
            </Link>{" "}
            <span className="text-xl">+</span>
            <span>{swap?.preference?.value}</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>Negotiation</span> <strong>{swap?.negotiation}</strong>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col gap-4 justify-center items-center p-2">
        <button className="py-2 px-5 bg-btnImage transition-all duration-75 active:scale-75 text-lg rounded-2xl flex gap-2 items-center">
          <span className="text-gray-900 font-semibold">Swap</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.00033 4.99984L6.66699 3.33317M6.66699 3.33317L5.00033 1.6665M6.66699 3.33317H5.00033C3.15938 3.33317 1.66699 4.82555 1.66699 6.6665M15.0003 14.9998L13.3337 16.6665M13.3337 16.6665L15.0003 18.3332M13.3337 16.6665H15.0003C16.8413 16.6665 18.3337 15.1741 18.3337 13.3332M11.1813 11.1808C11.8332 11.4922 12.5631 11.6665 13.3337 11.6665C16.0951 11.6665 18.3337 9.42793 18.3337 6.6665C18.3337 3.90508 16.0951 1.6665 13.3337 1.6665C10.5722 1.6665 8.33366 3.90508 8.33366 6.6665C8.33366 7.4371 8.50798 8.16698 8.81935 8.81886M11.667 13.3332C11.667 16.0946 9.42842 18.3332 6.66699 18.3332C3.90557 18.3332 1.66699 16.0946 1.66699 13.3332C1.66699 10.5717 3.90557 8.33317 6.66699 8.33317C9.42842 8.33317 11.667 10.5717 11.667 13.3332Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex gap-2 justify-center mt-2 items-center">
          <span className="font-semibold">Fee</span>
          <span className="font-semibold text-themeColor">{swap?.fee}%</span>
        </div>
      </div>
    </div>
  );
};

export default SwapComponent;
