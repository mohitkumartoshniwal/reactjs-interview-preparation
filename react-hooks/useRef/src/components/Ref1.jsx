import { useRef, useState } from "react";

const Ref1 = () => {
  // counter will be rendered
  const [counter, setCounter] = useState(0);
  // counterRef will not be rendered until and
  // unless something else updates the state, in the current scenario, it will be setCounter
  const counterRef = useRef(0);

  function increment() {
    setCounter((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCounter((prevCount) => prevCount - 1);
  }

  return (
    <div className="container">
      <div>{counter}</div>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <div>{counterRef.current}</div>
      <div>
        <button onClick={() => counterRef.current--}>-</button>
        <button onClick={() => counterRef.current++}>+</button>
      </div>
    </div>
  );
};

export default Ref1;
