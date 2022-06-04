import React from "react";
import { Row, Col, CardGroup, Container } from "react-bootstrap";
import ServiceCard from "../molecules/CardService";

const data = [
  {
    image:
      "https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/static/mockups/service1.png",
    cardTitle: "Arriendo",
    description: "Arriendo cuando quieras mi rey",
    textLink: "Arrendar",
    routeLink: "protected1",
  },
  {
    image:
      "https://wixmp-fe53c9ff592a4da924211f23.wixmp.com/static/mockups/service2.png",
    cardTitle: "Reparaciones",
    description: "Te reparo lo que quieras mi rey",
    textLink: "Solicitar",
    routeLink: "protected2",
  },
];

const Services = () => (
  <Container id="services">
    <Row>
        <Col md={12}>
            <h1 className="d-flex justify-content-center">Servicios</h1>
        </Col>
    </Row>
    <Row className="card-group-services">
      <Col md={12}>
        <CardGroup>
          {data.map((dato) => {
            return (
              <ServiceCard
                image={dato.image}
                cardTitle={dato.cardTitle}
                description={dato.description}
                textLink={dato.textLink}
                routeLink={dato.routeLink}
              />
            );
          })}
        </CardGroup>
      </Col>
    </Row>
  </Container>
);
export default Services;
