import mongoose from "mongoose";

const Db_connection=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected successful")
    }catch(err){
        console.error("unable to connect with database",err);
        process.exit(1);
    }
}
export  default Db_connection;

