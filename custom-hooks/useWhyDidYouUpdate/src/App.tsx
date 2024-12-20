import { CSSProperties, memo, useState } from "react";
import useWhyDidYouUpdate from "./hooks/useWhyDidYouUpdate";

interface CounterProps {
  count: number;
  style: CSSProperties;
}

const Counter = memo((props: CounterProps) => {
  useWhyDidYouUpdate("Counter", props);

  return <div style={props.style}>{props.count}</div>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const counterStyle = {
    fontSize: "3rem",
    color: count > 3 ? "red" : "black",
  };
  return (
    <div className="container">
      <Counter count={count} style={counterStyle}></Counter>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
