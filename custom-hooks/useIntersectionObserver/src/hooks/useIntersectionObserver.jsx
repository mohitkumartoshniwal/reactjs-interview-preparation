import { useEffect, useState } from "react";

const useIntersectionObserver = (ref, options) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const observer = new IntersectionObserver((entries) => {
        setIntersectionObserverEntry(entries[0]);
      }, options);

      observer.observe(ref.current);

      () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionObserverEntry;
};

export default useIntersectionObserver;
