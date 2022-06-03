// import "dotenv/config";
// import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRouter from "./v1/api/routes/auth.route.js";

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(helmet());

//ROUTES
app.use("/api/v1/", authRouter);

//SERVER LISTENER
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("🐢🐢 http://localhost:" + PORT));
