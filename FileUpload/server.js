import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Db_connection from "./Config/DbConnection.js";
import authRoutes from "./routes/authRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();
Db_connection()

const app = express();
app.use(cors());
app.use(express.json());

try{
    app.get("/ping", (req, res) => res.send("pong"));
    console.log("everything fine")

}catch(err){
    console.error(err,"unable to do anything")
}
app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

const PORT =  3004;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));