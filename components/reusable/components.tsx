import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, ReactNode, useLayoutEffect } from "react";
import TimerComponent from "./TimerComponent";
import Image from "next/image";
/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (
  ref: { current: any },
  setState: Function | undefined,
  visible: boolean | undefined
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        if (visible === undefined || visible) setState && setState(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setState, visible]);
};

/**
 * Component that alerts if you click outside of it
 */
export const OutsideAlerter = (props: {
  children: ReactNode;
  setState: Function | undefined;
  className?: string;
  visible?: boolean | undefined;
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.setState, props.visible);

  return (
    <div ref={wrapperRef} className={props.className}>
      {props.children}
    </div>
  );
};

// Content Slider

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  direction?: "top" | "bottom" | "left" | "right";
}

export const Slide: React.FC<SlideProps> = ({
  children,
  className,
  direction = "top",
}) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const slideHeight: any = useMotionValue(0);

  useLayoutEffect(() => {
    if (slideRef.current) {
      slideHeight.set(slideRef.current.offsetHeight);
    }
  }, [slideHeight]);

  useEffect(() => {
    const handleResize = () => {
      if (slideRef.current) {
        slideHeight.set(slideRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slideHeight]);

  const initialY = direction === "top" ? "-100%" : "100%";
  const exitY = direction === "bottom" ? "100%" : "-100%";

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, height: slideHeight }}
      animate={{ opacity: 1, y: "0%", height: slideHeight }}
      exit={{ opacity: 0, y: exitY, height: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      ref={slideRef}
    >
      {children}
    </motion.div>
  );
};

const UserComponent = ({
  src,
  username,
  className,
  textClassName,
  isVerified,
}: {
  username: string;
  isVerified?: boolean;
  src?: string;
  className?: string;
  textClassName?: string;
}) => {
  return (
    <div
      className={
        className ||
        "gap-2 flex flex-wrap xs:px-2 px-4 items-center text-gray-600"
      }
    >
      {src && (
        <Image
          alt=""
          width={38}
          height={38}
          className="object-cover rounded-md shadow-md drop-shadow-sm"
          src={src}
        />
      )}
      <div className="flex gap-1 items-start justify-center">
        <span
          title={username}
          className={textClassName || "max-w-[80px] truncate"}
        >
          <span className="font-semibold">@{username}</span>
        </span>
        {isVerified && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 8 8"
            fill="none"
          >
            <g clipPath="url(#clip0_10408_23227)">
              <path
                d="M3.17084 0.975794C2.96625 1.15014 2.71188 1.2555 2.44394 1.27689C1.81866 1.32678 1.32214 1.8233 1.27225 2.44858C1.25087 2.71652 1.1455 2.97089 0.971155 3.17548C0.564302 3.6529 0.564302 4.35508 0.971155 4.8325C1.1455 5.03708 1.25087 5.29145 1.27225 5.5594C1.32214 6.18467 1.81866 6.68119 2.44394 6.73109C2.71188 6.75247 2.96625 6.85784 3.17084 7.03218C3.64826 7.43903 4.35044 7.43903 4.82786 7.03218C5.03244 6.85784 5.28682 6.75247 5.55476 6.73109C6.18003 6.68119 6.67655 6.18467 6.72645 5.5594C6.74783 5.29145 6.8532 5.03708 7.02754 4.8325C7.4344 4.35508 7.4344 3.6529 7.02754 3.17548C6.8532 2.97089 6.74783 2.71652 6.72645 2.44858C6.67655 1.8233 6.18003 1.32678 5.55476 1.27689C5.28682 1.2555 5.03244 1.15014 4.82786 0.975794C4.35044 0.568941 3.64826 0.568941 3.17084 0.975794Z"
                fill="#542A8F"
              />
              <path
                d="M2.99935 4.00399L3.66602 4.67065L5.16602 3.17065M2.44394 1.27689C2.71188 1.2555 2.96625 1.15014 3.17084 0.975794C3.64826 0.568941 4.35044 0.568941 4.82786 0.975794C5.03244 1.15014 5.28682 1.2555 5.55476 1.27689C6.18003 1.32678 6.67655 1.8233 6.72645 2.44858C6.74783 2.71652 6.8532 2.97089 7.02754 3.17548C7.4344 3.6529 7.4344 4.35508 7.02754 4.8325C6.8532 5.03708 6.74783 5.29145 6.72645 5.5594C6.67655 6.18467 6.18003 6.68119 5.55476 6.73109C5.28682 6.75247 5.03244 6.85784 4.82786 7.03218C4.35044 7.43903 3.64826 7.43903 3.17084 7.03218C2.96625 6.85784 2.71188 6.75247 2.44394 6.73109C1.81866 6.68119 1.32214 6.18467 1.27225 5.5594C1.25087 5.29145 1.1455 5.03708 0.971155 4.8325C0.564302 4.35508 0.564302 3.6529 0.971155 3.17548C1.1455 2.97089 1.25087 2.71652 1.27225 2.44858C1.32214 1.8233 1.81866 1.32678 2.44394 1.27689Z"
                stroke="#FAFAFA"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_10408_23227">
                <rect
                  width="8"
                  height="8"
                  fill="white"
                  transform="translate(0 0.00390625)"
                />
              </clipPath>
            </defs>
          </svg>
        )}
      </div>
    </div>
  );
};

export default UserComponent;

export { TimerComponent, UserComponent };
