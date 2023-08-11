import React from "react";
import HeroComponent from "./HeroComponent";
import FeaturedComponent from "./FeaturedComponent";
import HowItWorksComponent from "./HowItWorksComponent";

const MainComponent = () => {
  return (
    <main className="mt-12 flex flex-col gap-6 h-full overflow-x-hidden mb-5">
      <HeroComponent />
      <FeaturedComponent />
      <HowItWorksComponent />
    </main>
  );
};

export default MainComponent;
