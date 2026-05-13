import express from "express";
import auth from "../middlewares/auth.js";
import { getSummary } from "../controllers/summaryController.js";

const router = express.Router();

router.get("/", auth, getSummary);

export default router;