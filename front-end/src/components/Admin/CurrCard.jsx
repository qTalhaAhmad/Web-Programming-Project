import React from 'react'
import {Card,Col,Row,Button, Badge} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
export default function CurrCard() {
    return (
        <div>
            <Card style={{ margin:"10px" ,paddingLeft:"10px"}} >
                <Row className='mt-2'>
                    <Col className>
                   <h5> Name</h5>
                    </Col>
                   <Col  >
                    <Badge className='p-2'>Catogary</Badge> 
                    </Col>
                    <Col>
                    <p>Qunatity</p>
                    </Col>
                    <Col >
                 <Button> Dilvere </Button>
                    </Col>
                    
                </Row>
            </Card>
        </div>
    )
}
