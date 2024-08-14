import { useEffect } from "react";

const useOnClickOutside = (ref, callback) => {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
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
