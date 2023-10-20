import React from "react";
import { useSwiper } from "swiper/react";

interface Props {
  isEnd?: boolean;
  isBeginning?: boolean;
}

const SlideControlButtons: React.FC<Props> = ({ isEnd, isBeginning }) => {
  const swiper = useSwiper();
  return (
    <div className="w-full px-4 flex mt-8 justify-center items-center select-none">
      <div className="bg-transparent rounded-lg py-2 justify-center md:gap-16 flex gap-24 w-full">
        <span
          className={`p-1 w-7 h-7 rounded-xl bg-slate-200 flex justify-center items-center transition-all ${
            isBeginning ? "opacity-50" : "active:scale-75"
          }`}
          onClick={() => swiper && swiper.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 16"
            className="w-full h-full"
            fill="none"
          >
            <path
              d="M10.5 12L6.5 8L10.5 4"
              stroke="#A0A4A8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <div
          className={`p-1 w-7 h-7 rounded-xl bg-themeColor transition-all ${
            isEnd ? "opacity-50" : "active:scale-75"
          }`}
          onClick={() => swiper && swiper.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M6.5 12L10.5 8L6.5 4"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SlideControlButtons;
