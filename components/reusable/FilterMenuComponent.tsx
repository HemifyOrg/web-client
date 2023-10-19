import React from "react";
import { motion } from "framer-motion";

type Props = {
  tabs: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  tabs2?: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  selectedTab2?: string;
  setSelectedTab2?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  rightIcon?: React.ReactNode;
  handleRightIconClick?: () => void;
};

const FilterMenuComponent: React.FC<Props> = ({
  tabs,
  tabs2,
  selectedTab,
  setSelectedTab,
  selectedTab2,
  setSelectedTab2,
  className,
  rightIcon,
  handleRightIconClick,
}) => {
  return (
    <div
      className={`bg-white ${
        tabs2 && selectedTab2 && setSelectedTab2
          ? "rounded-3xl"
          : "rounded-full"
      } flex relative overflow-hidden gap-1 divide-x-2s`}
    >
      <div className="flex flex-col w-full">
        <div
          className={
            className ||
            `mx-auto overflow-x-auto w-full px-4 py-2 shadow-sm bg-white flex gap-4 items-center justify-start`
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
              } px-8 py-[2px] rounded-full `}
            >
              <span className="w-6 h-6">{tab.icon}</span>
              <span className="text-xs capitalize">{tab.name}</span>
            </motion.button>
          ))}
        </div>
        {tabs2 && selectedTab2 && setSelectedTab2 && (
          <div
            className={
              className ||
              `mx-auto overflow-x-auto w-full px-4 py-2 shadow-sm bg-white flex gap-4 items-center justify-start`
            }
          >
            {tabs2.map((tab, index) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => setSelectedTab2(tab.name)}
                key={index}
                className={`flex gap-2 items-center ${
                  selectedTab2 === tab.name
                    ? "bg-darkGold text-white"
                    : "hover:border-darkGold border text-gray-700 bg-secondary"
                } px-8 py-[2px] rounded-full `}
              >
                <span className="w-6 h-6">{tab.icon}</span>
                <span className="text-xs capitalize">{tab.name}</span>
              </motion.button>
            ))}
          </div>
        )}
      </div>
      {rightIcon && (
        <span
          onClick={handleRightIconClick}
          className="flex my-auto px-2 ml-1 justify-center items-center border-l-2 border-gray-200"
        >
          {rightIcon}
        </span>
      )}
    </div>
  );
};

export default FilterMenuComponent;
