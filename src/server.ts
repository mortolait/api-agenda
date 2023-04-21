import server from './config/app'
import 'dotenv/config'


const port = process.env.PORT

server.app.listen(port,()=>{
    console.log("Server is running")
})