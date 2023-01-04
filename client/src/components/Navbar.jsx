import axios from "axios";
import { useContext, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import AuthContext from "../context/Authcontext";
import logo from "../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { getTotals } from "../features/products/cartSlice";

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart]);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:5000/logout");
      if (res.status === 200)
        return res.data && window.location.replace("/login");
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
            data-target="#bs-example-navbar-collapse-1"
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
                {isLoggedIn === "user" || isLoggedIn === "owner" ? (
                  <Link className="nav-link" to="products">
                    Product
                  </Link>
                ) : null}
              </li>
              <li className="nav-item">
                {isLoggedIn === "supervisor" || isLoggedIn === "owner" ? (
                  <Link className="nav-link" to="employees">
                    Employees
                  </Link>
                ) : null}
              </li>
              <li className="nav-item">
                {isLoggedIn === "manager" || isLoggedIn === "owner" ? (
                  <Link className="nav-link" to="/materials">
                    Material
                  </Link>
                ) : null}
              </li>
              <li className="nav-item">
                {isLoggedIn === "owner" && (
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                )}
              </li>
              <li className="nav-item">
                {isLoggedIn && (
                  <Link className="nav-link" to="/orders">
                    Orders
                  </Link>
                )}
              </li>
            </ul>

            {!isLoggedIn && (
              <>
                <Link className="btn btn-primary" to="/login">
                  <span>Login</span>
                </Link>
                <Link className="ms-2 btn btn-primary" to="/register">
                  <span>Register</span>
                </Link>
              </>
            )}
            {isLoggedIn === "user" && (
              <Link className="pe-3 prouctCart" to="/cart">
                <AiOutlineShoppingCart size={40} />
                <span className="bag-quantity">
                  <span>{cartTotalQuantity}</span>
                </span>
              </Link>
            )}
            {isLoggedIn && (
              <Link
                className="btn btn-primary"
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
