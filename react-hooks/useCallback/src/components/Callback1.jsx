import { useCallback, useState } from "react";

const Callback1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /**
   * squareCounter will be called in every render even if 'counter' doesn't change
   */
  const squareCounter = () => {
    console.log("Computing squareCounter.....", counter2);
    return counter * counter;
  };

  /**
   * squareCounterCallback function will get the old data of 'counter2'
   */
  const squareCounterCallback = useCallback(() => {
    console.log("Computing squareCounterCallback.....", counter2);
    return counter * counter;
  }, [counter]);

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>Squared Counter: {squareCounter()} </div>
      <div>Squared Counter Memoized: {squareCounterCallback()} </div>
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

export default Callback1;
