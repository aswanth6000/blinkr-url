import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const DB_URL = process.env.DB_URL!


export const  dataBaseConnection = async() =>{
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(DB_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('database connection error', error);
        
    }
}
