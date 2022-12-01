import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
