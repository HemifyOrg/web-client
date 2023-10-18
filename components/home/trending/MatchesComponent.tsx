import { useState } from "react";

import { MatchType } from "@/utils/types";
import { MatchCardComponet } from "./MatchCardComponet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Scrollbar, Pagination } from "swiper/modules";

import { SlideControlButtons } from "@/components/reusable";

const MatchesComponent = ({ matches }: { matches: MatchType[] }) => {
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="flex justify-center items-center my-6 w-full">
      {matches && matches.length > 0 && (
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
          {matches.map((match, i) => (
            <SwiperSlide
              key={i}
              className="flex-col gap-4 px-2 !w-full flex justify-center items-center"
            >
              <MatchCardComponet match={match} />
            </SwiperSlide>
          ))}
          <SlideControlButtons isEnd={isEnd} isBeginning={isBeginning} />
        </Swiper>
      )}
    </div>
  );
};

export default MatchesComponent;
