import { useState, useEffect, Fragment } from "react";
import { categoriesList } from "@/utils";
import { FilterMenuComponent } from "@/components/reusable";
import { EventType, WagerType } from "@/utils/types";
import { eventList, wagerList } from "@/utils/dummyDatas";
import {
  EventWagerCardComponent,
  WagerCardComponent,
} from "@/components/reusable/wager";

const EventsSlideComponent = () => {
  const [events, setEvents] = useState<EventType[]>(eventList);
  const [selectedFilterBySport, setSelectedFilterBySport] = useState("all");
  const [selectedFilterByCountry, setSelectedFilterByCountry] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);

  useEffect(() => {
    if (selectedFilterBySport === "all") setFilteredEvents(events);
    else
      setFilteredEvents(
        events.filter((event) => event.category.name === selectedFilterBySport)
      );
  }, [selectedFilterBySport]);
  return (
    <Fragment>
      <div className="md:max-w-2xl max-w-md w-full mt-2 pb-4">
        <FilterMenuComponent
          tabs={categoriesList}
          tabs2={categoriesList}
          selectedTab={selectedFilterBySport}
          setSelectedTab={setSelectedFilterBySport}
          selectedTab2={selectedFilterByCountry}
          setSelectedTab2={setSelectedFilterByCountry}
        />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center my-6 md:max-w-xl max-w-md w-full">
        {filteredEvents.map((event, index) => (
          <EventWagerCardComponent event={event} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

const LobbySlideComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [wagers, setWagers] = useState<WagerType[]>(wagerList);
  const [filteredWagers, setFilteredWagers] = useState<WagerType[]>([]);

  useEffect(() => {
    if (selectedFilter === "all") setFilteredWagers(wagers);
    else
      setFilteredWagers(
        wagers.filter((wager) => wager.event.category.name === selectedFilter)
      );
  }, [selectedFilter]);
  return (
    <Fragment>
      <div className="md:max-w-2xl max-w-md w-full mt-2 pb-4">
        <FilterMenuComponent
          tabs={categoriesList}
          selectedTab={selectedFilter}
          setSelectedTab={setSelectedFilter}
        />
      </div>

      <div className="flex flex-col gap-5 justify-center items-center my-6 md:max-w-xl max-w-md w-full">
        {filteredWagers.map((wager, index) => (
          <WagerCardComponent wager={wager} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

const WagerPage = () => {
  const [selectedTab, setSelectedTab] = useState("events");

  return (
    <div className="mt-20 flex flex-col w-full xs:px-3 md:px-5 px-2 justify-center items-center">
      <div className="w-full flex justify-end items-center p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 20 20"
          className="transition-all active:scale-90"
          fill="none"
        >
          <path
            d="M15 6.66663C15 5.34054 14.4732 4.06877 13.5355 3.13109C12.5979 2.19341 11.3261 1.66663 10 1.66663C8.67392 1.66663 7.40215 2.19341 6.46447 3.13109C5.52678 4.06877 5 5.34054 5 6.66663C5 9.86927 4.24643 11.816 3.56675 12.9204C3.30747 13.3418 3.65668 14.1666 4.15139 14.1666H15.8486C16.3433 14.1666 16.6925 13.3418 16.4333 12.9204C15.7536 11.816 15 9.86927 15 6.66663Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* tabs */}
      <div className="flex select-none justify-center items-center my-2 w-full px-2">
        <div className="flex justify-between relative xs:gap-28 xs:w-auto w-full xs:px-20 px-12 items-center bg-white rounded-full">
          <div
            className={`absolute py-4 w-[55%] transition-all bg-themeColor rounded-full h-full ${
              selectedTab === "lobby" ? "left-[45.5%]" : "left-0"
            }`}
          ></div>
          <button
            type="button"
            onClick={() => {
              setSelectedTab("events");
            }}
            className={`z-10 text-lg font-medium cursor-pointer h-full ${
              selectedTab === "events" ? "text-slate-200" : "text-slate-800"
            }`}
          >
            Events
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedTab("lobby");
            }}
            className={`z-10 text-lg py-4 font-medium cursor-pointer h-full ${
              selectedTab === "lobby" ? "text-slate-200" : "text-slate-800"
            }`}
          >
            Lobby
          </button>
        </div>
      </div>

      <div className="flex gap-4 justify-center w-full overflow-hidden relative mx-auto">
        {selectedTab === "events" ? (
          <div className="py-2 !flex flex-col w-full justify-center items-center">
            <EventsSlideComponent />
          </div>
        ) : (
          <div className="py-2 !flex flex-col w-full justify-center items-center">
            <LobbySlideComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default WagerPage;
