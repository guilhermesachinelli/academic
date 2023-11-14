import { Router } from "express";
import {
    createStudent,
    getStudentById,
    getStudents,
    updateStudent,
    deleteStudent
} from "../controllers/students.controller.js";
const studentRouter = Router();
studentRouter.get("/", getStudents);
studentRouter.get("/:id", getStudentById);
studentRouter.post("/", createStudent);
studentRouter.put("/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);
export default studentRouter
