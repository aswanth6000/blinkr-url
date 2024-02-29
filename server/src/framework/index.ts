import express, {Express, Request, Response} from 'express'
import { dataBaseConnection } from '../adapters/database/database.conn';
const app = express()

dataBaseConnection()
app.listen(8000,()=>{
    console.log("listening on port 8000");
    
})