import Link from "next/link";
import { useRouter } from "next/router";

const BottomNav = () => {
  const router = useRouter();
  const { asPath } = router;

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={className}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.65487 1.84267C8.42065 1.6605 8.30354 1.56941 8.17423 1.5344C8.06013 1.50351 7.93987 1.50351 7.82577 1.5344C7.69646 1.56941 7.57935 1.6605 7.34513 1.84267L2.82359 5.35942C2.52135 5.5945 2.37022 5.71204 2.26135 5.85924C2.16491 5.98963 2.09307 6.13652 2.04935 6.2927C2 6.46901 2 6.66046 2 7.04337V11.8667C2 12.6134 2 12.9868 2.14532 13.272C2.27316 13.5229 2.47713 13.7268 2.72801 13.8547C3.01323 14 3.3866 14 4.13333 14H5.46667C5.65335 14 5.74669 14 5.818 13.9637C5.88072 13.9317 5.93171 13.8807 5.96367 13.818C6 13.7467 6 13.6533 6 13.4667V9.06666C6 8.69329 6 8.5066 6.07266 8.364C6.13658 8.23855 6.23857 8.13657 6.36401 8.07265C6.50661 7.99999 6.6933 7.99999 7.06667 7.99999H8.93333C9.3067 7.99999 9.49339 7.99999 9.63599 8.07265C9.76144 8.13657 9.86342 8.23855 9.92734 8.364C10 8.5066 10 8.69329 10 9.06666V13.4667C10 13.6533 10 13.7467 10.0363 13.818C10.0683 13.8807 10.1193 13.9317 10.182 13.9637C10.2533 14 10.3466 14 10.5333 14H11.8667C12.6134 14 12.9868 14 13.272 13.8547C13.5229 13.7268 13.7268 13.5229 13.8547 13.272C14 12.9868 14 12.6134 14 11.8667V7.04337C14 6.66046 14 6.46901 13.9506 6.2927C13.9069 6.13652 13.8351 5.98963 13.7386 5.85924C13.6298 5.71204 13.4787 5.5945 13.1764 5.35942L8.65487 1.84267Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Wager",
      path: "/product/wager",
      icon: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={className}
          viewBox="0 0 22 20"
          fill="none"
        >
          <path
            d="M1.25 17.2L3.05 19M3.95 11.8L4.85 15.4M4.85 15.4L8.45 16.3M4.85 15.4L2.15 18.1M15.65 1.9L6.65 10.9L7.1 13.15L9.35 13.6L18.35 4.6L19.25 1L15.65 1.9Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.25 17.2L19.45 19M18.55 11.8L17.65 15.4M17.65 15.4L20.35 18.1M17.65 15.4L15.85 15.85L14.05 16.3M8.55 9L4.15 4.6L3.25 1L6.85 1.9L11.25 6.3M11.35 11.8L13.15 13.6L15.4 13.15L15.85 10.9L14.05 9.1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "My Bets",
      path: "/my-bets",
      icon: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={className}
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M6.33268 7.91688L2.16602 10.0002L10.2012 14.0178C10.3105 14.0725 10.3652 14.0998 10.4225 14.1106C10.4733 14.1201 10.5254 14.1201 10.5762 14.1106C10.6335 14.0998 10.6882 14.0725 10.7975 14.0178L18.8327 10.0002L14.666 7.91688M6.33268 12.0836L2.16602 14.1669L10.2012 18.1845C10.3105 18.2391 10.3652 18.2665 10.4225 18.2772C10.4733 18.2868 10.5254 18.2868 10.5762 18.2772C10.6335 18.2665 10.6882 18.2391 10.7975 18.1845L18.8327 14.1669L14.666 12.0836M2.16602 5.83355L10.2012 1.81595C10.3105 1.7613 10.3652 1.73397 10.4225 1.72321C10.4733 1.71368 10.5254 1.71368 10.5762 1.72321C10.6335 1.73397 10.6882 1.7613 10.7975 1.81595L18.8327 5.83355L10.7975 9.85115C10.6882 9.90581 10.6335 9.93314 10.5762 9.94389C10.5254 9.95342 10.4733 9.95342 10.4225 9.94389C10.3652 9.93314 10.3105 9.90581 10.2012 9.85115L2.16602 5.83355Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Profile",
      path: "/profile",
      icon: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={className}
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M17.4173 17.5C17.4173 16.337 17.4173 15.7555 17.2738 15.2824C16.9506 14.217 16.1169 13.3834 15.0516 13.0602C14.5784 12.9167 13.997 12.9167 12.834 12.9167H8.66732C7.50435 12.9167 6.92286 12.9167 6.4497 13.0602C5.38436 13.3834 4.55068 14.217 4.22752 15.2824C4.08398 15.7555 4.08398 16.337 4.08398 17.5M14.5007 6.25C14.5007 8.32107 12.8217 10 10.7507 10C8.67958 10 7.00065 8.32107 7.00065 6.25C7.00065 4.17893 8.67958 2.5 10.7507 2.5C12.8217 2.5 14.5007 4.17893 14.5007 6.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Community",
      path: "/community",
      icon: (className: string) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className={className}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.83333 7.08333H10M5.83333 10H12.5M5.83333 15V16.9463C5.83333 17.3903 5.83333 17.6123 5.92436 17.7263C6.00352 17.8255 6.12356 17.8832 6.25045 17.8831C6.39636 17.8829 6.56973 17.7442 6.91646 17.4668L8.90434 15.8765C9.31043 15.5517 9.51347 15.3892 9.73957 15.2737C9.94017 15.1712 10.1537 15.0963 10.3743 15.051C10.6231 15 10.8831 15 11.4031 15H13.5C14.9001 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4001 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V11.6667C2.5 12.4416 2.5 12.8291 2.58519 13.147C2.81635 14.0098 3.49022 14.6836 4.35295 14.9148C4.67087 15 5.05836 15 5.83333 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="fixed bg-secondary z-50 rounded-t-2xl flex justify-between items-center py-4 xs:px-6 px-3 bottom-0 w-full right-0">
      {navItems.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={`flex ${
            (
              item.path === "/"
                ? /^\/$/.test(asPath)
                : new RegExp(`${item.path}`).test(asPath)
            )
              ? "text-themeColor"
              : "text-gray-400"
          } border-none hover:border-none hover:opacity-80 flex-col items-center justify-center`}
        >
          {item.icon(
            `w-6 h-6 ${
              (
                item.path === "/"
                  ? /^\/$/.test(asPath)
                  : new RegExp(`${item.path}`).test(asPath)
              )
                ? `${
                    item.path === "/my-bets" || item.path === "/community"
                      ? ""
                      : "fill-current"
                  } text-themeColor`
                : "text-gray-400"
            }`
          )}
          <p className={`text-current font-medium text-sm`}>{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
