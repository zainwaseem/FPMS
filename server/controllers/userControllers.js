import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.json({
        message: "Please fill all fields",
      });
    }
    if (password.length < 8) {
      return res.json({ message: "Password must be at least 8 characters" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ message: "Email already exists" });
    }
    const hashpass = await bcrypt.hash(req.body.password, 10);
    console.log(hashpass);

    const newUser = new User({
      name,
      email,
      password: hashpass,
      role,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "Please fill all the fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "User not registered",
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

    return res.cookie("token", token, { httpOnly: true }).json({
      token: `you are logged in`,
    });
  } catch (error) {
    console.log(error);
  }
};
const getALLUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const logout = async (req, res) => {
  if (req.cookies)
    return res
      .cookie("token", "", { httpOnly: true, expires: new Date(0) })
      .status(200)
      .json({ message: "Successfully logged out 😏" });
  else {
    return res.json("error in logging you out");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  const { name, role, email, password } = req.body;
  const hashpass = await bcrypt.hash(password, 10);
  console.log(hashpass);
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      password: hashpass,
      role,
    });
    return res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const daletedUser = await User.findByIdAndDelete(req.params.id);
    return res.json(daletedUser);
  } catch (error) {
    console.log(error);
  }
};
const loggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    const decode = jwt.verify(token, "mysupersecret786");
    const id = decode.id;
    req.user = await User.findById(id);

    res.send(req.user.role);
    // res.send(true);
  } catch (err) {
    res.json(false);
  }
};
export {
  register,
  login,
  getALLUsers,
  logout,
  getUser,
  updateUser,
  deleteUser,
  loggedIn,
};
