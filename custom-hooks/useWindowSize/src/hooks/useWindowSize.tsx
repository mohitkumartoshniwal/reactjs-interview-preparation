import { useEffect, useState } from "react";

interface WindowSize {
  width: number | null;
  height: number | null;
}


const useWindowSize = () : WindowSize => {
  // One can set initial values here itself but if one is using an SSR first framework,
  // then we need to set null values
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // We need to call it right away so that state gets updated with initial window size
    handleResize();

    window.addEventListener("resize", handleResize);

   return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
