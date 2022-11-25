import "./App.css";
import Dashbored from "./pages/Dashbored";
import Employees from "./pages/Employees";
import Information from "./pages/Information";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import "./App.css";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashbored />}></Route>
          <Route path="/employees" element={<Employees />}></Route>
          <Route path="/information" element={<Information />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;
