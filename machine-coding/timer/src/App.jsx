import { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }
  function pauseTimer() {
    clearInterval(intervalRef.current);
  }
  function stopTimer() {
    clearInterval(intervalRef.current);
    setCount(0);
  }

  return (
    <div className="container">
      <div>{count}</div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    </div>
  );
}
