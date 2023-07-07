import React from "react";
import { SocialLink } from "./types";
import Link from "next/link";

const SocialLinkComponent = ({ link }: { link: SocialLink }) => {
  return (
    <Link
      href={link.href}
      className="p-[6px] bg-[#EDDFC7B2] rounded-full w-8 h-8 flex justify-center items-center"
      title={link.title}
    >
      {link.icon}
    </Link>
  );
};

export default SocialLinkComponent;
