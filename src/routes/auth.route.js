import express from "express";
import {
  login,
  register,
  infoUser,
  refreshToken,
  logout,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/protected", validateToken, infoUser);
router.get("/refresh", refreshToken);
router.get("/logout", logout);

export default router;
