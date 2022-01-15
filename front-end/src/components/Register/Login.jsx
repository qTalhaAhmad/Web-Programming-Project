import React from 'react'
import {useState,useEffect} from "react"
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
import { Link ,Outlet} from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router';

export default function Login() {
    const navigate=  useNavigate();
    const path= useLocation().pathname;
const gotoRegister =() =>navigate("/user/Register");
function handelSubmit(){

if (path.search("admin")>0){
      navigate("/admin/currOrders")
}
else{
      navigate("/listing")

}
}
const [type, settype] = useState("user");
const [typeLink,   settypeLink]  = useState("/")
useEffect(
  
  function typeNameing(){
  if (path.search("admin")>0){
      settype("user");
      settypeLink("/");
}
else{
      settype("admin");
      settypeLink("/admin/login");

}
  
},)




    return (
         <>
      <Container  fluid style={{width:"400px",margin:"auto" ,paddingTop:"7%"}}>
        <Row>
          <Col >
            <Card >
              <Card.Header>
                <Card.Title as="h4" className="pt-2">Welcome back! </Card.Title>
              <Link to={typeLink}> {type} ?  </Link>
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
                  onClick={handelSubmit}
                    className="btn-fill pull-right mt-4"
                    type=""
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
      <Outlet />
    </>
        
    )
}
