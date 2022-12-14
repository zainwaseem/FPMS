import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product.jsx";
import User from "./pages/users/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/orders" element={<Product />} />
          <Route path="/users" element={<User />} />
          <Route path="/employees" element={<Product />} />
          <Route path="/inventory" element={<Product />} />
          <Route
            path="*"
            element={<h1>You are trying to access a wrong tht doesnt Exist</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
