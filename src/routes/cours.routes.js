import { Router } from "express";
import {
    createCours,
    getCoursById,
    getCours,
    updateCours,
    deleteCours 
} from "../controllers/cours.controller.js";
const courseRouter = Router();
courseRouter.get("/", getCours);

courseRouter.get("/:id", getCoursById);

courseRouter.post("/", createCours);

courseRouter.put("/:id", updateCours);

courseRouter.delete("/:id", deleteCours);

export default courseRouter