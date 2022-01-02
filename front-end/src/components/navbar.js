import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavComp() {
  return (
    <>
      <Navbar className="navbar" id="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="m-1">
            <Nav.Link className="pe-5" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="pe-5" href="#features">
              Features
            </Nav.Link>
            <Nav.Link className="pe-5" href="#pricing">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
