import { MutableRefObject, useEffect } from "react";

// Main logic is to check whether event.target is a descendant of ref.current
const useOnClickOutside = (
  ref: MutableRefObject<Element | null>,
  callback: () => void
) => {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback();
    }

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
