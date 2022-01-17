import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default function CartCard() {
    return (
        <div>
            <Card style={{ margin:"10px" ,paddingLeft:"10px"}} >
                <Row className='mt-3'>
                    <Col className>
                   <h5> Name</h5>
                    </Col>
                   <Col  >
                    <Badge className='p-2'>Catoaaagary</Badge> 
                    </Col>
                    <Col>
                    <p>Qunatity</p>
                    </Col>
                    
                    
                </Row>
            </Card>
        </div>
    )
}
