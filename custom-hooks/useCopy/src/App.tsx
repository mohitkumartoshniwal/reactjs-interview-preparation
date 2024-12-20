import useCopy from "./hooks/useCopy";

export default function App() {
  const [copiedText, copy] = useCopy();

  return (
    <div className="container">
      <button onClick={() => copy("Hello S")}>Copy</button>
      <p>Copied Text: {copiedText}</p>
    </div>
  );
}
