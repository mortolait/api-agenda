import mongoose from "mongoose";

const appointment = new mongoose.Schema({
  clientSaas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'clientSaas',
    required: true
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'professional'
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'typeservices'
  },
  status: {
    type: String,
  },
  obs: {
    type: String,
  },
  address: {
    type: String,
  },
  cep: {
    type: String,
  },
  city: {
    type: String,
  },

  district: {
    type: String,
  },
  number: {
    type: Number,
  },
  uf: {
    type: String,
  },
  complemnt: {
    type: String,
  },
  value:{
    type: String,
  }
});

const Appointment = mongoose.model("appointment", appointment);

export default Appointment;
