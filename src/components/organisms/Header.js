import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../atoms/Logo";

export function Header() {

    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut
    ]);

    const navigate = useNavigate()

    function logOut() {
        signOut();
        navigate("/");
    }


    return (
        <Navbar collapseOnSelect expand='lg' bg="white">
            <Container>
                <Navbar.Brand href="">
                    <Logo />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="me-2">
                        <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
                        <Nav.Link onClick={() => navigate("/")} href="#about">Nosotros</Nav.Link>
                        <Nav.Link onClick={() => navigate("/")} href="#services">Servicios</Nav.Link>
                        <Nav.Link onClick={() => navigate("/")} href="#footer">Contáctanos</Nav.Link>
                    </Nav>
                    {route !== "authenticated" ? (
                        <Button onClick={() => navigate("/login")}>Iniciar Sesión</Button>
                    ) : (
                        <Button onClick={() => { logOut() }}>Cerrar Sesión</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



