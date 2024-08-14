import useIdle from "./hooks/useIdle";

export default function App() {
  const isIdle = useIdle(2000);
  return <div className="container">{isIdle ? "Idle" : "Not Idle"}</div>;
}
