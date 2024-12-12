import { ChangeEvent, useState } from "react";
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  const debouncedValue = useDebounce(inputText, 1000);

  return (
    <div className="container">
      <input type="text" value={inputText} onChange={handleChange} />
      <p>{debouncedValue ?? ''} </p>
    </div>
  );
}
