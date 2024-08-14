import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  console.log(value, ref.current);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  /**
   * Because useEffect runs after ref.current is returned hence ref.current's initial value
   * undefined is returned
   */
  return ref.current;
};

export default usePrevious;
