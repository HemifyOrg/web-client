import { categoriesList } from "@/utils";
import { APIEventType, EventType } from "@/utils/types";
import Image from "next/image";
import React from "react";
import UserComponent from "../components";
import { useRouter } from "next/router";

export const EventCardComponent = ({ event }: { event: EventType }) => {
  console.log(event);
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden divide-y-2">
      {/* header */}
      <div className="pb-2 px-3 pt-2 gap-4 flex items-center justify-between">
        <span className="w-7">
          {categoriesList.find((n) => n.name === event.category.toLowerCase())?.icon}
        </span>
        <div className="w-full justify-center">
          <div className="flex justify-center items-center gap-2">
            {event && event.homeTeam ? (
              <React.Fragment>
                {/* home */}
                <div className="flex gap-1">
                  <span className="font-medium text-sm">
                    {event.homeTeam.name}
                  </span>
                  <Image
                    width={25}
                    height={25}
                    alt=""
                    className="object-contain"
                    src={event.homeTeam.logo}
                  />
                </div>

                {/* vs */}
                <span className="font-semibold">VS</span>

                {/* away */}
                <div className="flex gap-1">
                  <Image
                    width={25}
                    height={25}
                    alt=""
                    className="object-contain"
                    src={event.awayTeam.logo}
                  />
                  <span className="font-medium text-sm">
                    {event.awayTeam.name}
                  </span>
                </div>
              </React.Fragment>
            ) : (
              // <span className="font-medium">{event.topic}</span>
              <></>
            )}
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex pt-4 pb-2 gap-5 flex-col w-full justify-center items-center">
        {/* wager info */}
        <div className="flex gap-1 justify-center items-center">
          {/* user content */}
          <UserComponent
            src={event.creator?.image}
            // username={event.creator?.username || "Anonymous"}
          />

          {/* wage */}
          <span className="flex justify-center items-center gap-1 pr-4">
            Put up a{" "}
            <span className="px-4 py-1 bg-lightGold rounded font-medium">
              ${event.stake}
            </span>{" "}
            Wager
          </span>
        </div>

        {/* wager challenge */}
        <div className="flex justify-between xs:gap-16 gap-8 p-2 rounded bg-lightGold">
          {/* <span className="font-medium">
          {event.prediction.option.name}
        </span>
        <span>{event.prediction.split(";")[1]}</span>
        <span className="font-semibold">
          {event.prediction.name}
        </span> */}
        </div>

        {/* challenge btn */}
        <button
          type="button"
          className="px-10 py-3 font-medium rounded-full bg-themeColor text-white"
        >
          Challenge
        </button>
        <div className="w-full flex font-medium text-xs px-4 text-gray-400 justify-between items-center">
          <span>Posted {event.timestamp}</span>
          <span>Expires in {event.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export const EventWagerCardComponent = ({ event }: { event: APIEventType }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-white rounded-lg divide-y-2">
      {/* header */}
      <div className="px-3 py-2 bg-white rounded-t-xl w-full shadow-sm flex justify-between gap-4 items-center">
        {/* match name */}
        <div className="flex gap-2 justify-start items-center">
          {event.league ? (
            <Image
              width={16}
              height={17}
              src={event.league.logo}
              alt={event.league.name}
              className="object-contain"
            />
          ) : (
            <span className="w-[16px] h-[17px]">
              {categoriesList.find((n) => n.name === event.category)?.icon}
            </span>
          )}
          {event.league ? (
            <span className="font-medium capitalize">
              {event.league.country} | {event.league.name.replace(/_/g, " ")}
            </span>
          ) : (
            <span className="font-medium capitalize">
              {event.category.replace(/_/g, " ")}
            </span>
          )}
        </div>
        {/* match signal */}
        <div className="flex gap-4"></div>
        <span className="w-5 h-5 hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.2174 3.65835V16.1584C13.2174 17.55 14.1674 18.3334 15.2091 18.3334C16.1591 18.3334 17.2008 17.675 17.2008 16.1584V3.75002C17.2008 2.46669 16.2508 1.66669 15.2091 1.66669C14.1674 1.66669 13.2174 2.55002 13.2174 3.65835ZM8.00911 10V16.1584C8.00911 17.5584 8.97578 18.3334 10.0008 18.3334C10.9508 18.3334 11.9924 17.675 11.9924 16.1584V10.0917C11.9924 8.80835 11.0424 8.00835 10.0008 8.00835C8.95911 8.00835 8.00911 8.89169 8.00911 10ZM4.79245 14.3584C5.89245 14.3584 6.78412 15.25 6.78412 16.3417C6.78412 16.8699 6.57428 17.3765 6.20077 17.75C5.82726 18.1235 5.32067 18.3334 4.79245 18.3334C4.26423 18.3334 3.75764 18.1235 3.38413 17.75C3.01062 17.3765 2.80078 16.8699 2.80078 16.3417C2.80078 15.25 3.69245 14.3584 4.79245 14.3584Z"
              fill="#A0A4A8"
            />
          </svg>
        </span>
      </div>

      {/* content */}
      <div className="flex pt-4 pb-2 gap-5 flex-col w-full justify-center items-center">
        {/* match team info */}
        <div className="px-2 sm:px-10 py-4 overflow-hidden relative w-full rounded-lg flex justify-between items-center">
          <div className="z-10 flex flex-col gap-2 items-center justify-center">
            <Image
              width={80}
              height={80}
              src={event.teams.home.logo}
              alt={event.teams.home.name}
              className="object-contain"
            />
            <span className="text-gray-800 font-semibold flex justify-center w-full items-center text-center">
              {event.teams.home.name}
            </span>
          </div>
          {/* vs */}
          <span className="text-gray-400 z-10 sm:text-2xl mx-2 flex flex-col gap-3 justify-center items-center font-medium">
            {/* format date to "22/11/20" */}
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "2-digit",
              })}
            </span>
            <span className="font-bold">16:23 {event.timezone}</span>
          </span>
          {/* away */}
          <div className="z-10 flex flex-col gap-2 items-center justify-center">
            <Image
              width={80}
              height={80}
              src={event.teams.away.logo}
              alt={event.teams.away.name}
              className="object-contain"
            />
            <span className="text-gray-800 font-semibold flex justify-center w-full items-center text-center">
              {event.teams.away.name}
            </span>
          </div>
        </div>

        {/* wager info & create btn */}
        <div className="flex flex-wrap w-full justify-center gap-2 mb-2 pl-4 pr-2 items-center">
          <button
            type="button"
            onClick={() =>
              router.push(`/product/wager/${event.category}/${event.id}/create`)
            }
            className="md:px-10 px-4 py-2 xs:py-3 font-medium rounded-full bg-themeColor text-white"
          >
            Create Wager
          </button>
        </div>
      </div>
    </div>
  );
};
