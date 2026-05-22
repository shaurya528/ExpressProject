import Dotenv  from "dotenv";
Dotenv.config();
import jwt from 'jsonwebtoken';


export const tokenGenerator=(user)=>{
    const payload={
        id:user.id,
        email:user.email,
        role:'user'
    }

    return jwt.sign(
        payload,
        process.env.jwt_Secret,
        { expiresIn:  '15m' }
    )
}

export const refreshTokenGenerator=(user)=>{
    const payload={
        id:user.id   
    }
    return jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET,
        {expiresIn:'7d'}
    )
}

