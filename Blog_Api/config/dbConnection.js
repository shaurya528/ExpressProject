import mongoose from "mongoose";

const dbConnect=async()=>{
    try{
 await mongoose.connect(process.env.MONGODB_URI);
  console.log("succesfully  connected")
    }catch(err){
        console.error("unable to connect with database",);
        process.exit(1);
    }
}
export  default dbConnect;
