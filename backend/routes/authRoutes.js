import express from "express";
import {loginUser , getUserProfile , logoutUser} from "../controllers/userController.js";
import { registerTeacher } from "../controllers/teacherController.js";

const router = express.Router();

router.post("/register_teacher", registerTeacher); // Registration route
router.post("/login", loginUser);       // Login route
router.post("/logout", logoutUser); // Logout route
router.get("/profile/:id", getUserProfile);

// Protected route to get user profile


export default router;
