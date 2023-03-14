import mongoose from "mongoose";

export interface IClient extends mongoose.Document {
  name: string;
  email: string;
  cpf: string;
  address: string;
  typePerson: string;
  cep: string;
  city: string;
  uf: string;
  telFone: string;
  cellFone: string;
  birthDate: Date;
  profession: string;
  complement: string;
  obs: string;
  status: string
}
const clientSchema = new mongoose.Schema({
  clientSaas:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clientSaas',
    required: true
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  cpf: {
    type: String
  },
  address: {
    type: String,
    required: true
  },
  typePerson: {
    type: String
  },
  cep: {
    type: String
  },
  city: {
    type: String
  },
  district: {
    type: String
  },
  number: {
    type: Number
  },
  uf: {
    type: String
  },
  telFone: {
    type: String
  },
  cellFone: {
    type: String
  },
  birthDate: {
    type: Date
  },
  profession: {
    type: String
  },
  complement: {
    type: String
  },
  obs: {
    type: String
  },
  status: {
    type: String
  },
});

const Client = mongoose.model<IClient>("Client", clientSchema);

export default Client;
