import { forwardRef, useImperativeHandle, useRef } from "react";

const ImperativeHandle1 = () => {
  const childRef = useRef();

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={() => childRef.current.focusInput()}>Focus</button>
    </div>
  );
};

const ChildComponent = forwardRef((_props, ref) => {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default ImperativeHandle1;
