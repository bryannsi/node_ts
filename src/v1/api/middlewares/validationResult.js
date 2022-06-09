import { validationResult } from "express-validator";

export const validationResultExpress = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const { email, password } = req.body;
    console.log(email, password);
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
