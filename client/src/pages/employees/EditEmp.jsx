import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./EditEmp.module.css";
import { useParams } from "react-router-dom";

const EditEmp = () => {
  const { id } = useParams();

  const [name, setName] = useState();
  const [experience, setExpreience] = useState();
  const [address, setaddress] = useState();
  const [endDate, setEndDate] = useState();
  const [idCard, setidCard] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    const getsingleuser = async () => {
      const res = await axios.get(`http://localhost:5000/employees/${id}`);
      setName(res.data.name);
      setExpreience(res.data.experience);
      setaddress(res.data.address);
      setEndDate(res.data.endDate);
      setidCard(res.data.idCard);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    };
    getsingleuser();
  }, [id]);

  async function handleUpdateEmp(e) {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/employees/${id}`, {
        name,
        address,
        experience,
        phone,
        email,
        endDate,
        idCard,
      });
      if (res.data.message) {
        toast(res.data.message);
        res.status(200) && window.location.replace("/employees");
      }
    } catch (error) {
      toast(error);
    }
  }

  return (
    <div className={styles.EmployeeForm}>
      <form onSubmit={handleUpdateEmp}>
        <h5>Employee Details</h5>
        <br />
        <div className="mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="mx-2 form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{" "}
        <div class="mb-3" style={{ display: "flex" }}>
          <input
            type="tel"
            placeholder="Phone"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="NIC"
            onChange={(e) => setidCard(e.target.value)}
            type="number"
            className="form-control mx-2"
            value={idCard}
          />
        </div>{" "}
        <div class="mb-3" style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Experience"
            onChange={(e) => setExpreience(e.target.value)}
            className="form-control "
            value={experience}
          />

          <input
            placeholder="Address"
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            className="form-control mx-2"
            value={address}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="">End Date</label>
          <input
            placeholder="End Date"
            type="date"
            /* width: 100%; */
            value={endDate}
            className="form-control "
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EditEmp;
