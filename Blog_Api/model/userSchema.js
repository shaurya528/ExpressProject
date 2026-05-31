import mongoose from "mongoose";

const {Schema,model}=mongoose;
const user_Schema=new Schema({
    username:{type: String, 
    required: [true, 'Username is required'], 
    unique: true, 
    trim: true,
    minlength: [3, 'Username must be at least 3 characters']
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'],
    minlength: 6
  },
  role: { 
    type: String, 
    enum: ['user', 'author', 'admin'], 
    default: 'user' 
  }
}, { timestamps: true });
const user_model= model('Users',user_Schema);
export default user_model
