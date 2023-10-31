import React from "react";

const WagerAmountComponent = ({
  setWagerAmount,
  wagerAmount,
  setShowReviewScreen,
}: {
  setWagerAmount: React.Dispatch<React.SetStateAction<number>>;
  wagerAmount: number;
  setShowReviewScreen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col h-full w-full px-8 gap-16">
      <figure
        style={{
          backgroundImage: `url(/images/assets/dollar-dollar-gradient.png)`,
        }}
        className="bg-[#592d97] bg-no-repeat bg-contain bg-right rounded-xl relative w-full mt-5 px-4 py-7 flex flex-col justify-start items-center"
      >
        <span className="text-gray-200">Wallet balance</span>
        <span className="text-4xl text-[#FFDE59] font-semibold">$7893.02</span>
      </figure>

      <div className="flex flex-col gap-3 w-full justify-center items-center px-2">
        <span>Input your wager amount</span>
        <div className="w-full flex bg-white gap-2 overflow-hidden rounded-full p-3">
          <input
            value={wagerAmount === 0 ? "" : wagerAmount}
            onChange={(e) => {
              // validate wager amount to only accept numbers with 2 decimal places'
              let value = e.target.value;
              let regex = /^\d*\.?\d{0,2}$/;
              if (regex.test(value)) {
                setWagerAmount(parseFloat(value));
              }
            }}
            type="number"
            className="w-full outline-none px-2"
          />
          <div className="border-l bg-gray-600 h-5 my-auto" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#26A17B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4411 13.0373V13.0358C13.3586 13.0418 12.9334 13.0673 11.9846 13.0673C11.2271 13.0673 10.6939 13.0448 10.5064 13.0358V13.038C7.59036 12.9098 5.41386 12.402 5.41386 11.7945C5.41386 11.1878 7.59036 10.68 10.5064 10.5495V12.5325C10.6969 12.546 11.2429 12.5783 11.9974 12.5783C12.9026 12.5783 13.3564 12.5408 13.4411 12.5333V10.551C16.3511 10.6808 18.5224 11.1885 18.5224 11.7945C18.5224 12.402 16.3511 12.9083 13.4411 13.0373ZM13.4411 10.3448V8.57026H17.5016V5.86426H6.44586V8.57026H10.5064V10.344C7.20636 10.4955 4.72461 11.1495 4.72461 11.9325C4.72461 12.7155 7.20636 13.3688 10.5064 13.521V19.2075H13.4411V13.5195C16.7359 13.368 19.2116 12.7148 19.2116 11.9325C19.2116 11.1503 16.7359 10.497 13.4411 10.3448Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="w-full px-4 my-20">
        <button
          type="button"
          disabled={isNaN(wagerAmount) || wagerAmount === 0}
          onClick={(e) =>
            setShowReviewScreen(
              !e.currentTarget.disabled ||
                !(isNaN(wagerAmount) || wagerAmount === 0)
            )
          }
          className="mx-auto bg-themeColor xs:px-20 w-full px-10 py-4 text-gray-100 rounded-full shadow"
        >
          Review wager
        </button>
      </div>
    </div>
  );
};

export default WagerAmountComponent;
