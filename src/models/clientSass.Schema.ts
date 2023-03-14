import mongoose from "mongoose";

const clientSaas = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
    },
    updatedAt:{
        type: Date,
    },
    paymentInformation:{
        cardNumber:{
            type: String,
            required: true
        },
        cardName:{
            type: String,
            required: true
        },
        cardExpiration:{
            type: String,
            required: true
        },
        cardCvv:{
            type: String,
            required: true
        },
        cardFlag:{
            type: String,
            required: true
        },
        transactionHistory:{
            type: Array,
            required: true
        }
    },
    numberOfUsers:{
        type: Number,
        required: true
    }
})

const ClientSaas = mongoose.model("clientSaas",clientSaas)

export default ClientSaas