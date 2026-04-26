import express  from 'express'
import * as getTask from '../Model/DataAccess.js'
import  * as modify from '../Controller/TaskController.js'

const router=express.Router();

router.get('/',(req,res)=>{
    modify.handleGetAllTask(req,res)
});
router.get('/id/:id',modify.handleTaskById);
router.get('/status',modify.handleTaskByStatus);
router.post('/add',modify.addTask);
router.delete('/delete/:id',modify.DeleteTask);
router.put('/edit/:id',modify.editTask);

export default router;