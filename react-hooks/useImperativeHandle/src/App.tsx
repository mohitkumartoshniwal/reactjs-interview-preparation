import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ImperativeHandle1 from "./components/ImperativeHandle1.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="links">
        <Link to={"/imperative-handle1"}>Imperative Handle 1</Link>
      </div>
      <Routes>
        <Route path="/imperative-handle1" element={<ImperativeHandle1 />} />
      </Routes>
    </BrowserRouter>
  );
}
