import { useEffect, useState } from "react";

const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    function onResizeHandler() {
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 990;
      const isDesktop = window.innerWidth > 990;

      setState({ isMobile, isTablet, isDesktop });
    }

    // const debouncedOnResizeHandler = useDebounce(onResizeHandler, 100);

    onResizeHandler();

    window.addEventListener("resize", onResizeHandler);
    // window.addEventListener("resize", debouncedOnResizeHandler);

    return () => {
      window.removeEventListener("resize", onResizeHandler);
      //   window.removeEventListener("resize", debouncedOnResizeHandler);
    };
  }, []);
  return state;
};

export default useResponsive;
