import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';

 export const jwtTokenGenerator = (user) => {
  if (!process.env.JWT_Secret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }
  
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role
  };
  
  return jwt.sign(payload, process.env.JWT_Secret, { expiresIn: '30m' });
};

