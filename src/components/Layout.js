import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { button } from "aws-amplify";

export function Layout() {

    const { route, user, signOut } = useAuthenticator((context) => [
        context.route,
        context.user,
        context.signOut
    ]);

    const navigate = useNavigate()

    function logOut() {
        signOut();
        navigate("/login");
    }

    return (
        <>
            <nav>
                <button onClick={() => navigate("/")}>Inicio</button>
                <button onClick={() => navigate("/protected1")}>Solicitar Arriendo</button>
                <button onClick={() => navigate("/protected2")}>Solicitar Reparacion</button>
                {route !== "authenticated" ? (
                    <button onClick={() => navigate("/login")}>Iniciar Sesion</button>
                ) : (
                    <button onClick={() => logOut()}>Cerrar Sesion</button>
                )}
            </nav>
            <h1>Bienvenido a MasterBikes</h1>
            <span>{route === 'authenticated' ? 'Hola ' + user.attributes.given_name : ''} </span>
            <Outlet />
        </>
    );
}