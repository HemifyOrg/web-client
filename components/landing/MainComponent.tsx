import React from "react";
import HeroComponent from "./HeroComponent";
import FeaturedComponent from "./FeaturedComponent";

const MainComponent = () => {
  return (
    <main className="mt-12 flex flex-col gap-6 h-full mb-5">
      <HeroComponent />
      <FeaturedComponent />
    </main>
  );
};

export default MainComponent;
