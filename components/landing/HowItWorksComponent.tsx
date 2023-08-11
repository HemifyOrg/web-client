import React from "react";

const HowItWorksComponent = () => {
  const listOfHowItWorks = [
    "Sign up",
    "Connect/Fund Your Wallet",
    "Start Betting",
  ];

  const currenciesImages = [
    "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=013",
    "/images/currencies/solana.png",
    "/images/currencies/optism.png",
    "/images/currencies/polygon.png",
  ];

  return (
    <section id="how-it-works" className="flex flex-col gap-4 mt-6 w-full">
      <h1 className="py-2 px-4 text-center font-bold text-3xl">How it Works</h1>
      <div className="flex md:justify-center md:gap-10 justify-between w-full items-center md:px-4 px-2">
        {listOfHowItWorks.map((item, index) => (
          <div
            key={index}
            className="flex sm:gap-4 gap-2 md:gap-10 items-center"
          >
            <h2 className="md:text-xl text-xs font-medium">{item}</h2>
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
                  fillOpacity="0.8"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 w-full flex md:flex-row flex-row-reverse md:flex-nowrap flex-wrap gap-4 justify-center items-center md:px-4 px-2">
        {/* left how it works content */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Multichain Choice</h3>
            <p className="text-left text-sm w-60">
              our users can choose from multiple choice of cryptocurrency to bet
              with
            </p>
          </div>
          {/* crypto icons */}
          <div className="flex gap-4 py-4">
            {currenciesImages.map((currency, i) => (
              <img key={i} src={currency} alt="currency" className="w-8 h-8" />
            ))}
          </div>
          <button className="bg-themeColor hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>

        <div className="flex justify-end items-center relative">
          <figure
            style={{ backgroundImage: "url('/images/iphone-x.png')" }}
            className="w-[300px] p-2 h-[400px] flex items-center justify-center bg-contain bg-no-repeat bg-center"
          >
            <img
              src="/images/iphone-mockup-label.png"
              alt="iphone-content"
              className="w-full h-full object-contain"
            />
          </figure>

          <figure
            style={{ backgroundImage: "url('/images/iphone-x-tilt.png')" }}
            className="w-[300px] p-3 h-[400px] -translate-x-10 overflow-hidden md:flex hidden items-center justify-center bg-contain bg-no-repeat bg-center"
          >
            <img
              src="/images/iphone-mockup-label-tilt.png"
              alt="iphone-content"
              className="w-full h-full object-contain -translate-x-1 -translate-y-1"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksComponent;
