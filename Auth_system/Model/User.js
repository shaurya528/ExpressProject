import mongoose from "mongoose";
import bcrypt  from "bcrypt";

const{Schema,model}=mongoose;
 const users_data=new Schema({
    username: String,
    email:String,
    password:String,
    number:Number,
    refreshToken:{type:String,default:null}
 })
users_data.pre('save',async function (next){
if(!this.isModified('password')) 
  return next;

try{
  const salt= await bcrypt.genSalt(10);
  this.password=await bcrypt.hash(this.password,salt);
  next;
}catch(err){
  next(err);
}



})
 
 users_data.methods.comparePassword=async function(candidatePassword){
   return await bcrypt.compare(candidatePassword,this.password)}

 users_data.statics.findEmail=function(email){
   return this.findOne({email});
 }
 const user_information=model("user_data",users_data);
 export  default user_information;