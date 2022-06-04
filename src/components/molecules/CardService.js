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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button>
            <Link to={routeLink}>{textLink}</Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);
export default ServiceCard;
