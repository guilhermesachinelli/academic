import { Router } from "express";
import studentRouter from "./students.routes.js";
const router = Router()
router.use("/students", studentRouter);
router.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota ta funfando" });
});
export default router