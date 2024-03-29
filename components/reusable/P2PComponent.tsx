import { useState } from "react";
import SwapComponent from "./SwapComponent";
import { listOfSwaps } from "@/utils/dummyDatas";

const P2PComponent = ({ flag }: { flag?: boolean }) => {


  const [p2pList, setP2PList] = useState([
    ...listOfSwaps,
    ...listOfSwaps,
    ...listOfSwaps,
  ]);
  const [p2pList2] = useState([...listOfSwaps, ...listOfSwaps, ...listOfSwaps]);
  const [selectedTab, setSelectedTab] = useState("ALL");

  const listOfTabs = [
    {
      name: "ALL",
      value: "ALL",
      iconElement: (
        <div className="w-fit relative gap-4 justify-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="z-40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16344)">
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#627EEA"
              />
              <path
                d="M12.373 3V9.6525L17.9958 12.165L12.373 3Z"
                fill="white"
                fillOpacity="0.602"
              />
              <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white" />
              <path
                d="M12.373 16.4759V20.9962L17.9995 13.2119L12.373 16.4759Z"
                fill="white"
                fillOpacity="0.602"
              />
              <path
                d="M12.3735 20.9962V16.4752L6.75 13.2119L12.3735 20.9962Z"
                fill="white"
              />
              <path
                d="M12.373 15.4296L17.9958 12.1648L12.373 9.65381V15.4296Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M6.75 12.1648L12.3735 15.4296V9.65381L6.75 12.1648Z"
                fill="white"
                fillOpacity="0.602"
              />
            </g>
            <defs>
              <clipPath id="clip0_1182_16344">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="z-30 left-2 top-0 absolute"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16354)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29279 4.293C7.48028 4.10545 7.73459 4.00006 7.99979 4H20.9998C21.1975 4.00004 21.3908 4.05871 21.5552 4.1686C21.7197 4.27848 21.8478 4.43465 21.9235 4.61735C21.9991 4.80005 22.0189 5.00108 21.9804 5.19503C21.9418 5.38898 21.8466 5.56715 21.7068 5.707L18.7068 8.707C18.5193 8.89455 18.265 8.99994 17.9998 9H4.99979C4.80204 8.99996 4.60874 8.94129 4.44433 8.8314C4.27992 8.72152 4.15178 8.56535 4.07611 8.38265C4.00044 8.19995 3.98064 7.99892 4.0192 7.80497C4.05777 7.61102 4.15298 7.43285 4.29279 7.293L7.29279 4.293ZM4.11779 10.528C4.20324 10.3684 4.33041 10.235 4.48575 10.142C4.64108 10.049 4.81875 9.99993 4.99979 10H17.9998C18.1644 9.99998 18.3264 10.0406 18.4716 10.1182C18.6167 10.1958 18.7404 10.3081 18.8318 10.445L20.8318 13.445C20.9323 13.5956 20.99 13.7707 20.9988 13.9515C21.0075 14.1323 20.9671 14.3121 20.8817 14.4718C20.7963 14.6314 20.6691 14.7648 20.5138 14.8579C20.3585 14.9509 20.1808 15 19.9998 15H6.99979C6.83519 15 6.67314 14.9594 6.528 14.8818C6.38287 14.8042 6.25914 14.6919 6.16779 14.555L4.16779 11.555C4.06724 11.4044 4.00949 11.2293 4.00068 11.0484C3.99187 10.8675 4.03235 10.6877 4.11779 10.528ZM6.29279 16.293C6.48028 16.1054 6.73459 16.0001 6.99979 16H19.9998C20.1975 16 20.3908 16.0587 20.5552 16.1686C20.7197 16.2785 20.8478 16.4346 20.9235 16.6173C20.9991 16.8 21.0189 17.0011 20.9804 17.195C20.9418 17.389 20.8466 17.5671 20.7068 17.707L17.7068 20.707C17.5193 20.8946 17.265 20.9999 16.9998 21H3.99979C3.80204 21 3.60874 20.9413 3.44433 20.8314C3.27992 20.7215 3.15178 20.5654 3.07611 20.3827C3.00044 20.2 2.98064 19.9989 3.0192 19.805C3.05777 19.611 3.15298 19.4329 3.29279 19.293L6.29279 16.293Z"
                fill="url(#paint0_linear_1182_16354)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1182_16354"
                x1="12.4998"
                y1="4"
                x2="12.4998"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1EC538" />
                <stop
                  offset="0.364144"
                  stopColor="#1EC538"
                  stopOpacity="0.563531"
                />
                <stop
                  offset="0.525606"
                  stopColor="#FA14FF"
                  stopOpacity="0.37"
                />
                <stop offset="1" stopColor="#FA14FF" />
              </linearGradient>
              <clipPath id="clip0_1182_16354">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="24"
            height="24"
            className="z-20 top-0 left-4 absolute"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16358)">
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24ZM7.48368 15.2962C7.812 15.3995 8.16768 15.4512 8.55072 15.4512C9.43233 15.4512 10.1346 15.2475 10.6574 14.8402C11.1803 14.4267 11.5451 13.8035 11.7518 12.9706C11.8127 12.7091 11.8704 12.4477 11.9251 12.1862C11.9859 11.9248 12.0376 11.6603 12.0802 11.3928C12.1531 10.9794 12.141 10.6176 12.0437 10.3075C11.9525 9.99744 11.7913 9.73598 11.5603 9.5232C11.3353 9.31042 11.0587 9.1523 10.7304 9.04896C10.4082 8.93952 10.0555 8.8848 9.67248 8.8848C8.78482 8.8848 8.0795 9.09758 7.55664 9.5232C7.03378 9.94882 6.672 10.572 6.47136 11.3928C6.41054 11.6603 6.34978 11.9248 6.28896 12.1862C6.23424 12.4477 6.18254 12.7091 6.13392 12.9706C6.06706 13.384 6.0792 13.7458 6.1704 14.0558C6.2677 14.3659 6.42878 14.6243 6.65376 14.831C6.87874 15.0378 7.15536 15.1928 7.48368 15.2962ZM9.53568 13.8461C9.28642 14.0406 8.9976 14.1379 8.66928 14.1379C8.33486 14.1379 8.09472 14.0406 7.9488 13.8461C7.80288 13.6515 7.7664 13.3415 7.83936 12.9158C7.88798 12.6483 7.93666 12.396 7.98528 12.1589C8.04 11.9218 8.10082 11.6755 8.16768 11.4202C8.27102 10.9945 8.4443 10.6845 8.68752 10.4899C8.93678 10.2954 9.2256 10.1981 9.55392 10.1981C9.88224 10.1981 10.1224 10.2954 10.2744 10.4899C10.4264 10.6845 10.4629 10.9945 10.3838 11.4202C10.3413 11.6755 10.2926 11.9218 10.2379 12.1589C10.1893 12.396 10.1315 12.6483 10.0646 12.9158C9.9613 13.3415 9.78494 13.6515 9.53568 13.8461ZM12.3074 15.2962C12.3439 15.3387 12.3925 15.36 12.4533 15.36H13.6936C13.7605 15.36 13.8182 15.3387 13.8669 15.2962C13.9216 15.2536 13.955 15.1989 13.9672 15.132L14.3868 13.1347H15.618C16.4023 13.1347 17.0255 12.9675 17.4876 12.6331C17.9557 12.2987 18.2658 11.7819 18.4178 11.0827C18.4908 10.7301 18.4877 10.4231 18.4087 10.1616C18.3296 9.8941 18.1898 9.67214 17.9892 9.49584C17.7885 9.31954 17.5362 9.18878 17.2322 9.10368C16.9343 9.01858 16.5998 8.976 16.229 8.976H13.8031C13.7423 8.976 13.6845 8.99726 13.6298 9.03984C13.5751 9.08242 13.5416 9.13714 13.5295 9.204L12.2709 15.132C12.2587 15.1989 12.2709 15.2536 12.3074 15.2962ZM15.6727 11.8762H14.6239L14.9796 10.2437H16.074C16.2928 10.2437 16.4539 10.2802 16.5573 10.3531C16.6668 10.4261 16.7306 10.5234 16.7488 10.645C16.7671 10.7665 16.761 10.9064 16.7306 11.0645C16.6698 11.3381 16.5391 11.5417 16.3384 11.6755C16.1438 11.8093 15.9219 11.8762 15.6727 11.8762Z"
                fill="#FF0420"
              />
            </g>
            <defs>
              <clipPath id="clip0_1182_16358">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <svg
            width="24"
            height="24"
            className="z-10 top-0 left-6 absolute"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16361)">
              <path
                d="M12 24C18.6048 24 24 18.5952 24 12C24 5.3952 18.5952 0 12 0C5.3952 0 0 5.4048 0 12C0 18.6048 5.4048 24 12 24Z"
                fill="url(#paint0_linear_1182_16361)"
              />
              <path
                d="M15.475 14.592L18.8734 12.6336C19.0558 12.528 19.1614 12.336 19.1614 12.1248V8.20802C19.1614 7.99682 19.0462 7.80482 18.8734 7.69922L15.475 5.74082C15.2926 5.63522 15.0718 5.63522 14.8894 5.74082L11.491 7.69922C11.3086 7.80482 11.203 7.99682 11.203 8.20802V15.216L8.82222 16.5888L6.44142 15.216V12.4704L8.82222 11.0976L10.3966 12V10.1568L9.11982 9.41762C9.03342 9.36962 8.92782 9.34082 8.83182 9.34082C8.72622 9.34082 8.63022 9.36962 8.54382 9.41762L5.14542 11.376C4.96302 11.4816 4.85742 11.6736 4.85742 11.8848V15.8016C4.85742 16.0128 4.97262 16.2048 5.14542 16.3104L8.54382 18.2688C8.72622 18.3744 8.94702 18.3744 9.12942 18.2688L12.5278 16.3104C12.7102 16.2048 12.8158 16.0128 12.8158 15.8016V8.79362L12.8542 8.76482L15.1966 7.41122L17.5774 8.78402V11.5296L15.1966 12.9024L13.6318 12V13.8432L14.9086 14.5824C15.091 14.688 15.3118 14.688 15.4942 14.5824L15.475 14.592Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1182_16361"
                x1="-4.38944"
                y1="1.94891"
                x2="20.3594"
                y2="17.1265"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A229C5" />
                <stop offset="1" stopColor="#7B3FE4" />
              </linearGradient>
              <clipPath id="clip0_1182_16361">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      name: "Ethereum",
      value: "ETH",
      iconElement: (
        <div className="w-min relative gap-2 justify-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1404_17887)">
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="#627EEA"
              />
              <path
                d="M12.373 3V9.6525L17.9958 12.165L12.373 3Z"
                fill="white"
                fillOpacity="0.602"
              />
              <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white" />
              <path
                d="M12.373 16.4759V20.9962L17.9995 13.2119L12.373 16.4759Z"
                fill="white"
                fillOpacity="0.602"
              />
              <path
                d="M12.3735 20.9962V16.4752L6.75 13.2119L12.3735 20.9962Z"
                fill="white"
              />
              <path
                d="M12.373 15.4296L17.9958 12.1648L12.373 9.65381V15.4296Z"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M6.75 12.1648L12.3735 15.4296V9.65381L6.75 12.1648Z"
                fill="white"
                fillOpacity="0.602"
              />
            </g>
            <defs>
              <clipPath id="clip0_1404_17887">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      name: "Optimism",
      value: "OPT",
      iconElement: (
        <div className="w-min relative gap-2 justify-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16368)">
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24ZM7.48368 15.2962C7.812 15.3995 8.16768 15.4512 8.55072 15.4512C9.43233 15.4512 10.1346 15.2475 10.6574 14.8402C11.1803 14.4267 11.5451 13.8035 11.7518 12.9706C11.8127 12.7091 11.8704 12.4477 11.9251 12.1862C11.9859 11.9248 12.0376 11.6603 12.0802 11.3928C12.1531 10.9794 12.141 10.6176 12.0437 10.3075C11.9525 9.99744 11.7913 9.73598 11.5603 9.5232C11.3353 9.31042 11.0587 9.1523 10.7304 9.04896C10.4082 8.93952 10.0555 8.8848 9.67248 8.8848C8.78482 8.8848 8.0795 9.09758 7.55664 9.5232C7.03378 9.94882 6.672 10.572 6.47136 11.3928C6.41054 11.6603 6.34978 11.9248 6.28896 12.1862C6.23424 12.4477 6.18254 12.7091 6.13392 12.9706C6.06706 13.384 6.0792 13.7458 6.1704 14.0558C6.2677 14.3659 6.42878 14.6243 6.65376 14.831C6.87874 15.0378 7.15536 15.1928 7.48368 15.2962ZM9.53568 13.8461C9.28642 14.0406 8.9976 14.1379 8.66928 14.1379C8.33486 14.1379 8.09472 14.0406 7.9488 13.8461C7.80288 13.6515 7.7664 13.3415 7.83936 12.9158C7.88798 12.6483 7.93666 12.396 7.98528 12.1589C8.04 11.9218 8.10082 11.6755 8.16768 11.4202C8.27102 10.9945 8.4443 10.6845 8.68752 10.4899C8.93678 10.2954 9.2256 10.1981 9.55392 10.1981C9.88224 10.1981 10.1224 10.2954 10.2744 10.4899C10.4264 10.6845 10.4629 10.9945 10.3838 11.4202C10.3413 11.6755 10.2926 11.9218 10.2379 12.1589C10.1893 12.396 10.1315 12.6483 10.0646 12.9158C9.9613 13.3415 9.78494 13.6515 9.53568 13.8461ZM12.3074 15.2962C12.3439 15.3387 12.3925 15.36 12.4533 15.36H13.6936C13.7605 15.36 13.8182 15.3387 13.8669 15.2962C13.9216 15.2536 13.955 15.1989 13.9672 15.132L14.3868 13.1347H15.618C16.4023 13.1347 17.0255 12.9675 17.4876 12.6331C17.9557 12.2987 18.2658 11.7819 18.4178 11.0827C18.4908 10.7301 18.4877 10.4231 18.4087 10.1616C18.3296 9.8941 18.1898 9.67214 17.9892 9.49584C17.7885 9.31954 17.5362 9.18878 17.2322 9.10368C16.9343 9.01858 16.5998 8.976 16.229 8.976H13.8031C13.7423 8.976 13.6845 8.99726 13.6298 9.03984C13.5751 9.08242 13.5416 9.13714 13.5295 9.204L12.2709 15.132C12.2587 15.1989 12.2709 15.2536 12.3074 15.2962ZM15.6727 11.8762H14.6239L14.9796 10.2437H16.074C16.2928 10.2437 16.4539 10.2802 16.5573 10.3531C16.6668 10.4261 16.7306 10.5234 16.7488 10.645C16.7671 10.7665 16.761 10.9064 16.7306 11.0645C16.6698 11.3381 16.5391 11.5417 16.3384 11.6755C16.1438 11.8093 15.9219 11.8762 15.6727 11.8762Z"
                fill="#FF0420"
              />
            </g>
            <defs>
              <clipPath id="clip0_1182_16368">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      name: "Solana",
      value: "SOL",
      iconElement: (
        <div className="w-min relative gap-2 justify-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16354)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29279 4.293C7.48028 4.10545 7.73459 4.00006 7.99979 4H20.9998C21.1975 4.00004 21.3908 4.05871 21.5552 4.1686C21.7197 4.27848 21.8478 4.43465 21.9235 4.61735C21.9991 4.80005 22.0189 5.00108 21.9804 5.19503C21.9418 5.38898 21.8466 5.56715 21.7068 5.707L18.7068 8.707C18.5193 8.89455 18.265 8.99994 17.9998 9H4.99979C4.80204 8.99996 4.60874 8.94129 4.44433 8.8314C4.27992 8.72152 4.15178 8.56535 4.07611 8.38265C4.00044 8.19995 3.98064 7.99892 4.0192 7.80497C4.05777 7.61102 4.15298 7.43285 4.29279 7.293L7.29279 4.293ZM4.11779 10.528C4.20324 10.3684 4.33041 10.235 4.48575 10.142C4.64108 10.049 4.81875 9.99993 4.99979 10H17.9998C18.1644 9.99998 18.3264 10.0406 18.4716 10.1182C18.6167 10.1958 18.7404 10.3081 18.8318 10.445L20.8318 13.445C20.9323 13.5956 20.99 13.7707 20.9988 13.9515C21.0075 14.1323 20.9671 14.3121 20.8817 14.4718C20.7963 14.6314 20.6691 14.7648 20.5138 14.8579C20.3585 14.9509 20.1808 15 19.9998 15H6.99979C6.83519 15 6.67314 14.9594 6.528 14.8818C6.38287 14.8042 6.25914 14.6919 6.16779 14.555L4.16779 11.555C4.06724 11.4044 4.00949 11.2293 4.00068 11.0484C3.99187 10.8675 4.03235 10.6877 4.11779 10.528ZM6.29279 16.293C6.48028 16.1054 6.73459 16.0001 6.99979 16H19.9998C20.1975 16 20.3908 16.0587 20.5552 16.1686C20.7197 16.2785 20.8478 16.4346 20.9235 16.6173C20.9991 16.8 21.0189 17.0011 20.9804 17.195C20.9418 17.389 20.8466 17.5671 20.7068 17.707L17.7068 20.707C17.5193 20.8946 17.265 20.9999 16.9998 21H3.99979C3.80204 21 3.60874 20.9413 3.44433 20.8314C3.27992 20.7215 3.15178 20.5654 3.07611 20.3827C3.00044 20.2 2.98064 19.9989 3.0192 19.805C3.05777 19.611 3.15298 19.4329 3.29279 19.293L6.29279 16.293Z"
                fill="url(#paint0_linear_1182_16354)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1182_16354"
                x1="12.4998"
                y1="4"
                x2="12.4998"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1EC538" />
                <stop
                  offset="0.364144"
                  stopColor="#1EC538"
                  stopOpacity="0.563531"
                />
                <stop
                  offset="0.525606"
                  stopColor="#FA14FF"
                  stopOpacity="0.37"
                />
                <stop offset="1" stopColor="#FA14FF" />
              </linearGradient>
              <clipPath id="clip0_1182_16354">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
    {
      name: "Polygon",
      value: "POL",
      iconElement: (
        <div className="w-min relative gap-2 justify-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_16361)">
              <path
                d="M12 24C18.6048 24 24 18.5952 24 12C24 5.3952 18.5952 0 12 0C5.3952 0 0 5.4048 0 12C0 18.6048 5.4048 24 12 24Z"
                fill="url(#paint0_linear_1182_16361)"
              />
              <path
                d="M15.475 14.592L18.8734 12.6336C19.0558 12.528 19.1614 12.336 19.1614 12.1248V8.20802C19.1614 7.99682 19.0462 7.80482 18.8734 7.69922L15.475 5.74082C15.2926 5.63522 15.0718 5.63522 14.8894 5.74082L11.491 7.69922C11.3086 7.80482 11.203 7.99682 11.203 8.20802V15.216L8.82222 16.5888L6.44142 15.216V12.4704L8.82222 11.0976L10.3966 12V10.1568L9.11982 9.41762C9.03342 9.36962 8.92782 9.34082 8.83182 9.34082C8.72622 9.34082 8.63022 9.36962 8.54382 9.41762L5.14542 11.376C4.96302 11.4816 4.85742 11.6736 4.85742 11.8848V15.8016C4.85742 16.0128 4.97262 16.2048 5.14542 16.3104L8.54382 18.2688C8.72622 18.3744 8.94702 18.3744 9.12942 18.2688L12.5278 16.3104C12.7102 16.2048 12.8158 16.0128 12.8158 15.8016V8.79362L12.8542 8.76482L15.1966 7.41122L17.5774 8.78402V11.5296L15.1966 12.9024L13.6318 12V13.8432L14.9086 14.5824C15.091 14.688 15.3118 14.688 15.4942 14.5824L15.475 14.592Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1182_16361"
                x1="-4.38944"
                y1="1.94891"
                x2="20.3594"
                y2="17.1265"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A229C5" />
                <stop offset="1" stopColor="#7B3FE4" />
              </linearGradient>
              <clipPath id="clip0_1182_16361">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      ),
    },
  ];

  const handleTabToggle = (action: string) => {
    setSelectedTab(action.toUpperCase());
    if (p2pList2 && p2pList2.length > 0) {
      let list = [...p2pList2];
      if (action !== "ALL")
        list = list.filter(
          (n) => n.currency.toUpperCase() === action.toUpperCase()
        );
      setP2PList(list);
    }
  };

  return (
    <div className="flex gap-4 flex-col justify-start px-2 lg:px-4 items-center">
      <div
        className={`flex justify-between px-3 w-screen md:flex-nowrap flex-wrap`}
      >
        {flag && (
          <div className="flex gap-2 lg:px-7 items-center w-screen overflow-x-auto overflow-y-hidden">
            <button
              className="px-5 py-2 flex gap-2 bg-btnImage items-center rounded-2xl"
              type="button"
              title="Filter"
            >
              <span>Filter</span>
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.6667V8.00002M7 5.33335H7.00667M1 5.29431V10.7057C1 10.9341 1 11.0484 1.03366 11.1502C1.06343 11.2403 1.11211 11.3231 1.17642 11.3929C1.24912 11.4718 1.34897 11.5272 1.54865 11.6382L6.48198 14.3789C6.67105 14.4839 6.76558 14.5365 6.8657 14.557C6.95431 14.5753 7.04569 14.5753 7.1343 14.557C7.23441 14.5365 7.32895 14.4839 7.51802 14.3789L12.4514 11.6382C12.651 11.5272 12.7509 11.4718 12.8236 11.3929C12.8879 11.3231 12.9366 11.2403 12.9663 11.1502C13 11.0484 13 10.9341 13 10.7057V5.29431C13 5.06588 13 4.95167 12.9663 4.8498C12.9366 4.75969 12.8879 4.67696 12.8236 4.60717C12.7509 4.52828 12.651 4.47281 12.4514 4.36188L7.51802 1.62114C7.32895 1.5161 7.23441 1.46358 7.1343 1.44299C7.04569 1.42477 6.95431 1.42477 6.8657 1.44299C6.76558 1.46358 6.67105 1.5161 6.48198 1.62114L1.54865 4.36188C1.34896 4.47281 1.24912 4.52828 1.17642 4.60717C1.11211 4.67696 1.06343 4.75969 1.03366 4.8498C1 4.95167 1 5.06588 1 5.29431Z"
                stroke="#544732"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        <div
          className={`${
            flag ? "justify-end lg:mr-7" : "justify-start"
          } flex w-full`}
        >
          <ul
            className={`flex gap-4 ${
              flag ? "py-4 lg:py-1" : ""
            } lg:pl-10 md:pl-0 pl-[210px] justify-center items-center w-full overflow-x-auto overflow-y-hidden`}
          >
            {listOfTabs &&
              listOfTabs.length > 0 &&
              listOfTabs.map((n, i) => (
                <li
                  key={i}
                  onClick={() => handleTabToggle(n?.value)}
                  className={`flex cursor-pointer hover:bg-[#f7f0dfd2] rounded-md gap-2 border-b-2 px-1 ${
                    selectedTab === n.value
                      ? "border-themeColor"
                      : "border-transparent border active:border-gray-200"
                  } py-2`}
                >
                  {n.iconElement}
                  <span
                    className={`font-semibold ${
                      n.value === "ALL" ? "ml-8" : ""
                    }`}
                  >
                    {n.name}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* view all */}
        {!flag && (
          <div className="flex items-center justify-end gap-2 w-full lg:pr-10 pr-4 cursor-pointer">
            <span className="text-base text-themeColor">View all</span>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6H13M13 6L8.5 1.5M13 6L8.5 10.5"
                stroke="#D2B37D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* items */}
      <div className="w-full justify-start flex flex-col gap-4 pr-2 px-2 max-h-[600px] overflow-y-auto overflow-x-hidden">
        {p2pList &&
          p2pList.length > 0 &&
          p2pList.map((swap, i) => (
            <SwapComponent key={i} swap={swap} />
          ))}
      </div>
    </div>
  );
};

export default P2PComponent;
