// import { Link } from "react-router-dom"
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder="Your Email..." />
        <label>Password</label>
        <input
          type="pasword"
          className="loginInput"
          placeholder="Your password..."
        />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};

export default Login;
