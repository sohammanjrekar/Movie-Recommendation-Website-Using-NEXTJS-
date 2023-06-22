import mongoose from "mongoose";

const connect=async()=>{
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/soham');
  } catch (error) {
    throw new Error("connection failed")
  }
}

export default connect;
