import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavTab from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <NavTab bg="dark" data-bs-theme="dark">
      <Container>
        <NavTab.Brand>TASK STORE</NavTab.Brand>
        <Nav className="d-flex bd-highlight">
          <Nav.Link>
            <Link
              to="/"
              className={`${
                pathname === "/" ? "text-success bg-white p-2 rounded fw-bold" : "text-light p-2"
              } text-decoration-none`}
            >
              Dashboard
            </Link>
          </Nav.Link>{" "}
          <Nav.Link>
            <Link
              to="/tasks"
              className={`${
                pathname === "/tasks" ? "text-success bg-white p-2 rounded fw-bold" : "text-light p-2"
              } text-decoration-none`}
            >
              Tasks
            </Link>
          </Nav.Link>{" "}
          <Nav.Link>
            <Link
              to="/charts"
              className={`${
                pathname === "/charts" ? "text-success bg-white p-2 rounded fw-bold" : "text-light p-2"
              } text-decoration-none`}
            >
              Charts
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </NavTab>
  );
};

export default NavBar;
