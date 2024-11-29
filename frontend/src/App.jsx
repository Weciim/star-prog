import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Tregister from "./pages/Tregister";
import Mregister from "./pages/Mregister";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RegisterAsT" element={<Tregister />} />
          <Route path="/RegisterAsM" element={<Mregister />} />
        </Routes>
    </Router>
  );
}

