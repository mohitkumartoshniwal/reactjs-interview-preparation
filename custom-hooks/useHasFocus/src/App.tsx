import useHasFocus from "./hooks/useHasFocus";

export default function App() {
  const focus = useHasFocus();
  return <div className="container">{focus ? "Focused" : "Not focused"}</div>;
}
