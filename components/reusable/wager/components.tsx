import { sportsList } from "@/utils";
import { WagerType } from "@/utils/types";
import Image from "next/image";
import React from "react";

type Props = {
  wager: WagerType;
};

export const WagerCardComponent: React.FC<Props> = ({ wager }) => {
  return wager.prediction &&
    typeof wager.prediction === "string" &&
    wager.prediction.split(";")?.length === 3 ? (
    <div className="w-full bg-white rounded-lg divide-y-2">
      {/* header */}
      <div className="pb-2 pl-2  pt-1 gap-4 flex items-center justify-between">
        <span className="w-8 h-8">{sportsList[0].icon}</span>
        <div className="w-full justify-center">
          <div className="flex justify-center items-center gap-2">
            {wager.match ? (
              <React.Fragment>
                {/* home */}
                <div className="flex gap-1">
                  <span className="font-medium text-sm">
                    {wager.match.home.name}
                  </span>
                  <Image
                    width={25}
                    height={25}
                    alt=""
                    className="object-contain"
                    src={wager.match.home.image}
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
                    src={wager.match.away.image}
                  />
                  <span className="font-medium text-sm">
                    {wager.match.away.name}
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
          <div className="gap-2 flex flex-wrap xs:px-2 px-6 items-center">
            <Image
              alt=""
              width={38}
              height={38}
              className="object-cover rounded-md shadow-md drop-shadow-sm"
              src={wager.creator.image}
            />
            <span className="text-gray-600 font-semibold">
              @{wager.creator.username}
            </span>
          </div>

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
