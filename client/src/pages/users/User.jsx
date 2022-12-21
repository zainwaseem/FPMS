import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usr1 from "../../img/1.png";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import "./User.css";
import { toast } from "react-toastify";

// import usr2 from "../../img/2.png";
// import usr3 from "../../img/3.png";

const User = () => {
  // const users = [
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr1,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr1,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr1,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr2,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr1,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr2,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr1,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr3,
  //   },
  //   {
  //     name: "zain waseem",
  //     role: "manager",
  //     email: "zain@msds.scsdo",
  //     img: usr1,
  //   },
  // ];
  // // const [user, setUsers] = useState(users);
  const [user, setusers] = useState([]);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    toast(res.data.message);
  };
  useEffect(() => {
    const userfunc = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setusers(res.data);
    };
    userfunc();
  }, [user]);
  const AddUser = () => {
    console.log(`user Add`);
  };
  return (
    <>
      {/* Add users */}
      <Link to="/adduser">
        <div className="cards-list" onClick={AddUser}>
          <div className="card 1">
            <div className="AddButton">
              <FaUserAlt />
              {/* <BiUser /> */}
            </div>
            <div className="card_title">
              <span>Add User</span>
            </div>
          </div>
        </div>
      </Link>
      {/* Registered users */}
      <div className="cards-list">
        {user.map((u, index) => (
          <div className="card 1" key={index}>
            <div className="card_image">
              <img src={usr1} alt="" />
              {/* <FaUserAlt /> */}
              {/* <BiUser className="AddButton" /> */}

              <h3>{u.name}</h3>
              <p>{u.email}</p>
              <p>{u._id}</p>
              {/* <p>{u.password}</p> */}
              <MdDelete size={105} onClick={() => handleDelete(u._id)} />
            </div>
            <div className="card_title">
              <p>{u.role}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
