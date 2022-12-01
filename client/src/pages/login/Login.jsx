import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login_box">
          <div className="left">
            <div className="contact">
              <form action="/login">
                <h3>SIGN IN</h3>
                <input type="text" placeholder="USERNAME" name="username" />
                <input type="text" placeholder="PASSWORD" name="password" />
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
