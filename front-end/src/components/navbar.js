import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
//import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
export default function NavComp() {
  const path = window.location.href;

  const adminLinks = [
    { name: "dashboard", link: "/admin/dashboard" },
    { name: "Pending Orders", link: "/admin/CurrOrders" },
    { name: "Delivered Orders", link: "/admin/PrevOrders" },
    { name: "Add Product", link: "/admin/addProduct" },
    { name: "dashboard", link: "/admin/dashboard" },
    { name: "logout", link: "/" },
  ];
  const userLinks = [
    { name: "Products", link: "/listing" },
    { name: "Current Orders", link: "/user/order" },
    { name: "Previous Orders", link: "/user/PrevOrders" },
    { name: "Cart", link: "/user/cart" },
    { name: "Profile", link: "/user/profile" },
    { name: "logout", link: "/" },
  ];
  const [TypeLinks, setTypeLinks] = useState(userLinks);
  useEffect(() => {
    if (path.search("admin") > 0) {
      setTypeLinks(adminLinks);
    } else {
      setTypeLinks(userLinks);
    }
  });
  return (
    <>
      <Navbar className="navbar" id="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "} */}
            Shopme:)
          </Navbar.Brand>
          <Nav className="m-1">
            {TypeLinks.map((rout) => (
              <Nav.Link className="pe-5" href={rout.link}>
                {rout.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
