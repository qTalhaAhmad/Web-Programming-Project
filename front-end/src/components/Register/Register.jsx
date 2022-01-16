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
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Register() {
const [formData, setformData] = useState({
   "username":"",
    "email":"",
    "password":"",
    "address":""
})

 
function registerFunc(e){
 e.preventDefault();
  axios.post('http://localhost:3000/user/register',{...formData}).then((res)=>{
console.log(res);
console.log(res.date);

  });
  
}
 function handelChangeName(e){
   console.log("change name");
   setformData({...formData,"username" :e.target.value})
   console.log(formData);
   console.log(e.target.value);
 }
 function handelChangePassword(e){
   console.log("change password");
   setformData({...formData,"password" :e.target.value})
   console.log(formData);
   console.log(e.target.value);
 }
 function handelChangeEmail(e){
   console.log("change email");
   setformData({...formData,"email" :e.target.value})
   console.log(e.target.value);
   console.log(formData);

 }
 function handelChangeAddress(e){
   console.log("change address");
   setformData({...formData,"address" :e.target.value})
   console.log(e.target.value);
   console.log(formData);
 }
        
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
                <Form onSubmit={registerFunc}>
                  <Row>
                    <Col classaddress="pr-1" md="6">
                      <Form.Group>
                        <label>userName</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="text"
                          onChange={handelChangeName}
                        ></Form.Control>
                      </Form.Group>
                      </Col>
                      </Row>
                  <Row classaddress="pt-2">
                    <Col classaddress="pr-1" md="6">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="email"
                          onChange={handelChangeEmail}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col classaddress="pl-1" md="6">
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
                  <Row classaddress="pt-2">
                    <Col classaddress="pr-1" md="6">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          defaultValue=""
                          placeholder=""
                          type="password"
                           onChange={handelChangePassword}
                        ></Form.Control>
                      </Form.Group>
                      </Col>
                      </Row>
                  <Row classaddress="pt-2">
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          defaultValue=""
                          placeholder="Home Address"
                          type="text"
                           onChange={handelChangeAddress}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                 
                  <Button
                    classaddress="btn-fill pull-right mt-4"
                    type="submit"
                    variant="info"
                    
                  >
                    Register
                  </Button>
                  <div classaddress="clearfix"></div>
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
