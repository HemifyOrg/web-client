import React, { useState, useEffect } from "react";
import { FilterMenuComponent } from "../reusable";
import { categoriesList } from "@/utils";
import { EventCardComponent } from "../reusable/wager";
import { EventType } from "@/utils/types";
import { useQuery } from "@apollo/client";
import { EVENTS } from "@/graphql/queries/event";

const LobbyComponent = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [events, setEvents] = useState<EventType[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);

  useQuery(EVENTS, {
    variables: { category: selectedTab },
    onCompleted: (data) => {
      console.log(data.events);
      setEvents(data.events);
      setFilteredEvents(data.events);
    },
  });

  useEffect(() => {
    if (selectedTab === "all") setFilteredEvents(events);
    else
      setFilteredEvents(
        events.filter((event) => event.category === selectedTab)
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
        {filteredEvents.map((event, index) => (
          <EventCardComponent event={event} key={index} />
        ))}
      </div>
    </section>
  );
};

export default LobbyComponent;
