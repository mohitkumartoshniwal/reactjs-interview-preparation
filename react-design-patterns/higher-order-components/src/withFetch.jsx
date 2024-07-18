import { useEffect, useState } from "react";

export default function withFetch(
  Element,
  url,
  options = {
    method: "GET",
  }
) {
  return (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
      if (url) {
        setIsLoading(true);
        fetch(url, { ...options })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network Error");
            }

            return res.json();
          })
          .then((data) => setData(data))
          .catch((err) => setError(err))
          .finally(() => setIsLoading(false));
      }
    }, []);

    return (
      <Element {...props} isLoading={isLoading} data={data} error={error} />
    );
  };
}
