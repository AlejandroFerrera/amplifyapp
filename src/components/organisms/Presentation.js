import React from "react";
import { Container } from "react-bootstrap";



export function Presentation() {
    return (
        <Container fluid className='jumbotron'>
            <h1>Tú bicicleta es nuestra prioridad</h1>
            <h3>Arriendos, reparaciones, accesorios y más...</h3>
            <div className="cortina"></div>
        </Container>
    )
}