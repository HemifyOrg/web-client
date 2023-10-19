import { useState, useEffect } from "react";
import { FilterMenuComponent } from "@/components/reusable";
import { EventType } from "@/utils/types";
import { sportsList } from "@/utils";
import { eventList } from "@/utils/dummyDatas";
import { EventsSliderComponent } from "../reusable/event";

const TrendingComponent = () => {
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
    <section className="mt-8 mb-4 rounded-t-3xl w-full flex flex-col justify-center items-center">
      <h1 className="flex gap-0 mb-4 items-center text-lg mx-auto font-semibold">
        Trending{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M4.9448 5.59124C4.87355 6.35124 4.82355 7.69624 5.2723 8.26874C5.2723 8.26874 5.06105 6.79124 6.9548 4.93749C7.7173 4.19124 7.89355 3.17624 7.6273 2.41499C7.47605 1.98374 7.1998 1.62749 6.9598 1.37874C6.8198 1.23249 6.9273 0.991237 7.13105 0.999987C8.36355 1.05499 10.3611 1.39749 11.2098 3.52749C11.5823 4.46249 11.6098 5.42874 11.4323 6.41124C11.3198 7.03874 10.9198 8.43374 11.8323 8.60499C12.4836 8.72749 12.7986 8.20999 12.9398 7.83749C12.9986 7.68249 13.2023 7.64374 13.3123 7.76749C14.4123 9.01874 14.5061 10.4925 14.2786 11.7612C13.8386 14.2137 11.3548 15.9987 8.8873 15.9987C5.8048 15.9987 3.35105 14.235 2.7148 11.0425C2.45855 9.75374 2.58855 7.20374 4.57605 5.40374C4.72355 5.26874 4.9648 5.38874 4.9448 5.59124Z"
            fill="url(#paint0_radial_10134_124362)"
          />
          <path
            d="M10.0138 10.1775C8.87759 8.71501 9.38634 7.04626 9.66509 6.38126C9.70259 6.29376 9.60259 6.21126 9.52384 6.26501C9.03509 6.59751 8.03384 7.38001 7.56759 8.48126C6.93634 9.97001 6.98134 10.6988 7.35509 11.5888C7.58009 12.125 7.31884 12.2388 7.18759 12.2588C7.06009 12.2788 6.94259 12.1938 6.84884 12.105C6.57913 11.8461 6.38694 11.5171 6.29384 11.155C6.27384 11.0775 6.17259 11.0563 6.12634 11.12C5.77634 11.6038 5.59509 12.38 5.58634 12.9288C5.55884 14.625 6.96009 16 8.65509 16C10.7913 16 12.3476 13.6375 11.1201 11.6625C10.7638 11.0875 10.4288 10.7113 10.0138 10.1775Z"
            fill="url(#paint1_radial_10134_124362)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_10134_124362"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(8.27677 16.0376) rotate(-179.751) scale(8.82346 14.4775)"
            >
              <stop offset="0.314" stopColor="#FF9800" />
              <stop offset="0.662" stopColor="#FF6D00" />
              <stop offset="0.972" stopColor="#F44336" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_10134_124362"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(8.77258 7.25731) rotate(90.5787) scale(9.23205 6.94781)"
            >
              <stop offset="0.214" stopColor="#FFF176" />
              <stop offset="0.328" stopColor="#FFF27D" />
              <stop offset="0.487" stopColor="#FFF48F" />
              <stop offset="0.672" stopColor="#FFF7AD" />
              <stop offset="0.793" stopColor="#FFF9C4" />
              <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804" />
              <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529" />
              <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209" />
              <stop offset="0.941" stopColor="#FFF176" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>{" "}
      </h1>

      {/* menu area */}
      <div className="px-2 md:max-w-xl max-w-md w-full">
        <FilterMenuComponent
          tabs={sportsList}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>

      {/* content area */}
      <EventsSliderComponent events={filteredEvents} />
    </section>
  );
};

export default TrendingComponent;
