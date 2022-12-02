import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(newUser);
    if (user) {
      res.json({
        message: "user has been registered",
      });
    } else {
      res.json({
        message: "enter a valid email and password must 8 letters long",
      });
    }
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      return res.json({
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "user not registered",
      });
    }
    const isMatchedPassword = await bcrypt.compare(password, user.password);
    if (!isMatchedPassword) {
      return res.json({
        message: "Email and Password is not correct",
      });
    }
    console.log(`matched`);
    const token = jwt.sign({ id: user._id }, "mysupersecret786", {
      expiresIn: "5d",
    });

    res.cookie("token", token, { httpOnly: true }).json({
      token: `you are logged in`,
    });
  } catch (error) {
    next(error);
  }
};
const getALLUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const logout = async (req, res) => {
  console.log(`cleared`);
  return res
    .clearCookie("token")
    .status(200)
    .json({ message: "Successfully logged out 😏" });
};

export { register, login, getALLUsers, logout };
