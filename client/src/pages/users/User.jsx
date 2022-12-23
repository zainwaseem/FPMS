import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usr1 from "../../img/man.png";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
// import { BiUser } from "react-icons/bi";
import { AiFillEdit, AiOutlineMail } from "react-icons/ai";
import styles from "./User.module.css";
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
  const handleEdit = async () => {};
  useEffect(() => {
    const userfunc = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setusers(res.data);
    };
    userfunc();
  }, [user]);

  return (
    <>
      <div className={styles.userspage}>
        <Link to="/adduser" className={styles.AddUserLink}>
          <div className={styles.cardslist}>
            <div className={styles.card}>
              <div className={styles.AddButton}>
                <FaUserAlt />
              </div>
              <div className={styles.card_title}>
                <span>Add User</span>
              </div>
            </div>
          </div>
        </Link>
        {/* Registered users */}
        <div className={styles.cardslist}>
          {user
            ? user.map((u, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.card_image}>
                    <img src={usr1} alt="" />
                    <div className={styles.userData}>
                      <h3>
                        <SiNamecheap /> &nbsp;
                        {u.name}
                      </h3>
                      <p>
                        <AiOutlineMail />
                        &nbsp;
                        {u.email}
                      </p>
                      <p>
                        &nbsp; &nbsp;
                        <RiLockPasswordFill />
                        {u.password}
                      </p>
                      {/* <p>{u.password}</p> */}
                      <div className={styles.icons}>
                        <MdDelete
                          size={25}
                          onClick={() => handleDelete(u._id)}
                        />
                        <Link to={`/${u._id}`} className={styles.EditLink}>
                          <AiFillEdit
                            size={25}
                            onClick={() => handleEdit(u._id)}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card_title}>
                    <p>{u.role}</p>
                  </div>
                </div>
              ))
            : `No user Found`}
        </div>
      </div>
    </>
  );
};

export default User;
