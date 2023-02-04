import mongoose from "mongoose";
import { IndexedAccessType } from "typescript";

export interface IProfessional extends mongoose.Document {
  name: string;
  cpf: string;
  cep: string | number;
  city: string;
  uf: string;
  address: string;
  district: string;
  number: number;
  complement: string;
  profession: string;
  telFone: string | number;
  cellFone: string | number;
  email: string;
  birthDate: Date;
  typeFunction: string;
  obs: string;
}

const professionalSchema = new mongoose.Schema({
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
  typeFunction: { type: String }
});

const Professional = mongoose.model<IProfessional>('professionals',professionalSchema)

export default Professional