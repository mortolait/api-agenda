import mongoose from "mongoose";

export interface ITypeService extends mongoose.Document {
  name: String;
}

const typeService = new mongoose.Schema({
  name: {
    type: String,
  },
});

const TypeService = mongoose.model<ITypeService>("typeservices", typeService);

export default TypeService;
