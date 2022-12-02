import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { useState } from "react";

// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function CollapsibleExample() {
  const [error, seterror] = useState(false);
  // const [message, setMessage] = useState(``);
  const handleClick = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("http://localhost:5000/logout", {});
      if (res.status === 200) res.data && window.location.replace("/");
    } catch (error) {
      seterror(true);
    }
    setInterval(() => {
      seterror(false);
    }, 9000);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">FPMS</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="link " to="/orders">
              Orders
            </NavLink>
            <NavLink className="link " to="/orders">
              Inventory
            </NavLink>
            <NavLink className="link " to="/orders">
              Products
            </NavLink>
            <NavLink className="link " to="/orders">
              Employee
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="link " to="/orders">
              Users
            </NavLink>{" "}
            <NavLink className="link" onClick={handleClick} to="/">
              Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
