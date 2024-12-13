import { useState } from "react";
import useCache from "./hooks/useCache";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// TODO A little finicky implementation, need to make it more robust and reusable
export default function App() {
  const { getCache, setCache } = useCache<User>("cache", 3600); // Cache expires in 1 hour

  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    const API = "https://jsonplaceholder.typicode.com/users/1";

    const cachedData = getCache(API);

    if (cachedData) {
      console.log("Using cached data:", cachedData);
      setData(cachedData);
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
        .then((data: User) => {
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
      <button type="button" onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
