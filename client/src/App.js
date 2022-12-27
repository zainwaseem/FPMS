import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product.jsx";
import User from "./pages/users/User";
import EditUser from "./pages/users/EditUser";
import Employee from "./pages/employees/Employee";
import { useContext } from "react";
import AuthContext from "./context/Authcontext";
import AddUser from "./pages/addUser/AddUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SideBar from "./components/SideBar/SideBar.jsx";
import Material from "./pages/Material/Material";
import AddEmp from "./pages/employees/AddEmp";
import Error from "./components/Error/Error";
import Cart from "./pages/product/Cart";
function App() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    toast(`loggin you in as a ` + isLoggedIn);
    console.log(isLoggedIn);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <SideBar> */}
          <Routes>
            {!isLoggedIn && <Route path="/login" element={<Login />} />}

            <Route path="/" element={<Banner />} /> 
            {isLoggedIn && (
              <>
                <Route path="/products" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orders" element={<Product />} />
                <Route path="/users" element={<User />} />
                <Route path="/:id" element={<EditUser />} />
                <Route path="/employees" element={<Employee />} />
                <Route path="/inventory" element={<Product />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/addemployee" element={<AddEmp />} />
                <Route path="/material" element={<Material />} />
              </>
            )}
            <Route path="*" element={<Error />} />
          </Routes>
          <ToastContainer />
        {/* </SideBar> */}
        {/* <Banner /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
