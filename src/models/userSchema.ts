import mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    user: string,
    password: string
}

const userSchema = new mongoose.Schema({
    clientSaas:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clientSaas'
    },
    username:{
        type: String,
    },
    password:{
        type: String
    }
})

const user = mongoose.model<IUser>("user",userSchema)

export default user