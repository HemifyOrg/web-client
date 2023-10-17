import React from "react";
import { motion } from "framer-motion";

type Props = {
  tabs: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const FilterComponent: React.FC<Props> = ({
  tabs,
  selectedTab,
  setSelectedTab,
  className,
}) => {
  return (
    <div
      className={
        className ||
        `mx-auto overflow-x-auto w-full px-4 py-2 shadow-sm rounded-full bg-white flex gap-4 items-center justify-start`
      }
    >
      {tabs.map((tab, index) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={() => setSelectedTab(tab.name)}
          key={index}
          className={`flex gap-2 items-center ${
            selectedTab === tab.name
              ? "bg-darkGold text-white"
              : "hover:border-darkGold border text-gray-700 bg-secondary"
          } px-8 py-1 rounded-full `}
        >
          <span className="w-6 h-6">{tab.icon}</span>
          <span className="text-xs capitalize">{tab.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default FilterComponent;
