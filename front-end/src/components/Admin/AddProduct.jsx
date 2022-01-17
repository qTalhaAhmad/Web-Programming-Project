import { RemoveFromQueue } from '@material-ui/icons';
import React, { useState } from 'react'
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import logo from "./../../logo.svg"

export default function AddProduct() {
  const [productData, setproductData] 
  = useState(
    {"title":"yoyoy",
    "desc":"",
    "img":"",
    "categories":[""],
    "size":"",
    "color":"",
    "price":0})
    function handelTitlechange(e) {
      setproductData({...productData,"title":e.target.value})
    }
    function handeldescchange(e) {
      setproductData({...productData,"desc":e.target.value})
    }
    function handelcategorieschange(e) {
      setproductData({...productData,"categories":e.target.value})
    }
    function handelpricechange(e) {
      setproductData({...productData,"price":parseInt( e.target.value)})
    }
  const [imgPath, setimgPath] = useState(logo);
  const imageSubmit =(e)=>{
    setimgPath(URL.createObjectURL(e.target.files[0]));
  }
  const navigate = useNavigate();
  const gotoRegister = () => navigate("/user/Register");
  const [register, setRegister] = useState("Register");
  return (
    <>
      <Container fluid style={{ width: "800px", margin: "auto" }}>
        <Row>
          <Col >
            <Card >
              <Card.Header>
                <Card.Title as="h4">Add Product </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                method='POST'
                action='/admin/addProduct'
                >
                  <Row >
                    <Col >
                      <Row>

                        <Col className="pr-1">
                          <Form.Group>
                            <label>Product Name</label>
                            <Form.Control
                              defaultValue=""
                              placeholder=""
                              type="text"
                              onChange={handelTitlechange}
                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="pt-2">
                        <Col className="pr-1" >
                          <Form.Group>
                            <label>Category</label>
                            <Form.Control
                              defaultValue=""
                              placeholder=""
                              type="text"
                              onChange={handelcategorieschange}
                              
                            ></Form.Control>
                          </Form.Group>

                        </Col>
                      </Row>

                      <Row className="pt-2">
                        <Col className="pl-1" >
                          <Form.Group>
                            <label>Price</label>
                            <Form.Control
                              defaultValue=""
                              placeholder=""
                              type="number"
                              min="0"
                              onChange={handelpricechange}

                            ></Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row className="pt-2">
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Default file input example</Form.Label>
                          <Form.Control
                            type="file"
                            onChange={imageSubmit} />
                        </Form.Group>
                      </Row>
                    </Col>

                    <Col>

                      <img src={imgPath} style={{width:"450px"}}/>

                    </Col>
                  </Row>
                 
                  <Row className="pt-2">
                    <Col md="12">
                      <Form.Group>
                        <label>Specfication</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Product Detlais"
                          type="text"
                              onChange={handeldescchange}

                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button
                    className="btn-fill pull-right mt-4"
                    type="submit"
                    variant="info"
                  >
                    Register
                  </Button>
                  <div className="clearfix"></div>

                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>


  )
}
