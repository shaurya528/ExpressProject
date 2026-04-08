import  express from "express";
const app =  express()
app.get("/",(req,res)=>{
    res.json({message:"testing server"})
})
const  PORT=3004;
app.listen(PORT,()=>{
    console.log("server running")
})