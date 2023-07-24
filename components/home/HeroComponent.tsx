import { useEffect, useState } from "react";

interface SlideType {
  id: number;
  image: string;
  desc: string;
}

const HeroComponent = () => {
  const [hotBidz, setHotBidz] = useState<Array<SlideType>>([
    {
      id: 0,
      image: "/images/ape.webp",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 1,
      image: "/images/ape2.png",
      desc: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 2,
      image: "/images/ape3.png",
      desc: "lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      id: 3,
      image: "/images/ape4.png",
      desc: "lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
  ]);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSlide = (action: "right" | "left") => {
    if (action === "right") {
      setSelectedSlide(
        selectedSlide > hotBidz.length - 2 ? 0 : selectedSlide + 1
      );
    }
    if (action === "left" && selectedSlide > -1) {
      setSelectedSlide(selectedSlide < 1 ? 0 : selectedSlide - 1);
    }
  };

  return (
    <div className="flex items-center justify-between w-full py-4 z-10 lg:px-8 px-4 h-full m-auto lg:flex-row flex-col-reverse">
      {/* left hero */}
      <div className="hidden vflex flex-col lg:gap-6 items-start h-full justify-center">
        {/* big text */}
        <div className="lg:flex hidden gap-1 flex-col text-left justify-start text-4xl lg:text-5xl leading-relaxed tracking-wide font-semibold">
          <div className="flex gap-2">
            <span>The</span>
            <div className="relative mr-1">
              <div className="absolute animate-hero-swipe bg-[#D2B37D] z-[-1] skew-x-[-10deg] skew-y-[-10deg] w-[110%] h-[110%] scale-105" />
              <span className="text-white animate-hero-swipe">first</span>
            </div>
            <span>multichain auction &</span>
          </div>
          <span>p2p power house</span>
        </div>
        <span className="lg:hidden block mt-4 text-left text-4xl lg:text-5xl leading-relaxed tracking-wide font-semibold">
          Uniting the Web through Blockchain
        </span>
        <span className="text-xl mt-2">Connecting web2 and web3</span>
        <div className="flex gap-2 mt-2 items-center justify-center">
          <button
            title="Explore Wagers"
            type="button"
            className="bg-btnImage font-semibold py-2 px-6 rounded-full shadow-sm"
          >
            Wager
          </button>
          <button
            title="Click To Start Swapping"
            type="button"
            className="border border-themeColor font-semibold py-2 px-6 rounded-full shadow-sm"
          >
            Swap
          </button>
        </div>
      </div>

      {/* right hero */}
      <div className="relative w-full lg:mr-2 mx-auto pl-4 pr-8 md:px-10 mt-5 select-none">
        {/* arrows */}
        <div className="w-full hidsden absolute top-[50%] z-10 left-0 flex justify-between items-center">
          {/* left */}
          <div
            onClick={() => handleSlide("left")}
            className={`${
              selectedSlide < 1 ? "opacity-75" : "active:scale-75"
            } p-2 bg-[#F1E7D480] flex transition-all cursor-pointer items-center justify-center -translate-x-5 w-10 h-10 rounded-full`}
          >
            <svg
              width="38"
              height="30"
              viewBox="0 0 38 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.6665 15H2.33317M2.33317 15L14.8332 2.5M2.33317 15L14.8332 27.5"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* right */}
          <div
            onClick={() => handleSlide("right")}
            className={`${
              selectedSlide > hotBidz.length - 2
                ? "opacity-75"
                : "active:scale-75"
            } p-2 bg-[#F1E7D480] flex transition-all cursor-pointer items-center justify-center translate-x-5 w-10 h-10 rounded-full`}
          >
            <svg
              width="38"
              height="30"
              viewBox="0 0 38 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.3335 15H35.6668M35.6668 15L23.1668 2.5M35.6668 15L23.1668 27.5"
                stroke="black"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* end arrows */}

        {hotBidz && hotBidz.length > 0 ? (
          hotBidz.map((n, i) => (
            <figure
              key={n.id + i}
              style={{ backgroundImage: `url(${n.image})` }}
              className={`lg:w-[500pmx] lg:h-[500px] h-[250px] shadow-lg w-full transition-all ${
                selectedSlide !== n.id
                  ? `top-0 absolute
                ${
                  hotBidz.length - 1 === n.id &&
                  hotBidz.length - 1 === selectedSlide
                    ? "translate-x-[40px] scale-[.65] z-[-3]"
                    : n.id < selectedSlide
                    ? `${
                        selectedSlide - 1 === n.id
                          ? "-translate-x-[55px] scale-[.75] z-[-1]"
                          : selectedSlide - 2 === n.id
                          ? "-translate-x-[100px] scale-[.65] z-[-1]"
                          : "-translate-x-[130px] scale-[.6] z-[-1]"
                      }`
                    : `${
                        selectedSlide + 1 === n.id
                          ? "translate-x-[70px] scale-[.6] z-[-1]"
                          : selectedSlide + 2 === n.id
                          ? "translate-x-[40px] scale-[.65] z-[-1]"
                          : "translate-x-[-10px] scale-[.75] z-[-1]"
                    }`
                }`
                  : "z-[1] drop-shadow-xl scale-[.85]"
              } 
              py-4 px-8 bg-cover overflow-hidden bg-no-repeat
                  bg-center rounded-xl flex justify-center items-end bg-gradient-to-t from-pink-400 to-pink-800 shadow-none`}
            >
              <div className="w-full bg-[#0000005e] text-white backdrop-blur-sm rounded-xl pt-4 pb-6 px-5 flex justify-between">
                <p>
                  {n.desc} + <b>{n.id}</b>
                </p>
              </div>
            </figure>
          ))
        ) : (
          <figure
            className={`w-[400px] h-[400px] transition-all z-[-1] animate-pulse py-4 px-8 bg-cover overflow-hidden bg-no-repeat
                bg-center rounded-lg flex justify-center items-end bg-gradient-to-t from-gray-200 to-gray-300 shadow-none`}
          ></figure>
        )}
      </div>
    </div>
  );
};

export default HeroComponent;
