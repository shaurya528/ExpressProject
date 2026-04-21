
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const _dirname =path.dirname(fileURLToPath(import.meta.url));

const Data_file=path.join (_dirname ,'..','Data.json')

export  const getAllTask=()=>{
    try{
     const raw_Data=  readFileSync(Data_file,'utf-8');
     return JSON.parse(raw_Data)
    }catch(err){
        console.error("unable to provide all task");
        return [];
    }
}
export const getTaskById =(id)=>{
    try{
   const raw_Data= getAllTask();
   return raw_Data.find(u=>(u.id===id))
    }catch(err){
       console.error("ubable to get task by id");
       return [];
    }
}
export const getTaskByStatus=(status)=>{
try{
  const raw_data= getAllTask();
  return raw_data.filter(t=>t.status==status);
  
}catch(err){
    console.error("unable to fetch task by Status")
    return [];
}
}
export const saveTaskToFIle=(newTask)=>{
try{
    const AllTask=getAllTask();
    AllTask.push(newTask);
    writeFileSync(Data_file,JSON.stringify(AllTask,null,2),'utf-8');
}
catch(err){
console.error("unable to save data in file")
}
}