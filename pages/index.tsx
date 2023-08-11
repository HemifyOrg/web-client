import { useState, useEffect } from "react";
import { MainComponent } from "@/components/landing";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [selectedNav, setSelectedNav] = useState(-1);
  const router = useRouter();
  const { asPath } = router;
  const navLinks = [
    {
      name: "Products",
      href: "#top",
    },
    {
      name: "How it works",
      href: "#how-it-works",
    },
    {
      name: "Roadmap",
      href: "#roadmap",
    },
    {
      name: "About Us",
      href: "#about-us",
    },
  ];

  useEffect(() => {
    // get the current hash from the url
    let hash = asPath && asPath.split("#")[1];
    // if the hash is not empty
    if (hash && hash !== "") {
      // get the index of the nav link that matches the hash
      const index = navLinks.findIndex((link) => link.href === hash);

      // if the index is not -1 (not found)
      if (index !== -1) {
        // set the selected nav to the index
        setSelectedNav(index);
      }
    }
  }, [asPath]);

  // auto scroll to the selected nav
  useEffect(() => {
    // get the selected nav link
    const selectedNavLink = navLinks[selectedNav];
    // if the selected nav link is not undefined
    if (selectedNavLink) {
      // scroll to the selected nav link
      document
        .getElementById(selectedNavLink.href.replace("#", ""))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedNav]);

  return (
    <div className="w-full h-full text-white">
      <nav className="flex bg-[#01173751] backdrop-blur-sm md:px-6 px-4 justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/favicon.ico" alt="logo" className="h-8 w-8 mr-2" />
        </div>
        <div className="md:flex hidden gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              onClick={() => setSelectedNav(navLinks.indexOf(link))}
              key={link.name}
              className={`text-gray-200 font-medium mx-2 border-b ${
                selectedNav === navLinks.indexOf(link)
                  ? "border-themeColor"
                  : "border-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <button className="border-themeColor border px-4 py-2 rounded-md text-sm font-medium">
            Contact Us
          </button>
          <button className="md:hidden flex justify-end items-center">
            <svg
              width="31"
              height="24"
              viewBox="0 0 31 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.375 21.375H28.625M2.375 12H28.625M2.375 2.625H28.625"
                stroke="#E4A951"
                strokeWidth="4.16667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
      <MainComponent />
    </div>
  );
}
