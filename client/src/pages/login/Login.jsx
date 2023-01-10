// import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import styles from "./login.module.css";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data.message) {
        toast(res.data.message);
        console.log(res.data.message);
      }
      if (!res.status === 200) {
        toast(res.data.message);
      }
      if (res.data.token) {
        console.log(res.data.token);
        res.data && window.location.replace("/");
      }
    } catch (error) {
      toast.error(`Something Went Wrong`);
    }
  };
  return (
    <div className={styles.login}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        {/* <span className={styles.loginTitle}>Login</span> */}
        {/* <h1>Login</h1> */}
        <label className="ps-2">Email</label>
        <input
          type="text"
          required={true}
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@nazran.com"
        />
        <label className="ps-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required={true}
        />
        <button
          type="submit"
          className="btn btn-primary w-25 ps-2 ms-1 mt-3"
          id={styles.loginButton}
        >
          Login
        </button>
        {/* <p style={{ color: "red" }}>{error && message}</p> */}
      </form>
    </div>
  );
};

export default Login;
