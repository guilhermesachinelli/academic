import { Router } from "express";
import studentRouter from "./students.routes.js";
import courseRouter from "./cours.routes.js";
const router = Router()
router.use("/students", studentRouter);
router.use("/courses", courseRouter);
router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota ta funfando" });
});
export default router