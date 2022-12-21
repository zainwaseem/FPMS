import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [error, seterror] = useState();

  async function handleUser(e) {
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("http://localhost:5000/register", {
        name,
        role,
        email,
        password,
      });
      if (res.data.message) {
        seterror(true);
        toast(res.data.message);
        console.log(res.data);
        // res.data && window.location.replace("/users");
      }
    } catch (error) {
      seterror(true);
    }
    setInterval(() => {
      seterror(false);
    }, 5000);
  }
  function handleOptionChange() {
    
  }
  return (
    <div className={styles.container}>
      <div className={styles.adduser}>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <select
              name=""
              id="roles"
              className={styles.select}
              onChange={handleOptionChange}
            >
              <option className={styles.select} value="role">
                Select Role
              </option>
              <option className={styles.options} value="owner">
                owner
              </option>
              <option className={styles.options} value="manager">
                manager
              </option>
              <option className={styles.options} value="supervisor">
                supervisor
              </option>
            </select>
            {/* <label for="exampleInputEmail1" class="form-label">
              Role
            </label>
            <input
              onChange={(e) => setRole(e.target.value)}
              value={role}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            /> */}
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>

          <button onClick={handleUser} type="submit" class={styles.loginButton}>
            Add User
          </button>
        </form>
        {/* <span className="text-danger">{error && message}</span> */}
      </div>
    </div>
  );
};

export default AddUser;
