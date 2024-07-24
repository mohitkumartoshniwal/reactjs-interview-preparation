import { useRef } from "react";

// Utility function to get the current timestamp
function getCurrentTimestamp() {
  return Math.floor(Date.now() / 1000);
}

/**
 * Custom hook for cache management with expiration
 * The main concept is we will be using useRef to persist the data through rerenders
 * and we will be using storage so that we have some persistance outside of the React app.
 */
const useCache = (key, expirationInSeconds) => {
  const cache = useRef(JSON.parse(localStorage.getItem(key)) || {});

  function setCache(query, data) {
    const timestamp = getCurrentTimestamp();
    cache.current[query] = { data, timestamp };
    console.log("cache.current", cache.current);
    localStorage.setItem(key, JSON.stringify(cache.current));
  }

  function getCache(query) {
    const cachedData = cache.current[query];

    if (cachedData) {
      const { data, timestamp } = cachedData;

      if (getCurrentTimestamp() - timestamp < expirationInSeconds) {
        return data;
      } else {
        // Cache expired
        delete cache.current[query];
        localStorage.setItem(key, JSON.stringify(cache.current[query]));
      }
    }
    return null;
  }

  return {
    getCache,
    setCache,
  };
};

export default useCache;
