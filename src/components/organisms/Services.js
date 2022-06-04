import { Row, Col, CardGroup } from "react-bootstrap";
import dataServices from "../../data/dataServices";

const data = dataServices

const ServiceCard = () => (
  <Row>
    <Col md={12}>
      <CardGroup>
        {data.map((dato) => {
          <ServiceCard
            image={dato.image}
            cardTitle={dato.cardTitle}
            description={dato.description}
            textLink={dato.textLink}
            routeLink={dato.routeLink}
          />;
        })}
      </CardGroup>
    </Col>
  </Row>
);
export default ServiceCard;
