import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

export const connectToDb = async () => {
  const connectionString = process.env.URL_BASE_MONGO?process.env.URL_BASE_MONGO:'';
  await mongoose.connect(connectionString)
    .then((res)=>{
      console.log("database connected")
    }).catch((err)=>{
      console.log("database not connected")
      console.log(err)
    });
};

export const disconnectFromDb = async () => {
  await mongoose.connection.close();
};