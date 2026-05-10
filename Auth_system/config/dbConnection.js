import mongoose from "mongoose";
const connectDB = async () => {
    try {
        // Replace <db_password> with your actual password!
        await mongoose.connect(process.env.MONGPDB_URI);
        console.log("success")
    } catch (err) {
        console.error(" Unable to connect to MongoDB:", err);
        process.exit(1); 
    }
};
export default  connectDB;