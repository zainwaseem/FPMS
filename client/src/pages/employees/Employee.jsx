import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../../context/Authcontext";
import man from "../../img/man.png";

import styles from "./Employee.module.css";
const Employee = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const userfunc = async () => {
      const res = await axios.get("http://localhost:5000/employees");
      setEmployees(res.data);
      toast(res.data.message);
    };

    userfunc();
  }, [employees]);

  const handleDelete = async (id) => {
    console.log(`delete`);
    const res = await axios.delete(`http://localhost:5000/employees/${id}`);
    toast(res.data.message);
  };
  const handleEdit = async () => {};
  return (
    <>
      <div className={styles.employees}>
        {isLoggedIn === "supervisor" && (
          <Link to="/addemployee" className={styles.AddUserLink}>
            <div className={styles.cardslist}>
              <div
                className={styles.card}
                style={{ width: "200px", height: "200px" }}
              >
                <div className={styles.AddButton}>
                  <FaUserAlt />
                </div>
                <div className={styles.card_title} style={{ fontSize: "23px" }}>
                  <span>Add Employee</span>
                </div>
              </div>
            </div>
          </Link>
        )}
        <div class={styles.cardslist}>
          {employees.map((u, index) => (
            <div class={styles.card} key={index}>
              <div class={styles.card_image}>
                <img src={man} alt="" className="pt-1" />
                <h3>{u.name}</h3>
                <p>{u.email}</p>
                <p>{u.address}</p>
                <p>NIC: {u.idCard}</p>
                <p>Phone: {u.phone}</p>
                <p>Joining Date: {u.createdAt}</p>
                <p>{u.endDate}</p>
              </div>
              <div className={styles.icons}>
                <MdDelete size={45} onClick={() => handleDelete(u._id)} />
                <Link to={`/${u._id}`} className={styles.EditLink}>
                  <AiFillEdit size={45} onClick={() => handleEdit(u._id)} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Employee;
