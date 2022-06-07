import React from "react";
import { Container } from "react-bootstrap";




export function About(props) {
    return (
        <Container id="about">
            <div  className="about__text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div  className="about__img">
            </div>
        </Container>
    )
}