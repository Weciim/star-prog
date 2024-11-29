import User from '../models/userModel.js'
import Teacher from '../models/teacherModel.js';

// Test function to create a teacher and return a JSON message
const createTeacher = async (req, res) => {
    try {
      // Extract teacher and user details from the request body
      const { name, email, password, institution, subjects } = req.body;
  
      // Validate required fields
      if (!name || !email || !password || !institution || !subjects) {
        return res.status(400).json({
          message: "All fields are required: name, email, password, institution, and subjects.",
        });
      }
  
      // Create teacher details
      const teacher = await Teacher.create({
        institution,
        subjects,
      });
  
      // Create user and associate with the teacher
      const user = await User.create({
        name,
        email,
        password,
        role: "Teacher",
        teacherDetails: teacher._id, // Reference to the Teacher document
      });
  
      // Send success response
      res.status(201).json({
        message: "Teacher and User created successfully",
        user,
        teacher,
      });
    } catch (error) {
      // Handle errors and return failure message
      res.status(500).json({
        message: "Failed to create Teacher and User",
        error: error.message,
      });
    }
  };

 

const testAPI = (req, res) => {
    res.status(200).json({
      message: "API is working!",
    });
  };


  const getTeacherDetails = async (req, res) => {
    try {
      // Extract user ID from request parameters
      const userId = req.params.id;
  
      // Find the user and populate the teacherDetails field
      const user = await User.findById(userId).populate("teacherDetails");
  
      // Check if the user exists and is a teacher
      if (!user || user.role !== "Teacher") {
        return res.status(404).json({ message: "Teacher not found" });
      }
  
      // Send the teacher details in the response
      res.status(200).json({
        message: "Teacher details fetched successfully",
        user,
        teacherDetails: user.teacherDetails,
      });
    } catch (error) {
      // Handle errors and return failure message
      res.status(500).json({
        message: "Failed to fetch teacher details",
        error: error.message,
      });
    }
  };
export  {testAPI , createTeacher ,getTeacherDetails}
