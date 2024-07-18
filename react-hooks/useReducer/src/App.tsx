import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Reducer1 from "./components/Reducer1.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="links">
        <Link to={"/reducer1"}>Reducer 1</Link>
      </div>
      <Routes>
        <Route path="/reducer1" element={<Reducer1 />} />
      </Routes>
    </BrowserRouter>
  );
}
