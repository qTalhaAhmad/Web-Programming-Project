import React from 'react'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default function CartCard({ product }) {
    
    const { price, title, categories } = product;
    
    return (
        <div>
            <Card style={{ margin:"10px" ,paddingLeft:"10px"}} >
                <Row className='mt-3'>
                    <Col className>
                    <p>Title</p>
                        <h5> {title}</h5>
                    </Col>
                   <Col  >
                   <p>Category</p>
                    <Badge className='p-2'>{categories}</Badge>
                    </Col>
                    <Col>
                    {`Rs: ${price}`}
                    </Col>
                    <Col >
                 <DeleteForeverIcon />
                    </Col>
                    
                </Row>
            </Card>
        </div>
    )
}
