import Employee from "../models/EmployeeModel.js";

const AddEmployee = async (req, res, next) => {
  try {
    const { name, address, experience, phone, email, endDate, idCard } =
      req.body;
    if (!name || !address || !experience || !phone || !email || !idCard) {
      return res.status(400).json({
        message: "Please fill all fields",
      });
    }
    if (phone.length < 11) {
      return res.status(400).json({
        message: "Phone Number contains 11 digits",
      });
    }
    if (idCard.length < 13) {
      return res.status(400).json({
        message: "NIC contains 13 digits",
      });
    }
    const exist = await Employee.findOne({ email });
    if (exist) {
      return res.status(403).json({ message: "Employee already exists" });
    }
    const NICexist = await Employee.findOne({ idCard });
    if (NICexist) {
      return res.json({ message: "Employee already exists" });
    }

    const newEmployee = new Employee({
      name,
      address,
      experience,
      phone,
      email,
      endDate,
      idCard,
    });
    await newEmployee.save();
    res.status(200).json(`Employee added successfully`);
  } catch (error) {
    // next(error);
    next(error);
  }
};

const getALLEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

const getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    return res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  const { name, address, experience, phone, email, endDate, idCard } = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, {
      name,
      address,
      experience,
      phone,
      email,
      endDate,
      idCard,
    });
    res.status(200).json(`Employee updated successfully`);
  } catch (error) {
    next(error);
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const daletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    return res.status(200).json(`Employee has been deleted`);
  } catch (error) {
    next(error);
  }
};

export {
  getALLEmployees,
  AddEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
