import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Greetings from "./Greetings";
import AddTraining from "./AddTraining";
import Statistics from "./Statistics";
import Training from "./Trainings";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              CDRRMD - TIS
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Training</summary>
                  <ul className="p-2 bg-base-100 z-50">
                    <li>
                      <Link to="add-training">Training List</Link>
                    </li>
                    <li>
                      <Link to="/training">Training</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Greetings />}></Route>
          <Route path="/training" element={<Training />}></Route>
          <Route path="/add-training" element={<AddTraining />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
