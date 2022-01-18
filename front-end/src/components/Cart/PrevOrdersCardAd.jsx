import React from 'react'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function prevOrdersCardAd({ product }) {
    
    console.log(product);
    const { _id, totalprice, dateofdelivery } = product;
    
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
                        <h5> {dateofdelivery}</h5>
                    </Col>
                    <Col>
                    {`Rs: ${totalprice}`}
                    </Col>                 
                </Row>
            </Card>
        </div>
    )
}
