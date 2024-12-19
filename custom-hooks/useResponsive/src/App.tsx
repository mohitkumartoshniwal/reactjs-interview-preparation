import useResponsive from "./hooks/useResponsive";

export default function App() {
  const state = useResponsive();
  console.log(state);

  return <div className="container"></div>;
}
