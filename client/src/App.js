import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Order from "./components/order/Order";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Navbar />} />

        <Route path="/orders" element={<Order />}></Route>
      </Routes>
    </>
  );
}

export default App;
