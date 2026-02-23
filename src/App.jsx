import { Routes, Route } from "react-router-dom";
import BMI from "./Components/Bmi";
import Result from "./Components/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BMI />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;