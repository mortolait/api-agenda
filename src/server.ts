import { Request, Response } from 'express'
import server from './config/app'
import 'dotenv/config'


const port = process.env.PORT
server.app.get('/teste',(req:Request,res:Response)=>{
    res.send("Hello")
})
server.app.listen(port,()=>{
    console.log("Server is running")
})