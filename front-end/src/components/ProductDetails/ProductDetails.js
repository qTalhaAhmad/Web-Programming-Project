import React from "react";
import { useLocation, useParams } from "react-router";
import { Table, Col, Image, Row, Button, Badge } from "react-bootstrap";
import img from "../../logo.svg";

export default function ProductDetails() {
  const products = [
    {
      id: 1,
      price: "300",
      name: "Tops",
      category: "dsfj sid jfi jiv kifj ifj jrfi ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 2,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hdfvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 3,
      price: "300",
      name: "neck",
      category: "dsfjsi ifhweiv dfvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 4,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik wfheruifh weivd fvn",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 5,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hkhwk  ther",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 6,
      price: "300",
      name: "Jewl",
      category: "dsfj sivd fjghdfj kg hhdkhwk theruif ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 7,
      price: "300",
      name: "neck",
      category: "dsfjsid jfiji vdf jghdfjkg hh ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 8,
      price: "300",
      name: "shoes",
      category: "dsfj sidjfik hwkth eruifhew uifh",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
    {
      id: 9,
      price: "300",
      name: "caps",
      category: "dsf jsi djdfjg hdfjkg hhdkhwk  ",
      " image": "",
      specification:
        "THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product THis is the product specfication and here we write 3 line ablut the product",
    },
  ];
  const parms = useParams();
  let { pid } = parms;
  const { price, id, category, name, specification, image } =
    products[parseInt(pid) - 1];

  return (
    <div>
      <Table style={{}}>
        <Row style={{}}>
          {" "}
          <Image src={img} style={{ width: "50%" }}></Image>{" "}
          <Col>
            <h2 style={{ paddingTop: 50, width: "75%", textAlign: "center" }}>
              {name}
            </h2>
            <></>
            <Badge bg="primary">{category}</Badge>

            <br></br>
            <br></br>

            <p style={{ textAlign: "justify", width: "70%" }}>
              {" "}
              {specification}
            </p>
            <h5 style={{ padding: 10 }}>Rs{price}</h5>

            <Button variant="outline-success">Add to Cart</Button>
          </Col>
        </Row>
      </Table>
    </div>
  );
}
