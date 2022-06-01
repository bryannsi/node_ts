// import "dotenv/config";
// import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import * as http from "http"; //ES 6
import helmet from "helmet";
// import authRoutes from "./src/routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(helmet);
// app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("🐢🐢 http://localhost:" + PORT));
