import express from 'express';
import dbConnect from './config/dbConnection.js';
import 'dotenv/config'

const PORT=3008;

const app = express();
dbConnect()
app.listen(PORT,()=>{
    console.log("server running")
})

