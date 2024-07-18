import { useMemo, useRef } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

export default function App() {
  const ref = useRef();

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50%
    }),
    []
  );

  const intersectionObserverEntry = useIntersectionObserver(ref, options);

  console.log("isIntersecting", intersectionObserverEntry?.isIntersecting);
  console.log(
    "Intersection Ratio",
    intersectionObserverEntry?.intersectionRatio
  );

  return (
    <div
      className="container"
      style={{ height: "200vh", position: "relative" }}
    >
      <div
        ref={ref}
        style={{
          height: "10vh",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "yellow",
        }}
      ></div>
    </div>
  );
}
