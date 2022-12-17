import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import logo from "../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:5000/logout");
      if (res.status === 200) res.data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light text-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <span className="ms-4 nazran">NAZRAN</span> */}
            <img src={logo} className="ms-3" alt="" height="40px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {isLoggedIn && (
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isLoggedIn && (
                  <Link className="nav-link" to="product">
                    Product
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isLoggedIn === "supervisor" && (
                  <Link className="nav-link" to="employees">
                    Employees
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isLoggedIn && (
                  <Link className="nav-link" to="materials">
                    Material
                  </Link>
                )}
              </li>{" "}
              <li className="nav-item">
                {isLoggedIn === "owner" && (
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                )}
              </li>
            </ul>
            {/* <button className="btn btn-outline-success" type="submit">
              Log In
            </button> */}
            {!isLoggedIn && (
              <Link className="cta  loginButton mt-0 ps-4 pe-4 " to="/login">
                <span>Login</span>
              </Link>
            )}{" "}
            {isLoggedIn && (
              <Link
                className="cta btn loginButton mt-0 ps-4 pe-4"
                onClick={handleLogout}
                to="/login"
              >
                <span>Logout</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
