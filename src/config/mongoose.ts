import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

export const connectToDb = async () => {
  const connectionString = 'mongodb://root:eu2017123@hml.allto.digital:27217/';
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