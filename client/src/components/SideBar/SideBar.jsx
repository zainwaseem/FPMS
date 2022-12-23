import React, { useState } from "react";
import "./SideBar.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/Authcontext";
import {
  MdOutlineProductionQuantityLimits,
  MdSupervisorAccount,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { isLoggedIn } = useContext(AuthContext);

  // const menuItem = [
  //   {
  //     path: "/",
  //     name: "Dashboard",
  //     icon: <FaTh />,
  //   },
  //   {
  //     path: "/login",
  //     name: "Login",
  //     icon: <FaUserAlt />,
  //   },
  //   {
  //     path: "/Product",
  //     name: "Product",
  //     icon: <FaRegChartBar />,
  //   },
  //   {
  //     path: "/Employee",
  //     name: "Employee",
  //     icon: <FaCommentAlt />,
  //   },
  //   {
  //     path: "/Material",
  //     name: "Material",
  //     icon: <FaShoppingBag />,
  //   },
  //   {
  //     path: "/productList",
  //     name: "Product List",
  //     icon: <FaThList />,
  //   },
  // ];

  //logging you out
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
      <div className="containerfluid">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              <span className=" nazran">NAZRAN</span>
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* {menuItem.map((item, index) => ( */}
          <Link to="/" className="link" activeclassName="active">
            <div className="icon">
              <FaTh />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Dashbored
            </div>
          </Link>
          {isLoggedIn === "owner" && (
            <Link to="/users" className="link" activeclassName="active">
              <div className="icon">
                <FcManager />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Users
              </div>
            </Link>
          )}
          {isLoggedIn === "supervisor" ||
            (isLoggedIn === "owner" && (
              <Link to="/employees" className="link" activeclassName="active">
                <div className="icon">
                  <MdSupervisorAccount />
                </div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  Emloyees
                </div>
              </Link>
            ))}
          <Link to="/material" className="link" activeclassName="active">
            <div className="icon">
              <FaShoppingBag />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Material
            </div>
          </Link>
          <Link to="/products" className="link" activeclassName="active">
            <div className="icon">
              <MdOutlineProductionQuantityLimits />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Products
            </div>
          </Link>
          {isLoggedIn && (
            <Link
              to="/login"
              className="link"
              activeclassName="active"
              onClick={handleLogout}
            >
              <div className="icon">
                <AiOutlineLogout />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/login" className="link" activeclassName="active">
              <div className="icon">
                <FaUserAlt />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Login
              </div>
            </Link>
          )}
          {/* // ))} */}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
