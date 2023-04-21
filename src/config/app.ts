import express,{Request,Response} from 'express'
import cors from 'cors'
import * as dataBase from './mongoose'
import '../utils/module-alias'

import auth from '../middlewares/auth.middlewares'

import routerClient from '../routes/clientRoutes'
import routerUser from '../routes/userRoutes'
import routerProfessional from '../routes/professionalRoutes'
import routerStates from '../routes/statesRoutes'
import routerAppointment from '../routes/appointmentController'
import routerTypeServices from '../routes/typeServicesRoutes'
import routerClientSaas from '../routes/clientSaasRoutes'


class App{
    public app: express.Application

    constructor(){
        this.app = express()
        
        this.init()
        this.routes()
    }

    public init(){
        this.app.use(cors())
        this.app.use(express.json()),
        this.app.use(express.urlencoded({ extended: true }))
        // this.dataBaseSetup()
    }
    routes(){
        this.app.get('/testex',(req:Request, res:Response)=>{
            res.send("Hello")
        })
         this.app.use('/clientSaas',routerClientSaas)
        this.app.use('/users',routerUser)

        //  this.app.use(auth.validate)

        this.app.use('/clients',routerClient)
        this.app.use('/professionals',routerProfessional)
        this.app.use('/states', routerStates)
        this.app.use('/appointments',routerAppointment)
        this.app.use('/typeServices',routerTypeServices)
    }

    dataBaseSetup(){
        dataBase.connectToDb()
    }
}


export default new App()
