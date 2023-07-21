import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { loadConfig } from "../features/configSlice";
import { useDispatch, useSelector } from "react-redux";
import ConnectWallet from "@/components/reusable/ConnectWallect";

import { AppDispatch, RootState } from "../app/store";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import Link from "next/link";

import { LogoSvg } from "@/utils";
import { OutsideAlerter } from "./reusable";

const NavBar = () => {
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

  console.log("scrolledTo5Percent", scrolledTo5Percent);

  const dispatch: AppDispatch =
    useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();
  useEffect(() => {
    dispatch(loadConfig());
  }, [dispatch, config]);

  const navLinks = [
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Swap",
      link: "/product/swap",
    },
    {
      name: "Wager",
      link: "/product/wager",
    },
    {
      name: "Bet Slip",
      link: "/product/wager/bet-slip",
    },
    {
      name: "Notifications",
      link: "/profile/notifications",
    },
    {
      name: "Settings",
      link: "/profile/settings",
    },
    {
      name: "Logout",
      link: "/auth/logout",
    },
  ];

  return (
    <React.Fragment>
      <nav
        className={`w-full ${
          scrolledTo5Percent ? "pt-0 px-1 lg:px-6" : "pt-4 px-2 lg:px-8"
        } pb-4 mb-2 left-0 right-0 select-none z-[101] transition-all fixed font-semibold`}
      >
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
              className="flex flex-col py-5 pl-5 pr-8 bg-primary rounded-l-lg h-max gap-4"
            >
              <ul className="flex flex-col gap-4 justify-start items-start">
                {navLinks.map((link, index) => (
                  <Link
                    href={link.link}
                    key={index}
                    className="border-transparent"
                  >
                    <li className="text-gray-800 text-base">{link.name}</li>
                  </Link>
                ))}
              </ul>

              <ConnectWallet textClassName={"flex"} label="Connect Wallet" />
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
              <div className="w-10 h-10 flex justify-center items-center shadow-sm bg-black rounded-lg">
                <LogoSvg className="w-full h-full" />
              </div>
            </Link>
            <ul className="gap-10 hidden lg:flex">
              <Link href="/product/swap" className="border-none text-gray-900">
                <li>Swap</li>
              </Link>
              <Link href="/product/wager" className="border-none text-gray-900">
                <li>Wager</li>
              </Link>
            </ul>
          </div>

          {/* center */}
          <div className="border lg:w-[479px] w-40 border-gray-400 p-2 rounded-full flex gap-2 items-center justify-center">
            <svg
              className="text-gray-400"
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
            <input
              type="text"
              className="select-text lg:text-base text-sm w-full bg-transparent border-none shadow-none outline-none"
              placeholder="Search..."
              name="search"
              id="search"
            />
          </div>

          {/* right */}
          <div className="flex lg:gap-6 gap-2 mr-1">
            <div className="hidden lg:flex gap-2 items-center cursor-pointer relative">
              <span
                onClick={() => {
                  setShowMaterialDropdown(!showMaterialDropdown);
                  setShowNotificationDropdown(false);
                }}
              >
                Materials
              </span>
              <svg
                onClick={() => setShowMaterialDropdown(!showMaterialDropdown)}
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* dropdown */}
              {showMaterialDropdown && (
                <div className="overflow-hidden backdrop-blur-lg rounded-xl absolute top-8 border border-themeColor -right-1 shadow-md bg-navBarColor flex flex-col gap-4">
                  <div className="flex gap-2 w-full px-4 py-2 border-b border-transparent hover:border-themeColor">
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1H4.6C6.84021 1 7.96031 1 8.81596 1.43597C9.56861 1.81947 10.1805 2.43139 10.564 3.18404C11 4.03968 11 5.15979 11 7.4V19L10.8999 18.8499C10.2053 17.808 9.85798 17.287 9.3991 16.9098C8.99286 16.5759 8.52477 16.3254 8.02161 16.1726C7.45325 16 6.82711 16 5.57482 16H4.2C3.0799 16 2.51984 16 2.09202 15.782C1.71569 15.5903 1.40973 15.2843 1.21799 14.908C1 14.4802 1 13.9201 1 12.8V4.2Z"
                        fill="#FAF7F0"
                      />
                      <path
                        d="M21 4.2C21 3.07989 21 2.51984 20.782 2.09202C20.5903 1.71569 20.2843 1.40973 19.908 1.21799C19.4802 1 18.9201 1 17.8 1H17.4C15.1598 1 14.0397 1 13.184 1.43597C12.4314 1.81947 11.8195 2.43139 11.436 3.18404C11 4.03968 11 5.15979 11 7.4V19L11.1001 18.8499C11.7947 17.808 12.142 17.287 12.6009 16.9098C13.0071 16.5759 13.4752 16.3254 13.9784 16.1726C14.5468 16 15.1729 16 16.4252 16H17.8C18.9201 16 19.4802 16 19.908 15.782C20.2843 15.5903 20.5903 15.2843 20.782 14.908C21 14.4802 21 13.9201 21 12.8V4.2Z"
                        fill="#FAF7F0"
                      />
                      <path
                        d="M11 19L10.8999 18.8499C10.2053 17.808 9.85798 17.287 9.3991 16.9098C8.99286 16.5759 8.52476 16.3254 8.02161 16.1726C7.45325 16 6.82711 16 5.57482 16H4.2C3.07989 16 2.51984 16 2.09202 15.782C1.71569 15.5903 1.40973 15.2843 1.21799 14.908C1 14.4802 1 13.9201 1 12.8V4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1H4.6C6.84021 1 7.96031 1 8.81596 1.43597C9.56861 1.81947 10.1805 2.43139 10.564 3.18404C11 4.03968 11 5.15979 11 7.4M11 19V7.4M11 19L11.1001 18.8499C11.7947 17.808 12.142 17.287 12.6009 16.9098C13.0071 16.5759 13.4752 16.3254 13.9784 16.1726C14.5467 16 15.1729 16 16.4252 16H17.8C18.9201 16 19.4802 16 19.908 15.782C20.2843 15.5903 20.5903 15.2843 20.782 14.908C21 14.4802 21 13.9201 21 12.8V4.2C21 3.07989 21 2.51984 20.782 2.09202C20.5903 1.71569 20.2843 1.40973 19.908 1.21799C19.4802 1 18.9201 1 17.8 1H17.4C15.1598 1 14.0397 1 13.184 1.43597C12.4314 1.81947 11.8195 2.43139 11.436 3.18404C11 4.03968 11 5.15979 11 7.4"
                        stroke="#D2B37D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Whitepaper</span>
                  </div>

                  <div className="flex gap-2 w-full px-4 py-2 border-t border-b border-transparent hover:border-themeColor">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V11.2C19 12.8802 19 13.7202 18.673 14.362C18.3854 14.9265 17.9265 15.3854 17.362 15.673C16.7202 16 15.8802 16 14.2 16H11.6837C11.0597 16 10.7477 16 10.4492 16.0613C10.1844 16.1156 9.9282 16.2055 9.68749 16.3285C9.41617 16.4671 9.17252 16.662 8.68521 17.0518L6.29976 18.9602C5.88367 19.2931 5.67563 19.4595 5.50054 19.4597C5.34827 19.4599 5.20422 19.3906 5.10923 19.2716C5 19.1348 5 18.8684 5 18.3355V16C4.07003 16 3.60504 16 3.22354 15.8978C2.18827 15.6204 1.37962 14.8117 1.10222 13.7765C1 13.395 1 12.93 1 12V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1Z"
                        fill="#FAF7F0"
                      />
                      <path
                        d="M8 6.00224C8.1762 5.50136 8.52397 5.07901 8.98173 4.80998C9.43949 4.54095 9.9777 4.4426 10.501 4.53237C11.0243 4.62213 11.499 4.89421 11.8409 5.30041C12.1829 5.70661 12.37 6.22072 12.3692 6.75168C12.3692 8.25056 10.1209 9 10.1209 9M10.1499 12H10.1599M5 16V18.3355C5 18.8684 5 19.1348 5.10923 19.2716C5.20422 19.3906 5.34827 19.4599 5.50054 19.4597C5.67563 19.4595 5.88367 19.2931 6.29976 18.9602L8.68521 17.0518C9.17252 16.662 9.41617 16.4671 9.68749 16.3285C9.9282 16.2055 10.1844 16.1156 10.4492 16.0613C10.7477 16 11.0597 16 11.6837 16H14.2C15.8802 16 16.7202 16 17.362 15.673C17.9265 15.3854 18.3854 14.9265 18.673 14.362C19 13.7202 19 12.8802 19 11.2V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12C1 12.93 1 13.395 1.10222 13.7765C1.37962 14.8117 2.18827 15.6204 3.22354 15.8978C3.60504 16 4.07003 16 5 16Z"
                        stroke="#D2B37D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>FAQ</span>
                  </div>

                  <div className="flex gap-2 w-full px-4 py-2 border-t border-transparent hover:border-themeColor">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.75 2.25H13.75V14.25C13.75 14.7975 13.915 15.3075 14.1722 15.75H3.25C2.3575 15.75 1.75 15.1425 1.75 14.25V2.25ZM3.25 7.5V3.75H12.25V7.5H3.25ZM3.25 9.75V8.25H7V9.75H3.25ZM8.5 9.75V8.25H12.25V9.75H8.5ZM3.25 12V10.5H7V12H3.25ZM8.5 12V10.5H12.25V12H8.5ZM3.25 14.25V12.75H7V14.25H3.25ZM8.5 14.25V12.75H12.25V14.25H8.5Z"
                        fill="#FAF7F0"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.25 7.5V3.75H12.25V7.5H3.25ZM10.75 5.25H4.75V6H10.75V5.25ZM3.25 9.75V8.25H7V9.75H3.25ZM8.5 9.75V8.25H12.25V9.75H8.5ZM3.25 12V10.5H7V12H3.25ZM8.5 12V10.5H12.25V12H8.5ZM3.25 14.25V12.75H7V14.25H3.25ZM8.5 14.25V12.75H12.25V14.25H8.5Z"
                        fill="#D2B37D"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.25 0.75V14.25C0.25 15.9075 1.5925 17.25 3.25 17.25H16.75C18.4075 17.25 19.75 15.9075 19.75 14.25V6H15.25V0.75H0.25ZM13.75 2.25H1.75V14.25C1.75 15.1425 2.3575 15.75 3.25 15.75H14.1722C13.915 15.3075 13.75 14.7975 13.75 14.25V2.25ZM18.25 7.5H15.25V14.25C15.25 15.1425 15.8575 15.75 16.75 15.75C17.6425 15.75 18.25 15.1425 18.25 14.25V7.5Z"
                        fill="#D2B37D"
                      />
                      <path d="M4.75 5.25H10.75V6H4.75V5.25Z" fill="#FAF7F0" />
                    </svg>

                    <span>Blog</span>
                  </div>
                </div>
              )}
            </div>
            {/* icons */}
            <div className="flex gap-4">
              <div className="relative hidden lg:flex items-center justify-center">
                <svg
                  onClick={() => {
                    setShowNotificationDropdown(!showNotificationDropdown);
                    setShowMaterialDropdown(false);
                  }}
                  className="cursor-pointer"
                  width="22"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2358 8.44541C12.8789 7.11328 11.926 5.99931 10.5867 5.34858C9.24742 4.69785 7.6315 4.56365 6.09443 4.97551C4.55735 5.38737 3.22502 6.31155 2.39054 7.54473C1.55606 8.77792 1.28779 10.2191 1.64473 11.5512C2.2353 13.7553 2.12063 15.5137 1.74768 16.8498C1.32261 18.3727 1.11008 19.1341 1.16749 19.287C1.23318 19.4619 1.2807 19.5099 1.45494 19.5774C1.60723 19.6364 2.247 19.465 3.52654 19.1222L15.3916 15.9429C16.6712 15.6001 17.3109 15.4286 17.4133 15.3014C17.5304 15.1558 17.5476 15.0905 17.517 14.9061C17.4903 14.745 16.9255 14.1919 15.796 13.0856C14.8049 12.1149 13.8264 10.6495 13.2358 8.44541Z"
                    fill="black"
                  />
                  <path
                    d="M11.3909 17.0149C11.8198 18.6153 10.87 20.2603 9.26961 20.6891C7.66921 21.118 6.0242 20.1682 5.59537 18.5678M7.89146 4.74097C8.19567 4.19367 8.29588 3.53217 8.12101 2.87957C7.76366 1.54591 6.39282 0.754452 5.05915 1.11181C3.72549 1.46916 2.93403 2.84 3.29138 4.17367C3.46625 4.82627 3.88378 5.34904 4.42088 5.67091M13.2358 8.44541C12.8789 7.11328 11.926 5.99931 10.5867 5.34858C9.24742 4.69785 7.6315 4.56365 6.09443 4.97551C4.55735 5.38737 3.22502 6.31155 2.39054 7.54473C1.55606 8.77792 1.28779 10.2191 1.64473 11.5512C2.2353 13.7553 2.12063 15.5137 1.74768 16.8498C1.32261 18.3727 1.11008 19.1341 1.16749 19.287C1.23318 19.4619 1.2807 19.5099 1.45494 19.5774C1.60723 19.6364 2.247 19.465 3.52654 19.1222L15.3916 15.9429C16.6711 15.6001 17.3109 15.4287 17.4133 15.3014C17.5304 15.1558 17.5476 15.0905 17.517 14.9061C17.4903 14.745 16.9255 14.1919 15.796 13.0856C14.8049 12.1149 13.8264 10.6495 13.2358 8.44541Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* badge */}
                <div className="rounded-full bg-red-600 w-3 h-3 absolute top-0 right-0"></div>
                {showNotificationDropdown && (
                  <div className="overflow-hidden backdrop-blur-lg rounded-xl absolute top-8 border border-themeColor -right-1 shadow-md bg-navBarColor flex flex-col gap-4">
                    <div className="flex gap-2 max-w-[320px] px-6 py-3 w-max border-t border-transparent hover:border-themeColor">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.63306 2.03371C7.61959 1.3649 8.79099 1 10 1C11.5913 1 13.1174 1.63214 14.2426 2.75736C15.3679 3.88258 16 5.4087 16 7C16 9.10077 16.2702 10.7512 16.6484 12.0324M4.25867 5.25724C4.08866 5.81726 4 6.40406 4 7C4 10.0902 3.22047 12.206 2.34966 13.6054C1.61513 14.7859 1.24786 15.3761 1.26132 15.5408C1.27624 15.7231 1.31486 15.7926 1.46178 15.9016C1.59446 16 2.19259 16 3.38885 16H15M7.35418 20C8.05931 20.6224 8.98555 21 10 21C11.0144 21 11.9407 20.6224 12.6458 20M19 20L1 2"
                          stroke="#D2B37D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>You have no pending notification</span>
                    </div>
                  </div>
                )}
              </div>
              {account.connected ? (
                <figure
                  className="flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat bg-[#68E1FD] rounded-full w-10 h-10"
                  style={{
                    backgroundImage: `url(/images/user-pic.png)`,
                  }}
                />
              ) : (
                <ConnectWallet label="Connect Wallet" />
              )}
              <button
                onClick={() => setShowMenu(!showMenu)}
                type="button"
                className="lg:hidden"
                title="Open Menu"
              >
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7H7M19 1H1M19 13H1"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default NavBar;
