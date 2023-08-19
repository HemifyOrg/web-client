import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { Player } from "@lottiefiles/react-lottie-player";
import FolderLockAnimate from "./lottiefiles/folder-lock-animate.json";
import BlockchainAnimate from "./lottiefiles/blockchain-animate.json";
import CoinAnimate from "./lottiefiles/coin-animate.json";
import CustomerServiceAnimate from "./lottiefiles/customer-service-animate.json";
import AIRobotAnimate from "./lottiefiles/ai-robot-animate.json";
import StarHappyAnimate from "./lottiefiles/star-happy-animate.json";

import { motion } from "framer-motion";

const FeaturedComponent = () => {
  const slidesImages = [
    "/images/sports/basketball.png",
    "/images/sports/soccer.png",
    "/images/sports/baseball.png",
    "/images/sports/golf.png",
    "/images/sports/boxing.png",
    "/images/sports/car-race.png",
  ];
  const featuresList = [
    {
      title: "Transparency With Blockchain Technology",
      icon: (
        <Player
          style={{
            width: "100px",
            height: "100px",
          }}
          className="flex justify-center items-center"
          loop
          autoplay
          src={BlockchainAnimate}
        />
      ),
    },
    {
      title: "Secured and Swift Transactions",
      icon: (
        <Player
          style={{
            width: "100px",
            height: "100px",
          }}
          className="flex justify-center items-center"
          loop
          autoplay
          src={FolderLockAnimate}
        />
      ),
    },
    {
      title: "Head To Head Wager",
      icon: (
        <Player
          style={{
            width: "100px",
            height: "100px",
          }}
          className="flex justify-center items-center"
          loop
          autoplay
          src={CoinAnimate}
        />
      ),
    },
    {
      title: "Effective Customer Support",
      icon: (
        <Player
          style={{
            width: "100px",
            height: "100px",
          }}
          className="flex justify-center items-center"
          loop
          autoplay
          src={CustomerServiceAnimate}
        />
      ),
    },
    {
      title: "Smart Play",
      icon: (
        <Player
          style={{
            width: "100px",
            height: "100px",
          }}
          className="flex justify-center items-center"
          loop
          autoplay
          src={AIRobotAnimate}
        />
      ),
    },
    {
      title: "High Odds And Fairness",
      icon: (
        <Player
          style={{
            width: "100px",
            height: "100px",
          }}
          className="flex justify-center items-center"
          loop
          autoplay
          src={StarHappyAnimate}
        />
      ),
    },
  ];
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="md:px-4 px-2 py-1 flex gap-2">
        <span className="font-medium">Featuring</span>
        <div className="h-6 w-1 rounded-full bg-themeColor"></div>
        <span className="font-light">Varieties of Sports</span>
      </div>

      {/* slides area */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full flex items-center no-select !px-2 justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
        modules={[Autoplay, Pagination]}
      >
        {slidesImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="md:!w-96 !w-44 md:!h-60 !h-52 rounded-lg shadow-md drop-shadow-md bg-slate-400"
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="rounded-md bg-cover bg-center w-full h-full"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col justify-center items-center gap-6 py-6 px-10 mt-6">
        <div className="flex gap-6 flex-wrap md:justify-start justify-center items-center">
          {featuresList.splice(0, 2).map((feature, index) => (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.3 }}
              key={index}
              className="flex flex-col md:w-[400px] h-[240px] w-full gap-4 items-center justify-center p-3 bg-[#0D213E]"
            >
              {feature.icon}
              <h3 className="text-center text-lg font-semibold">
                {feature.title}
              </h3>
            </motion.div>
          ))}
          <div className="flex flex-col md:w-[400px] h-[240px] w-full gap-5 items-start justify-center p-4">
            <div>
              <h3 className="text-left text-3xl font-semibold">
                What is Coming
              </h3>
              <h3 className="text-left text-3xl font-semibold">
                Is More Than Sportbet
              </h3>
            </div>
            <p className="text-sm text-left">
              we are solving problems in the betting and prediction with
              blockchain technology in a way that has never been done before.
            </p>
          </div>
        </div>

        <div className="flex gap-6 flex-wrap justify-center items-center">
          {featuresList.splice(0, 4).map((feature, index) => (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.3 }}
              key={index}
              className="flex flex-col md:w-[400px] h-[240px] w-full gap-4 items-center justify-center p-3 bg-[#0D213E]"
            >
              {feature.icon}
              <h3 className="text-center text-lg font-semibold">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedComponent;
