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
}: {
  src: string;
  username: string;
  className?: string;
}) => {
  return (
    <div
      className={className || "gap-2 flex flex-wrap xs:px-2 px-6 items-center"}
    >
      <Image
        alt=""
        width={38}
        height={38}
        className="object-cover rounded-md shadow-md drop-shadow-sm"
        src={src}
      />
      <span className="text-gray-600 font-semibold">@{username}</span>
    </div>
  );
};

export default UserComponent;

export { TimerComponent, UserComponent };
