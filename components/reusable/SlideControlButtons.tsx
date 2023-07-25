import React from "react";
import { useSwiper } from "swiper/react";

interface Props {
  isEnd: boolean;
  isBeginning: boolean;
}

const SlideControlButtons: React.FC<Props> = ({ isEnd, isBeginning }) => {
  const swiper = useSwiper();
  return (
    <div className="w-full px-4 flex mt-8 justify-center items-center select-none">
      <div className="bg-transparent rounded-lg p-2 flex justify-between gap-4">
        <div
          className={`p-2 rounded-md bg-[#F1E7D44D] border-[0.4px] border-themeColor transition-all ${
            isBeginning ? "opacity-50" : "active:scale-75"
          }`}
          onClick={() => swiper && swiper.slidePrev()}
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            className="transition-all active:stroke-[#d2b37dd8] stroke-themeColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 18.3334L12.6667 10.0001L21 1.66675M9.33333 18.3334L1 10.0001L9.33333 1.66675"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          className={`p-2 rounded-md bg-[#F1E7D4] transition-all ${
            isEnd ? "opacity-50" : "active:scale-75"
          }`}
          onClick={() => swiper && swiper.slideNext()}
        >
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all active:stroke-[#54473271] stroke-[#D2B37D]"
          >
            <path
              d="M1 18.3334L9.33333 10.0001L1 1.66675M12.6667 18.3334L21 10.0001L12.6667 1.66675"
              stroke="#D2B37D"
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
