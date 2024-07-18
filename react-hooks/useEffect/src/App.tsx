import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Effect1 from "./components/Effect1.jsx";
import RaceEffect2 from "./components/RaceEffect2.jsx";
import RaceFixEffect3 from "./components/RaceFixEffect3.jsx";
import RaceFixEffect4 from "./components/RaceFixEffect4.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="links">
        <Link to={"/effect1"}>Effect 1</Link>
        <Link to={"/race-effect2"}>Race Effect 2</Link>
        <Link to={"/race-fix-effect3"}>Race Fix Effect 3</Link>
        <Link to={"/race-fix-effect4"}>Race Fix Effect 4</Link>
      </div>
      <Routes>
        <Route path="/effect1" element={<Effect1 />} />
        <Route path="/race-effect2" element={<RaceEffect2 />} />
        <Route path="/race-fix-effect3" element={<RaceFixEffect3 />} />
        <Route path="/race-fix-effect4" element={<RaceFixEffect4 />} />
      </Routes>
    </BrowserRouter>
  );
}
