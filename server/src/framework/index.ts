import express, {Express, Request, Response} from 'express'
import { dataBaseConnection } from '../adapters/database/database.conn';
import urlRouter from '../adapters/routes/url-routes';

const app = express()

app.use(urlRouter)
dataBaseConnection()
app.listen(8000,()=>{
    console.log("listening on port 8000");
    
})