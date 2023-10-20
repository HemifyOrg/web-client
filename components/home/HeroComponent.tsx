import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const HeroComponent = () => {
  const slides = [
    "/images/banner/img1.png",
    "/images/banner/img1.png",
    "/images/banner/img1.png",
    "/images/banner/img1.png",
    "/images/banner/img1.png",
  ];
  return (
    <div className="flex items-center justify-between w-full py-4 z-10 h-full m-auto lg:flex-row flex-col-reverse">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="relative w-full lg:mr-2 mx-auto pl-4 pr-8 md:px-10 mt-5 select-none"
      >
        {slides && slides.length > 0 ? (
          slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              style={{ backgroundImage: `url(${slide})` }}
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
