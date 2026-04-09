import  express from "express";
import { getAllTask, getTaskById, getTaskByStatus } from "./Module/DataAccess.js";
const app =  express()
app.get("/",(req,res)=>{
    const res_Data= JSON.stringify(getAllTask());
    res.send(res_Data)
})
app.get("/id",(req,res)=>{
    const res_Data_id=JSON.stringify(getTaskById(3))
    res.send(res_Data_id);
})
app.get("/tasks",(req,res)=>{
    const status=req.query.status
    const res_Data_Status=JSON.stringify(getTaskByStatus(status))
    res.send(res_Data_Status);
})
const  PORT=3004;
app.listen(PORT,()=>{
    console.log("server running")
})