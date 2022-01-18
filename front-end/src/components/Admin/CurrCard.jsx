import React from 'react'
import { Card, Col, Row, Button, Badge } from "react-bootstrap"
import axios from "axios"

export default function CurrCard({ product }) { 
    console.log(product);
    const { _id, totalprice, address  } = product;

    
    // send data from Pending Orders to Delivered Orders on button click Delivered
    function handleDeliver() {
        axios.post("http://localhost:3000/admin/deliver/"+_id)
            .then((err) => {
                if (err) {
                    console.log(err);
            }
            })        
        }
    
    return (
        <div>
            <Card style={{ margin:"10px" ,paddingLeft:"10px"}} >
                <Row className='mt-2'>
                    <Col className>
                        <p>Product ID</p>
                        <h5> {_id}</h5>
                    </Col>

                   <Col  >
                        <p>City</p>
                        <h5> {address}</h5>
                          
                    </Col>
                    <Col>
                        {`Rs: ${totalprice}`}
                    </Col>
                    <Col >
                        <Button
                        onClick={handleDeliver}
                        > Delivered? </Button>
                    </Col>
                </Row>
            </Card>            
        </div>
    )
}