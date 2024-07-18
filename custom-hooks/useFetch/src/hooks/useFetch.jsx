import { useEffect, useState } from "react";

const useFetch = (url, options = { method: "GET" }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          ...options,
        });

        if (!response.ok) {
          throw new Error("Network Response was not OK!!");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
