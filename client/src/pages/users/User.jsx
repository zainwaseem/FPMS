import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import usr1 from "../../img/man.png";
import { MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import styles from "./User.module.css";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import userImage from "../../img/sample-img.jpeg";

const User = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/users/${id}`);
    toast(res.data.message);
  };
  useEffect(() => {
    handleDelete();
  }, []);

  useEffect(() => {
    setLoading(true);
    const userfunc = async () => {
      const res = await axios.get("http://localhost:5000/users");
      setusers(res.data);
    };
    setLoading(false);
    userfunc();
  }, [users]);

  return (
    <>
      <div className={styles.userspage}>
        <Link to="/adduser" className={styles.AddUserLink}>
          <div className={styles.cardslist} class="rotate-vert-center">
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
        <h4 className="ps-4 pt-5 mt-5 ">Registered users</h4>
        <div class="input-group">
          <div class="form-outline">
            <input
              id="search-input"
              placeholder="Serach User..."
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              class="form-control ms-4"
            />
          </div>
        </div>

        <div className={styles.cardslist}>
          {!loading ? (
            users
              .filter((user) => user.name.toLowerCase().includes(query))
              .map((u, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.card_image}>
                    <img src={userImage} alt="" />
                    <div className={styles.userData}>
                      <h3>{u.name}</h3>
                      <p>{u.email}</p>
                      <p>{u.password}</p>
                      <div className={styles.icons}>
                        <MdDelete
                          size={25}
                          onClick={() => handleDelete(u._id)}
                        />
                        <Link to={`/${u._id}`} className={styles.EditLink}>
                          <AiFillEdit size={25} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card_title}>
                    <p>{u.role}</p>
                  </div>
                </div>
              ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default User;
