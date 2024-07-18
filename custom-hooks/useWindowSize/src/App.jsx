import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const { width, height } = useWindowSize();
  return (
    <div className="container">
      <p>Width : {width}</p>
      <p>Height : {height}</p>
    </div>
  );
}
