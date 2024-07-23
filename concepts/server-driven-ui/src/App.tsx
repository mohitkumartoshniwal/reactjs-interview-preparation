import { useEffect, useState } from "react";
import "./App.css";
import Generator from "./components/Generator";
import { components } from "./components/components";
import { SchemaType } from "./types";

function App() {
  const [schema, setSchema] = useState<SchemaType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/schema`)
      .then((response) => response.json())
      .then((schema) => setSchema(schema));
  }, []);

  return (
    <>
      <Generator schema={schema} components={components} />
    </>
  );
}

export default App;
