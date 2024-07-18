import { useRef } from "react";

const Ref2 = () => {
  const inputRef = useRef();
  return (
    <div className="container">
      <input type="text" ref={inputRef} />
      <button
        style={{ width: "fit-content" }}
        onClick={() => inputRef.current.focus()}
      >
        Focus
      </button>
    </div>
  );
};

export default Ref2;
