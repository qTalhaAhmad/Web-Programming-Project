import React from "react";

// react-bootstrap components
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

function Profile() {
  return (
    <>
      <Container  fluid style={{width:"600px",margin:"auto",paddingTop:"4%"}}>
        <Row>
          <Col >
            <Card >
              <Card.Header>
                <Card.Title as="h4">Edit Profile</Card.Title>
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
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Profile;
