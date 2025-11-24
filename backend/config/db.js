import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const URL = process.env.DB_URL

const connectDB = async () => {
 try {
    await mongoose.connect(URL)
    console.log("DB connected");
 } catch (error) {
    console.log("error from database connection\n",error);
 }   
}

export default connectDB