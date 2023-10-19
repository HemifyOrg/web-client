import Image from "next/image";
import { UserComponent } from "../reusable";

const LeaderBoardComponent = () => {
  const usersList = [
    {
      username: "russellfrank",
      image: "/images/ape4.png",
      position: 1,
      wins: 41,
      wagers: 53,
      totalStake: 678987,
    },
    {
      username: "divuzki",
      image: "/images/ape.webp",
      position: 2,
      wins: 40,
      wagers: 47,
      totalStake: 566776,
    },
    {
      username: "johnbiko",
      image: "/images/ape3.png",
      position: 3,
      wins: 35,
      wagers: 40,
      totalStake: 364011,
    },
    {
      username: "amonk_",
      image: "/images/ape2.png",
      position: 4,
      wins: 29,
      wagers: 34,
      totalStake: 234765,
    },
    {
      username: "julie_mutie",
      image: "/images/ape4.png",
      position: 5,
      wins: 29,
      wagers: 20,
      totalStake: 123098,
    },
  ];
  return (
    <section id="leaderboard" className="py-8 flex flex-col lg:gap-8 gap-2">
      {/* top */}
      <h1 className="flex gap-2 mb-4 items-center text-lg mx-auto font-semibold">
      Leaderboard{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M8.93333 2.50391L7.06667 2.50391C6.6933 2.50391 6.50661 2.50391 6.36401 2.57657C6.23856 2.64048 6.13658 2.74247 6.07266 2.86791C6 3.01052 6 3.1972 6 3.57057L6 5.17057L6 14.5039H10V7.83724V3.57057L9.99998 3.50272C9.99972 3.17405 9.99546 3.00161 9.92734 2.86791C9.86342 2.74247 9.76144 2.64048 9.63599 2.57657C9.49339 2.50391 9.3067 2.50391 8.93333 2.50391Z"
            fill="#9276B9"
          />
          <path
            d="M12.9333 7.83724H10V14.5039H12.9333C13.3067 14.5039 13.4934 14.5039 13.636 14.4312C13.7614 14.3673 13.8634 14.2653 13.9273 14.1399C14 13.9973 14 13.8106 14 13.4372V8.90391C14 8.53054 14 8.34385 13.9273 8.20125C13.8634 8.0758 13.7614 7.97382 13.636 7.9099C13.4934 7.83724 13.3067 7.83724 12.9333 7.83724Z"
            fill="#9276B9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3.57057L9.99998 3.50272L10 7.83724V3.57057Z"
            fill="#9276B9"
          />
          <path
            d="M6 5.17057H3.06667C2.6933 5.17057 2.50661 5.17057 2.36401 5.24324C2.23856 5.30715 2.13658 5.40914 2.07266 5.53458C2 5.67719 2 5.86387 2 6.23724V13.4372C2 13.8106 2 13.9973 2.07266 14.1399C2.13658 14.2653 2.23856 14.3673 2.36401 14.4312C2.50661 14.5039 2.6933 14.5039 3.06667 14.5039H6L6 5.17057Z"
            fill="#9276B9"
          />
          <path
            d="M6 5.17057H3.06667C2.6933 5.17057 2.50661 5.17057 2.36401 5.24324C2.23856 5.30715 2.13658 5.40914 2.07266 5.53458C2 5.67719 2 5.86387 2 6.23724V13.4372C2 13.8106 2 13.9973 2.07266 14.1399C2.13658 14.2653 2.23856 14.3673 2.36401 14.4312C2.50661 14.5039 2.6933 14.5039 3.06667 14.5039H6M6 5.17057L6 3.57057M6 5.17057L6 14.5039M6 14.5039H10M6 14.5039L6 3.57057M10 7.83724H12.9333C13.3067 7.83724 13.4934 7.83724 13.636 7.9099C13.7614 7.97382 13.8634 8.0758 13.9273 8.20125C14 8.34385 14 8.53054 14 8.90391V13.4372C14 13.8106 14 13.9973 13.9273 14.1399C13.8634 14.2653 13.7614 14.3673 13.636 14.4312C13.4934 14.5039 13.3067 14.5039 12.9333 14.5039H10M10 7.83724V3.57057M10 7.83724V14.5039M10 7.83724L9.99998 3.50272M10 14.5039V3.57057M10 3.57057C10 3.54724 10 3.52463 9.99998 3.50272M10 3.57057L9.99998 3.50272M6 3.57057C6 3.1972 6 3.01052 6.07266 2.86791C6.13658 2.74247 6.23857 2.64048 6.36401 2.57657C6.50661 2.50391 6.6933 2.50391 7.06667 2.50391L8.93333 2.50391C9.3067 2.50391 9.49339 2.50391 9.63599 2.57657C9.76144 2.64048 9.86342 2.74247 9.92734 2.86791C9.99546 3.00161 9.99972 3.17405 9.99998 3.50272"
            stroke="#7350A4"
            strokeWidth="0.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h1>

      <div className="flex flex-col gap-4 justify-center items-center md:px-4 px-2 w-full">
        {usersList.map((user, index) => (
          <div
            key={index}
            className="md:px-4 p-2 md:py-3 bg-[#FAFAFA] flex md:gap-6 gap-3 rounded-xl items-center"
          >
            <div className="flex md:gap-4 gap-2">
              {/* position */}
              <div className="relative mt-[2px]">
                <span className="text-[#353535] font-bold absolute w-full flex justify-center items-center top-1">
                  {user.position}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.54645 11.6287L16 1.8541L29.4535 11.6287L24.3148 27.4443H7.68525L2.54645 11.6287Z"
                    fill={`url(#paint${index}_linear_${user.position})`}
                    stroke={
                      user.position === 1
                        ? "#DAB800"
                        : user.position === 2
                        ? "#C0C0C0"
                        : user.position === 3
                        ? "#CD7F32"
                        : "transparent"
                    }
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient
                      id={`paint${index}_linear_${user.position}`}
                      x1="16"
                      y1="0"
                      x2="16"
                      y2="32"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.145389"
                        stopColor={
                          user.position === 1
                            ? "#DAB800"
                            : user.position === 2
                            ? "#C0C0C0"
                            : user.position === 3
                            ? "#CD7F32"
                            : "transparent"
                        }
                      />
                      <stop
                        offset="0.504772"
                        stopColor={
                          user.position < 3 ? "#F5F5F5" : "transparent"
                        }
                      />
                      <stop
                        offset="0.853738"
                        stopColor={
                          user.position === 1
                            ? "#DAB800"
                            : user.position === 2
                            ? "#C0C0C0"
                            : user.position === 3
                            ? "#CD7F32"
                            : "transparent"
                        }
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <UserComponent
                src={user.image}
                className="flex gap-1 flex-wrap items-center"
                username={user.username}
              />
            </div>

            <div className="flex md:gap-6 gap-2 items-center">
              {/* wins */}
              <div className="flex flex-col gap-3">
                <span className="md:text-lg font-medium text-gray-400">
                  No. of wins
                </span>
                <span className="font-medium md:text-lg">{user.wins}</span>
              </div>

              {/* wagers */}
              <div className="flex flex-col gap-3">
                <span className="md:text-lg font-medium text-gray-400">
                  No. of wagers
                </span>
                <span className="font-medium md:text-lg">{user.wagers}</span>
              </div>

              {/* total staked */}
              <div className="flex flex-col gap-3">
                <span className="md:text-lg font-medium text-gray-400">
                  Total Staked
                </span>
                <span className="font-medium md:text-lg">
                  ${user.totalStake.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="text-2xl font-medium my-5 border-b-2 border-darkGold opacity-90 mx-auto text-darkGold"
      >
        View all
      </button>
    </section>
  );
};

export default LeaderBoardComponent;
