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

}
export const DeleteTask=(req,res)=>{
   const id = req.params.id;
   const raw_Data=getAllTask();
   const updated_Data=raw_Data.filter(ele=>ele.id!=id);
   TaskModel.saveAllTask(updated_Data)
 }

