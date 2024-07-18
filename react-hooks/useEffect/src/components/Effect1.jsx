import { useEffect, useState } from "react";

const Effect1 = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network Error");
          }
          return response.json();
        })
        .then((data) => setData(data));
    }

    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Effect1;
