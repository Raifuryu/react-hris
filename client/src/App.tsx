import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trainings from "./components/Trainings";
import Greetings from "./components/Greetings";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Greetings />}></Route>
          <Route path="/trainings" element={<Trainings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
