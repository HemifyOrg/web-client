import { MatchType } from "@/utils/types";
import Image from "next/image";
import React from "react";

export const MatchCardComponet = ({ match }: { match: MatchType }) => {
  return (
    <div className="p-2 rounded-lg w-full bg-white flex flex-col gap-4">
      {/* verus */}
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          <figure className="rounded-lg bg-black overflow-hidden">
            <Image
              width={40}
              height={40}
              src={match.home.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>
          <span className="text-lg font-medium capitalize">
            {match.home.name}
          </span>
        </div>
        <div className="flex items-center gap-2 mx-2">
          <span className="text-lg font-medium uppercase">VS</span>
        </div>
        <div className="flex items-center gap-2">
          <figure className="rounded-lg bg-black overflow-hidden">
            <Image
              width={40}
              height={40}
              src={match.away.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </figure>
          <span className="text-lg font-medium capitalize">
            {match.away.name}
          </span>
        </div>
      </div>
      {/* odds */}
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center justify-between gap-4 px-1 py-[1px] bg-darkGold rounded-lg">
          <span className="text-base text-gold font-medium">1</span>
          <span className="text-base text-gold font-medium">1.5</span>
        </div>
        <div className="flex items-center justify-between gap-4 px-1 py-[1px] bg-darkGold rounded-lg mx-2">
          <span className="text-base text-gold font-medium">X</span>
          <span className="text-base text-gold font-medium">2.5</span>
        </div>
        <div className="flex items-center justify-between gap-4 px-1 py-[1px] bg-darkGold rounded-lg">
          <span className="text-base text-gold font-medium">2</span>
          <span className="text-base text-gold font-medium">3.5</span>
        </div>
      </div>

      {/* match info */}
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          {/* match staus */}
          <div className="px-2 py-1 gap-2 rounded-lg flex items-center bg-statusBg">
            <span className="text-sm text-gray-100 font-semibold">Ongoing</span>
            <svg
              width="10"
              height="10h"
              viewBox="0 0 7 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3.125"
                cy="3.66211"
                r="3.125"
                fill="#07CA1A"
                fill-opacity="0.2"
              />
              <circle cx="3.125" cy="3.66211" r="1.5625" fill="#07CA1A" />
            </svg>
          </div>
          {/* match time */}
          <span className="text-sm text-gray-800 font-normal">
            1 Day 2hrs 16 mins
          </span>
        </div>
        {/* view all */}
        <div className="flex items-center justify-end gap-2 cursor-pointer">
          <span className="text-base text-themeColor">View all</span>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5"
              stroke="#D2B37D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
