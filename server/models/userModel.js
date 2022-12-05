import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

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

    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

// usersSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     // this.cpassword = await bcrypt.hash(this.cpassword, 12);
//   }
//   next();
// });

// usersSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//     this.tokens = this.tokens.concat({ token: token });
//     await this.save();
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

export default mongoose.model("User", usersSchema);
