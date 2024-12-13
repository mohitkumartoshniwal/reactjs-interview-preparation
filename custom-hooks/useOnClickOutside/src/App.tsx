import { useRef } from "react";
import useOnClickOutside from "./hooks/useOnClickOutside";

export default function App() {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useOnClickOutside(ref, () => {
    console.log("Clicked outside");
  });
  return (
    <div className="container">
      <p>Clicked outside</p>
      <p
        style={{
          backgroundColor: "greenyellow",
          width: "5rem",
          height: "5rem",
        }}
        ref={ref}
        onClick={() => console.log("clicked inside")}
      >
        Click
      </p>
    </div>
  );
}
