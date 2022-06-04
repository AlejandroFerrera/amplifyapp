import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
    return (
        <Container fluid>
            <Row>
                <Col className="footer__contacto">
                    <h2>Contacto</h2>
                    <span>MasterBikes</span>
                    <span>Barrio San Diego</span>
                    <span>San Diego 550, Santiago, Región Metropolitana</span>
                </Col>
                <Col className="footer__social">Redes sociales</Col>
                <Col className="footer__suscribe">Envíanos un correo</Col>
            </Row>
        </Container>
    )
}