import mongoose from "mongoose";

const appointment = new mongoose.Schema({
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  professional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'professionals'
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
});

const Appointment = mongoose.model("appointments", appointment);

export default Appointment;
