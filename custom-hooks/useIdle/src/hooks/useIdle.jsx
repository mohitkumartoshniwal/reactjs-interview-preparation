import { useState, useEffect, useRef } from "react";

/**
 * The main logic is to always have a timer running .i.e. clear the previous timer
 * and create a new timer based on the events
 * and set the isIdle state variable
 */
const useIdle = (delay) => {
  const [isIdle, setIsIdle] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    function resetIdleTimer() {
      setIsIdle(false);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsIdle(true), delay);
    }

    function handleBlur() {
      // Optional: Immediately mark as idle when the window loses focus
      setIsIdle(true);
      clearTimeout(timerRef.current);
    }

    const events = [
      "mousemove",
      "mousedown",

      "keypress",

      "wheel",

      "touchstart",
      "touchmove",

      "focus",
    ];

    events.forEach((event) => {
      window.addEventListener(event, resetIdleTimer);
    });
    // Add blur event separately since it handles idle state directly
    window.addEventListener("blur", handleBlur);

    timerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, delay);

    return () => {
      clearTimeout(timerRef.current);
      events.forEach((event) => {
        window.removeEventListener(event, resetIdleTimer);
      });
      // Add blur event separately since it handles idle state directly
      window.removeEventListener("blur", handleBlur);
    };
  }, [delay]);

  return isIdle;
};

export default useIdle;
