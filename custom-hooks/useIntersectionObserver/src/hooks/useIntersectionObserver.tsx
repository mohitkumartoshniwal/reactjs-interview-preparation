import { MutableRefObject, useEffect, useState } from "react";


const useIntersectionObserver = (
  ref: MutableRefObject<Element | null>,

  options?: IntersectionObserverInit
) => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const observer = new IntersectionObserver((entries) => {
        setIntersectionObserverEntry(entries[0]);
      }, options);

      observer.observe(ref.current);

     return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
  }, [ref, options]);

  return intersectionObserverEntry;
};

export default useIntersectionObserver;
