import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Tregister from "./pages/Tregister";
import Mregister from "./pages/Mregister";
import UserProfile from "./pages/TeacherProfile";
import CoursesPage from "./pages/CoursesPage";
import SingleCoursePage from "./pages/SingleCoursePage";
import MentorProfile from "./pages/MentorProfile";
import BrainMate from "./pages/BrainMate";
<<<<<<< HEAD
import Contact from "./pages/Contact";
import Tools from "./pages/TeacherToolsDashboard"
import TeacherToolsDashboard from "./pages/TeacherToolsDashboard";
=======
import Contact from "./pages/Contact"
import Student from "./pages/Student";
>>>>>>> b6a374c7a4418bc44803fb0bce7cf879d2acc2ee



export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/RegisterAsT" element={<Tregister />} />
          <Route path="/RegisterAsM" element={<Mregister />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/mentor" element={<MentorProfile />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/1" element={<SingleCoursePage />} />
          <Route path="/BrainMate" element={<BrainMate />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/tools" element={<TeacherToolsDashboard />} />
=======
          <Route path="/student" element={<Student />} />
>>>>>>> b6a374c7a4418bc44803fb0bce7cf879d2acc2ee
        </Routes>
    </Router>
  );
}

