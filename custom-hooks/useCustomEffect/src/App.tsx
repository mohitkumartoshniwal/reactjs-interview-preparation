import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCounter((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    console.log("Mounted");
  }, []);

  useEffect(() => {
    console.log("no deps Effect triggered");
  });

  useEffect(() => {
    console.log("counter Effect triggered", counter);
  }, [counter]);

  useEffect(() => {
    console.log("counter with cleanup Effect triggered", counter);

    return () => {
      console.log("cleanup");
    };
  }, [counter]);

  console.log("rerendered");

  return (
    <div className="container">
      <div>{counter}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
