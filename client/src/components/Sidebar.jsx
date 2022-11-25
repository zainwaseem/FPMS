import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/employees",
    name: "employees",
    icon: <FaUser />,
  },
  {
    path: "/information",
    name: "information",
    icon: <MdMessage />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const Sidebar = ({ children }) => {
  const [isopen, setIsopen] = useState(false);
  // const toggle = () => setIsopen(!isopen);
  return (
    <div className="main-container">
      <motion.div animate={{ width: "200px" }} className="sidebar">
        <div className="top_section">
          <h1 className="logo">FPMS</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>
        <div className="routes">
          {routes.map((route, index) => (
            <NavLink className="NavLink" to={route.path} key={index}>
              <div className="icon">{route.icon}</div>
              <div className="link_text">{route.name}</div>
            </NavLink>
          ))}
        </div>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
