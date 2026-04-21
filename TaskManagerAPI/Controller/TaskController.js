import * as TaskModel from '../Module/DataAccess.js'

export const addTask=(req,res)=>{
    
   const {id,title,description,status,dueDate}=req.body;

   const getUser= TaskModel.getAllTask();

   const  newTask={
    id:id||Number(getUser.length+1),
    title,
    description,
    status:status||"pending",
    dueDate:dueDate||Date.now().toString().split('T')[0]
   }
   TaskModel.saveTaskToFIle(newTask);
   console.log("task save succesfull");
    
   

}