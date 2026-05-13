import express from "express";
import auth from "../middlewares/auth.js";
import {
  createTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction
} from "../controllers/transactionController.js";

const router = express.Router();

router.use(auth);

router.post("/", createTransaction);
router.get("/", getTransactions);
router.delete("/:id", deleteTransaction);
router.put("/:id", updateTransaction);

export default router;