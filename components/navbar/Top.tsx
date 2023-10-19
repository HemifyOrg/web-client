import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { loadConfig } from "../../features/configSlice";
import { useDispatch, useSelector } from "react-redux";
import ConnectWallet from "@/components/reusable/ConnectWallect";

import { AppDispatch, RootState } from "../../app/store";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import Link from "next/link";

import { LogoSvg } from "@/utils";
import { OutsideAlerter } from "../reusable";
import Image from "next/image";

const TopNav = () => {
  const [showMaterialDropdown, setShowMaterialDropdown] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const config = useSelector((state: RootState) => state.config);
  const account = useSelector((state: RootState) => state.account);
  const [showMenu, setShowMenu] = useState(false);
  const [hoverNav, setHoverNav] = useState(false);
  const [scrolledTo5Percent, setScrolledTo5Percent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollY / (pageHeight - viewportHeight)) * 100;
      setScrolledTo5Percent(scrollPercentage >= 5);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dispatch: AppDispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  useEffect(() => {
    dispatch(loadConfig());
  }, [dispatch, config]);

  const navLinks = [
    {
      name: "Profile",
      link: "/profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Notifications",
      link: "/profile/notifications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M14.3909 18.0153C14.8197 19.6157 13.8699 21.2607 12.2695 21.6895C10.6691 22.1183 9.02414 21.1686 8.59531 19.5682M10.8914 5.74134C11.1956 5.19404 11.2958 4.53254 11.121 3.87994C10.7636 2.54627 9.39275 1.75482 8.05909 2.11217C6.72542 2.46953 5.93397 3.84037 6.29132 5.17404C6.46619 5.82663 6.88372 6.3494 7.42082 6.67128M16.2358 9.44578C15.8788 8.11364 14.9259 6.99968 13.5866 6.34895C12.2474 5.69822 10.6314 5.56402 9.09437 5.97588C7.55729 6.38774 6.22496 7.31191 5.39048 8.5451C4.556 9.77829 4.28773 11.2195 4.64467 12.5516C5.23524 14.7557 5.12057 16.514 4.74761 17.8502C4.32255 19.373 4.11001 20.1345 4.16743 20.2874C4.23312 20.4623 4.28064 20.5103 4.45488 20.5778C4.60717 20.6368 5.24694 20.4654 6.52648 20.1225L18.3915 16.9433C19.6711 16.6004 20.3109 16.429 20.4132 16.3018C20.5304 16.1562 20.5475 16.0909 20.517 15.9065C20.4902 15.7454 19.9255 15.1922 18.7959 14.086C17.8049 13.1153 16.8264 11.6498 16.2358 9.44578Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Settings",
      link: "/profile/settings",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Connect your Wallet",
      onclick: () => setShowMenu(false),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M16.5 14H16.51M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7L5 7C3.89543 7 3 6.10457 3 5ZM3 5C3 3.89543 3.89543 3 5 3H17M17 14C17 14.2761 16.7761 14.5 16.5 14.5C16.2239 14.5 16 14.2761 16 14C16 13.7239 16.2239 13.5 16.5 13.5C16.7761 13.5 17 13.7239 17 14Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Support",
      link: "/support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V18M5.5 21C4.11929 21 3 19.8807 3 18.5V16.5C3 15.1193 4.11929 14 5.5 14C6.88071 14 8 15.1193 8 16.5V18.5C8 19.8807 6.88071 21 5.5 21ZM18.5 21C17.1193 21 16 19.8807 16 18.5V16.5C16 15.1193 17.1193 14 18.5 14C19.8807 14 21 15.1193 21 16.5V18.5C21 19.8807 19.8807 21 18.5 21Z"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Logout",
      link: "/auth/logout",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 17.0003L21 12.0003M21 12.0003L16 7.00031M21 12.0003H9M12 17.0003C12 17.2959 12 17.4437 11.989 17.5717C11.8748 18.9023 10.8949 19.9972 9.58503 20.2576C9.45903 20.2826 9.31202 20.299 9.01835 20.3316L7.99694 20.4451C6.46248 20.6156 5.69521 20.7008 5.08566 20.5058C4.27293 20.2457 3.60942 19.6518 3.26118 18.8728C3 18.2885 3 17.5165 3 15.9726V8.028C3 6.48407 3 5.71211 3.26118 5.12783C3.60942 4.34879 4.27293 3.75491 5.08566 3.49483C5.69521 3.29978 6.46246 3.38502 7.99694 3.55552L9.01835 3.66901C9.31212 3.70165 9.45901 3.71797 9.58503 3.74303C10.8949 4.00346 11.8748 5.09835 11.989 6.42891C12 6.55694 12 6.70473 12 7.00031"
            stroke="#FF3333"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <React.Fragment>
      <nav
        className={`w-full ${
          scrolledTo5Percent ? "pt-0 px-1 lg:px-6" : "pt-4 px-2 lg:px-8"
        } pb-4 mb-2 left-0 right-0 select-none z-[101] transition-all fixed font-medium`}
      >
        {/* menu */}
        <div
          className={`flex fixed w-screen justify-end h-screen transition-all ${
            showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
          } top-0 xs:px-8 lg:px-12 md:px-6 px-3 left-0 bg-[#0000001a]`}
        >
          <OutsideAlerter
            visible={showMenu}
            setState={hoverNav === false ? setShowMenu : undefined}
            className="h-max"
          >
            <motion.div
              initial={{ x: "100%", y: scrolledTo5Percent ? 70 : 80 }}
              animate={
                showMenu
                  ? { x: 0, y: scrolledTo5Percent ? 70 : 80 }
                  : { x: "100%", y: scrolledTo5Percent ? 70 : 80 }
              }
              exit={{ x: "100%", y: scrolledTo5Percent ? 70 : 80 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col pb-4 bg-gray-100 rounded-xl h-max gap-4"
            >
              <div className="w-full rounded-2xl -translate-y-1 px-6 py-6 bg-darkGold flex justify-between items-center">
                <span className="text-gray-200 flex flex-col text-base">
                  <span>Wallet</span> <span>balance</span>
                </span>
                <span className="text-lg text-slate-50">$7893.02</span>
              </div>
              <ul className="flex flex-col gap-2 justify-start items-start">
                {navLinks.map((link, index) => (
                  <li
                    onClick={() => {
                      setTimeout(() => setShowMenu(false), 200);
                    }}
                    key={index}
                    className="flex w-full md:hover:bg-slate-200 active:bg-slate-200 group pl-4 pr-6 py-2 items-center justify-start gap-2 cursor-pointer select-none"
                  >
                    <div className="w-11 h-11 p-2 border group-hover:border-gray-500 rounded-xl flex items-center justify-center bg-[#E8E8E8]">
                      <span className="w-full h-full">{link.icon}</span>
                    </div>
                    {link.link ? (
                      <Link
                        href={link.link}
                        key={index}
                        className="border-transparent hover:border-transparent hover:opacity-100"
                      >
                        <li className="text-gray-800 text-lg">{link.name}</li>
                      </Link>
                    ) : (
                      <li
                        className="text-gray-800 text-lg cursor-pointer"
                        onClick={link.onclick}
                        key={index}
                      >
                        {link.name}
                      </li>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </OutsideAlerter>
        </div>
        <div
          onMouseEnter={() => setHoverNav(true)}
          onMouseLeave={() => setHoverNav(false)}
          className={`shadow-sm w-full lg:pr-4 transition-all px-1 lg:pl-2 pb-2 ${
            scrolledTo5Percent ? "rounded-b-3xl pt-[10px]" : "rounded-3xl pt-2"
          } bg-navBarColor backdrop-blur-md flex items-center justify-between lg:gap-0 gap-5`}
        >
          {/* left */}
          <div className="flex ml-2 gap-20 items-center lg:justify-between justify-center lg:ml-0">
            <Link href="/" className="border-none hover:border-none">
              <div className="w-10 h-10 flex justify-center items-center shadow-md bg-white p-2 rounded-lg">
                <LogoSvg className="w-full h-full" />
              </div>
            </Link>
          </div>

          {/* right */}
          <div className="flex gap-4 mr-1 items-center">
            <span>
              <svg
                className="text-gray-600"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19L14.65 14.65M9 4C11.7614 4 14 6.23858 14 9M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="flex gap-4 w-max items-center">
              <div
                className="pl-1 pr-3 py-1 flex gap-2 bg-darkGold rounded-full items-center justify-center cursor-pointer relative"
                onClick={() => setShowMenu(!showMenu)}
              >
                <figure className="relative overflow-hidden w-6 h-6 flex justify-center items-center rounded-full bg-[#68E1FD]">
                  <Image
                    width={30}
                    height={30}
                    className="rounded-full w-full h-full object-cover"
                    src="/images/user-pic.png"
                    alt="Profile"
                  />
                </figure>

                <span className="text-gray-200 text-sm">$7893.02</span>
              </div>
              <Link
                href={"/auth/signup"}
                className="bg-darkGold hidden hover:border-s-blue-950 hover:border-e-blue-950 hover:opacity-100 active:scale-90 transition-all text-gray-100 py-1 px-3 rounded-full"
              >
                Sign up
              </Link>

              <Link
                href={"/auth/signup"}
                className="border-darkGold hidden hover:border-s-blue-950 hover:border-e-blue-950 hover:opacity-100 active:scale-90 transition-all border-2 text-gray-900 py-1 px-3 rounded-full"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default TopNav;
