import React from "react";

const RoadMapComponent = () => {
  return (
    <section
      id="roadmap"
      className="flex flex-col gap-4 mt-10 w-full mb-2 md:px-10 px-4 pt-2"
    >
      <h1 className="mx-auto w-max py-2 px-4 text-center font-bold text-3xl rounded-full bg-[#ccaf7c96]">
        Road Map
      </h1>
      {/* md */}
      <figure
        style={{
          backgroundImage: "url(/images/roadmap.png)",
        }}
        className="w-full h-[400px] md:block hidden bg-center bg-contain bg-no-repeat"
      ></figure>
      {/* sm */}
      <figure
        style={{
          backgroundImage: "url(/images/roadmap-mobile.png)",
        }}
        className="w-full h-[700px] md:hidden bg-center bg-contain bg-no-repeat"
      ></figure>
    </section>
  );
};

export default RoadMapComponent;
