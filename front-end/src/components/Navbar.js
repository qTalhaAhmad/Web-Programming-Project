import React, { Component }  from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "./react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavComp() {
  
  
  
  return (
    <div>
      <Navbar className="navbar" id="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
}
