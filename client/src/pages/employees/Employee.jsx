import axios from "axios";
import React, { useEffect, useState } from "react";
import usr1 from "../../img/1.png";

import "./Employee.css";
const Employee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const userfunc = async () => {
      const res = await axios.get("http://localhost:5000/employees");
      setEmployees(res.data);
    };

    userfunc();
  }, []);
  return (
    <>
      <div class="cards-list">
        {employees.map((u, index) => (
          <div class="card 1" key={index}>
            <div class="card_image">
              <img src={usr1} alt="" />
              <h3>{u.name}</h3>
              <p>{u.email}</p>
            </div>
            <div class="card_title">
              <p>{u.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Employee;
