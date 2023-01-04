import Employee from "../models/EmployeeModel.js";

const AddEmployee = async (req, res, next) => {
  try {
    const { name, address, experience, phone, email, endDate, idCard } =
      req.body;
    if (!name || !address || !phone || !email || !idCard) {
      return res.json({
        message: "Please fill all fields",
      });
    }
    if (phone.length < 11) {
      return res.json({
        message: "Phone Number contains 11 digits",
      });
    }
    if (idCard.length < 13) {
      return res.json({
        message: "NIC contains 13 digits",
      });
    }
    const exist = await Employee.findOne({ email });
    if (exist) {
      return res.json({ message: "Email already exists" });
    }
    const NICexist = await Employee.findOne({ idCard });
    if (NICexist) {
      return res.json({ message: "NIC already exists" });
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
    return res.json({ message: "Employee added successfully" });
  } catch (error) {
    // next(error);
    next(error);
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
