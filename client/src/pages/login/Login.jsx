import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [message, setMessage] = useState(``);
  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data.message) {
        seterror(true);
        setMessage(res.data.message);
      }
      if (res.data.token) {
        console.log(res.data.token);
        res.data && window.location.replace("/home");
      }
    } catch (error) {
      seterror(true);
    }
    setInterval(() => {
      seterror(false);
    }, 9000);
    // ("http://localhost:5000/login");
  };
  return (
    <>
      <section className="login">
        <div className="login_box">
          <div className="left">
            <div className="contact">
              <form action="/home" onSubmit={handleSubmit}>
                {/* <form> */}
                <h3>SIGN IN</h3>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL"
                  name={email}
                />
                <input
                  type="password"
                  placeholder="PASSWORD"
                  onChange={(e) => setPassword(e.target.value)}
                  name={password}
                />
                <p style={{ color: "red" }}>{error && message}</p>
                <button className="submit">Login</button>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="right-text">
              <h2>FPMS</h2>
              <h5>A Golves Designing Factory</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
