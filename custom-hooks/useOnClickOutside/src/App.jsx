import { useRef } from "react";
import useOnClickOutside from "./hooks/useOnClickOutside";

export default function App() {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    console.log("Clicked outside");
  });
  return (
    <div className="container">
      <p>Clicked outside</p>
      <p ref={ref} onClick={() => console.log("clicked inside")}>
        CLick
      </p>
    </div>
  );
}
