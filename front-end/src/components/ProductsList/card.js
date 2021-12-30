import Card from 'react-bootstrap/Card'
import {Row} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../logo.svg";

export default function CardComp({ product }) {
  const { price, id, category, name, specification, image } = product;
  // const featured_image = images.length > 0 ? images[0].src : "";
  return (
    <Card style={{ width: "300px", margin: 15 }}>
      <img src={img} />
      <div style={{ backgroundColor: "rgba(242, 237, 190, 0.33)", padding: 5 }}>
        <Row>
          <h5 style={{ textAlign: "center" }} strong>
            {name}
          </h5>
        </Row>
        <Row>
          <p>{category}</p>
          <p type="secondary" delete={0}>
            {`Rs: ${price}`}
          </p>
        </Row>
      </div>
    </Card>
  );
}