import express from 'express';
import dbConnect from './config/dbConnection.js';
import 'dotenv/config'
import { userSignup } from './controller/User_signup.js';
import { loginUser } from './controller/User_login.js';
import { protect } from './middleware/authmiddleware.js';
import { createBlog } from './controller/blog_Controller.js';
import { restrictedTo } from './middleware/role_middleware.js';


const PORT=3008;

const app = express();
dbConnect()
app.use(express.json());
app.post('/signup',userSignup);
app.post('/login',loginUser);
app.post('/post',protect,restrictedTo('author','admin'),createBlog)
app.listen(PORT,()=>{
    console.log("server running")
})

