import React from 'react'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default function PrevOrderCard() {
    return (
        <div>
            <Card style={{ margin:"10px" ,paddingLeft:"10px"}} >
                <Row className='mt-3'>
                    <Col className>
                   <h5>OrderId</h5>
                    </Col>
                   <Col  >
                    <Badge className='p-2'>Date</Badge> 
                    </Col>
                    <Col>
                    <p>Price</p>
                    </Col>
                    
                    
                </Row>
            </Card>
        </div>
    )
}
