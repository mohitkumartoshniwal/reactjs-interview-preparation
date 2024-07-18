import { useEffect, useState } from "react";

const Effect2 = () => {
  /**
   * Race condition scenario if id is updated....
   * @see https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
   * */

  const [id, setId] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network Error");
            }
            return response.json();
          })
          .then((data) => setData(data));
      }, Math.round(Math.random() * 12000));
    }

    fetchData();
  }, [id]);

  return (
    <>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          const id = e.target.value;
          if (id) {
            setId(id);
          }
        }}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Effect2;
