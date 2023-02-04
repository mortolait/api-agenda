import mongoose from "mongoose";

export interface IClient extends mongoose.Document {
  name: String;
  email: String;
  cpf: String;
  address: String;
  typePerson: String;
  cep: String;
  city: String;
  uf: String;
  telFone: String;
  cellFone: String;
  birthDate: Date;
  profession: String;
  complement: String;
  obs: String;
  status: String
}
const clientSchema = new mongoose.Schema({
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
