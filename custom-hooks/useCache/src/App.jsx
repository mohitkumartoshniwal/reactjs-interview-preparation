import { useState } from "react";
import useCache from "./hooks/useCache";

// TODO A little finicky implementation, need to make it more robust and reusable
export default function App() {
  const { getCache, setCache } = useCache("cache", 3600, localStorage); // Cache expires in 1 hour
  useCache();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    const API = "https://jsonplaceholder.typicode.com/users/1";

    const cachedData = getCache(API);

    if (cachedData) {
      console.log("Using cached data:", cachedData);
      setData(data);
      setLoading(false);
    } else {
      console.log("Fetching new data...");
      fetch(API)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network error");
          }

          return response.json();
        })
        .then((data) => {
          setData(data);
          setCache(API, data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching rate:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="container">
      <h1>API Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
