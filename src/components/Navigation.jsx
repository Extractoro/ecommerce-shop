import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="/">E-commerce shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet style={{ display: "grid" }} />
    </>
  );
};

export default Navigation;
