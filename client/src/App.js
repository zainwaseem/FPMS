import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product.jsx";
import User from "./pages/users/User";
import Employee from "./pages/employees/Employee";
import { useContext } from "react";
import AuthContext from "./context/Authcontext";
import AddUser from "./pages/addUser/AddUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    toast(`loggin you in as a ` + isLoggedIn);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          <Route path="/product" element={<Product />} />
          <Route path="/orders" element={<Product />} />
          <Route path="/users" element={<User />} />
          {/* <Route path="/users/:id" element={<User />} /> */}
          <Route path="/employees" element={<Employee />} />
          <Route path="/inventory" element={<Product />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route
            path="*"
            element={<h1>You are trying to access a wrong tht doesnt Exist</h1>}
          />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
