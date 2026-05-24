import express from  "express"
import { authMiddleware } from "../Middleware/authMiddleware.js";

import { generateNewRefreshToken, getProfile, logout, newUserRegistration,userLogin } from "../controler/authController.js";

const router = express.Router();

 router.post("/user",async(req,res)=>{
  newUserRegistration(req,res);

 })


 router.post('/login',async(req,res)=>{
      userLogin(req,res)
 })
 router.get('/profile',authMiddleware,getProfile);

 router.post('/accessToken',generateNewRefreshToken);
 router.post('logout',logout);
    
export  default router;