import React from 'react'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function PrevOrderCard({ product }) {
    
    console.log(product);
    const { _id, price, updatedAt } = product;
    
    return (
        <div>
            <Card style={{ margin:"10px" ,paddingLeft:"10px"}} >
                <Row className='mt-3'>
                    <Col className>
                    <p>Product ID</p>
                        <h5> {_id}</h5>
                    </Col>
                   <Col  >
                   <p>Deliver Time</p>
                        <h5> {updatedAt}</h5>
                        {/* // deliever time? */}
                    </Col>
                    <Col>
                    {`Rs: ${price}`}
                    </Col>                                        
                </Row>
            </Card>
        </div>
    )
}
