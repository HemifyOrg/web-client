import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, ReactNode, useLayoutEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (
  ref: { current: any },
  setState: Function,
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
  setState: Function;
  visible?: boolean | undefined;
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.setState, props.visible);

  return <div ref={wrapperRef}>{props.children}</div>;
};

// Content Slider

interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}

export const Slide: React.FC<SlideProps> = ({
  children,
  className,
  direction,
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

  const initialX = direction === "left" ? "-100%" : "100%";
  const exitX = direction === "left" ? "100%" : "-100%";

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, height: slideHeight }}
      animate={{ opacity: 1, x: "0%", height: slideHeight }}
      exit={{ opacity: 0, x: exitX, height: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
      ref={slideRef}
    >
      {children}
    </motion.div>
  );
};
