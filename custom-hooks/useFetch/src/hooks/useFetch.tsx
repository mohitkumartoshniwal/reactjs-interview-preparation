import { useEffect, useState } from "react";

interface FetchOptions extends RequestInit {
  method?: string;
}

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

const useFetch = <T,>(
  url: string,
  options: FetchOptions = { method: "GET" }
): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
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
        setError(error as Error);
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
