import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/FPMS")
    .then(() => console.log(`DB Connected`))
    .catch((error) => console.log(error.message));
};

export default connectDB;
