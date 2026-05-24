import user_information from "../Model/User.js";
import jwt from 'jsonwebtoken';

import { tokenGenerator,refreshTokenGenerator } from "../services/tokenServics.js";
export const newUserRegistration = async (req, res) => {
    try {
        const { username, email, password, number } = req.body;
        if (!username || !email || !password || !number) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await user_information.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }
        


        console.log(req.body)
        const data = await user_information.create({ username, email, number });
        res.json(data)

    } catch (err) {
        console.error("unable to store data in database", err);
        res.status(500).json({
            message:"Internal server error"
         });
    }
}

export const userLogin = async (req,res)=>{

    try{
 
       const {email,password} = req.body;
 
       // Validation
       if(!email || !password){
 
          return res.status(400).json({
             message:"Email and password are required"
          });
 
       }
 
       // Find user
       const findData =
       await user_information.findOne({email});
 
       // User not found
       if(!findData){
 
          return res.status(404).json({
             message:"User not found"
          });
 
       }
 
       // Compare password
       const match =
       await findData.comparePassword(password);
 
       // Invalid password
       if(!match){
 
          return res.status(401).json({
             message:"Invalid credentials"
          });
 
       }
 
       // Generate tokens
       const token =
       tokenGenerator(findData);
 
       const refreshToken =
       refreshTokenGenerator(findData);
 
       // Save refresh token
       findData.refreshToken = refreshToken;
 
       await findData.save();
 
       // Success response
       return res.status(200).json({
 
          message:"Login successful",
 
          token,
          refreshToken,
 
          user:{
             id:findData._id,
             email:findData.email,
             role:findData.role || "user"
          }
 
       });
 
    }catch(err){
 
       console.error("Login error:",err);
 
       return res.status(500).json({
          message:"Internal server error"
       });
 
    }
 
 }
 export  const getProfile=async(req,res)=>{
   const user=await user_information.findById(req.user.id).select('-password');
   if(!user){
      return res.status(404).json({ message: 'User not found' });
   }
   res.status(200).json({user});
 }

 export const generateNewRefreshToken=async(req,res)=>{
      const {refreshToken}=req.body;
       if(!refreshToken){
        return res.status(400).json({message:"invalid or refreshToken needed"});
       }
       try{
         const decode=jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET);
        const findData=await user_information.findOne({
         _id:decode.id,
         refreshToken:refreshToken
        })
        if(!findData){
         return res.status(400).json({message:"not found"});

        }
        const newAccessToken = tokenGenerator(findData);
        res.status(200).json({newAccessToken})
      
       }catch(err){
         console.error("Login error:",err);
 
         return res.status(500).json({
            message:"Internal server error"
         });
       }

 }
 export const logout = async (req, res) => {
   const { refreshToken } = req.body;
 
   if (!refreshToken) {
     return res.status(400).json({ message: "Refresh token required" });
   }
 
   try {
    
     const user = await user_information.findOne({ refreshToken: refreshToken });
 
     if (!user) {
       
       return res.status(200).json({ message: "Logged out successfully" });
     }
 
     user.refreshToken = null;
     await user.save();
 
     res.status(200).json({ message: "Logged out successfully" });
   } catch (err) {
     console.error("Logout error:", err);
     res.status(500).json({ message: "Internal server error" });
   }
 };



