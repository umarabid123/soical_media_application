import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );
  
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

export default connectDB;


// we can used by this method ifi function
// const app = express()
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
//     app.on("Error:", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App Listenig on PORT: ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// })();
