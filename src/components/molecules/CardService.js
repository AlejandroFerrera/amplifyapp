import { Button } from "@aws-amplify/ui-react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({
  image,
  cardTitle,
  description,
  textLink,
  routeLink,
}) => (
  <Row>
    <Col md={12}>
      <Card className="card-service">
        <Card.Body className="card-service-body">
          <Card.Img variant="top" src={image} className="card-service-image" />
          <Card.Title className="card-service-title">{cardTitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={routeLink} className="card-service-link">
            <Button className="card-service-button">{textLink}</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);
export default ServiceCard;
