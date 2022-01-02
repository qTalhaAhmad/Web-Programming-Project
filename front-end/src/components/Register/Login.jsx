import React from 'react'
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
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
export default function Login() {
    const navigate=  useNavigate();
const gotoRegister =() =>navigate("/user/Register");

    return (
         <>
      <Container  fluid style={{width:"400px",margin:"auto" ,paddingTop:"7%"}}>
        <Row>
          <Col >
            <Card >
              <Card.Header>
                <Card.Title as="h4" className="pt-2">Welcome back! </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                
                  <Row className="pt-1">
                    <Col className="pr-1" >
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                   
                  </Row>
                  <Row className="pt-3">
                    <Col className="pr-1" >
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
                
                  
                 
                  <Button
                    className="btn-fill pull-right mt-4"
                    type="submit"
                    variant="success"
                  >
                    Login
                  </Button>
                  <div className="clearfix"></div>
                  <Link  to="/user/register"> Don't have account?</Link>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
        
    )
}
