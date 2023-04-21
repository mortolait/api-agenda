import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

export const connectToDb = async () => {
  const connectionString = 'mongodb+srv://lmortola93:j6WfHKdo47vf4l2Y@cluster0.giesgog.mongodb.net/test';
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