import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"; // Import CORS
import connectDB from './db.js'
import courseRoutes from './routes/courseRoutes.js'
import teacherRoutes from './routes/teacherRoutes.js'
import authRoutes from './routes/authRoutes.js'


dotenv.config()





const app = express()
const port = process.env.PORT ;

connectDB();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json()); // This line allows req.body to be parsed

// Route to fetch all courses
app.use('/api/courses' ,courseRoutes)

// Route to register teachers
app.use("/api/teachers", teacherRoutes);

// auth routes
app.use("/api/auth", authRoutes);


app.listen(port , ()=> console.log(`server is running on port ${port}`))

