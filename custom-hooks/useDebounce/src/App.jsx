import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    setInputText(e.target.value);
  }

  const debouncedValue = useDebounce(inputText, 3000, () => {
    console.log("Handle logic here");
  });

  return (
    <div className="container">
      <input type="text" value={inputText} onChange={handleChange} />
      <p>{debouncedValue}</p>
    </div>
  );
}
