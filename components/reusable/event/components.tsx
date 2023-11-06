import Image from "next/image";
import { useState } from "react";
import { categoriesList } from "@/utils";
import { MatchLeagueIcon } from "@/utils/components";
import { EventType } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Scrollbar, Pagination } from "swiper/modules";
import { SlideControlButtons } from "@/components/reusable";

export const EventCardComponet = ({ event }: { event: EventType }) => {
  return (
    <div className="mx-auto">
      {/* date */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="text-lg font-medium text-gray-400 mt-2">Starts in</h2>
        {/* time */}
        <div className="flex gap-6">
          <div className="flex items-end">
            <span className="text-3xl font-bold">{event.time.days}</span>
            <span className="text-base font-semibold text-gray-400 mb-[1px]">
              {parseInt(event.time.days) > 1 ? "days" : "day"}
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold">{event.time.hours}</span>
            <span className="text-base font-semibold text-gray-400 mb-[1px]">
              {parseInt(event.time.hours) > 1 ? "hrs" : "hr"}
            </span>
          </div>
          <div className="flex items-end">
            <span className="text-3xl font-bold">{event.time.minutes}</span>
            <span className="text-base font-semibold text-gray-400 mb-[1px]">
              {parseInt(event.time.minutes) > 1 ? "mins" : "min"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 justify-center items-center">
        <div className="w-full xs:w-auto">
          <div className="px-3 py-2 bg-white rounded-t-xl w-full shadow-sm flex justify-between gap-4 items-center">
            {/* match name */}
            <div className="flex gap-2 justify-start items-center">
              {event.category.league ? (
                <MatchLeagueIcon type={event.category.league.name} />
              ) : (
                <span className="w-[16px] h-[17px]">
                  {
                    categoriesList.find((n) => n.name === event.category.name)
                      ?.icon
                  }
                </span>
              )}
              {event.category.league ? (
                <span className="font-medium capitalize">
                  {event.category.league.country},{" "}
                  {event.category.league.name.replace(/_/g, " ")}
                </span>
              ) : (
                <span className="font-medium capitalize">
                  {event.category.name.replace(/_/g, " ")}
                </span>
              )}
            </div>
            {/* match signal */}
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
          <figure
            className="md:w-[30rem] px-2 py-4 overflow-hidden relative w-[18rem] xs:w-[25rem] max-xs:w-full rounded-lg md:h-52 h-36 bg-no-repeat bg-cover bg-center flex justify-between items-center"
            style={{
              backgroundImage: "url(/images/sports/football-field.png)",
            }}
          >
            {/* overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-[#000a]"></div>
            <div className="z-10 flex flex-col gap-2 items-center justify-center">
              <Image
                width={80}
                height={80}
                src={event.home.image}
                alt={event.home.name}
                className="object-contain"
              />
              <span>
                <span className="text-white font-medium">
                  {event.home.name}
                </span>
              </span>
            </div>
            {/* vs */}
            <span className="text-gray-400 z-10 text-6xl font-medium">vs</span>
            {/* away */}
            <div className="z-10 flex flex-col gap-2 items-center justify-center">
              <Image
                width={80}
                height={80}
                src={event.away.image}
                alt={event.away.name}
                className="object-contain"
              />
              <span>
                <span className="text-white font-medium">
                  {event.away.name}
                </span>
              </span>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export const EventsSliderComponent = ({ events }: { events: EventType[] }) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="flex justify-center items-center my-6 w-full">
      {events && events.length > 0 && (
        <Swiper
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="flex gap-4 justify-center w-full overflow-hidden relative mx-auto"
          slidesPerView={1}
          spaceBetween={30}
          scrollbar={{
            hide: true,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={true}
          modules={[Scrollbar, Navigation, Keyboard, Pagination]}
        >
          {events.map((event, i) => (
            <SwiperSlide
              key={i}
              className="flex-col gap-4 px-2 !w-full flex justify-center items-center"
            >
              <EventCardComponet event={event} />
            </SwiperSlide>
          ))}
          <SlideControlButtons isEnd={isEnd} isBeginning={isBeginning} />
        </Swiper>
      )}
    </div>
  );
};
