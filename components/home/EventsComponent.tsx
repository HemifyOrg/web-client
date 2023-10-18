import React, { useState, useEffect } from "react";
import { FilterMenuComponent } from "../reusable";
import { sportsList } from "@/utils";
import { SportEventWagerCardComponent } from "../reusable/wager";
import { MatchType } from "@/utils/types";
import { matchList } from "@/utils/dummyDatas";

const EventsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [matches, setMatches] = useState<MatchType[]>(matchList);
  const [filteredMatches, setFilteredMatches] = useState<MatchType[]>([]);

  useEffect(() => {
    if (selectedTab === "all") setFilteredMatches(matches);
    else
      setFilteredMatches(
        matches.filter((match) => match.sport.name === selectedTab)
      );
  }, [selectedTab]);
  return (
    <section className="mb-4 rounded-t-3xl w-full flex flex-col justify-center items-center">
      <div className="flex justify-center mb-4 gap-1 flex-col items-center">
        <h1 className="flex gap-0 items-center text-3xl mx-auto font-semibold">
          Events
        </h1>
        <span>Find your favorite event and create wager.</span>
      </div>

      <div className="px-2 md:max-w-xl max-w-md w-full">
        <FilterMenuComponent
          tabs={sportsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center my-6 px-3 md:max-w-xl max-w-md w-full">
        {filteredMatches.map((match, index) => (
          <SportEventWagerCardComponent match={match} key={index} />
        ))}
      </div>
    </section>
  );
};

export default EventsComponent;
