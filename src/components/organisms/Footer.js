import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiAwsamplify, SiAmazon, SiGit, SiGithub, SiReact, SiBootstrap, SiReactrouter } from "react-icons/si";
import { CognitoLogo } from "../atoms/CognitoLogo";

export function Footer() {
    return (
        <Container fluid id="footer">
            <Row>
                <Col md={4} className="footer__contacto">
                    <h2>Encuentranos en:</h2>
                    <span>MasterBikes</span>
                    <span>Barrio San Diego</span>
                    <span>San Diego 550, Santiago, Región Metropolitana</span>
                </Col>
                <Col md={4} className="footer__social">
                    <h2>Contacto:</h2>
                    <span>Tel: +5622123456</span>
                    <span>Email: masterbikes_contacto@gmail.com</span>
                    <div className="footer__social__icons">
                        <BsFacebook className="facebook-icon" />
                        <BsInstagram className="instagram-icon" />
                        <BsTwitter className="twitter-icon" />
                    </div>
                </Col>
                <Col md={4} className="footer__devtools">
                    <h2>Tecnologías utilizadas:</h2>
                    <span>Despliegue del servidor: <SiAmazon /> <SiAwsamplify /> </span>
                    <span>Autenticación: <CognitoLogo /></span>
                    <span>Versionado: <SiGit /> <SiGithub /> </span>
                    <span>Desarrollo: <SiReact /> <SiBootstrap /> <SiReactrouter /> </span>

                </Col>
            </Row>
        </Container>
    )
}