import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trainings from "./components/Trainings";
import Greetings from "./components/Greetings";
import AddTraining from "./components/AddTraining";
import TrainingList from "./components/TrainingList";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Greetings />}></Route>
          <Route path="/trainings" element={<Trainings />}></Route>
          <Route path="/add-trainer" element={<AddTraining />}></Route>
          <Route path="/training-list" element={<TrainingList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
