import React from "react";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Menu Principal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={Link} to="/character">
                Personagens
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/location">
                Lugares
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/episode">
                Episodios
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Outlet />
      </Container>
    
    </>
  );
};

export default LayoutContainer;
