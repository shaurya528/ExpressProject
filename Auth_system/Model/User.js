import mongoose from "mongoose";

const{Schema,model}=mongoose;
 const users_data=new Schema({
    username: String,
    email:String,
    password:String,
    number:Number
 })


 
 users_data.methods.comparePassword=function(userpasswod){
   return userpasswod===  this.password;
 }

 users_data.statics.findEmail=function(email){
   return this.findOne({email});
 }
 const user_information=model("user_data",users_data);
 export  default user_information;