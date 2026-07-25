import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const jwtTokenGenerator = (user) => {
  const secret = process.env.JWT_SECRET;
  
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const payload = {
    id: user._id || user.id,
    email: user.email,
  };

  return jwt.sign(payload, secret, { expiresIn: "30m" });
};