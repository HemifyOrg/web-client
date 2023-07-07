import { QuickLinkType } from "./types";
import { BsTwitter, BsDiscord, BsLinkedin } from "react-icons/bs";

export const quickLinks: QuickLinkType[] = [
  {
    title: "Products",
    subLinks: [
      { title: "Wager", href: "/product/wager" },
      { title: "Swap", href: "/product/swap" },
      { title: "Raffles", href: "/product/raffles", isComingSoon: true },
    ],
  },
  {
    title: "Profile",
    subLinks: [
      { title: "Settings", href: "/profile/settings" },
      { title: "wallet", href: "/profile/wallet" },
      { title: "Notification", href: "/profile/notification" },
    ],
  },
  {
    title: "Materials",
    subLinks: [
      { title: "Whitepaper", href: "/material/whitepaper" },
      { title: "Blog", href: "/material/blog" },
      { title: "FAQ", href: "/material/faq" },
    ],
  },
];

export const socialLinks = [
  {
    title: "Twitter",
    href: "#",
    icon: <BsTwitter className="text-black w-full h-full" />,
  },
  {
    title: "Discord",
    href: "#",
    icon: <BsDiscord className="text-black w-full h-full" />,
  },
  {
    title: "Linkedin",
    href: "#",
    icon: <BsLinkedin className="text-black w-full h-full" />,
  },
];
