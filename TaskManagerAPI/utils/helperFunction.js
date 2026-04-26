export const generateId=(task)=>{
    if(!task || task.length===0){
        return 1;
    }
const maxId = Math.max(...task.map(t=>t.id));
return maxId+1;
}