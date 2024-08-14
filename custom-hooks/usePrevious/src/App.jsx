import { useState } from "react";
import usePrevious from "./hooks/usePrevious";

export default function App() {
  const [count, setCount] = useState(2);
  const prevCount = usePrevious(count);

  return (
    <div className="container">
      <p>Previous Count: {prevCount}</p>
      <p>Count: {count}</p>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
    </div>
  );
}
