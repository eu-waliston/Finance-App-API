import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);
app.use("/summary", summaryRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err))

app.listen(300, () => {
    console.log("Servidor rodando na porta 3000")
})

