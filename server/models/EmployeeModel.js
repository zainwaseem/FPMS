import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      validite: function (v) {
        return /^([a-z0-9_-]+)(@[a-z0-9-]+)(\.[a-z]+|\.[a-z]+\.[a-z]+)?$/is.test(
          v
        );
      },
      message: (props) => `${props.value} is not valid email`,
    },
    idCard: { type: Number, required: true },
    workingTimes: { type: String },
    endDate: { type: String },
    address: { type: String, required: true },
    experience: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeesSchema);
