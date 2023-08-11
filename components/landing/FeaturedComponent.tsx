import React from "react";
import { Swiper } from "swiper/react";

const FeaturedComponent = () => {
    const slidesImages = [
        "/images/featured/1.jpg",
    ];
  return (
    <section className="flex flex-col gap-4">
      <div className="md:px-4 px-2 py-1 flex gap-2">
        <span className="font-medium">Featuring</span>
        <div className="h-6 w-1 rounded-full bg-themeColor"></div>
        <span className="font-light">Varieties of Sports</span>
      </div>
      {/* slides area */}
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        className="flex gap-4 overflow-x-scroll scrollbar-hide"

      >

      </Swiper>
    </section>
  );
};

export default FeaturedComponent;
