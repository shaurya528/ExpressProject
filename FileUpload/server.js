
import express from 'express'
import 'dotenv/config' 
import Db_connection from './Config/DbConnection.js';
const app= express();
const PORT = 3004;
Db_connection();

app.listen(PORT,()=>{
    console.log("app is running on port ")
})
