import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiFillEdit, AiTwotoneMail } from "react-icons/ai";
// import { FaUserAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { ImLocation2 } from "react-icons/im";
import { BsCalendarDateFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import Spinner from "../../components/Spinner/Spinner";
import AuthContext from "../../context/Authcontext";
// import man from "../../img/man.png";

import styles from "./Employee.module.css";
const Employee = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const userfunc = async () => {
      try {
        const res = await axios.get("http://localhost:5000/employees");
        setEmployees(res.data);
        toast(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    userfunc();
  }, [employees]);
  // setLoading(false); // Stop loading in case of error

  const handleDelete = async (id) => {
    console.log(`delete`);
    const res = await axios.delete(`http://localhost:5000/employees/${id}`);
    toast(res.data.message);
  };
  const handleEdit = async () => {};
  return (
    <>
      {isLoggedIn === "supervisor" && (
        <Link to="/addemployee" className="m-2 mt-3 btn btn-primary">
          Add Employee
        </Link>
      )}
      {/* <br /> */}
      <div className={styles.employees}>
        <div class="input-group">
          <div class="form-outline d-flex w-100  justify-content-between">
            <h4 className="m-2">Registered Employees</h4>
            <input
              id="search-input"
              placeholder="Serach Employee..."
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              class="form-control mt-2 me-2 w-25"
            />
          </div>
        </div>
        {/* <div class={styles.cardslist}>
          {employees
            .filter((employee) => employee.name.toLowerCase().includes(query))
            .map((u, index) => (
              <div class={styles.card} key={index}>
                <div class={styles.card_image}>
                  <img src={man} alt="" className="pt-1" />
                  <h3>{u.name}</h3>
                  <p>{u.email}</p>
                  <p>{u.address}</p>
                  <p>NIC: {u.idCard}</p>
                  <p>Phone: {u.phone}</p>
                  <p>
                    Joining Date:
                    {new Date(u.createdAt).toDateString()}
                  </p>
                  <p>{u.endDate}</p>
                </div>
                {isLoggedIn === "supervisor" && (
                  <div className={styles.icons}>
                    <MdDelete size={45} onClick={() => handleDelete(u._id)} />
                    <Link to={`/${u._id}`} className={styles.EditLink}>
                      <AiFillEdit size={45} onClick={() => handleEdit(u._id)} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
        </div> */}
        {employees
          .filter((employee) => employee.name.toLowerCase().includes(query))
          .map((u, index) => (
            <div class={styles.card}>
              <div class={styles.coverPhoto}>
                <img
                  src="https://i.imgur.com/KykRUCV.jpeg"
                  alt=""
                  className={styles.profile}
                />
              </div>
              <h3 class={styles.profileName}>{u.name}</h3>
              <p class={styles.about}>
                <tr>
                  <td className="ps-3">{<AiTwotoneMail />}</td>
                  <td className="ps-3">{u.email}</td>
                </tr>
                <br />
                <tr>
                  <td className="ps-3">{<ImLocation2 />}</td>
                  <td className="ps-3">{u.address}</td>
                </tr>
                <br />
                <tr>
                  <td className="ps-3">{<BsCalendarDateFill />}</td>
                  <td className="ps-3">
                    {new Date(u.createdAt).toDateString()}
                  </td>
                </tr>
                <br />
              </p>
              <button class={styles.btn}>Supervisor</button>
              <button class={styles.btn}>2370240593447</button>
              <br />
              {isLoggedIn === "supervisor" && (
                <div className={styles.icons}>
                  <div className="px-2 mx-2 btn " id={styles.btnPrimaryEdit}>
                    <AiFillEdit size={45} onClick={() => handleEdit(u._id)} />
                  </div>
                  <div className="px-2 mx-2 btn " id={styles.btnPrimary}>
                    <MdDelete size={45} onClick={() => handleDelete(u._id)} />
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Employee;
