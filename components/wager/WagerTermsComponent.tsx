import React from "react";
import { FilterMenuComponent } from "../reusable";
import FavoriteIconComponent from "../reusable/FavoriteIconComponent";

type WagerTermType = {
  name: string;
  value: string;
  isLiked: boolean;
  options: { name: string }[];
};

const TermComponent = ({ term }: { term: WagerTermType }) => (
  <div className="bg-white rounded-2xl xs:p-3 p-2 w-full flex flex-col gap-3">
    <div className="flex justify-between items-center w-full">
      <div className="flex gap-1 items-center justify-start">
        <span className="font-semibold text-gray-500 text-lg capitalize">
          {term.name}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          className="text-themeColor"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6 8.00004V6.00004M6 4.00004H6.005M1.5 3.97076V8.02932C1.5 8.20064 1.5 8.2863 1.52524 8.3627C1.54757 8.43029 1.58408 8.49233 1.63232 8.54467C1.68684 8.60384 1.76172 8.64544 1.91149 8.72865L5.61149 10.7842C5.75329 10.863 5.82419 10.9024 5.89927 10.9178C5.96573 10.9315 6.03427 10.9315 6.10073 10.9178C6.17581 10.9024 6.24671 10.863 6.38851 10.7842L10.0885 8.72865C10.2383 8.64544 10.3132 8.60384 10.3677 8.54467C10.4159 8.49233 10.4524 8.43029 10.4748 8.3627C10.5 8.2863 10.5 8.20064 10.5 8.02932V3.97076C10.5 3.79944 10.5 3.71378 10.4748 3.63738C10.4524 3.56979 10.4159 3.50775 10.3677 3.45541C10.3132 3.39624 10.2383 3.35464 10.0885 3.27144L6.38851 1.21588C6.24671 1.1371 6.17581 1.09771 6.10073 1.08227C6.03427 1.0686 5.96573 1.0686 5.89927 1.08227C5.82419 1.09771 5.75329 1.1371 5.61149 1.21588L1.91149 3.27144C1.76172 3.35464 1.68684 3.39624 1.63232 3.45541C1.58408 3.50775 1.54757 3.56979 1.52524 3.63738C1.5 3.71378 1.5 3.79944 1.5 3.97076Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex gap-4 items-center justify-end">
        <FavoriteIconComponent isLiked={term.isLiked} />
        <span className="w-5 h-5 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12 10L8 6L4 10"
              stroke="#6E5E1B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
    {/* options */}
    <div
      className={`${
        term.options.length > 2 ? "xs:grid-cols-3" : ""
      } grid-cols-2 auto-cols-fr grid gap-2 pt-3 xs:text-base text-sm pb-2 justify-items-center items-center w-full justify-center`}
    >
      {term.options.map((option, index) => (
        <button
          key={index}
          type="button"
          className="bg-gray-200 rounded-lg flex justify-center items-center xs:p-5 p-2 w-full h-full"
        >
          <span className="xs:text-base capitalize text-sm text-gray-900 font-medium">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  </div>
);

const tabs = [
  { name: "all" },
  { name: "favorite" },
  { name: "winner" },
  { name: "both-team-scores" },
  { name: "over/under" },
  { name: "handicap" },
  { name: "cards" },
  { name: "throwings" },
  { name: "minutes" },
];

const termsList: WagerTermType[] = [
  {
    name: "winner",
    value: "winner",
    isLiked: true,
    options: [{ name: "home" }, { name: "draw" }, { name: "away" }],
  },
  {
    name: "both team scores",
    value: "both-team-scores",
    isLiked: false,
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    name: "over 1.5 goals",
    value: "over/under",
    isLiked: false,
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    name: "over 2.5 goals",
    value: "over/under",
    isLiked: true,
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    name: "over 5.5 corners",
    value: "over/under",
    isLiked: false,
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    name: "over 10.5 corners",
    value: "over/under",
    isLiked: false,
    options: [{ name: "yes" }, { name: "no" }],
  },
  {
    name: "Win both halves",
    value: "over/under",
    isLiked: false,
    options: [{ name: "yes" }, { name: "no" }],
  },
];
const WagerTermsComponent = () => {
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [terms, setTerms] = React.useState(termsList);
  const [filteredTerms, setFilteredTerms] = React.useState(termsList);

  React.useEffect(() => {
    setFilteredTerms(
      terms.filter((term) =>
        selectedTab === "favorite"
          ? term.isLiked
          : term.value === selectedTab || selectedTab === "all"
      )
    );
  }, [selectedTab]);

  return (
    <div className="w-full mt-5 flex flex-col gap-6 overflow-hidden">
      <FilterMenuComponent
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {/* terms */}
      <div className="flex gap-2 flex-col items-center justify-center w-full">
        {filteredTerms.map((term, index) => (
          <TermComponent term={term} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WagerTermsComponent;
