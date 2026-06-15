import mongoose from "mongoose";
import bcrypt  from "bcrypt";
const {Schema,model}=mongoose;
const usersSchema=new Schema({
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


usersSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    return next()
  }
  const salt=await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
  next()
})
const userModel= model('Users',usersSchema);
export default userModel
