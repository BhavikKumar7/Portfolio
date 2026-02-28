import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CustomCursor from "./components/CustomCursor";
import Backgroud from "./components/Backgroud";

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <Backgroud />
      <div className="relative z-10">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
