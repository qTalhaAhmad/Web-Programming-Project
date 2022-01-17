import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default function CartCard({ product })
{
    console.log(product);
    const { price, title, categories  } = product;
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
                    
                </Row>
            </Card>
        </div>
    )
}