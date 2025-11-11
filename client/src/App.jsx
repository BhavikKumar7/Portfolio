import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <CustomCursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
