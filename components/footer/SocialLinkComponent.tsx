import React from "react";
import { SocialLink } from "./types";

const SocialLinkComponent = ({ link }: { link: SocialLink }) => {
  return (
    <a
      href={link.href}
      rel="noreferrer"
      target="_blank"
      className="p-[6px] bg-primary rounded-full w-8 h-8 flex justify-center items-center"
      title={link.title}
    >
      {link.icon}
    </a>
  );
};

export default SocialLinkComponent;
