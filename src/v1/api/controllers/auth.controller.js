export const login = (req, res, next) => {
  res.json({ ok: "login" });
};
export const register = (req, res, next) => {
  return res.json({ ok: "register" });
};
