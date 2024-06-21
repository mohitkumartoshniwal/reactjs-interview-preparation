import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((value) => value + 0.1);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <ProgressBar
        bgColor="rgb(233, 236, 239)"
        loaderColor="#00c251"
        value={value}
        onComplete={() => setSuccess(true)}
      />
      <span>{success ? "Completed" : "Loading..."}</span>
    </div>
  );
}
