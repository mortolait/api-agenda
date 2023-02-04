import mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    user: String,
    password: String
}

const userSchema = new mongoose.Schema({
    username:{
        type: String,
    },
    password:{
        type: String
    }
})

const user = mongoose.model<IUser>("user",userSchema)

export default user