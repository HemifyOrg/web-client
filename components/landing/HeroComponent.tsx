import React from "react";
import Marquee from "react-fast-marquee";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

import HourGlassAnimate from "./lottiefiles/hour-glass-animate.json";
import UserLoadAnimate from "./lottiefiles/user-load-animate.json";
import CryptoAnimate from "./lottiefiles/crypto-animate.json";

const HeroComponent = () => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:8000"
            : "https://api.hemify.bet"
        }/api/add-email-to-waitlist/`,
        {
          method: "POST",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )
        .then(async (res) => {
          const data = await res.json();
          setResponse(data);
          setLoading(false);
          setEmail("");
        })
        .catch((err) => {
          console.log(err);
          setResponse({
            status: 400,
            message: "Something went wrong",
          });
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setResponse({
        status: 400,
        message: "Something went wrong",
      });
      setLoading(false);
    }
  };

  return (
    <section
      id="top"
      className="flex flex-col gap-4 pt-4 justify-center items-center"
    >
      <div className="flex px-4 flex-col gap-5 w-full items-center justify-center">
        <div className="flex gap-2 font-semibold md:text-6xl text-2xl">
          <div className="flex gap-6 md:gap-7">
            <div className="relative flex justify-center items-center">
              <div className="flex items-center justify-center z-[-1] -top-2">
                <span className="text-slate-800 rotate-3 md:rotate-[5deg] md:text-5xl text-xl">
                  BET
                </span>
                <svg
                  width="84"
                  height="46"
                  viewBox="0 0 84 46"
                  className="absolute md:w-[150px] md:h-[80px] z-[-1] -top-2 md:-top-3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.68869 2.5407C2.78172 1.21648 4.04611 0.293903 5.33724 0.602454C12.0159 2.1985 30.8159 6.47109 43.9987 7.30771C56.2943 8.08803 74.1559 6.54264 80.7066 5.90453C82.03 5.77562 83.1506 6.86727 83.0574 8.19367L80.5432 43.9806C80.4514 45.2871 79.2097 46.2011 77.9318 45.9137C49.7719 39.5819 32.3673 38.679 2.45166 40.656C1.15934 40.7414 0.0802245 39.6685 0.170992 38.3765L2.68869 2.5407Z"
                    fill="#D2B37D"
                  />
                </svg>
              </div>
            </div>

            <h4>WITH,</h4>
          </div>
          <h4>HEMIFY</h4>
        </div>
        <h6 className="md:text-xl text-lg">Your passion Your win</h6>
      </div>

      <div className="w-full flex md:px-8 px-4 justify-center items-center flex-col gap-3">
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex md:w-[50%] lg:w-[30%] lg:focus-within:w-[50%] md:focus-within:w-[60%] focus-within:scale-105 w-[90%] transition-all duration-75 overflow-hidden focus-within:w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading || response?.status === 200}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 outline-none text-slate-800 font-semibold"
          />
          <button
            type="submit"
            disabled={loading || response?.status === 200}
            className="px-4 py-2 relative flex justify-center items-center bg-green-600 text-white font-semibold"
          >
            <span className={`${loading ? "opacity-0" : ""}`}>
              {response?.status === 200 ? "Subscribed" : "Subscribe"}
            </span>
            {response?.status === 200 && (
              <motion.svg
                initial={{ opacity: -1, rotate: 0, x: -20 }}
                animate={{ opacity: 1, rotate: 360, x: 0 }}
                transition={{ duration: 1 }}
                className="ml-2 w-5 h-5 text-white inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm6.707 9.293l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 14.586l7.293-7.293a1 1 0 011.414 1.414z"
                ></path>
              </motion.svg>
            )}
            {loading && (
              <svg
                className="absolute animate-spin ml-2 h-5 w-5 text-white inline-block"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            )}
          </button>
        </form>
        {/* message card */}
        {response?.status === 200 && (
          <div className="flex justify-center items-center gap-2">
            <motion.svg
              initial={{ opacity: -1, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-6 h-6 text-slate-100"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="green" />
              <path
                d="M8 13L11 16L16 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <span className="text-green-600 font-semibold">
              {response?.message}
            </span>
          </div>
        )}
        {response?.status === 400 && (
          <div className="flex justify-center items-center gap-2">
            {/* x-icon */}
            <svg
              className="w-6 h-6 text-slate-100"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="red" />
              <path
                d="M15 9L9 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9L15 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-red-600 font-semibold">
              {response?.message}
            </span>
          </div>
        )}
        <p className="w-full px-4 md:w-[30rem] text-center">
          Be the first to know about our launch date, exclusive offers and
          thrilling promotions. Don't miss out on the action – join our winning
          team today!"
        </p>
      </div>

      {/* Main Hero */}
      <div className="flex flex-col relative w-full overflow-hidden">
        <div className="absolute flex z-[1] flex-col lg:left-[200px] left-10 top-20 backdrop-blur-md bg-[#D9D9D947] rounded-full p-3">
          <Player className="w-8 h-8" loop autoplay src={HourGlassAnimate} />
          <div className="absolute w-max top-10 -translate-x-6">
            <span className="text-slate-100 w-max relative left-8">
              Swift Payment
            </span>
          </div>
        </div>
        <div className="absolute flex z-[1] flex-col backdrop-blur-md lg:left-[150px] left-5 bottom-[100px] bg-[#D9D9D947] rounded-md p-2">
          <Player className="w-12 h-12" loop autoplay src={UserLoadAnimate} />
          <div className="absolute w-max top-12 -translate-x-6">
            <span className="text-slate-100 w-max relative left-8 top-1">
              User Prioritization
            </span>
          </div>
        </div>
        <div className="absolute flex z-[1] flex-col backdrop-blur-md lg:right-[150px] right-5 top-52 bg-[#EDDFC7B2] rounded-tr-md p-2">
          <Player className="w-12 h-12" loop autoplay src={CryptoAnimate} />
          <div className="absolute w-max top-12 -left-20">
            <span className="text-slate-100 w-max relative left-8 top-1">
              Free Crypto Incentives
            </span>
          </div>
        </div>
        <div className="flex translate-y-28 md:top-0 top-12 relative flex-col gap-4 px-4 md:px-8 justify-center items-center">
          <figure
            style={{
              backgroundImage: "url('/images/herobg.png')",
            }}
            className="absolute md:h-[50rem] md:w-[50rem] w-full h-[30rem] translate-y-24 bg-contain bg-no-repeat"
          ></figure>
          <svg
            // width="1280"
            height="429"
            viewBox="0 0 1280 429"
            className="z-[-1] w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1280 410C1280 410 993.462 410 640 410C286.538 410 0 410 0 410C0 183.563 286.538 0 640 0C993.462 0 1280 183.563 1280 410Z"
              fill="#D2B37D"
              fillOpacity="0.8"
            />
            <path
              d="M1267 429C1267 429 986.282 429 640 429C293.717 429 13 429 13 429C13 193.727 293.717 3 640 3C986.282 3 1267 193.727 1267 429Z"
              fill="#022251"
            />
          </svg>
        </div>
        <Marquee
          gradient={false}
          className="w-full border-b-4 text-slate-800 py-2 border-themeColor bg-[#D9EAF4] flex justify-center items-center gap-4"
        >
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-4 justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-themeColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9408 21.956C15.2584 21.7402 17.4273 20.7194 19.0707 19.071C22.9757 15.166 22.9757 8.83399 19.0707 4.92899C15.1657 1.02399 8.83375 1.02399 4.92875 4.92899C1.02375 8.83399 1.02375 15.166 4.92875 19.071C5.92981 20.0742 7.13316 20.8527 8.45863 21.3545C9.7841 21.8562 11.2013 22.0698 12.6158 21.981C12.7246 21.9968 12.8356 21.9882 12.9408 21.956ZM3.57675 10.854C3.79059 9.26586 4.45124 7.77116 5.48175 6.54399L10.9397 12L9.85175 13.088C8.79975 12.238 7.62775 11.78 6.51075 11.48C5.86075 11.306 5.21475 11.18 4.62375 11.067L4.60775 11.063C4.24075 10.993 3.89775 10.926 3.57775 10.854H3.57675ZM3.50775 12.374C3.77375 12.43 4.04275 12.482 4.30775 12.534L4.32175 12.536C4.92475 12.653 5.52375 12.769 6.12075 12.929C7.07375 13.185 7.98175 13.545 8.78275 14.157L5.48275 17.457C4.28194 16.0268 3.58759 14.2398 3.50775 12.374ZM9.84675 15.214C10.5218 16.076 10.8868 17.02 11.1438 17.987C11.2688 18.457 11.3647 18.915 11.4618 19.379L11.5457 19.774C11.5957 20.014 11.6508 20.255 11.7108 20.495C9.81532 20.4332 7.99548 19.737 6.54275 18.518L9.84675 15.214ZM13.2397 20.41C13.1538 20.0958 13.0778 19.779 13.0118 19.46L12.9348 19.093C12.8368 18.624 12.7297 18.113 12.5938 17.601C12.2928 16.473 11.8317 15.264 10.9137 14.147L11.9998 13.061L17.4568 18.518C16.2541 19.5281 14.7939 20.1832 13.2397 20.41ZM13.0598 12L14.2718 10.789C15.3858 11.731 16.5517 12.249 17.6367 12.615C18.0837 12.767 18.5338 12.897 18.9478 13.018C19.1068 13.064 19.2608 13.108 19.4078 13.152C19.7578 13.258 20.0788 13.36 20.3717 13.473C20.1158 14.9412 19.4762 16.3157 18.5177 17.457L13.0598 12ZM19.8368 11.715L19.3347 11.568C18.9264 11.4523 18.5206 11.3276 18.1178 11.194C17.1737 10.874 16.2297 10.454 15.3368 9.72399L18.5168 6.54299C19.7834 8.05187 20.4846 9.955 20.4998 11.925C20.2798 11.85 20.0567 11.781 19.8368 11.715ZM17.4568 5.48199L14.2758 8.66299C13.5457 7.76999 13.1248 6.82599 12.8057 5.88199C12.6717 5.47894 12.547 5.07283 12.4318 4.66399C12.3818 4.49799 12.3348 4.33099 12.2838 4.16299C12.2178 3.94299 12.1497 3.71999 12.0747 3.49999C14.0446 3.51485 15.9477 4.2157 17.4568 5.48199ZM11.3837 6.36199C11.7507 7.44699 12.2678 8.61399 13.2108 9.72799L11.9998 10.94L6.54275 5.48199C7.68409 4.52359 9.05853 3.88397 10.5268 3.62799C10.6398 3.92099 10.7418 4.24099 10.8468 4.59199L10.9818 5.05199C11.1018 5.46599 11.2317 5.91499 11.3837 6.36199Z"
                    fill="#D2B37D"
                  />
                </svg>

                <div className="flex gap-2 items-center justify-center">
                  <span className="text-base">Fundraising</span>
                  <span className="font-semibold md:text-2xl text-xl">
                    $5,000,000
                  </span>
                </div>

                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-themeColor"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9408 21.956C15.2584 21.7402 17.4273 20.7194 19.0707 19.071C22.9757 15.166 22.9757 8.83399 19.0707 4.92899C15.1657 1.02399 8.83375 1.02399 4.92875 4.92899C1.02375 8.83399 1.02375 15.166 4.92875 19.071C5.92981 20.0742 7.13316 20.8527 8.45863 21.3545C9.7841 21.8562 11.2013 22.0698 12.6158 21.981C12.7246 21.9968 12.8356 21.9882 12.9408 21.956ZM3.57675 10.854C3.79059 9.26586 4.45124 7.77116 5.48175 6.54399L10.9397 12L9.85175 13.088C8.79975 12.238 7.62775 11.78 6.51075 11.48C5.86075 11.306 5.21475 11.18 4.62375 11.067L4.60775 11.063C4.24075 10.993 3.89775 10.926 3.57775 10.854H3.57675ZM3.50775 12.374C3.77375 12.43 4.04275 12.482 4.30775 12.534L4.32175 12.536C4.92475 12.653 5.52375 12.769 6.12075 12.929C7.07375 13.185 7.98175 13.545 8.78275 14.157L5.48275 17.457C4.28194 16.0268 3.58759 14.2398 3.50775 12.374ZM9.84675 15.214C10.5218 16.076 10.8868 17.02 11.1438 17.987C11.2688 18.457 11.3647 18.915 11.4618 19.379L11.5457 19.774C11.5957 20.014 11.6508 20.255 11.7108 20.495C9.81532 20.4332 7.99548 19.737 6.54275 18.518L9.84675 15.214ZM13.2397 20.41C13.1538 20.0958 13.0778 19.779 13.0118 19.46L12.9348 19.093C12.8368 18.624 12.7297 18.113 12.5938 17.601C12.2928 16.473 11.8317 15.264 10.9137 14.147L11.9998 13.061L17.4568 18.518C16.2541 19.5281 14.7939 20.1832 13.2397 20.41ZM13.0598 12L14.2718 10.789C15.3858 11.731 16.5517 12.249 17.6367 12.615C18.0837 12.767 18.5338 12.897 18.9478 13.018C19.1068 13.064 19.2608 13.108 19.4078 13.152C19.7578 13.258 20.0788 13.36 20.3717 13.473C20.1158 14.9412 19.4762 16.3157 18.5177 17.457L13.0598 12ZM19.8368 11.715L19.3347 11.568C18.9264 11.4523 18.5206 11.3276 18.1178 11.194C17.1737 10.874 16.2297 10.454 15.3368 9.72399L18.5168 6.54299C19.7834 8.05187 20.4846 9.955 20.4998 11.925C20.2798 11.85 20.0567 11.781 19.8368 11.715ZM17.4568 5.48199L14.2758 8.66299C13.5457 7.76999 13.1248 6.82599 12.8057 5.88199C12.6717 5.47894 12.547 5.07283 12.4318 4.66399C12.3818 4.49799 12.3348 4.33099 12.2838 4.16299C12.2178 3.94299 12.1497 3.71999 12.0747 3.49999C14.0446 3.51485 15.9477 4.2157 17.4568 5.48199ZM11.3837 6.36199C11.7507 7.44699 12.2678 8.61399 13.2108 9.72799L11.9998 10.94L6.54275 5.48199C7.68409 4.52359 9.05853 3.88397 10.5268 3.62799C10.6398 3.92099 10.7418 4.24099 10.8468 4.59199L10.9818 5.05199C11.1018 5.46599 11.2317 5.91499 11.3837 6.36199Z"
                    fill="#D2B37D"
                  />
                </svg>

                <div className="flex mr-2 gap-2 items-center justify-center">
                  <span className="text-base font-semibold">
                    We Are Launching Soon
                  </span>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
    </section>
  );
};

export default HeroComponent;
