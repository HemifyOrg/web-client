import React from "react";

const SlideControlButtons = () => {
  return (
    <div className="w-full px-4 flex mt-8 justify-center items-center">
      <div className="bg-[#e3d5bdab] rounded-lg p-2 flex justify-between gap-4">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          className="transition-all active:scale-75 active:stroke-[#D2B37D] stroke-[#54473271]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 18.3334L12.6667 10.0001L21 1.66675M9.33333 18.3334L1 10.0001L9.33333 1.66675"
            // stroke=""
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all active:scale-75 active:stroke-[#54473271] stroke-[#D2B37D]"
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
  );
};

export default SlideControlButtons;
