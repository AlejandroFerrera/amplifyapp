import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

export function Reparacion() {

    const { user } = useAuthenticator((context) => [
        context.user
    ]);

    return <>
        <h1 className="welcome">Hola {user.attributes.given_name} {user.attributes.family_name}</h1>
        <h3 className="welcome">Se encuentra en la seccion para solicitar una reparacion</h3>
    </>
}