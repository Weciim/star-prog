import express from "express"
import {testAPI , createTeacher,getTeacherDetails} from "../controllers/teacherController.js"

const router = express.Router()

router.route('/test').get(testAPI)
router.post("/create", createTeacher);
router.route("/:id").get(getTeacherDetails)


export default router