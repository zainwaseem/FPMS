import Employee from "../models/EmployeeModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const AddEmployee = async (req, res) => {
  try {
    const { name, address, experience, workingTimes, email, endDate, idCard } =
      req.body;
    if (
      !name ||
      !address ||
      !experience ||
      !workingTimes ||
      !email ||
      !endDate ||
      !idCard
    ) {
      return res.json({
        message: "Please fill all fields",
      });
    }

    const EmployeeExist = await Employee.findOne({ email });
    if (EmployeeExist) {
      return res.json({ message: "Email already exists" });
    }
    const newEmployee = new Employee({
      name,
      address,
      experience,
      workingTimes,
      email,
      endDate,
      idCard,
    });
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const getALLEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.json(employees);
  } catch (error) {
    console.log(error);
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    return res.json(employee);
  } catch (error) {
    console.log(error);
  }
};

const updateEmployee = async (req, res) => {
  const { name, address, experience, workingTimes, email, endDate, idCard } =
    req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, {
      name,
      address,
      experience,
      workingTimes,
      email,
      endDate,
      idCard,
    });
    return res.json(updatedEmployee);
  } catch (error) {
    console.log(error);
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const daletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    return res.json(daletedEmployee);
  } catch (error) {
    console.log(error);
  }
};

export {
  getALLEmployees,
  AddEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
