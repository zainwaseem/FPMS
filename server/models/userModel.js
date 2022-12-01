import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    name: String,
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
    password: {
      type: String,
      minlength: [8, "8 characters must"],
    },
    role: {
      type: String,
      default: "owner",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", usersSchema);
