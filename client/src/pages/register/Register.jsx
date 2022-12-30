import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Register.module.css";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function hanldeSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });
      if (res.data.message) {
        toast(res.data.message);
        return res.data && window.location.replace("/login");
      }
    } catch (error) {
      toast.error(`Something went Wrong` + error.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.adduser}>
        <form onSubmit={hanldeSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              required={true}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
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
              required={true}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class={styles.loginButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
