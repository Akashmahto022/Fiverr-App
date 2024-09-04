import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";

const tokenVerify = async (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return next(apiError(400, "you are not authentication"));

  jwt.verify(
    token,
    process.env.JWT_KEY_FOR_ACCESS_TOKEN,
    async (err, payload) => {
      if (err) next(apiError(400, "Token is not valid"));
      res.userId = payload.id;
      res.isSeller = payload.isSeller;
      next();
    }
  );
};

export { tokenVerify };
