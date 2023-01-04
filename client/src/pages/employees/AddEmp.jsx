import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./AddEmp.module.css";

const AddEmp = () => {
  const [name, setname] = useState();
  const [experience, setExpreience] = useState();
  const [address, setaddress] = useState();
  const [endDate, setEndDate] = useState();
  const [idCard, setidCard] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/employees", {
        name,
        address,
        experience,
        phone,
        email,
        endDate,
        idCard,
      });
      if (res.data.message) {
        console.log(res.data.message);
        toast.info(res.data.message);
        // res.data && window.location.replace("/employees");
      }
    } catch (err) {
      toast(err);
    }
  };
  return (
    <div className={styles.EmployeeForm}>
      <form onSubmit={handleSubmit}>
        <h5>Employee Details</h5>
        <br />
        <div className="mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setname(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="mx-2 form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{" "}
        <div class="mb-3" style={{ display: "flex" }}>
          <input
            type="tel"
            placeholder="Phone"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="NIC"
            onChange={(e) => setidCard(e.target.value)}
            type="number"
            className="form-control mx-2"
            id="exampleInputPassword1"
          />
        </div>{" "}
        <div class="mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Experience"
            onChange={(e) => setExpreience(e.target.value)}
            className="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <input
            placeholder="Address"
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            className="form-control mx-2"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">End Date</label>
          <input
            placeholder="End Date"
            type="date"
            /* width: 100%; */
            className="form-control "
            onChange={(e) => setEndDate(e.target.value)}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmp;
