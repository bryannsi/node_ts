import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.js";
import { validationResultExpress } from "../middlewares/validationResult.js";
const router = express.Router();

//Password validation config
const minPasswordLength = 8;
const maxPasswordLength = 12;
const regex = `^((?=.*[d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^wds])|(?=.*[d])(?=.*[A-Z])(?=.*[^wds])|(?=.*[d])(?=.*[a-z])(?=.*[^wds])).{${minPasswordLength},${maxPasswordLength}}$`;

router.get("/login", login);
router.post(
  "/register",
  [
    body("email", "Formato de correo incorrecto.")
      .trim()
      .isEmail()
      .normalizeEmail(),
    body("password", "Formato de contraseña incorrecto.").trim().matches(regex),
  ],
  validationResultExpress,
  register
);
export default router;
