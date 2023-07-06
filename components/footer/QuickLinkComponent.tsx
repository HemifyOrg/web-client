import React from "react";
import { QuickLinkType } from "./types";
import Link from "next/link";

const QuickLinkComponent = ({
  link,
  index,
}: {
  link: QuickLinkType;
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col ${
        index % 2 !== 0 ? "justify-center md:items-start items-end" : ""
      } gap-3`}
    >
      <h4 className="text-base font-semibold text-gray-100">{link.title}</h4>
      <div
        className={`flex flex-col ${
          index % 2 !== 0 ? "justify-center md:items-start items-end" : ""
        } gap-2`}
      >
        {link.subLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm font-light flex md:gap-4 gap-2 no-underline border-none decoration-transparent text-gray-100 hover:text-gray-200"
          >
            <span>{link.title}</span>
            {link.isComingSoon && (
              <span className="text-xs font-light bg-[#938558] rounded-full p-1 text-gray-100">
                Coming Soon
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinkComponent;
