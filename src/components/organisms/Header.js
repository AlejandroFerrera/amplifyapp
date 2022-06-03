import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../atoms/Logo";

export function Header() {

    const { route, user, signOut } = useAuthenticator((context) => [
        context.route,
        context.user,
        context.signOut
    ]);

    const navigate = useNavigate()

    function logOut() {
        signOut();
        navigate("/home");
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
                        <Nav.Link onClick={() => navigate("/home")}>Inicio</Nav.Link>
                        <Nav.Link href="/">Nosotros</Nav.Link>
                        <Nav.Link href="/">Servicios</Nav.Link>
                        <Nav.Link href="/">Contáctanos</Nav.Link>
                    </Nav>
                    {route !== "authenticated" ? (
                        <>
                            <Button onClick={() => navigate("/login")}>Iniciar Sesión</Button>
                        </>
                    ) : (
                        <Button onClick={() => { logOut() }}>Cerrar Sesión</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}



