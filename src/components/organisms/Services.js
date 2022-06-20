import React from "react";
import { Row, Col, CardGroup, Container } from "react-bootstrap";
import ServiceCard from "../molecules/CardService";
import arrendar from "../../images/arrendar.png";
import reparar from "../../images/reparar.png";

const data = [
  {
    image:
      arrendar,
    cardTitle: "Arriendo",
    description: "Solicita arriendos de las mejores bicicletas de MasterBikes a precios insuperables.",
    textLink: "Arrendar",
    routeLink: "protected1",
  },
  {
    image:
      reparar,
    cardTitle: "Reparaciones",
    description: "Deja tu bicicleta en manos de los mejores y monitorea el estado en todo momento.",
    textLink: "Reparar",
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
      <Col>
        <CardGroup>
          {data.map((dato, index) => {
            return (
              <Col key={index} lg={6} md={6} sm={12}>
                <ServiceCard
                  image={dato.image}
                  cardTitle={dato.cardTitle}
                  description={dato.description}
                  textLink={dato.textLink}
                  routeLink={dato.routeLink}
                />
              </Col>
            );
          })}
        </CardGroup>
      </Col>
    </Row>
  </Container>
);
export default Services;
