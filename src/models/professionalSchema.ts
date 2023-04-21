import mongoose from "mongoose";

export interface IProfessional extends mongoose.Document {
  clientSaas: string;
  name: string;
  cpf: string;
  cep: string | number;
  city: string;
  uf: string;
  address: string;
  district: string;
  number: number;
  complement: string;
  position: string;
  telFone: string | number;
  cellFone: string | number;
  email: string;
  birthDate: Date;
  typeFunction: string;
  obs: string;
}

const professionalSchema = new mongoose.Schema({
  clientSaas:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clientSaas',
    required: true
  },
  name: { type: String },
  cpf: { type: String },
  cep: { type: String },
  city: { type: String },
  uf: { type: String },
  address: { type: String },
  district: { type: String },
  number: { type: Number},
  complement: { type: String },
  telFone: { type: String },
  cellFone: { type: String },
  email: { type: String },
  birthDate: { type: Date },
  typeFunction: { type: String },
  function: { type: String },
  obs: { type: String },
});

const Professional = mongoose.model<IProfessional>('professional',professionalSchema)

export default Professional