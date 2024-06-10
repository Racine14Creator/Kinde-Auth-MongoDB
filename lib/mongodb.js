import mongoose from "mongoose";

const DBconnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB...", db.connections[0].readyState);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export default DBconnection;
