// import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import styles from "./login.module.css";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [message, setMessage] = useState(``);
  const handleLogin = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data.message) {
        seterror(true);
        toast(res.data.message);
      }
      if (res.data.token) {
        console.log(res.data.token);
        res.data && window.location.replace("/");
      }
    } catch (error) {
      seterror(true);
    }
    setInterval(() => {
      seterror(false);
    }, 5000);
  };
  return (
    <div className={styles.login}>
      <span className={styles.loginTitle}>Login</span>
      <form className={styles.loginForm}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          className={styles.loginInput}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email..."
        />
        <label>Password</label>
        <input
          type="pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.loginInput}
          placeholder="Your password..."
        />
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
        <p style={{ color: "red" }}>{error && message}</p>
      </form>
    </div>
  );
};

export default Login;
