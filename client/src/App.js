import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Order from "./components/order/Order";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "./context/Authcontext";
import Users from "./components/Users/Users";
import Error from "./components/Error/Error";
axios.defaults.withCredentials = true;
function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        {isLoggedIn === false && <Route path="/" element={<Login />} />}
        {isLoggedIn === "owner" && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Order />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<Error />} />
          </>
        )}{" "}
        {isLoggedIn === "manager" && (
          <>
            <Route path="/orders" element={<Order />} />
            <Route path="/material" element={<Order />} />
            <Route path="*" element={<Error />} />
          </>
        )}{" "}
        {isLoggedIn === "supervisor" && (
          <>
            <Route path="/orders" element={<Order />} />
            <Route path="/employees" element={<Order />} />
            <Route path="*" element={<Error />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
