import React,{useState} from 'react'
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
export default function Register() {
const navigate=  useNavigate();
const gotoRegister =() =>navigate("/user/Register");
  const [register, setRegister] = useState("Register");
  return (
    <>
      <Container  fluid style={{width:"600px",margin:"auto",paddingTop:"3%"}}>
        <Row>
          <Col >
            <Card >
              <Card.Header>
                <Card.Title as="h4">Register </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      </Col>
                      </Row>
                  <Row className="pt-2">
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Phone-No</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Phone-No"
                          type="tel"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                      </Col>
                      </Row>
                  <Row className="pt-2">
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Home Address"
                          type="text"
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
                  <Link  to="/"> Already registered?</Link> 
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
        
      
  )
}
