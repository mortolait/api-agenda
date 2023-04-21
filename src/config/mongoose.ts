import mongoose from 'mongoose';
import 'dotenv/config'
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);

export const connectToDb = async () => {
  const connectionString = 'mongodb+srv://contatomortola:nZuO1bHrg94ptJrJ@cluster0.82viicd.mongodb.net/linus';
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