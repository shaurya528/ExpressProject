import express from "express";
import 'dotenv/config'; // This loads variables immediately
import connectDB from './config/dbConnection.js';
import user_information from "./Model/User.js";
connectDB();
const app =express();
const PORT=3005;
app.use(express.json());
 app.get("/user",(req,res)=>{
    res.json({message:"working fine"});
 })
 app.post("/user",async(req,res)=>{
const {username,email,password,number}=req.body;
  try{
    console.log(req.body)
const  data= await user_information.create({username,email,password,number});
res.json(data)

  }catch(err){
    console.error("unable to store data in database",err);
  }

 })
 app.post('/login',async(req,res)=>{
const {email,password}=req.body;
const findData= await user_information.findEmail(email);

const match=findData.comparePassword(password);
if(match){
  res.json({message :"you are welcome"})
}else{
  res.json({message :"you are invalid crenditial"})
}
 })
 app.listen(PORT,()=>{
  console.log(`server running on port${PORT}`)
 })