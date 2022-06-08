import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Form } from "react-bootstrap";
import { FormButton } from "../molecules/FormButton";

export function Reparacion() {

    const { user } = useAuthenticator((context) => [
        context.user
    ]);

    return <>
        <h1 className="welcome">Hola {user.attributes.given_name}</h1>
        <h3 className="table-title">Solicite una reparación</h3>
        <Form className="w-50 mx-auto repair-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Requerimiento</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option value="1">Cambio de frenos</option>
                    <option value="2">Centrado de llanta</option>
                    <option value="3">Ajustar los cambios</option>
                    <option value="4">Mantenimiento general</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <FormButton text="Solicitar reparación"/>
        </Form>
    </>
}