import React from "react";
import HeroComponent from "./HeroComponent";
import FeaturedComponent from "./FeaturedComponent";
import HowItWorksComponent from "./HowItWorksComponent";
import { Footer } from "../footer";
import RoadMapComponent from "./RoadMapComponent";
import AboutUsComponent from "./AboutUsComponent";
import QuestionsComponent from "./QuestionsComponent";

const MainComponent = () => {
  return (
    <main className="mt-11 flex flex-col gap-6 h-full overflow-x-hidden">
      <div className="flex flex-col gap-6 lg:mb-56 sm:mb-80 mb-[500px]">
        <HeroComponent />
        <FeaturedComponent />
        <HowItWorksComponent />
        <RoadMapComponent />
        <AboutUsComponent />
        <QuestionsComponent />
      </div>
      <div className="relative mt-10 w-full">
        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default MainComponent;
