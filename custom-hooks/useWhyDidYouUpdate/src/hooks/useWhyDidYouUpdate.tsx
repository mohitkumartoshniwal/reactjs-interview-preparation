/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

type Props = {
  [key: string]: any;
};

const useWhyDidYouUpdate = (name: string, props: Props) => {
  const prevProps = useRef<Props>();

  useEffect(() => {
    if (prevProps.current) {
      const allKeys = Object.keys({ ...prevProps.current, ...props });
      const changesObj: { [key: string]: { from: any; to: any } } = {};

      allKeys.forEach((key) => {
        if (
          typeof props[key] === "object" &&
          typeof prevProps.current?.[key] === "object"
        ) {
          if (
            JSON.stringify(props[key]) !==
            JSON.stringify(prevProps.current[key])
          ) {
            changesObj[key] = {
              from: prevProps.current[key],
              to: props[key],
            };
          }
        } else {
          if (props[key] !== prevProps.current?.[key]) {
            changesObj[key] = {
              from: prevProps.current?.[key],
              to: props[key],
            };
          }
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("This is causing rerenders", name, changesObj);
      }
    }

    prevProps.current = props;
  });
};

export default useWhyDidYouUpdate;
