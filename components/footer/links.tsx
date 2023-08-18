import { QuickLinkType } from "./types";
import {
  BsTwitter,
  BsDiscord,
  BsTelegram,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

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
    title: "Telegram",
    href: "https://t.me/hemify",
    icon: <BsTelegram className="text-black w-full h-full" />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/hemifybet",
    icon: <BsTwitter className="text-black w-full h-full" />,
  },
  {
    title: "Discord",
    href: "https://discord.gg/ASY6e658JB",
    icon: <BsDiscord className="text-black w-full h-full" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/HemifyBet",
    icon: <BsFacebook className="text-black w-full h-full" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/hemify_bet/",
    icon: <BsInstagram className="text-black w-full h-full" />,
  },
];
