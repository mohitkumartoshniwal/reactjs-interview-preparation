import { useState } from "react";

// const isBrowser = typeof window !== "undefined";

const useLocalStorage = (key, initialValue) => {
  if (!key) {
    throw new Error("useLocalStorage needs a key");
  }

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const storedValueInStorage = window.localStorage.getItem(key);
      return storedValueInStorage
        ? JSON.parse(storedValueInStorage)
        : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  function set(newValue) {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(storedValue) : newValue;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }

  function clear() {
    try {
      setStoredValue("");
      localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }

  return [storedValue, set, clear];
};

export default useLocalStorage;
