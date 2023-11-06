import React, { useState, useEffect } from "react";
import { FilterMenuComponent } from "../reusable";
import { categoriesList } from "@/utils";
import { WagerCardComponent } from "../reusable/wager";
import { WagerType } from "@/utils/types";
import { wagerList } from "@/utils/dummyDatas";

const LobbyComponent = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [wagers, setWagers] = useState<WagerType[]>(wagerList);
  const [filteredWagers, setFilteredWagers] = useState<WagerType[]>([]);

  useEffect(() => {
    if (selectedTab === "all") setFilteredWagers(wagers);
    else
      setFilteredWagers(
        wagers.filter((wager) => wager.event.category.name === selectedTab)
      );
  }, [selectedTab]);
  return (
    <section className="mb-4 rounded-t-3xl w-full flex flex-col justify-center items-center">
      <div className="flex justify-center mb-4 gap-1 flex-col items-center">
        <h1 className="flex gap-0 items-center text-lg mx-auto font-semibold">
          Lobby
        </h1>
        <span className="text-gray-400">Find a wager to challenge.</span>
      </div>

      <div className="px-2 md:max-w-xl max-w-md w-full">
        <FilterMenuComponent
          tabs={categoriesList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center my-6 px-3 md:max-w-xl max-w-md w-full">
        {filteredWagers.map((wager, index) => (
          <WagerCardComponent wager={wager} key={index} />
        ))}
      </div>
    </section>
  );
};

export default LobbyComponent;
