import { useMemo, useState } from "react";

const Memo1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /**
   * squareCounter will be called in every render even if 'counter' doesn't change
   */
  const squareCounter = () => {
    console.log("Computing squareCounter.....");
    return counter * counter;
  };

  /**
   * squareCounterMemoized will be called only if 'counter' changes otherwise the cached value will be returned
   */
  const squareCounterMemoized = useMemo(() => {
    console.log("Computing squareCounterMemoized.....");
    return counter * counter;
  }, [counter]);

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>Squared Counter: {squareCounter()} </div>
      <div>Squared Counter Memoized: {squareCounterMemoized} </div>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>

      <div>
        <div>Counter 2: {counter2}</div>
        <button onClick={() => setCounter2(counter2 + 1)}>
          Increase Counter 2
        </button>
      </div>
    </div>
  );
};

export default Memo1;
