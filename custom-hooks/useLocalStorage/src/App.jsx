import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [name, setName, clearName] = useLocalStorage("name", "Mohit");
  const [fname, setFname, clearFname] = useLocalStorage("fname", "Guest");

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={clearName}>
          Clear
        </button>
      </div>
      <div>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname((value) => value[0] + e.target.value)}
        />
        <button type="button" onClick={clearFname}>
          Clear
        </button>
      </div>
    </div>
  );
}
