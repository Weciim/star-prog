import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import Teacher from "../models/teacherModel.js";
import Mentor from "../models/mentorModel.js";
import dotenv from "dotenv";

dotenv.config();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password matches
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Fetch additional details based on the user's role
    let teacherDetails = null;
    let mentorDetails = null;

    if (user.role === "Teacher" && user.teacherDetails) {
      teacherDetails = await Teacher.findById(user.teacherDetails);
    }

    if (user.role === "Mentor" && user.mentorDetails) {
      mentorDetails = await Mentor.findById(user.mentorDetails);
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Send back user details and role-specific details
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      teacherDetails, // Include teacher details if the user is a teacher
      mentorDetails,  // Include mentor details if the user is a mentor
      token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

export const getUserProfile = async (req, res) => {
  const { id } = req.params; // Extract user ID from request parameters

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch teacher or mentor details if applicable
    let teacherDetails = null;
    let mentorDetails = null;

    if (user.role === "Teacher" && user.teacherDetails) {
      teacherDetails = await Teacher.findById(user.teacherDetails);
    }

    if (user.role === "Mentor" && user.mentorDetails) {
      mentorDetails = await Mentor.findById(user.mentorDetails);
    }

    // Return the user and additional details
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      teacherDetails, // Include teacher details if applicable
      mentorDetails,  // Include mentor details if applicable
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

export const logoutUser = (req, res) => {
  try {
    // Clear the token or invalidate it (optional if you're using a blacklist mechanism)
    // Since JWT is stateless, a common practice is for the frontend to delete the token from localStorage.

    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({
      message: "Something went wrong during logout",
      error: error.message,
    });
  }
};
