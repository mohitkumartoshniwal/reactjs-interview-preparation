import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Callback1 from "./components/Callback1.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="links">
        <Link to={"/callback1"}>Callback 1</Link>
      </div>
      <Routes>
        <Route path="/callback1" element={<Callback1 />} />
      </Routes>
    </BrowserRouter>
  );
}
