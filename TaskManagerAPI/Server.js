import  express from "express";
import taskRouter from "./Routes/routesHandle.js";
const app =  express()
app.use(express.json());
app.use('/tasks',taskRouter)


const  PORT=3004;
app.listen(PORT,()=>{
    console.log("server running")
})