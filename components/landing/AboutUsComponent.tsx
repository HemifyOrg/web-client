import React from "react";

const AboutUsComponent = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col gap-4 mt-10 w-full mb-2 md:px-10 py-8 px-4 bg-[#022251]"
    >
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <div className="text-base md:w-[500px] flex flex-col gap-3 w-full">
          <p>
            Hemify is a event and player vs player crypto betting platform. We
            offer the best odds on any sport and events predictions while been
            transparent secure and reliable. Our plan is to onboard millions
            web2 punters to web3 betting.
          </p>
          <p>
            What's more fun is the player to player wagering system where you
            can wager against anyone with opposite sentiment and set monetary
            terms for the winner. This feature will birth a future for punters,
            where punters can bet against each other with valuables.
          </p>
        </div>
      </div>

      <div className="flex w-full">
        {/* human area */}
        <div className="relative z-10 md:flex hidden justify-start items-start">
          <figure
            style={{
              backgroundImage: "url('/images/man-show-proj.png')",
            }}
            className="w-[600px] z-10 h-[350px] translate-x-20 bg-contain bg-no-repeat bg-right"
          ></figure>
          <svg
            width="411"
            height="176"
            viewBox="0 0 530 231"
            className="z-[-1] absolute left-0 bottom-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="530"
              height="231"
              rx="10"
              fill="#D2B37D"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-4 w-full md:translate-y-20">
          <h1 className="text-3xl font-semibold">
            What We Are <span className="text-themeColor">Introducing</span>
          </h1>
          <div className="text-base flex flex-col gap-3 w-full">
            <p>
              We are building a platform assistant that can help you monitor
              your betting activities; a smart gambling feature that helps
              provide users with statistical data of their activities if they
              are too exposed (over betting) It provides users with option to
              limit stake, odds and lock funds.
            </p>
            <p>
              We plan to onboard lots of people through easy accessible to
              crypto. We aim to adopt all methods of deposit to allow easy
              concert of fair and local currency to a universal crypto (usdt).
              We choose usdt because it is pegged to a dollar and we see it as
              the digital dollar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
