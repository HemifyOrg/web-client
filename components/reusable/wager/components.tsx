import { MatchLeagueIcon, sportsList } from "@/utils";
import { EventType, WagerType } from "@/utils/types";
import Image from "next/image";
import React from "react";
import UserComponent from "../components";

export const WagerCardComponent = ({ wager }: { wager: WagerType }) => {
  return wager.prediction &&
    typeof wager.prediction === "string" &&
    wager.prediction.split(";")?.length === 3 ? (
    <div className="w-full bg-white rounded-lg divide-y-2">
      {/* header */}
      <div className="pb-2 pl-2  pt-1 gap-4 flex items-center justify-between">
        <span className="w-8">
          {sportsList.find((n) => n.name === wager.event?.sport.name)?.icon}
        </span>
        <div className="w-full justify-center">
          <div className="flex justify-center items-center gap-2">
            {wager.event && wager.event.sport.league ? (
              <React.Fragment>
                {/* home */}
                <div className="flex gap-1">
                  <span className="font-medium text-sm">
                    {wager.event.home.name}
                  </span>
                  <Image
                    width={25}
                    height={25}
                    alt=""
                    className="object-contain"
                    src={wager.event.home.image}
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
                    src={wager.event.away.image}
                  />
                  <span className="font-medium text-sm">
                    {wager.event.away.name}
                  </span>
                </div>
              </React.Fragment>
            ) : (
              <span className="font-medium">{wager.topic}</span>
            )}
          </div>
        </div>
      </div>

      {/* content */}
      <div className="flex pt-4 pb-2 gap-5 flex-col w-full justify-center items-center">
        {/* wager info */}
        <div className="flex gap-4 justify-center items-center">
          {/* user content */}
          <UserComponent
            src={wager.creator.image}
            username={wager.creator.username}
          />

          {/* wage */}
          <span>
            Put up a{" "}
            <span className="px-4 py-1 bg-lightGold rounded font-medium">
              ${wager.currentStake}
            </span>{" "}
            Wager
          </span>
        </div>

        {/* wager challenge */}
        <div className="flex justify-between xs:gap-16 gap-8 p-2 rounded bg-lightGold">
          <span className="font-medium">{wager.prediction.split(";")[0]}</span>
          <span>{wager.prediction.split(";")[1]}</span>
          <span className="font-semibold">
            {wager.prediction.split(";")[2]}
          </span>
        </div>

        {/* challenge btn */}
        <button
          type="button"
          className="px-10 py-3 font-medium rounded-full bg-darkGold text-white"
        >
          Challenge
        </button>
        <div className="w-full flex font-medium text-xs px-2 text-gray-400 justify-between items-center">
          <span>Posted {wager.date.start}</span>
          <span>Expires in {wager.date.end}</span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export const SportEventWagerCardComponent = ({
  event,
}: {
  event: EventType;
}) => {
  return (
    <div className="w-full bg-white rounded-lg divide-y-2">
      {/* header */}
      <div className="px-3 py-2 bg-white rounded-t-xl w-full shadow-sm flex justify-between gap-4 items-center">
        {/* match name */}
        <div className="flex gap-2 justify-start items-center">
          {event.sport.league ? (
            <MatchLeagueIcon type={event.sport.league.name} />
          ) : (
            <span className="w-[16px] h-[17px]">
              {sportsList.find((n) => n.name === event.sport.name)?.icon}
            </span>
          )}
          {event.sport.league ? (
            <span className="font-medium capitalize">
              {event.sport.league.country} |{" "}
              {event.sport.league.name.replace(/_/g, " ")}
            </span>
          ) : (
            <span className="font-medium capitalize">
              {event.sport.name.replace(/_/g, " ")}
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
        <div className="px-4 sm:px-10 py-4 overflow-hidden relative w-full rounded-lg flex justify-between items-center">
          <div className="z-10 flex flex-col gap-2 items-center justify-center">
            <Image
              width={80}
              height={80}
              src={event.home.image}
              alt={event.home.name}
              className="object-contain"
            />
            <span className="text-gray-800 font-semibold flex justify-center w-full items-center text-center">
              {event.home.name}
            </span>
          </div>
          {/* vs */}
          <span className="text-gray-400 z-10 text-5xl font-medium">vs</span>
          {/* away */}
          <div className="z-10 flex flex-col gap-2 items-center justify-center">
            <Image
              width={80}
              height={80}
              src={event.away.image}
              alt={event.away.name}
              className="object-contain"
            />
            <span className="text-gray-800 font-semibold flex justify-center w-full items-center text-center">
              {event.away.name}
            </span>
          </div>
        </div>

        {/* wager info & create btn */}
        <div className="flex flex-wrap w-full xs:justify-between justify-center gap-2 mb-2 pl-4 pr-2 items-center">
          <span className="text-gray-400 flex gap-1 text-sm font-medium">
            Ends in{" "}
            <span className="text-gray-800 font-semibold flex gap-1">
              <span>
                {event.time.days}{" "}
                {parseInt(event.time.days) > 1 ? "days" : "day"}
              </span>
              <span>
                {event.time.hours}
                {parseInt(event.time.hours) > 1 ? "hrs" : "hr"}
              </span>
              <span>
                {event.time.minutes}
                {parseInt(event.time.minutes) > 1 ? "mins" : "min"}
              </span>
            </span>
          </span>

          <button
            type="button"
            className="md:px-10 px-4 py-2 xs:py-3 font-medium rounded-full bg-darkGold text-white"
          >
            Create Wager
          </button>
        </div>
      </div>
    </div>
  );
};
