import React from "react";
import HeroComponent from "./HeroComponent";
import FeaturedComponent from "./FeaturedComponent";
import HowItWorksComponent from "./HowItWorksComponent";
import { Footer } from "../footer";

const MainComponent = () => {
  return (
    <main className="mt-12 flex flex-col gap-6 h-full overflow-x-hidden">
      <div className="flex flex-col gap-6 mb-56">
        <HeroComponent />
        <FeaturedComponent />
        <HowItWorksComponent />
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
