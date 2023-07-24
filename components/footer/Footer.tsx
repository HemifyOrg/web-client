import { LogoSvg } from "@/utils";
import React from "react";
import { quickLinks, socialLinks } from "./links";
import QuickLinkComponent from "./QuickLinkComponent";
import SocialLinkComponent from "./SocialLinkComponent";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col px-2 divide-y-[0.5px] divide-[#3F3626] lg:px-8 gap-4 pb-2 pt-4 bg-footerBg">
      <div className="flex lg:flex-row gap-4 flex-col w-full justify-between">
        {/* logo section */}
        <div className="flex flex-col gap-2 justify-center items-start">
          <div className="flex flex-col gap-1">
            <figure className="flex items-center justify-center overflow-hidden w-12 h-12 bg-white p-2 shadow-md rounded-full">
              <LogoSvg className="w-full h-full" />
            </figure>
            <span className="lg:text-base text-sm text-gray-100">
              Powered by BBLabs
            </span>
          </div>
          <span className="text-xl font-semibold text-gray-100">
            Uniting the Web through Blockchain
          </span>
        </div>

        {/* quick links section */}
        <div className="md:flex w-full grid grid-cols-2 flex-wrap gap-4 justify-between items-center">
          {quickLinks.map((link, index) => (
            <QuickLinkComponent key={index} index={index} link={link} />
          ))}
          {/* contact us */}
          <div className="flex flex-col gap-3 md:justify-center justify-start md:items-start items-end">
            <span className="text-lg font-semibold text-gray-100">
              Contacts
            </span>

            <div className="flex flex-wrap gap-2 select-none items-center">
              {socialLinks.map((link, index) => (
                <SocialLinkComponent key={index} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <span className="md:text-base sm:text-sm text-xs font-light text-gray-100">
          Copyright © {currentYear}
        </span>
        <span className="md:text-base sm:text-sm text-xs font-light text-gray-100">
          Hemifiy.{"  "}Right Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
