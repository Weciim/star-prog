import express from "express";
import {loginUser , getUserProfile , logoutUser} from "../controllers/userController.js";
import { registerTeacher } from "../controllers/teacherController.js";
import {registerMentor} from "../controllers/mentorController.js"

const router = express.Router();

router.post("/register_teacher", registerTeacher); // Registration route for teachers
router.post("/register_mentor", registerMentor); // Registration route for mentors
router.post("/login", loginUser);       // Login route
router.post("/logout", logoutUser); // Logout route
router.get("/profile/:id", getUserProfile);

// Protected route to get user profile


export default router;
