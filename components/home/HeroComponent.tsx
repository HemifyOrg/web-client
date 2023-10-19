import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

interface SlideType {
  id: number;
  image: string;
}

const slides: Array<SlideType> = [
  {
    id: 0,
    image: "/images/banner/img1.png",
  },
  {
    id: 1,
    image: "/images/banner/img1.png",
  },
  {
    id: 2,
    image: "/images/banner/img1.png",
  },
  {
    id: 3,
    image: "/images/banner/img1.png",
  },
  {
    id: 4,
    image: "/images/banner/img1.png",
  },
];

const HeroComponent = () => {
  const [hotBidz, setHotBidz] = useState<Array<SlideType>>([]);
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    setHotBidz(slides);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleSlide("right");
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [selectedSlide]);

  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleSlide = (action: "right" | "left") => {
    if (swiper === null) return;
    if (action === "right") {
      swiper.slideNext();
    }
    if (action === "left") {
      swiper.slidePrev();
    }
  };

  return (
    <div className="flex items-center justify-between w-full py-4 z-10 h-full m-auto lg:flex-row flex-col-reverse">
      {/* left hero */}
      <div className="hidden vflex flex-col lg:px-8 lg:gap-6 items-start h-full justify-center">
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
      <Swiper
        onSwiper={setSwiper}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="relative w-full lg:mr-2 mx-auto pl-4 pr-8 md:px-10 mt-5 select-none"
      >
        {hotBidz && hotBidz.length > 0 ? (
          hotBidz.map((n, i) => (
            <SwiperSlide
              key={n.id + i}
              style={{ backgroundImage: `url(${n.image})` }}
              className={`lg:!h-[350px]  md:!h-[200px] lg:!w-[50%] !h-[200px] scale-90 !w-[85%] shadow-lg transition-all 
              py-4 px-8 bg-cover overflow-hidden bg-no-repeat
                  bg-center rounded-xl !flex justify-center items-end bg-gradient-to-t from-pink-400 to-pink-800`}
            ></SwiperSlide>
          ))
        ) : (
          <figure
            className={`w-[400px] h-[350px] transition-all z-[-1] animate-pulse py-4 px-8 bg-cover overflow-hidden bg-no-repeat
                bg-center rounded-lg flex justify-center items-end bg-gradient-to-t from-gray-200 to-gray-300 shadow-none`}
          ></figure>
        )}
      </Swiper>
    </div>
  );
};

export default HeroComponent;
