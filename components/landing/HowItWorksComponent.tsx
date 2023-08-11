import React from "react";

const HowItWorksComponent = () => {
  const listOfHowItWorks = [
    "Sign up",
    "Connect/Fund Your Wallet",
    "Start Betting",
  ];

  return (
    <section id="how-it-works" className="flex flex-col gap-4 mt-6 w-full">
      <h1 className="py-2 px-4 text-center font-bold text-3xl">How it Works</h1>
      <div className="flex justify-center gap-10 items-center px-4">
        {listOfHowItWorks.map((item, index) => (
          <div key={index} className="flex gap-4 md:gap-10 items-center">
            <h3 className="md:text-xl text-xs font-medium">{item}</h3>
            {index !== listOfHowItWorks.length - 1 && (
              <svg
                className="w-6 h-6"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.8975 16.4142C39.6786 15.6332 39.6786 14.3668 38.8975 13.5858L26.1696 0.857864C25.3886 0.0768156 24.1222 0.0768156 23.3412 0.857864C22.5601 1.63891 22.5601 2.90524 23.3412 3.68629L34.6549 15L23.3412 26.3137C22.5601 27.0948 22.5601 28.3611 23.3412 29.1421C24.1222 29.9232 25.3886 29.9232 26.1696 29.1421L38.8975 16.4142ZM0 17H37.4833V13H0L0 17Z"
                  fill="#D2B37D"
                  fill-opacity="0.8"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 w-full flex gap-4">

      </div>
    </section>
  );
};

export default HowItWorksComponent;
