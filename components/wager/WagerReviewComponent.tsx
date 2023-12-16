import { EventType, SelectedTermType } from "@/utils/types";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "framer-motion";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "@/graphql/mutations";
import errorHandler from "@/apollo/errorHandler";
import { alertActions } from "@/app/actions";

const WagerCreateSuccessCardComponent = () => {
  const [showShareCard, setShowShareCard] = React.useState(false);
  return (
    <div className="fixed left-0 top-0 justify-center items-center xs:px-8 px-4 flex bg-[#000a] w-full h-full z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
        className="flex flex-col gap-4 mt- justify-center items-center sm:w-[80%] w-full rounded-2xl bg-white px-4 py-10"
      >
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-lg font-semibold">Awesome!</h1>
          <h3 className="text-gray-600">Your wager is successfully created</h3>
        </div>
        <div className="flex w-full justify-center items-center">
          <figure
            className="w-[155px] h-[155px] bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(/images/assets/fist-bump.png)`,
            }}
          />
        </div>
        <div className="flex flex-col w-full gap-4 relative">
          {showShareCard && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-[7.35rem] w-full flex justify-center px-5"
            >
              <div className="border-2 border-gray-300 bg-white px-4 py-6 rounded-xl w-full flex gap-4 flex-col">
                <div className="flex justify-start items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.49233 10.365L0 0.833252H5.93445L10.5594 6.72451L15.5004 0.859777H18.7688L12.1397 8.73747L20 18.7499H14.0833L9.07538 12.3789L3.72896 18.7323H0.44287L7.49233 10.365ZM14.9457 16.9839L3.63881 2.59931H5.07138L16.364 16.9839H14.9457Z"
                      fill="black"
                    />
                  </svg>
                  <span>Share on X</span>
                </div>
                <div className="flex justify-start items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.25 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V13.75M5.16667 17.5H11.9167C12.8501 17.5 13.3168 17.5 13.6733 17.3183C13.9869 17.1586 14.2419 16.9036 14.4017 16.59C14.5833 16.2335 14.5833 15.7668 14.5833 14.8333V8.08333C14.5833 7.14991 14.5833 6.6832 14.4017 6.32668C14.2419 6.01308 13.9869 5.75811 13.6733 5.59832C13.3168 5.41667 12.8501 5.41667 11.9167 5.41667H5.16667C4.23325 5.41667 3.76654 5.41667 3.41002 5.59832C3.09641 5.75811 2.84144 6.01308 2.68166 6.32668C2.5 6.6832 2.5 7.14991 2.5 8.08333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Copy wager id</span>
                </div>
              </div>
            </motion.div>
          )}
          <button
            type="button"
            onClick={() => setShowShareCard(!showShareCard)}
            className="mx-auto bg-themeColor flex justify-center gap-2 items-center xs:px-20 w-full px-10 py-3 text-gray-100 rounded-full shadow"
          >
            {showShareCard ? (
              <span>Hide</span>
            ) : (
              <>
                <span>Share wager</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M4.5 9C3.57003 9 3.10504 9 2.72354 9.10222C1.68827 9.37962 0.879624 10.1883 0.602223 11.2235C0.5 11.605 0.5 12.07 0.5 13V14.2C0.5 15.8802 0.5 16.7202 0.82698 17.362C1.1146 17.9265 1.57354 18.3854 2.13803 18.673C2.77976 19 3.61984 19 5.3 19H13.7C15.3802 19 16.2202 19 16.862 18.673C17.4265 18.3854 17.8854 17.9265 18.173 17.362C18.5 16.7202 18.5 15.8802 18.5 14.2V13C18.5 12.07 18.5 11.605 18.3978 11.2235C18.1204 10.1883 17.3117 9.37962 16.2765 9.10222C15.895 9 15.43 9 14.5 9M13.5 5L9.5 1M9.5 1L5.5 5M9.5 1V13"
                    stroke="#FAFAFA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
          <button
            type="button"
            className="mx-auto border-themeColor border xs:px-20 w-full px-10 py-3 text-themeColor rounded-full shadow"
          >
            View in the Lobby
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const WagerReviewComponent = ({
  selectedWagerTerm,
  wagerAmount,
  fixture,
}: {
  selectedWagerTerm: SelectedTermType | null;
  wagerAmount: number;
  fixture: EventType;
}) => {
  const router = useRouter();
  const { eventCategory } = router.query;
  const [showPopup, setShowPopup] = React.useState(false);
  const [createEvent, { loading }] = useMutation(CREATE_EVENT);
  return (
    <div className="flex flex-col gap-4 px-4 justify-center items-center">
      {showPopup && <WagerCreateSuccessCardComponent />}
      <div className="bg-secondary rounded-lg w-full flex gap-2 px-2 py-3 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className="mx-1"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8 5.33335V8.00002M8 10.6667H8.00667M2 5.29431V10.7057C2 10.9341 2 11.0484 2.03366 11.1502C2.06343 11.2403 2.11211 11.3231 2.17642 11.3929C2.24912 11.4718 2.34897 11.5272 2.54865 11.6382L7.48198 14.3789C7.67105 14.4839 7.76558 14.5365 7.8657 14.557C7.95431 14.5753 8.04569 14.5753 8.1343 14.557C8.23441 14.5365 8.32895 14.4839 8.51802 14.3789L13.4514 11.6382C13.651 11.5272 13.7509 11.4718 13.8236 11.3929C13.8879 11.3231 13.9366 11.2403 13.9663 11.1502C14 11.0484 14 10.9341 14 10.7057V5.29431C14 5.06588 14 4.95167 13.9663 4.8498C13.9366 4.75969 13.8879 4.67696 13.8236 4.60717C13.7509 4.52828 13.651 4.47281 13.4514 4.36188L8.51802 1.62114C8.32895 1.5161 8.23441 1.46358 8.1343 1.44299C8.04569 1.42477 7.95431 1.42477 7.8657 1.44299C7.76558 1.46358 7.67105 1.5161 7.48198 1.62114L2.54865 4.36188C2.34896 4.47281 2.24912 4.52828 2.17642 4.60717C2.11211 4.67696 2.06343 4.75969 2.03366 4.8498C2 4.95167 2 5.06588 2 5.29431Z"
            stroke="#F59E0B"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-gray-700 font-semibold text-sm items-center justify-center">
          Carefully check your wager details before hitting the{" "}
          <span className="text-themeColor">create</span> button.
        </span>
      </div>

      <div className="bg-white rounded-2xl gap-6 p-4 flex flex-col w-full justify-center items-start">
        <div className="flex flex-col gap-3 justify-center items-start">
          <span className="text-slate-400 font-semibold text-base">
            Category
          </span>
          <span className="text-slate-700 capitalize font-semibold text-base">
            {eventCategory}
          </span>
        </div>
        <div className="flex flex-col gap-3 justify-center items-start">
          <span className="text-slate-400 font-semibold text-base">Title</span>
          <span className="text-slate-700 font-semibold text-base capitalize">
            {fixture.league?.name}
          </span>
        </div>
        <div className="flex flex-col gap-3 justify-center items-start">
          <span className="text-slate-400 font-semibold text-base">
            Your wager terms
          </span>
          <span className="text-slate-600 font-semibold capitalize text-base">
            {selectedWagerTerm?.name.includes("winner") ? (
              selectedWagerTerm?.option.name
            ) : (
              <>
                {selectedWagerTerm?.option.name} (
                {
                  <span className="text-themeColor text-sm">
                    {selectedWagerTerm?.name}
                  </span>
                }
                )
              </>
            )}

            {selectedWagerTerm?.option.value
              ? `(${selectedWagerTerm?.option.value})`
              : ""}
          </span>
        </div>
        <div className="flex flex-col gap-3 justify-center items-start w-full">
          <span className="text-slate-400 font-semibold text-base">
            Your stake
          </span>
          <div className="flex justify-between items-center w-full">
            <span className="text-slate-700 w-full font-semibold text-base">
              {wagerAmount}
            </span>
            <div className="flex mr-auto">
              <div className="border-l bg-gray-600 h-5 my-auto mr-2" />
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4411 13.0373V13.0358C13.3586 13.0418 12.9334 13.0673 11.9846 13.0673C11.2271 13.0673 10.6939 13.0448 10.5064 13.0358V13.038C7.59036 12.9098 5.41386 12.402 5.41386 11.7945C5.41386 11.1878 7.59036 10.68 10.5064 10.5495V12.5325C10.6969 12.546 11.2429 12.5783 11.9974 12.5783C12.9026 12.5783 13.3564 12.5408 13.4411 12.5333V10.551C16.3511 10.6808 18.5224 11.1885 18.5224 11.7945C18.5224 12.402 16.3511 12.9083 13.4411 13.0373ZM13.4411 10.3448V8.57026H17.5016V5.86426H6.44586V8.57026H10.5064V10.344C7.20636 10.4955 4.72461 11.1495 4.72461 11.9325C4.72461 12.7155 7.20636 13.3688 10.5064 13.521V19.2075H13.4411V13.5195C16.7359 13.368 19.2116 12.7148 19.2116 11.9325C19.2116 11.1503 16.7359 10.497 13.4411 10.3448Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-between items-start w-full">
          <div className="flex justify-center items-center gap-1">
            <span className="text-slate-400 font-medium text-base">
              Escrow fee
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 10 10"
              fill="none"
            >
              <g clipPath="url(#clip0_10182_145049)">
                <path
                  d="M5 6.66666V4.99999M5 3.33333H5.00417M1.25 3.30893V6.69106C1.25 6.83383 1.25 6.90521 1.27104 6.96888C1.28964 7.0252 1.32007 7.0769 1.36026 7.12052C1.4057 7.16983 1.4681 7.2045 1.5929 7.27383L4.67624 8.98679C4.79441 9.05244 4.85349 9.08527 4.91606 9.09814C4.97144 9.10952 5.02856 9.10952 5.08394 9.09814C5.14651 9.08527 5.20559 9.05244 5.32376 8.98679L8.4071 7.27383C8.5319 7.2045 8.5943 7.16983 8.63974 7.12052C8.67993 7.0769 8.71036 7.0252 8.72896 6.96888C8.75 6.90521 8.75 6.83383 8.75 6.69106V3.30893C8.75 3.16616 8.75 3.09478 8.72896 3.03111C8.71036 2.97479 8.67993 2.92309 8.63974 2.87947C8.5943 2.83016 8.5319 2.79549 8.4071 2.72616L5.32376 1.0132C5.20559 0.947546 5.14651 0.914722 5.08394 0.901853C5.02856 0.890463 4.97144 0.890463 4.91606 0.901853C4.85349 0.914722 4.79441 0.947546 4.67624 1.0132L1.5929 2.72616C1.4681 2.79549 1.4057 2.83016 1.36026 2.87947C1.32007 2.92309 1.28964 2.97479 1.27104 3.03111C1.25 3.09478 1.25 3.16616 1.25 3.30893Z"
                  stroke="#F59E0B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_10182_145049">
                  <rect width="10" height="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span className="text-slate-700  font-semibold text-base">5%</span>
        </div>

        <div className="flex gap-3 justify-between items-start w-full">
          <span className="text-slate-600 font-semibold text-base">
            Potential win
          </span>
          <span className="text-slate-700 font-semibold text-base">
            ${(wagerAmount * 2) - (wagerAmount * 0.5)} USDT
          </span>
        </div>
      </div>

      <div className="w-full px-4 my-10">
        <button
          type="button"
          onClick={() => {
            createEvent({
              variables: {
                stake: wagerAmount,
                category: eventCategory as string,
                eventId: `${fixture.id}`,
                prediction: selectedWagerTerm,
              },
              onCompleted: (data) => {
                const { success, error } = data.createEvent;
                if (success) setShowPopup(true);
                else
                  alertActions.addAlert({
                    type: "error",
                    message: error,
                  });
              },
            }).catch(errorHandler);
          }}
          disabled={isNaN(wagerAmount) || wagerAmount === 0}
          className="mx-auto bg-themeColor xs:px-20 w-full px-10 py-4 text-gray-100 rounded-full shadow"
        >
          Create your wager
        </button>
      </div>
    </div>
  );
};

export default WagerReviewComponent;
