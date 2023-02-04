import mongoose from "mongoose";

export interface IState extends mongoose.Document{
    sigla: String,
    nome: String,
    cidades: Array<String>
}

const stateSchema = new mongoose.Schema({
    sigla:{
        type: String
    },
    nome: {
        type: String
    },
    cidades: {
        type: Array<String>
    }
})

const State = mongoose.model<IState>('states',stateSchema)

export default State