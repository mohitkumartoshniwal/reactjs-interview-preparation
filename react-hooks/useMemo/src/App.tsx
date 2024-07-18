import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Memo1 from "./components/Memo1";

export default function App() {
  return (
    <BrowserRouter>
      <div className="links">
        <Link to={"/memo1"}>Memo 1</Link>
      </div>
      <Routes>
        <Route path="/memo1" element={<Memo1 />} />
      </Routes>
    </BrowserRouter>
  );
}
