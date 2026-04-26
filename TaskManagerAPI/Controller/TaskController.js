import * as TaskModel from '../Model/DataAccess.js'
import { generateId } from '../utils/helperFunction.js';
export const handleGetAllTask=(req,res)=>{
   const Data= TaskModel.getAllTask();
    res.status(201).json(Data)
}
export const handleTaskById=(req,res)=>{
   const id= parseInt(req.params.id);
   if(!id){
      return res.status(400).json({message:"id is not valid or id is required"})
   }
   const Data= TaskModel.getTaskById(id);
   res.status(201).json(Data)
}
export const handleTaskByStatus=(req,res)=>{
  const status= req.query.status;
  if(!status){
  return  res.status(400).json({message:"status is invalid or empty"})
  }
  const data=TaskModel.getTaskByStatus(status);
   res.status(201).json(data);

}


export const addTask=(req,res)=>{
   const {title,description,status,dueDate}=req.body;

   if(!title ){
      return res.status(400).json({message:"title is required"});
   }
   if(!description ){
      return res.status(400).json({message:"description is required"});
   }
   if(!status ){
      return res.status(400).json({message:"status is required"});
   }
   const getUser= TaskModel.getAllTask();
   const  newTask={
    id:generateId(getUser),
    title,
    description,
    status,
    dueDate:dueDate|| new Date().toISOString().split('T')[0]
   }
   TaskModel.saveTaskToFIle(newTask);
  return  res.status(201).json({message:"data added succesfully"})
    
}
export const editTask=(req,res)=>{
   const id = req.params.id;
   const { title, description, status, dueDate } = req.body;
   const tasks = TaskModel.getAllTask();
   const index= tasks.findIndex(ele=>ele.id===id);
   tasks[index]={
  ...tasks[index],
    title: title || tasks[index].title,
      description: description || tasks[index].description,
      status: status || tasks[index].status,
      dueDate: dueDate || tasks[index].dueDate
   };
   TaskModel.saveAllTask(tasks)
   return  res.status(200).json({message:"data edited succesfully"})

}
export const DeleteTask=(req,res)=>{
   const id = req.params.id;

   const raw_Data=TaskModel.getAllTask();
   const updated_Data=raw_Data.filter(ele=>ele.id!=id);
   TaskModel.saveAllTask(updated_Data)
   return  res.status(200).json({message:"data deleted succesfully"})
 }

