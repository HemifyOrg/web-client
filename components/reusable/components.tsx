import { useRef, useEffect, ReactNode } from "react";

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
