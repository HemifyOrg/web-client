import React, { useState, useEffect } from "react";
import { FilterMenuComponent } from "../reusable";
import { sportsList } from "@/utils";
import { EventWagerCardComponent } from "../reusable/wager";
import { EventType } from "@/utils/types";
import { eventList } from "@/utils/dummyDatas";

const EventsComponent = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [events, setEvents] = useState<EventType[]>(eventList);
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);

  useEffect(() => {
    if (selectedTab === "all") setFilteredEvents(events);
    else
      setFilteredEvents(
        events.filter((event) => event.sport.name === selectedTab)
      );
  }, [selectedTab]);
  return (
    <section className="mb-4 rounded-t-3xl w-full flex flex-col justify-center items-center">
      <div className="flex justify-center mb-4 gap-1 flex-col items-center">
        <h1 className="flex gap-0 items-center text-lg mx-auto font-semibold">
          Events
        </h1>
        <span className="text-gray-400">Find your favorite event and create wager.</span>
      </div>

      <div className="px-2 md:max-w-xl max-w-md w-full">
        <FilterMenuComponent
          tabs={sportsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center my-6 px-3 md:max-w-xl max-w-md w-full">
        {filteredEvents.map((event, index) => (
          <EventWagerCardComponent event={event} key={index} />
        ))}
      </div>
    </section>
  );
};

export default EventsComponent;
