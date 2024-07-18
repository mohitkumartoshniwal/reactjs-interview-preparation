import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Ref1 from "./components/Ref1";
import Ref2 from "./components/Ref2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="links">
        <Link to={"/ref1"}>Ref 1</Link>
        <Link to={"/ref2"}>Ref 2</Link>
      </div>
      <Routes>
        <Route path="/ref1" element={<Ref1 />} />
        <Route path="/ref2" element={<Ref2 />} />
      </Routes>
    </BrowserRouter>
  );
}
