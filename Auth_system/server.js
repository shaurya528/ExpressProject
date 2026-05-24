import express from "express";
import connectDB from './config/dbConnection.js';
import router from "./Router/router.js";
connectDB();
const app =express();
const PORT=3005;
app.use(express.json());
app.use('/auth',router);



 app.listen(PORT,()=>{
  console.log(`server running on port${PORT}`)
 })