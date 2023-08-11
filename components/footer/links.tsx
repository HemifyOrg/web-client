import { QuickLinkType } from "./types";
import { BsTwitter, BsDiscord, BsLinkedin } from "react-icons/bs";

export const quickLinks: QuickLinkType[] = [
  {
    title: "Products",
    subLinks: [
      { title: "Betting", href: "/product/wager" },
      { title: "Duel bet", href: "/product/duel-bet" },
      { title: "Loot box", href: "/product/loot-box", isComingSoon: true },
    ],
  },
  {
    title: "Profile",
    subLinks: [
      { title: "Settings", href: "/profile/settings" },
      { title: "Wallet", href: "/profile/wallet" },
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
