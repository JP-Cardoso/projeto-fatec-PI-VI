import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [_, token] = authorization.split(" ");

  try {
    const decode = jwt.verify(token, "68e47484c1554726a9557b76c79ad7d3");
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}