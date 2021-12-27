import Card from 'react-bootstrap/Card'
import "bootstrap/dist/css/bootstrap.min.css";


export default function CardComp(props){



    return (
      <span>
        <Card
          
          id="card"
          className="card"
          style={{  width: "230px", height: "390px", objectFit: "cover", padding:"1px" ,margin:"10px" }}
        >
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{props.info.name}</Card.Title>
            <Card.Text>{props.info.disp}</Card.Text>
            <Card.Text>{props.info.price}</Card.Text>
          </Card.Body>
        </Card>
      </span>
    );
    



}